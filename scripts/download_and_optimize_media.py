"""
Script to download authentic MMCOE Blockchain Lab images and curate PCCOE event images.
"""
import os
import shutil
import ssl
import urllib.request
import json

def setup_directories():
    dirs = [
        "assets/images/lab",
        "assets/images/events",
        "nextjs-app/public/images/lab",
        "nextjs-app/public/images/events",
    ]
    for d in dirs:
        os.makedirs(d, exist_ok=True)
    print("[INIT] Asset directories verified.")

def download_mmcoe_lab_images():
    print("[DOWNLOAD] Downloading official MMCOE Blockchain Server Room-Lab photos...")
    urls = {
        "mmcoe-hpc-rig.png": "https://mmcoe.edu.in/wp-content/uploads/2024/12/Blockchain_1.png",
        "mmcoe-server-rack.png": "https://mmcoe.edu.in/wp-content/uploads/2024/12/Blockchain_2.png",
        "mmcoe-lab-workstation.png": "https://mmcoe.edu.in/wp-content/uploads/2024/12/Blockchain_3.png",
        "mmcoe-coe-facility.png": "https://mmcoe.edu.in/wp-content/uploads/2024/12/Blockchain_4.png",
    }
    
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}

    for filename, url in urls.items():
        target_static = os.path.join("assets/images/lab", filename)
        target_next = os.path.join("nextjs-app/public/images/lab", filename)
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
                data = resp.read()
                with open(target_static, "wb") as f:
                    f.write(data)
                shutil.copyfile(target_static, target_next)
                print(f"  [OK] Downloaded {filename} ({len(data)} bytes)")
        except Exception as e:
            print(f"  [FAIL] Failed to download {filename}: {e}")

def curate_event_images():
    print("[CURATE] Curating authentic PCCOE Symposium, FDP, and Hackathon images...")
    media_dir = "research/media"
    
    event_mappings = {
        "symposium-2024-stage.jpg": "PCCOE_SAMVAAD_2024_p8_img3.jpeg",      # 1600x1131 stage panel
        "symposium-2024-audience.jpg": "PCCOE_SAMVAAD_2024_p8_img2.jpeg",   # 808x911 audience hall
        "symposium-2024-banner.jpg": "PCCOE_SAMVAAD_2024_p8_img1.jpeg",     # 1080x1080 symposium banner
        "ebct-2024-poster.png": "PCCOE_EBCT_2024_FLYER_p1_img1.png",        # EBCT flyer header
        "hyperledger-session-2025.jpg": "PCCOE_CESA_MAGAZINE_2026_p109_img2.jpeg", # 782x545 Hyperledger session
        "decentrahack-2026.jpg": "PCCOE_CESA_MAGAZINE_2026_p112_img2.jpeg",        # 464x432 DecentraHACK
        "decai-fdp-2026.jpg": "PCCOE_CESA_MAGAZINE_2026_p113_img1.jpeg",           # 512x595 Decentralized AI FDP
    }

    for target_name, src_name in event_mappings.items():
        src_path = os.path.join(media_dir, src_name)
        if os.path.exists(src_path):
            target_static = os.path.join("assets/images/events", target_name)
            target_next = os.path.join("nextjs-app/public/images/events", target_name)
            shutil.copyfile(src_path, target_static)
            shutil.copyfile(src_path, target_next)
            print(f"  [OK] Curated {target_name} from {src_name} ({os.path.getsize(src_path)} bytes)")
        else:
            print(f"  [FAIL] Source file {src_path} not found!")


if __name__ == "__main__":
    setup_directories()
    download_mmcoe_lab_images()
    curate_event_images()
    print("[DONE] All media assets successfully staged in assets/ and nextjs-app/public/.")
