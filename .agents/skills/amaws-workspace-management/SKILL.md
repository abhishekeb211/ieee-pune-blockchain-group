---
name: amaws-workspace-management
description: >-
  Manages Anti-Gravity Adaptive Workspace (AMAWS) project workspaces.
  Covers workspace creation, logging, audit execution, and Global Brain
  operations. Activate when the user needs to create a new AMAWS workspace,
  run audits, inspect logs, or manage the Global Brain.
---

# AMAWS Workspace Management Skill

This skill teaches you how to manage the Anti-Gravity Adaptive Workspace (AMAWS)
system — a self-improving agent workspace with a Global Brain, immutable logging,
and automated audit loops.

---

## System Architecture

```
AMAWS
├── Global Brain (read-only for agents)
│   ├── skills/           — Reusable coding & workflow skills
│   ├── knowledge/        — Shared facts and references
│   ├── rules/            — Universal enforcement rules
│   └── logs/             — Global audit trails
│
├── Project Workspaces (.agent-system/)
│   ├── config.yaml       — Project-specific configuration
│   ├── knowledge/        — Project skills, facts, rules
│   ├── logs/             — Action, prompt, reasoning, audit logs
│   └── state/            — Session state
│
└── Tools
    ├── create_workspace.py  — Workspace generator
    ├── run_audit.py         — Audit runner
    └── lib/                 — Core Python library
```

---

## Key Paths

| Resource | Path |
|----------|------|
| AMAWS Project Root | `C:\Users\Administrator\.gemini\antigravity-ide\scratch\amaws` |
| Global Brain | `C:\Users\Administrator\.gemini\antigravity-ide\scratch\amaws\global-brain` |
| Workspace Generator | `C:\Users\Administrator\.gemini\antigravity-ide\scratch\amaws\tools\create_workspace.py` |
| Audit Runner | `C:\Users\Administrator\.gemini\antigravity-ide\scratch\amaws\tools\run_audit.py` |
| Core Library | `C:\Users\Administrator\.gemini\antigravity-ide\scratch\amaws\lib\` |

---

## Procedures

### Creating a New Project Workspace

```bash
python C:\Users\Administrator\.gemini\antigravity-ide\scratch\amaws\tools\create_workspace.py <project-name> --root <parent-dir>
```

This creates:
- `.agent-system/config.yaml` — Pre-populated with defaults
- `.agent-system/knowledge/` — Seed skill, facts, and rules files
- `.agent-system/logs/` — Action, prompt, reasoning, audit directories
- `.agent-system/state/session.json` — Session state tracker
- `src/` — Project source code directory

### Logging an Action (Python API)

```python
import sys
sys.path.insert(0, r"C:\Users\Administrator\.gemini\antigravity-ide\scratch\amaws")
from lib.logger import ActionLogger

logger = ActionLogger(project_root=r"D:\Projects\my-app")
action_id = logger.log_action(
    agent_id="agent-coder-01",
    action_type="file_modification",
    files_modified=["src/main.py"],
    status="success",
)
```

### Running an Audit

```bash
python C:\Users\Administrator\.gemini\antigravity-ide\scratch\amaws\tools\run_audit.py --project <path> [--global-review]
```

The audit engine:
1. Reads all action logs from `.agent-system/logs/actions/`
2. Computes success rate, action distribution, failure patterns
3. Generates a markdown report in `.agent-system/logs/audit/`
4. If success rate < 90%, appends improvement proposals to `knowledge/skills.md`

### Syncing Antigravity Transcripts

```python
from integrations.antigravity_bridge import AntigravityBridge

bridge = AntigravityBridge(
    project_root=r"D:\Projects\my-app",
    conversation_id="abc-123-def",
)
result = bridge.sync()
```

---

## Rules Enforcement

When operating in an AMAWS workspace:

1. **Always check** for `.agent-system/config.yaml` before modifying project files.
2. **Never modify** log files in `.agent-system/logs/` — they are append-only.
3. **Read project rules** from `.agent-system/knowledge/rules.md` before each action.
4. **Global Brain is read-only** — never write to the Global Brain directory directly.
5. **PII Redaction** — use the Redactor class to sanitize any data before logging.

---

## Config Schema

The `config.yaml` controls workspace behavior:

```yaml
workspace:
  name: "project-name"
  allowed_agents: ["agent-coder-01"]
  logging:
    action_level: "INFO"
    redact_patterns: ["api_key", "password", "token"]
  audit:
    trigger_after_actions: 50
    success_rate_threshold: 0.90
    auto_apply_project: true
    global_review_required: true
global_brain:
  path: "C:\\Users\\Administrator\\.gemini\\antigravity-ide\\scratch\\amaws\\global-brain"
  read_only: true
```

## System Protocol: Global Prompt Memory Enhancer & Corrector

You are equipped with a persistent global prompt list stored in a Markdown file (`global_prompts.md`) containing all prompts the user has ever used.

For every incoming user prompt, before executing or responding, perform the following:

1. **Retrieve Similar Prompts**: Search the global prompt list (`global_prompts.md`) for previous prompts that are similar in intent, topic, structure, or domain.
2. **Enhance the Current Prompt**: Use those similar prompts to enrich the current prompt—add missing context, clarify ambiguous terms, expand shorthand, infer intent, and align with the user's established style or goals.
3. **Correct & Refine**: Fix any contradictions, incomplete instructions, or unclear phrasing based on patterns from the user's past prompts.
4. **Check Previous Preferences**: Identify any user preferences (format, tone, output style, constraints, recurring requirements) from the prompt history and apply them proactively.
5. **Ask Only If Needed**: If after enhancement there is still a meaningful ambiguity or missing critical preference, ask the user a single multiple-choice question. Provide options A, B, C, and D or E, where one of the later options is always "Customize / Other (please specify)" so the user can provide their own answer.
6. **Update the Global List**: After the interaction, append the original prompt, the enhanced version, and any preference clarifications to the global prompt list for future use.

Always show the enhanced prompt you will use before proceeding, unless the user has disabled that display.

## Enterprise Technical Documentation Protocol (SRS / PRD / PRDO)

1. **Inception Initiation:** Generate PRD, PRDO, and SRS baselines at project start in `.agent-system/knowledge/`.
2. **Living Checklists:** Track todos, checklists, and completed tasks in `session.json` and `todo.md`.
3. **Progressive Updates:** After every phase completion or major/minor modification, reconcile PRD/SRS/PRDO and record documentation delta snapshots in `.agent-system/logs/audit/`.
4. **Forensic Audit Standards:** Use explicit markers (`[OBSERVED: ...]`, `[INFERRED: ...]`, `[MISSING]`, `[RISK: ...]`).

---

*Skill Version: 2.0 | System: AMAWS v2.0*
