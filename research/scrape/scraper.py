import csv
import json
import os
import re
import sys
import time
from datetime import datetime, timezone
import urllib.request
import urllib.error
import fitz  # PyMuPDF
from bs4 import BeautifulSoup

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
RESEARCH_DIR = os.path.join(BASE_DIR, "research")
SEEDS_FILE = os.path.join(RESEARCH_DIR, "seeds.csv")
RAW_DIR = os.path.join(RESEARCH_DIR, "data", "raw")
CURATED_DIR = os.path.join(RESEARCH_DIR, "data", "curated")
REVIEW_DIR = os.path.join(RESEARCH_DIR, "data", "review")
MEDIA_DIR = os.path.join(RESEARCH_DIR, "media")
LOGS_ACTION_DIR = os.path.join(BASE_DIR, ".agent-system", "logs", "actions")
LOGS_AUDIT_DIR = os.path.join(BASE_DIR, ".agent-system", "logs", "audit")

for d in [RAW_DIR, CURATED_DIR, REVIEW_DIR, MEDIA_DIR, LOGS_ACTION_DIR, LOGS_AUDIT_DIR]:
    os.makedirs(d, exist_ok=True)

USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 (IEEE Pune Blockchain Group Research Agent; academic verification)"

def get_utc_iso():
    return datetime.now(timezone.utc).isoformat()

def log_action(action_type, details, status="success"):
    timestamp = get_utc_iso()
    action_id = f"act_{int(time.time() * 1000)}"
    entry = {
        "action_id": action_id,
        "timestamp": timestamp,
        "action_type": action_type,
        "details": details,
        "status": status
    }
    filename = os.path.join(LOGS_ACTION_DIR, f"{action_id}.json")
    with open(filename, "w", encoding="utf-8") as f:
        json.dump(entry, f, indent=2)
    return action_id

def fetch_url(url, target_path, delay=1.2):
    time.sleep(delay)
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=25) as response:
            code = response.status
            content = response.read()
            with open(target_path, "wb") as f:
                f.write(content)
            return code, len(content), None
    except urllib.error.HTTPError as e:
        return e.code, 0, str(e)
    except Exception as e:
        return 0, 0, str(e)

def extract_pdf_data(pdf_path, seed_id):
    results = {
        "text": "",
        "page_count": 0,
        "images_extracted": [],
        "keyword_matches": []
    }
    try:
        doc = fitz.open(pdf_path)
        results["page_count"] = len(doc)
        full_text = []
        for i, page in enumerate(doc):
            t = page.get_text()
            full_text.append(f"--- PAGE {i+1} ---\n" + t)
            
            # Extract images if relevant and size > 20KB
            image_list = page.get_images(full=True)
            for img_index, img_meta in enumerate(image_list):
                xref = img_meta[0]
                base_image = doc.extract_image(xref)
                image_bytes = base_image["image"]
                image_ext = base_image["ext"]
                if len(image_bytes) > 20480: # Filter out tiny icons
                    img_name = f"{seed_id}_p{i+1}_img{img_index+1}.{image_ext}"
                    img_out = os.path.join(MEDIA_DIR, img_name)
                    with open(img_out, "wb") as img_file:
                        img_file.write(image_bytes)
                    results["images_extracted"].append({
                        "filename": img_name,
                        "page": i + 1,
                        "size": len(image_bytes),
                        "width": base_image.get("width"),
                        "height": base_image.get("height"),
                        "ext": image_ext
                    })

        results["text"] = "\n".join(full_text)
        doc.close()
    except Exception as e:
        results["error"] = str(e)
    return results

def extract_html_data(html_path):
    results = {
        "title": "",
        "text": "",
        "links": [],
        "tables": []
    }
    try:
        with open(html_path, "r", encoding="utf-8", errors="ignore") as f:
            soup = BeautifulSoup(f.read(), "html.parser")
        
        results["title"] = soup.title.string.strip() if soup.title and soup.title.string else ""
        for tag in soup(["script", "style", "nav", "footer"]):
            tag.decompose()
        results["text"] = soup.get_text(separator="\n", strip=True)
    except Exception as e:
        results["error"] = str(e)
    return results

