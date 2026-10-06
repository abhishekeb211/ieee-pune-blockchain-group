import json
import os
import shutil
import sys
from PIL import Image

sys.stdout.reconfigure(encoding='utf-8')

# 1. Define folder layout
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STATIC_ASSETS = os.path.join(BASE_DIR, 'assets', 'images', 'events')
NEXT_PUBLIC = os.path.join(BASE_DIR, 'nextjs-app', 'public', 'images', 'events')

# Ensure target directories
os.makedirs(os.path.join(BASE_DIR, 'data'), exist_ok=True)
os.makedirs(os.path.join(BASE_DIR, 'nextjs-app', 'data'), exist_ok=True)

media_mappings = [
    # 2024 Symposium
    ('research/media/PCCOE_SAMVAAD_2024_p8_img3.jpeg', '2024/symposium', 'symposium-2024-stage.jpg'),
    ('research/media/PCCOE_SAMVAAD_2024_p8_img2.jpeg', '2024/symposium', 'symposium-2024-audience.jpg'),
    ('research/media/PCCOE_SAMVAAD_2024_p8_img1.jpeg', '2024/symposium', 'symposium-2024-banner.jpg'),
    
    # 2024 EBCT
    ('research/media/PCCOE_EBCT_2024_FLYER_p1_img3.jpeg', '2024/ebct', 'ebct-2024-poster.png'),
    
    # 2025 Hyperledger
    ('research/media/PCCOE_CESA_MAGAZINE_2026_p109_img2.jpeg', '2025/hyperledger', 'hyperledger-session-2025.jpg'),
    ('research/media/PCCOE_CESA_MAGAZINE_2026_p109_img1.jpeg', '2025/hyperledger', 'hyperledger-session-presentation.jpg'),
    ('research/media/PCCOE_CESA_MAGAZINE_2026_p109_img3.jpeg', '2025/hyperledger', 'hyperledger-interactive.jpg'),
    
    # 2026 DecentraHACK
    ('research/media/PCCOE_CESA_MAGAZINE_2026_p112_img2.jpeg', '2026/decentrahack', 'decentrahack-2026.jpg'),
    
    # 2026 DecAI FDP
    ('research/media/PCCOE_CESA_MAGAZINE_2026_p113_img1.jpeg', '2026/decai-fdp', 'decai-fdp-2026.jpg'),
    ('research/media/PCCOE_CESA_MAGAZINE_2026_p113_img2.jpeg', '2026/decai-fdp', 'decai-fdp-hands-on.jpg'),
    ('research/media/PCCOE_CESA_MAGAZINE_2026_p113_img3.jpeg', '2026/decai-fdp', 'decai-fdp-valedictory.jpg'),
]

for src, subfolder, dest_name in media_mappings:
    src_full = os.path.join(BASE_DIR, src)
    if os.path.exists(src_full):
        # Static asset path
        s_dir = os.path.join(STATIC_ASSETS, subfolder)
        os.makedirs(s_dir, exist_ok=True)
        s_dest = os.path.join(s_dir, dest_name)
        shutil.copy2(src_full, s_dest)
        
        # Next.js asset path
        n_dir = os.path.join(NEXT_PUBLIC, subfolder)
        os.makedirs(n_dir, exist_ok=True)
        n_dest = os.path.join(n_dir, dest_name)
        shutil.copy2(src_full, n_dest)
        
        print(f"[COPIED] {dest_name} -> {subfolder}")
    else:
        print(f"[MISSING SRC] {src_full}")

# Keep existing flat event images in place for backwards compatibility with tests
for flat_img in ['symposium-2024-stage.jpg', 'symposium-2024-audience.jpg', 'symposium-2024-banner.jpg',
                 'ebct-2024-poster.png', 'hyperledger-session-2025.jpg', 'decentrahack-2026.jpg', 'decai-fdp-2026.jpg']:
    s_flat = os.path.join(STATIC_ASSETS, flat_img)
    if not os.path.exists(s_flat):
        # find in subfolders
        for sub in ['2024/symposium', '2024/ebct', '2025/hyperledger', '2026/decentrahack', '2026/decai-fdp']:
            cand = os.path.join(STATIC_ASSETS, sub, flat_img)
            if os.path.exists(cand):
                shutil.copy2(cand, s_flat)
                shutil.copy2(cand, os.path.join(NEXT_PUBLIC, flat_img))
                break

print("[OK] Event media structured and synchronized.")
