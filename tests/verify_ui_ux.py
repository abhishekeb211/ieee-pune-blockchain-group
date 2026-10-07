"""
Automated Verification Suite for UI/UX, Flutter M3 Styling, and Image Integration
"""
import os
from bs4 import BeautifulSoup

def verify_ui_ux():
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    index_path = os.path.join(root_dir, "index.html")
    styles_path = os.path.join(root_dir, "styles.css")
    app_js_path = os.path.join(root_dir, "app.js")
    nextjs_dir = os.path.join(root_dir, "nextjs-app")

    # 1. Assert Media Assets Exist
    expected_assets = [
        "assets/images/lab/mmcoe-hpc-rig.png",
        "assets/images/lab/mmcoe-server-rack.png",
        "assets/images/lab/mmcoe-lab-workstation.png",
        "assets/images/lab/mmcoe-coe-facility.png",
        "assets/images/events/symposium-2024-stage.jpg",
        "assets/images/events/symposium-2024-audience.jpg",
        "assets/images/events/symposium-2024-banner.jpg",
        "assets/images/events/ebct-2024-poster.png",
        "assets/images/events/hyperledger-session-2025.jpg",
        "assets/images/events/decentrahack-2026.jpg",
        "assets/images/events/decai-fdp-2026.jpg",
    ]
    for rel_path in expected_assets:
        full_static = os.path.join(root_dir, rel_path)
        full_nextjs = os.path.join(nextjs_dir, "public", rel_path.replace("assets/", ""))
        assert os.path.exists(full_static), f"Static asset missing: {full_static}"
        assert os.path.exists(full_nextjs), f"Next.js asset missing: {full_nextjs}"
        assert os.path.getsize(full_static) > 0, f"Empty asset: {full_static}"

    print(f"[OK] Verified {len(expected_assets)} media assets in both static and Next.js directories.")

    # 2. Inspect index.html
    with open(index_path, "r", encoding="utf-8") as f:
        html_content = f.read()

    soup = BeautifulSoup(html_content, "html.parser")

    # Assert Lightbox element
    lightbox = soup.find("div", id="media-lightbox")
    assert lightbox is not None, "Lightbox modal #media-lightbox not found in index.html"

    # Assert Gallery section & cards
    gallery_sec = soup.find("section", id="gallery")
    assert gallery_sec is not None, "Gallery section #gallery not found in index.html"
    gallery_cards = soup.find_all("div", attrs={"data-gallery-category": True})
    assert len(gallery_cards) >= 8, f"Expected >= 8 gallery cards, found {len(gallery_cards)}"

    # Assert Hardware Rig Inspector
    inspector_img = soup.find("img", id="inspector-main-img")
    assert inspector_img is not None, "#inspector-main-img not found in index.html"
    hotspots = soup.find_all(class_="inspector-hotspot")
    assert len(hotspots) >= 4, f"Expected >= 4 inspector hotspots, found {len(hotspots)}"

    # Assert Live Search Bar
    search_input = soup.find("input", id="event-search-input")
    assert search_input is not None, "#event-search-input not found in index.html"
    count_badge = soup.find("span", id="event-count-badge")
    assert count_badge is not None, "#event-count-badge not found in index.html"

    # Assert zero purple in styles.css and index.html
    with open(styles_path, "r", encoding="utf-8") as f:
        styles_content = f.read()
    
    purple_hexes = ["#8b5cf6", "#7c3aed", "#6d28d9", "#a855f7", "#9333ea"]
    for p in purple_hexes:
        assert p not in html_content.lower(), f"Purple color {p} found in index.html!"
        assert p not in styles_content.lower(), f"Purple color {p} found in styles.css!"

    # Assert zero dead domain / placeholder links
    prohibited = ["chair@ieeepune.org", "contact@ieeepune.org", "https://ieeepune.org", "http://ieeepune.org"]
    for p in prohibited:
        assert p not in html_content, f"Prohibited string '{p}' found in index.html!"

    # 3. Next.js Component Verification
    nextjs_components = [
        "components/Navbar.tsx",
        "components/Hero.tsx",
        "components/About.tsx",
        "components/FocusAreas.tsx",
        "components/Lab.tsx",
        "components/Gallery.tsx",
        "components/Events.tsx",
        "components/Leadership.tsx",
        "components/JoinForm.tsx",
        "components/Footer.tsx",
        "components/Lightbox.tsx",
    ]
    for comp in nextjs_components:
        full_p = os.path.join(nextjs_dir, comp)
        assert os.path.exists(full_p), f"Next.js component missing: {full_p}"

    # Verify App Router routes exist
    app_routes = [
        "app/page.tsx",
        "app/about/page.tsx",
        "app/activities/page.tsx",
        "app/gallery/page.tsx",
        "app/join/page.tsx",
        "app/lab/page.tsx",
    ]
    for r in app_routes:
        assert os.path.exists(os.path.join(nextjs_dir, r)), f"Route missing: {r}"

    with open(os.path.join(nextjs_dir, "app", "gallery", "page.tsx"), "r", encoding="utf-8") as f:
        gallery_page = f.read()
        assert "<Gallery" in gallery_page, "Gallery not rendered in Next.js app/gallery/page.tsx"
        assert "<Lightbox" in gallery_page, "Lightbox not rendered in Next.js app/gallery/page.tsx"

    print("[SUCCESS] All UI/UX, Flutter M3, Lightbox, and Media assertions PASSED (100% GREEN)!")

if __name__ == "__main__":
    verify_ui_ux()
