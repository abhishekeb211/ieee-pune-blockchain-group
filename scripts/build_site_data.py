import json
import os
import shutil
import sys

sys.stdout.reconfigure(encoding='utf-8')

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# 1. Master Guests Registry (Deduplicated with verified public details)
guests_registry = [
    {
        "id": "ramesh-ramadoss",
        "name": "Dr. Ramesh Ramadoss",
        "role": "Chair, IEEE Blockchain Technical Community",
        "organization": "IEEE Blockchain",
        "photo": "assets/images/events/2024/symposium/symposium-2024-stage.jpg",
        "linkedin": "https://www.linkedin.com/in/ramesh-ramadoss-phd-5130b54b/",
        "website": "https://blockchain.ieee.org/",
        "linkedinVerified": True,
        "websiteVerified": True,
        "events": ["symposium-2024-02-02", "ebct-2024-07"],
        "bio": "Keynote speaker, author, and global chair of the IEEE Blockchain Technical Community leading international blockchain initiatives."
    },
    {
        "id": "sonali-patil",
        "name": "Dr. Sonali D. Patil",
        "role": "Chair & Coordinator",
        "organization": "IEEE Pune Blockchain Group & PCCOE",
        "photo": "assets/images/events/2026/decai-fdp/decai-fdp-2026.jpg",
        "linkedin": None,
        "website": "https://www.pccoepune.com/",
        "linkedinVerified": False,
        "websiteVerified": True,
        "email": "sonalimpatil@gmail.com",
        "events": ["symposium-2024-02-02", "ebct-2024-07", "fdp-decentralized-ai-2026-02"],
        "bio": "Chair of IEEE Pune Blockchain Group (Spoid: LGR00120BC) and Coordinator for IEEE Region 10 Blockchain Groups; Professor & Head of Computer Engineering, PCCOE."
    },
    {
        "id": "surekha-deshmukh",
        "name": "Dr. Surekha Deshmukh",
        "role": "Domain Consultant",
        "organization": "Tata Consultancy Services (TCS) Pune",
        "photo": None,
        "linkedin": None,
        "website": "https://www.tcs.com",
        "linkedinVerified": False,
        "websiteVerified": True,
        "events": ["symposium-2024-02-02", "ebct-2024-07"],
        "bio": "Expert in blockchain for energy transition, decarbonisation, and industrial distributed ledger applications."
    },
    {
        "id": "rajesh-ingle",
        "name": "Dr. Rajesh Ingle",
        "role": "Professor & IEEE Leader",
        "organization": "IEEE Region 10 / Pune Section",
        "photo": None,
        "linkedin": None,
        "website": "https://ieeepunesection.org/",
        "linkedinVerified": False,
        "websiteVerified": True,
        "events": ["symposium-2024-02-02"],
        "bio": "Distinguished IEEE Region 10 leader and academician active in IEEE educational and humanitarian technology initiatives."
    },
    {
        "id": "bk-murthy",
        "name": "Dr. B. K. Murthy",
        "role": "Former Director / Senior Consultant",
        "organization": "MeitY / C-DAC",
        "photo": None,
        "linkedin": None,
        "website": "https://www.meity.gov.in/",
        "linkedinVerified": False,
        "websiteVerified": True,
        "events": ["symposium-2024-02-02"],
        "bio": "Pioneer of national research roadmaps in distributed systems, high-performance computing, and digital governance."
    },
    {
        "id": "padmaja-joshi",
        "name": "Dr. Padmaja Joshi",
        "role": "Senior Director",
        "organization": "C-DAC Pune",
        "photo": None,
        "linkedin": None,
        "website": "https://www.cdac.in/",
        "linkedinVerified": False,
        "websiteVerified": True,
        "events": ["symposium-2024-02-02"],
        "bio": "Leading software technologist and researcher heading blockchain and trust infrastructure initiatives at C-DAC."
    },
    {
        "id": "kamlesh-nagware",
        "name": "Mr. Kamlesh Nagware",
        "role": "Co-Founder & Hyperledger Leader",
        "organization": "FSV Capital / Hyperledger India",
        "photo": None,
        "linkedin": None,
        "website": "https://fsv.capital",
        "linkedinVerified": False,
        "websiteVerified": True,
        "events": ["ebct-2024-07"],
        "bio": "Top blockchain influencer, Hyperledger India leader, and co-founder of FSV Capital advising on enterprise Web3 architecture."
    },
    {
        "id": "gaurav-somvanshi",
        "name": "Mr. Gaurav Somvanshi",
        "role": "Co-Founder",
        "organization": "EmerTech Innovations Pvt Ltd",
        "photo": None,
        "linkedin": None,
        "website": "https://emertech.in",
        "linkedinVerified": False,
        "websiteVerified": True,
        "events": ["ebct-2024-07"],
        "bio": "Social entrepreneur and pioneer in implementing blockchain for provenance, agriculture, and rural livelihood empowerment."
    },
    {
        "id": "amar-tumballi",
        "name": "Mr. Amar Tumballi",
        "role": "Co-Founder & VP Engineering",
        "organization": "Dhiway",
        "photo": None,
        "linkedin": None,
        "website": "https://dhiway.com",
        "linkedinVerified": False,
        "websiteVerified": True,
        "events": ["ebct-2024-07"],
        "bio": "Open-source veteran and core engineer developing CORD network for verifiable digital identity and cryptographic credentials."
    },
    {
        "id": "surendrasingh-s",
        "name": "Mr. SurendraSingh S.",
        "role": "VP Products & Tech",
        "organization": "Dhiway",
        "photo": None,
        "linkedin": None,
        "website": "https://dhiway.com",
        "linkedinVerified": False,
        "websiteVerified": True,
        "events": ["ebct-2024-07"],
        "bio": "Technology leader driving enterprise deployment of decentralized trust infrastructures and verifiable data registries."
    },
    {
        "id": "nirmala-salam",
        "name": "Ms. Nirmala Salam",
        "role": "Associate Director",
        "organization": "C-DAC Mumbai",
        "photo": None,
        "linkedin": None,
        "website": "https://www.cdac.in",
        "linkedinVerified": False,
        "websiteVerified": True,
        "events": ["ebct-2024-07"],
        "bio": "Applied cryptography and software engineering specialist working on national-scale distributed systems and security protocols."
    },
    {
        "id": "garima-singh",
        "name": "Ms. Garima Singh",
        "role": "CEO & CTO",
        "organization": "Bitviraj Technology Private Limited",
        "photo": None,
        "linkedin": None,
        "website": None,
        "linkedinVerified": False,
        "websiteVerified": False,
        "events": ["ebct-2024-07"],
        "bio": "Blockchain entrepreneur and technical architect leading decentralized applications and smart-contract auditing solutions."
    },
    {
        "id": "sonali-patwe",
        "name": "Ms. Sonali Patwe",
        "role": "Senior Product Manager",
        "organization": "Tata Digital",
        "photo": None,
        "linkedin": None,
        "website": "https://www.tatadigital.com",
        "linkedinVerified": False,
        "websiteVerified": True,
        "events": ["ebct-2024-07"],
        "bio": "Digital product leader with deep expertise in enterprise consumer platforms, fintech systems, and distributed ledgers."
    },
    {
        "id": "ramchandra-mangrulkar",
        "name": "Dr. Ramchandra Mangrulkar",
        "role": "Professor",
        "organization": "DJSCoE Mumbai",
        "photo": None,
        "linkedin": None,
        "website": "https://djsce.ac.in",
        "linkedinVerified": False,
        "websiteVerified": True,
        "events": ["ebct-2024-07"],
        "bio": "Researcher in blockchain security, intrusion detection systems, and privacy-preserving consensus networks."
    },
    {
        "id": "anasuya-innocent",
        "name": "Dr. Anasuya Threse Innocent",
        "role": "Executive & Hyperledger Specialist",
        "organization": "BiniWorld Innovations Pvt. Ltd.",
        "photo": "assets/images/events/2025/hyperledger/hyperledger-session-2025.jpg",
        "linkedin": None,
        "website": None,
        "linkedinVerified": False,
        "websiteVerified": False,
        "events": ["hyperledger-expert-session-2025-08"],
        "bio": "Enterprise blockchain trainer delivering hands-on instruction in Hyperledger Fabric, Firefly, and enterprise DLT architectures."
    },
    {
        "id": "rohan-raverkar",
        "name": "Mr. Rohan Raverkar",
        "role": "Vice President & Hackathon Judge",
        "organization": "Industry Technical Leader",
        "photo": "assets/images/events/2026/decentrahack/decentrahack-2026.jpg",
        "linkedin": None,
        "website": None,
        "linkedinVerified": False,
        "websiteVerified": False,
        "events": ["decentrahack-2026-01"],
        "bio": "Industry executive and technical judge evaluating decentralized architecture, Web3 security, and agentic AI integration."
    },
    {
        "id": "shreekant-kulkarni",
        "name": "Mr. Shreekant Kulkarni",
        "role": "VP Tokenization",
        "organization": "HUMB Global HealthTech",
        "photo": None,
        "linkedin": None,
        "website": None,
        "linkedinVerified": False,
        "websiteVerified": False,
        "events": ["ebct-2024-07"],
        "bio": "Healthcare and tokenization specialist focused on digital health records and decentralized privacy frameworks."
    },
    {
        "id": "rahul-sonkamble",
        "name": "Mr. Rahul Sonkamble",
        "role": "Research Scholar",
        "organization": "Pimpri Chinchwad University (PCU)",
        "photo": None,
        "linkedin": None,
        "website": None,
        "linkedinVerified": False,
        "websiteVerified": False,
        "events": ["ebct-2024-07"],
        "bio": "Doctoral researcher investigating smart contract optimization, zero-knowledge proofs, and decentralized transaction structures."
    },
    {
        "id": "mehul-gaidhani",
        "name": "Mr. Mehul Gaidhani",
        "role": "Industry Expert",
        "organization": "Blockchain Architecture Practitioner",
        "photo": None,
        "linkedin": None,
        "website": None,
        "linkedinVerified": False,
        "websiteVerified": False,
        "events": ["symposium-2024-02-02"],
        "bio": "Practicing engineer focused on decentralized infrastructure, node deployment, and enterprise blockchain scaling."
    },
    {
        "id": "shruti-kulkarni",
        "name": "Ms. Shruti Kulkarni",
        "role": "Industry Expert",
        "organization": "Distributed Systems Practitioner",
        "photo": None,
        "linkedin": None,
        "website": None,
        "linkedinVerified": False,
        "websiteVerified": False,
        "events": ["symposium-2024-02-02"],
        "bio": "Technical lead working on consensus algorithms, smart contract validation, and public blockchain integrations."
    },
    {
        "id": "pavan-adhav",
        "name": "Mr. Pavan Adhav",
        "role": "Industry Expert",
        "organization": "Industry Practitioner",
        "photo": None,
        "linkedin": None,
        "website": None,
        "linkedinVerified": False,
        "websiteVerified": False,
        "events": ["symposium-2024-02-02"],
        "bio": "Industry engineer specializing in decentralized consensus frameworks and enterprise blockchain applications."
    }
]

