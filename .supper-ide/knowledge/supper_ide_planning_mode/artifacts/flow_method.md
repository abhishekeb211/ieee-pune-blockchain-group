# Supper IDE Planning Mode & Flow Method — In-IDE Auto Models Standard v5.1

> **Knowledge Item: Flow Method Protocol**  
> Direct mapping of Antigravity's Planning Mode to the **7-Step Sovereign Core Brain Flow Method** and In-IDE Auto Model routing.

---

## 1. Flow Method Architecture (7-Step Loop)

### Phase 1: Intake (Research) — [IN-IDE] Auto / Low-Cost Model
- **Actions**: Scan workspace tree (`depth=2`), manifest files, git status, and `.context/`. Query `global_prompts.md` for historical patterns.
- **Goal**: Identify boundaries, conventions, and constraints. Zero assumptions.

### Phase 2a: Architecture Frame — High Reasoning (When Needed / <= 20% Budget)
- **Activity**: Complex architectural synthesis:
  1. Name architectural pattern.
  2. List 3–5 top-level components (WHAT, not HOW).
  3. Formulate the Goal Contract: `"Build X so that Y under constraints Z."`
  4. Flag critical risks and security constraints.

### Phase 2b: Plan Detail & Task DAG — [IN-IDE] Auto / Low-Cost Model (>= 80% Budget)
- **Activity**: Construct the full `implementation_plan.md` body:
  - Copy Goal Contract, generate acyclic Task DAG with dependency nodes, define Verification Plan.

### Phase 3: Execution Topology Selection — [IN-IDE] Auto Model
- **Activity**: Select single-agent vs. isolated subagent execution topology to prevent context bloat.

### Phase 4: Bottom-Up Execution — [IN-IDE] Auto / Low-Cost Model
- **Activity**: Implement primitives first, then composites.
- **Format**: Emit minimal Unified Diffs with `[[path/to/file]]` notation and `// ?verify: [reason]` annotations.
- **Rule**: Apply **Demand Elegance** — eliminate dead code, boilerplate, and premature abstractions.

### Phase 5: Checkpointing & DAG Reconciliation — [IN-IDE] Auto Model
- **Activity**: Reconcile completed tasks against Task DAG after every file edit. Halt and re-plan immediately upon drift.

### Phase 6: Adversarial Verification — [IN-IDE] Auto Model
- **Activity**: Run automated test suites (`pytest`, `npm test`), validate exit codes (must equal 0), and inspect runtime logs.

### Phase 7: Persistence & Audit Loop — [IN-IDE] Auto Model
- **Activity**: Commit atomic JSON action logs to `.agent-system/logs/actions/`, prompt logs to `prompts/`, and Markdown reasoning entries.
- **Update**: Append prompt enhancements and preferences to `global_prompts.md`.

---

## 2. Planning Mode Rule Invariants
- **Adversarial Mandate**: Every IMPLEMENT step must have a corresponding VALIDATE step with verifiable output.
- **ISO-8601 UTC Logging**: All logs must use UTC timestamps for immutable auditability.
- **In-IDE Execution**: Fully self-contained within IDE auto models without external local server dependencies.
