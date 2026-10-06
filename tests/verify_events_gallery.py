"""
Verification Suite for Event Highlights, Year-wise Event Tabs, Guests Directory, and Structured Data
"""
import os
import sys
import json
import re

def verify_all():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    
    # 1. Structured Data Files Existence
    events_json_path = os.path.join(base_dir, 'data', 'events.json')
    guests_json_path = os.path.join(base_dir, 'data', 'guests.json')
    site_data_js_path = os.path.join(base_dir, 'data', 'site-data.js')
    next_events_path = os.path.join(base_dir, 'nextjs-app', 'data', 'events.json')
    next_guests_path = os.path.join(base_dir, 'nextjs-app', 'data', 'guests.json')

    assert os.path.exists(events_json_path), "data/events.json missing!"
    assert os.path.exists(guests_json_path), "data/guests.json missing!"
    assert os.path.exists(site_data_js_path), "data/site-data.js missing!"
    assert os.path.exists(next_events_path), "nextjs-app/data/events.json missing!"
    assert os.path.exists(next_guests_path), "nextjs-app/data/guests.json missing!"

    # 2. JSON Validation
    with open(events_json_path, 'r', encoding='utf-8') as f:
        events_data = json.load(f).get('events', [])
    with open(guests_json_path, 'r', encoding='utf-8') as f:
        guests_data = json.load(f).get('guests', [])
    
    assert len(events_data) == 10, f"Expected 10 events, got {len(events_data)}"
    assert len(guests_data) == 21, f"Expected 21 guests, got {len(guests_data)}"

    # 3. Year Distribution
    years_count = {}
    for ev in events_data:
        y = ev['year']
        years_count[y] = years_count.get(y, 0) + 1
    assert years_count.get('2026') == 2, f"Expected 2 events in 2026, got {years_count.get('2026')}"
    assert years_count.get('2025') == 4, f"Expected 4 events in 2025, got {years_count.get('2025')}"
    assert years_count.get('2024') == 4, f"Expected 4 events in 2024, got {years_count.get('2024')}"

    # 4. Media Asset Verification
    for ev in events_data:
        if ev.get('coverImage'):
            img_rel = ev['coverImage']
            assert os.path.exists(os.path.join(base_dir, img_rel)), f"Cover image missing: {img_rel}"
        for g_img in ev.get('gallery', []):
            img_path = g_img['image']
            assert os.path.exists(os.path.join(base_dir, img_path)), f"Gallery image missing: {img_path}"
            assert g_img.get('caption'), f"Missing caption in event {ev['id']}"

    # 5. Guests Integrity
    guest_ids = {g['id'] for g in guests_data}
    for ev in events_data:
        for gid in ev.get('guests', []):
            assert gid in guest_ids, f"Guest ID '{gid}' in event '{ev['id']}' not in guests registry!"

    for g in guests_data:
        if g.get('linkedinVerified'):
            assert g.get('linkedin') and g['linkedin'].startswith('https://www.linkedin.com/'), f"Invalid verified LinkedIn: {g.get('linkedin')}"
        if g.get('photo'):
            assert os.path.exists(os.path.join(base_dir, g['photo'])), f"Guest photo missing: {g['photo']}"

    # 6. Parity Check
    with open(next_events_path, 'r', encoding='utf-8') as f:
        next_events = json.load(f).get('events', [])
    assert len(next_events) == len(events_data), "nextjs-app/data/events.json count mismatch!"

    # 7. HTML Navigation & Section Verification
    index_path = os.path.join(base_dir, 'index.html')
    with open(index_path, 'r', encoding='utf-8') as f:
        html = f.read()

    # Check 6-item Nav
    for nav_item in ['Home', 'Events', 'Gallery', 'Guests', 'About', 'Contact']:
        assert nav_item in html, f"Nav item '{nav_item}' missing in index.html"

    # Check Sections
    for sec_id in ['id="top"', 'id="events"', 'id="gallery"', 'id="guests"', 'id="about"', 'id="lab"', 'id="join"']:
        assert sec_id in html, f"Section '{sec_id}' missing in index.html"

    # Check Event Highlights
    assert "Event Photo Highlights" in html, "Event Photo Highlights missing in index.html"

    # Check Event Subtabs and Detail Panel
    assert 'id="event-subtabs-container"' in html, "event-subtabs-container missing in index.html"
    assert 'id="event-detail-panel"' in html, "event-detail-panel missing in index.html"

    # Check Lightbox Controls
    assert 'id="lightbox-prev"' in html, "lightbox-prev missing in index.html"
    assert 'id="lightbox-next"' in html, "lightbox-next missing in index.html"
    assert 'id="lightbox-counter"' in html, "lightbox-counter missing in index.html"
    assert 'data/site-data.js' in html, "data/site-data.js script tag missing in index.html"

    # Check Zero Purple
    styles_path = os.path.join(base_dir, 'styles.css')
    with open(styles_path, 'r', encoding='utf-8') as f:
        css = f.read()
    prohibited_purple = ['#8b5cf6', '#7c3aed', '#a855f7', '#6d28d9']
    for p in prohibited_purple:
        assert p not in css.lower(), f"Prohibited purple token '{p}' found in styles.css!"
        assert p not in html.lower(), f"Prohibited purple token '{p}' found in index.html!"

    print("[SUCCESS] All event highlights, year-wise event tabs, guest directory, and parity assertions passed!")

if __name__ == '__main__':
    verify_all()