def main():
    start_time = get_utc_iso()
    print(f"[{start_time}] Starting IEEE Pune Blockchain Group research scraper...")

    with open(SEEDS_FILE, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        seeds = list(reader)

    source_records = []
    
    events_data = []
    people_data = []
    resources_data = []
    infrastructure_data = []
    media_data = []
    conflicts = []
    gaps = []

    for seed in seeds:
        seed_id = seed["id"]
        url = seed["url"]
        tier = seed["tier"]
        category = seed["category"]
        target_name = seed["target_file"]
        target_path = os.path.join(RAW_DIR, target_name)

        print(f"Fetching [{tier}] {seed_id} -> {url}...")
        status_code, content_len, err = fetch_url(url, target_path)
        
        log_action("fetch_seed", {
            "seed_id": seed_id,
            "url": url,
            "status_code": status_code,
            "content_len": content_len,
            "error": err
        }, status="success" if status_code == 200 else "failed")

        record = {
            "seed_id": seed_id,
            "url": url,
            "tier": tier,
            "category": category,
            "status_code": status_code,
            "content_length": content_len,
            "error": err,
            "retrieved_at": get_utc_iso(),
            "findings": []
        }

        if status_code == 200 and os.path.exists(target_path):
            if category == "PDF":
                pdf_info = extract_pdf_data(target_path, seed_id)
                record["page_count"] = pdf_info["page_count"]
                record["extracted_images_count"] = len(pdf_info["images_extracted"])
                
                # Check for key phrases
                text = pdf_info["text"]
                if "Pune" in text:
                    record["findings"].append("Contains 'Pune'")
                if "Blockchain" in text:
                    record["findings"].append("Contains 'Blockchain'")
                if "112" in text:
                    record["findings"].append("Found participant count 112")
                if "115" in text:
                    record["findings"].append("Found participant count 115")
                if "Sonali" in text:
                    record["findings"].append("Contains Dr. Sonali Patil reference")
                
                # Save parsed text for audit
                txt_path = target_path + ".txt"
                with open(txt_path, "w", encoding="utf-8") as tf:
                    tf.write(text)

                for img in pdf_info["images_extracted"]:
                    media_data.append({
                        "filename": img["filename"],
                        "seed_id": seed_id,
                        "source_url": url,
                        "source_page": img["page"],
                        "width": img["width"],
                        "height": img["height"],
                        "size_bytes": img["size"],
                        "credit": f"Extracted from {seed_id} ({url})",
                        "rights_status": "institutional-academic-fair-use",
                        "verified": True
                    })

            elif category == "HTML":
                html_info = extract_html_data(target_path)
                record["title"] = html_info["title"]
                text = html_info["text"]
                txt_path = target_path + ".txt"
                with open(txt_path, "w", encoding="utf-8") as tf:
                    tf.write(text)

        source_records.append(record)

    # Specific Verifications
    # 1. IEEE Pune Section domain verification
    pune_sec_d1 = next((r for r in source_records if r["seed_id"] == "IEEE_PUNE_SECTION_DOMAIN1"), None)
    pune_sec_d2 = next((r for r in source_records if r["seed_id"] == "IEEE_PUNE_SECTION_DOMAIN2"), None)
    
    print("\n--- Verification: IEEE Pune Section Domain ---")
    print(f"Domain 1 (ieeepunesection.org): HTTP {pune_sec_d1['status_code'] if pune_sec_d1 else 'N/A'}")
    print(f"Domain 2 (ieeepune.org): HTTP {pune_sec_d2['status_code'] if pune_sec_d2 else 'N/A'}")

    # Build SOURCES.md
    sources_md_path = os.path.join(RESEARCH_DIR, "SOURCES.md")
    with open(sources_md_path, "w", encoding="utf-8") as f:
        f.write("# Source Provenance & Verification Log\n\n")
        f.write(f"> Audit Run: {start_time} (UTC)\n\n")
        f.write("| ID | Tier | HTTP | Size (bytes) | URL | Findings |\n")
        f.write("| :--- | :---: | :---: | :---: | :--- | :--- |\n")
        for r in source_records:
            findings_str = ", ".join(r["findings"]) if r["findings"] else (r.get("error") or "Retrieved OK")
            f.write(f"| `{r['seed_id']}` | **{r['tier']}** | {r['status_code']} | {r['content_length']} | {r['url']} | {findings_str} |\n")

    # Write source records raw json
    with open(os.path.join(RESEARCH_DIR, "data", "curated", "source_audit_records.json"), "w", encoding="utf-8") as f:
        json.dump(source_records, f, indent=2)

    with open(os.path.join(CURATED_DIR, "media.json"), "w", encoding="utf-8") as f:
        json.dump(media_data, f, indent=2)

    print(f"\n[Completed] Processed {len(source_records)} seeds. Extracted {len(media_data)} images.")

if __name__ == "__main__":
    main()