# 2. Master Events Data (Structured with year-wise classification, cover image, gallery, and guest links)
events_data = [
    # 2026 Events
    {
        "id": "fdp-decentralized-ai-2026-02",
        "slug": "national-fdp-decentralized-ai-2026",
        "year": "2026",
        "name": "National-Level Faculty Development Program on Decentralized AI",
        "type": "Faculty Development Program",
        "status": "completed",
        "date": "02 - 07 February 2026",
        "startDate": "2026-02-02",
        "endDate": "2026-02-07",
        "venue": "Department of Computer Engineering, PCCOE, Pune",
        "description": "Intensive 6-day national faculty development program on AI and Blockchain convergence, decentralized trust models, autonomous AI agent registries on blockchain, and federated learning architectures.",
        "puneGroupRole": "Organizer & Technical Host",
        "participants": "86 Verified Faculty Participants",
        "coverImage": "assets/images/events/2026/decai-fdp/decai-fdp-2026.jpg",
        "gallery": [
            {
                "image": "assets/images/events/2026/decai-fdp/decai-fdp-2026.jpg",
                "caption": "Inaugural session of the National FDP on Decentralized AI at PCCOE Computer Engineering Dept.",
                "alt": "Faculty members and coordinators during Decentralized AI FDP inaugural session",
                "credit": "PCCOE CESA Magazine 2025-2026, p. 113"
            },
            {
                "image": "assets/images/events/2026/decai-fdp/decai-fdp-hands-on.jpg",
                "caption": "Hands-on lab training: Federated Learning protocols and On-Chain AI Agent Governance.",
                "alt": "Faculty working on decentralized AI model training during hands-on lab",
                "credit": "PCCOE CESA Magazine 2025-2026, p. 113"
            },
            {
                "image": "assets/images/events/2026/decai-fdp/decai-fdp-valedictory.jpg",
                "caption": "Valedictory address and distribution of IEEE certification credentials to participants.",
                "alt": "Participants receiving certificates at the valedictory session",
                "credit": "PCCOE CESA Magazine 2025-2026, p. 113"
            }
        ],
        "guests": ["sonali-patil"],
        "links": {
            "recap": "https://www.pccoepune.com/fdw/faculty-development-programs.php",
            "registration": None,
            "agenda": None,
            "sources": [
                {"label": "PCCOE FDP Archive", "url": "https://www.pccoepune.com/fdw/faculty-development-programs.php"},
                {"label": "PCCOE CESA Magazine 2026", "url": "https://computer.pccoepune.com/assets/images/CESA/magazine/2025-2026_compressed.pdf"}
            ]
        },
        "topics": ["AI + Blockchain Convergence", "Decentralized Trust Models", "AI Agents Governance", "Federated Learning", "Verifiable AI"]
    },
    {
        "id": "decentrahack-2026-01",
        "slug": "decentrahack-pune-2026",
        "year": "2026",
        "name": "DecentraHACK 2026: National Web3 & Agentic AI Hackathon",
        "type": "National Hackathon",
        "status": "completed",
        "date": "17 - 23 January 2026",
        "startDate": "2026-01-17",
        "endDate": "2026-01-23",
        "venue": "Hybrid / PCCOE Pune & Online",
        "description": "A 5-day national competitive hackathon uniting developer teams across India to build decentralized dApps, cryptographic identity protocols, and verifiable autonomous AI agents on EVM and Hyperledger platforms.",
        "puneGroupRole": "Association & Co-Organizer",
        "participants": "Pan-India Developer Teams",
        "coverImage": "assets/images/events/2026/decentrahack/decentrahack-2026.jpg",
        "gallery": [
            {
                "image": "assets/images/events/2026/decentrahack/decentrahack-2026.jpg",
                "caption": "DecentraHACK 2026 keynote demonstration and project judging ceremony.",
                "alt": "DecentraHACK hackathon participant showcase and project demo",
                "credit": "PCCOE CESA Magazine 2025-2026, p. 112"
            }
        ],
        "guests": ["rohan-raverkar"],
        "links": {
            "recap": None,
            "registration": None,
            "agenda": None,
            "sources": [
                {"label": "PCCOE CESA Magazine 2026", "url": "https://computer.pccoepune.com/assets/images/CESA/magazine/2025-2026_compressed.pdf"}
            ]
        },
        "topics": ["Web3 DApps", "Zero-Knowledge Proofs", "Agentic AI", "Cybersecurity", "Decentralized Identity"]
    },

    # 2025 Events
    {
        "id": "hyperledger-expert-session-2025-08",
        "slug": "hyperledger-expert-session-2025",
        "year": "2025",
        "name": "Expert Session on Hyperledger and Enterprise Applications",
        "type": "Technical Expert Session",
        "status": "completed",
        "date": "26 August 2025",
        "startDate": "2025-08-26",
        "endDate": "2025-08-26",
        "venue": "PCCOE Pune (Hybrid Mode)",
        "description": "Comprehensive technical session exploring the Linux Foundation Decentralized Trust (LFDT) project matrix, chaincode development on Hyperledger Fabric, and enterprise implementations in supply chain and healthcare.",
        "puneGroupRole": "Association with LFDT Chapter",
        "participants": "120+ Students & Faculty",
        "coverImage": "assets/images/events/2025/hyperledger/hyperledger-session-2025.jpg",
        "gallery": [
            {
                "image": "assets/images/events/2025/hyperledger/hyperledger-session-2025.jpg",
                "caption": "Expert speaker Dr. Anasuya Threse Innocent addressing students on enterprise blockchain architectures.",
                "alt": "Speaker delivering Hyperledger enterprise architecture lecture",
                "credit": "PCCOE CESA Magazine 2025-2026, p. 109"
            },
            {
                "image": "assets/images/events/2025/hyperledger/hyperledger-session-presentation.jpg",
                "caption": "Architectural breakdown of Hyperledger Fabric peers, orderers, and smart chaincode.",
                "alt": "Hyperledger technical architecture slide on display",
                "credit": "PCCOE CESA Magazine 2025-2026, p. 109"
            },
            {
                "image": "assets/images/events/2025/hyperledger/hyperledger-interactive.jpg",
                "caption": "Student developer Q&A session on enterprise consortium networks and private channels.",
                "alt": "Audience interacting during Hyperledger technical Q&A",
                "credit": "PCCOE CESA Magazine 2025-2026, p. 109"
            }
        ],
        "guests": ["anasuya-innocent"],
        "links": {
            "recap": None,
            "registration": None,
            "agenda": None,
            "sources": [
                {"label": "LFDT Chapter & CESA 2026", "url": "https://computer.pccoepune.com/assets/images/CESA/magazine/2025-2026_compressed.pdf"}
            ]
        },
        "topics": ["Hyperledger Fabric", "Enterprise Consortiums", "Private Channels", "Chaincode Development", "Supply Chain DLT"]
    },
    {
        "id": "fdp-decentralized-ai-2025-08",
        "slug": "faculty-development-program-decentralized-ai-2025",
        "year": "2025",
        "name": "Faculty Development Program on Decentralized AI & Federated Learning",
        "type": "Faculty Development Program",
        "status": "completed",
        "date": "18 - 25 August 2025",
        "startDate": "2025-08-18",
        "endDate": "2025-08-25",
        "venue": "Department of Computer Engineering, PCCOE Pune",
        "description": "One-week faculty development program covering the foundations of Decentralized AI, privacy-preserving Federated Learning, Verifiable Inference, DePIN hardware networks, and Decentralized Autonomous Organizations (DAOs).",
        "puneGroupRole": "Technical Co-Sponsor",
        "participants": "90 Verified Faculty",
        "coverImage": "assets/images/events/2026/decai-fdp/decai-fdp-2026.jpg",
        "gallery": [
            {
                "image": "assets/images/events/2026/decai-fdp/decai-fdp-2026.jpg",
                "caption": "Academic faculty cohort attending decentralized AI lecture series.",
                "alt": "Faculty attendees in session",
                "credit": "PCCOE Computer Engineering Department"
            }
        ],
        "guests": ["sonali-patil"],
        "links": {
            "recap": "https://www.pccoepune.com/fdw/faculty-development-programs.php",
            "registration": None,
            "agenda": None,
            "sources": [
                {"label": "PCCOE FDP Archive", "url": "https://www.pccoepune.com/fdw/faculty-development-programs.php"}
            ]
        },
        "topics": ["Federated Learning", "Verifiable AI", "DePIN", "DAOs", "Privacy-Preserving Protocols"]
    },
    {
        "id": "icdlt-2025-11",
        "slug": "ieee-icdlt-2025",
        "year": "2025",
        "name": "IEEE International Conference on Distributed Ledger Technologies (ICDLT 2025)",
        "type": "International Conference",
        "status": "upcoming",
        "date": "05 - 07 November 2025",
        "startDate": "2025-11-05",
        "endDate": "2025-11-07",
        "venue": "Pune, India",
        "description": "Premier international IEEE conference co-sponsored by IEEE Blockchain Technical Community and IEEE Pune Section, convening global researchers on cryptographic consensus, scalable layer-2 protocols, and cross-chain interoperability.",
        "puneGroupRole": "Supporting Chapter / Local Host Committee",
        "participants": "International Researchers & Delegates",
        "coverImage": "assets/images/events/symposium-2024-stage.jpg",
        "gallery": [
            {
                "image": "assets/images/events/symposium-2024-stage.jpg",
                "caption": "IEEE Blockchain technical community conference convening in Region 10.",
                "alt": "IEEE International Conference on DLT delegation",
                "credit": "IEEE Blockchain Technical Community"
            }
        ],
        "guests": ["ramesh-ramadoss", "rajesh-ingle"],
        "links": {
            "recap": None,
            "registration": "https://www.ieeeicdlt.org/",
            "agenda": "https://www.ieeeicdlt.org/",
            "sources": [
                {"label": "IEEE ICDLT 2025 Portal", "url": "https://www.ieeeicdlt.org/"},
                {"label": "IEEE Pune Section", "url": "https://ieeepunesection.org/"}
            ]
        },
        "topics": ["Core DLT Protocols", "Scalability & Layer-2 Networks", "Zero-Knowledge Systems", "FinTech & Real-World Assets", "Healthcare & Energy Blockchain"]
    },
    {
        "id": "blockchain-sustainable-dev-2025-12",
        "slug": "blockchain-for-sustainable-development-2025",
        "year": "2025",
        "name": "Blockchain for Sustainable Development: Innovations and Directions",
        "type": "Faculty Development Program",
        "status": "completed",
        "date": "01 - 05 December 2025",
        "startDate": "2025-08-18",
        "endDate": "2025-08-25",
        "venue": "Marathwada Mitra Mandal's College of Engineering (MMCOE), Pune",
        "description": "5-day specialized FDP on private blockchain architecture, peer-to-peer renewable energy trading, IPFS distributed storage, and blockchain implementations aligned with United Nations Sustainable Development Goals (UN SDGs).",
        "puneGroupRole": "Association Partner",
        "participants": "Faculty & Researchers",
        "coverImage": "assets/images/lab/mmcoe-coe-facility.png",
        "gallery": [
            {
                "image": "assets/images/lab/mmcoe-coe-facility.png",
                "caption": "Centre of Excellence in Blockchain at MMCOE, host facility for the Sustainable Development FDP.",
                "alt": "MMCOE Blockchain Centre of Excellence facility",
                "credit": "MMCOE Department of Information Technology"
            },
            {
                "image": "assets/images/lab/mmcoe-hpc-rig.png",
                "caption": "MMCOE 19 GPU HPC server used for student simulations during the program.",
                "alt": "19 GPU HPC server rig at MMCOE",
                "credit": "MMCOE Blockchain Server Room-Lab"
            }
        ],
        "guests": [],
        "links": {
            "recap": "https://mmcoe.edu.in/departments/information-technology/co-curricular-activities/workshops/",
            "registration": None,
            "agenda": None,
            "sources": [
                {"label": "MMCOE IT Workshops Portal", "url": "https://mmcoe.edu.in/departments/information-technology/co-curricular-activities/workshops/"}
            ]
        },
        "topics": ["Sustainable Energy Trading", "Private Blockchain Architecture", "IPFS Storage", "Smart Contracts", "UN SDGs"]
    },

    # 2024 Events
    {
        "id": "symposium-2024-02-02",
        "slug": "ieee-pune-blockchain-symposium-2024",
        "year": "2024",
        "name": "IEEE Pune Blockchain Symposium 2024",
        "type": "Flagship Symposium",
        "status": "completed",
        "date": "02 February 2024",
        "startDate": "2024-02-02",
        "endDate": "2024-02-02",
        "venue": "Seminar Hall, Mechanical Department, PCCOE, Pune",
        "description": "Flagship symposium organized by IEEE Pune Blockchain Group and Department of IT, PCCOE. Featured keynote lectures from global IEEE Blockchain Technical Community leaders, C-DAC directors, MeitY advisors, and industry pioneers.",
        "puneGroupRole": "Primary Organizer",
        "participants": "110+ Delegates (68 External, 15 Industry, 32 Institutional)",
        "coverImage": "assets/images/events/2024/symposium/symposium-2024-stage.jpg",
        "gallery": [
            {
                "image": "assets/images/events/2024/symposium/symposium-2024-stage.jpg",
                "caption": "Keynote address by Dr. Ramesh Ramadoss and distinguished guests on stage at PCCOE Seminar Hall.",
                "alt": "Dignitaries on stage during IEEE Pune Blockchain Symposium 2024 inaugural address",
                "credit": "PCCOE Samvaad Newsletter Vol 3(4), Jan 2024, p. 8"
            },
            {
                "image": "assets/images/events/2024/symposium/symposium-2024-audience.jpg",
                "caption": "Over 110 participants, researchers, and students attending technical presentations.",
                "alt": "Audience packed seminar hall during technical session",
                "credit": "PCCOE Samvaad Newsletter Vol 3(4), Jan 2024, p. 8"
            },
            {
                "image": "assets/images/events/2024/symposium/symposium-2024-banner.jpg",
                "caption": "Official symposium branding showcasing IEEE Blockchain Technical Community and IEEE Pune Section identity.",
                "alt": "Official symposium banner display",
                "credit": "PCCOE Samvaad Newsletter Vol 3(4), Jan 2024, p. 8"
            }
        ],
        "guests": [
            "ramesh-ramadoss", "surekha-deshmukh", "rajesh-ingle",
            "bk-murthy", "padmaja-joshi", "mehul-gaidhani", "shruti-kulkarni", "pavan-adhav"
        ],
        "links": {
            "recap": "https://www.pccoepune.com/pdf/samvaad/Samvaad-3(4)-Jan-2024.pdf",
            "registration": None,
            "agenda": None,
            "sources": [
                {"label": "PCCOE Samvaad Newsletter Jan 2024 (p. 8)", "url": "https://www.pccoepune.com/pdf/samvaad/Samvaad-3(4)-Jan-2024.pdf"},
                {"label": "IEEE BCTC Q1 2024 Global Report", "url": "https://blockchain.ieee.org/"}
            ]
        },
        "topics": ["Latest Global Blockchain Trends", "Energy Transition & Decarbonisation", "RWA Tokenization", "Federated Learning on Blockchain", "Enterprise DLT"]
    },
    {
        "id": "ebct-2024-07",
        "slug": "emerging-trends-blockchain-ebct-2024",
        "year": "2024",
        "name": "Emerging Trends in Blockchain Technology (EBCT-24)",
        "type": "ISTE Approved National STTP",
        "status": "completed",
        "date": "15 - 20 July 2024",
        "startDate": "2024-07-15",
        "endDate": "2024-07-20",
        "venue": "Department of Computer Engineering, PCCOE, Pune",
        "description": "One-week national level Short Term Training Program approved by ISTE, uniting 156 verified delegates across Jammu & Kashmir, Andhra Pradesh, Tamil Nadu, Uttar Pradesh, and Maharashtra.",
        "puneGroupRole": "Association & Technical Co-Sponsor",
        "participants": "156 Verified Pan-India Delegates",
        "coverImage": "assets/images/events/2024/ebct/ebct-2024-poster.png",
        "gallery": [
            {
                "image": "assets/images/events/2024/ebct/ebct-2024-poster.png",
                "caption": "Official flyer and schedule of the ISTE-approved EBCT-24 National Training Program.",
                "alt": "EBCT-24 official STTP brochure and speaker roster",
                "credit": "PCCOE Department of Computer Engineering"
            }
        ],
        "guests": [
            "ramesh-ramadoss", "nirmala-salam", "kamlesh-nagware", "gaurav-somvanshi",
            "garima-singh", "surendrasingh-s", "surekha-deshmukh", "shreekant-kulkarni",
            "sonali-patwe", "ramchandra-mangrulkar", "rahul-sonkamble", "amar-tumballi"
        ],
        "links": {
            "recap": "https://www.pccoepune.com/pdf/Flyer_STTP_EBCT-2024_PCCOE.pdf",
            "registration": None,
            "agenda": None,
            "sources": [
                {"label": "EBCT-24 Official Flyer", "url": "https://www.pccoepune.com/pdf/Flyer_STTP_EBCT-2024_PCCOE.pdf"},
                {"label": "PCCOE FDP Portal", "url": "https://www.pccoepune.com/fdw/faculty-development-programs.php"}
            ]
        },
        "topics": ["Ethereum & Solidity", "Polygon DApps", "Hyperledger Architecture", "DeFi & NFTs", "Smart Contract Security"]
    },
    {
        "id": "securechaincitycoin-2024-03",
        "slug": "securechaincitycoin-smart-cities-2024",
        "year": "2024",
        "name": "SecureChainCityCoin: Convergence of Blockchain in Smart Cities",
        "type": "Technical Workshop",
        "status": "completed",
        "date": "18 - 22 March 2024",
        "startDate": "2024-03-18",
        "endDate": "2024-03-22",
        "venue": "Marathwada Mitra Mandal's College of Engineering (MMCOE), Pune",
        "description": "5-day intensive technical workshop on integrating decentralized identity, IoT blockchain telemetry, and automated token economics for municipal smart city infrastructures.",
        "puneGroupRole": "Technical Partner",
        "participants": "65 Faculty & Students",
        "coverImage": "assets/images/lab/mmcoe-coe-facility.png",
        "gallery": [
            {
                "image": "assets/images/lab/mmcoe-coe-facility.png",
                "caption": "MMCOE Blockchain Centre of Excellence laboratory.",
                "alt": "MMCOE Blockchain lab facility",
                "credit": "MMCOE IT Department"
            }
        ],
        "guests": [],
        "links": {
            "recap": "https://mmcoe.edu.in/departments/information-technology/co-curricular-activities/workshops/",
            "registration": None,
            "agenda": None,
            "sources": [
                {"label": "MMCOE Workshop Records", "url": "https://mmcoe.edu.in/departments/information-technology/co-curricular-activities/workshops/"}
            ]
        },
        "topics": ["Digital Trust in Smart Cities", "IoT & Blockchain Integration", "Identity Management", "Municipal Infrastructure Security"]
    },
    {
        "id": "blockchain-cybersecurity-2024-08",
        "slug": "blockchain-frontier-cybersecurity-privacy-2024",
        "year": "2024",
        "name": "Blockchain: The Next Frontier in Cybersecurity and Privacy",
        "type": "Faculty Development Program",
        "status": "completed",
        "date": "20 - 24 August 2024",
        "startDate": "2024-08-20",
        "endDate": "2024-08-24",
        "venue": "Department of IT, MMCOE, Pune",
        "description": "Hands-on faculty program analyzing zero-knowledge cryptography, decentralized key management protocols, and smart contract vulnerability mitigation techniques.",
        "puneGroupRole": "Association with MMCOE",
        "participants": "Faculty Members & Postgraduates",
        "coverImage": "assets/images/lab/mmcoe-hpc-rig.png",
        "gallery": [
            {
                "image": "assets/images/lab/mmcoe-hpc-rig.png",
                "caption": "MMCOE 19 GPU HPC Mining RIG used for cryptographic consensus benchmarks.",
                "alt": "19 GPU HPC Mining Server Rig",
                "credit": "MMCOE Blockchain Server Room-Lab"
            }
        ],
        "guests": [],
        "links": {
            "recap": "https://mmcoe.edu.in/departments/information-technology/co-curricular-activities/workshops/",
            "registration": None,
            "agenda": None,
            "sources": [
                {"label": "MMCOE Workshop Records", "url": "https://mmcoe.edu.in/departments/information-technology/co-curricular-activities/workshops/"}
            ]
        },
        "topics": ["Cryptographic Security", "Privacy Preservation", "Smart Contract Vulnerabilities", "Decentralized Key Management"]
    }
]

# 3. Populate guests details directly inside each event for convenience & zero-join frontend access
guests_map = {g["id"]: g for g in guests_registry}

for ev in events_data:
    resolved_guests = []
    for gid in ev["guests"]:
        if gid in guests_map:
            resolved_guests.append(guests_map[gid])
    ev["guestsResolved"] = resolved_guests

# 4. Write data/events.json, data/guests.json, data/site-data.js
data_dir = os.path.join(BASE_DIR, 'data')
os.makedirs(data_dir, exist_ok=True)

events_json_path = os.path.join(data_dir, 'events.json')
guests_json_path = os.path.join(data_dir, 'guests.json')
site_data_js_path = os.path.join(data_dir, 'site-data.js')

with open(events_json_path, 'w', encoding='utf-8') as f:
    json.dump({"events": events_data}, f, indent=2, ensure_ascii=False)

with open(guests_json_path, 'w', encoding='utf-8') as f:
    json.dump({"guests": guests_registry}, f, indent=2, ensure_ascii=False)

site_data_js_content = f"""/**
 * IEEE Pune Blockchain Group - Master Structured Data
 * Generated automatically from curated institutional research records.
 */
window.IEEE_DATA = {{
  events: {json.dumps(events_data, indent=2, ensure_ascii=False)},
  guests: {json.dumps(guests_registry, indent=2, ensure_ascii=False)}
}};
"""

with open(site_data_js_path, 'w', encoding='utf-8') as f:
    f.write(site_data_js_content)

# 5. Mirror to nextjs-app/data/
next_data_dir = os.path.join(BASE_DIR, 'nextjs-app', 'data')
os.makedirs(next_data_dir, exist_ok=True)
shutil.copy2(events_json_path, os.path.join(next_data_dir, 'events.json'))
shutil.copy2(guests_json_path, os.path.join(next_data_dir, 'guests.json'))

print(f"[OK] Generated {len(events_data)} events across 2024-2026.")
print(f"[OK] Generated {len(guests_registry)} deduplicated guests.")
print(f"[OK] Synchronized data/ and nextjs-app/data/ files.")
