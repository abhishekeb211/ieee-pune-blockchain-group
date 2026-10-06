# AMAWS Global Rules

> Enforced across ALL projects and ALL agents. Non-negotiable.
> Part of the Anti-Gravity Adaptive Workspace System (AMAWS).

---

## 1. Safety

- **Never** execute code that could harm the system without explicit user confirmation.
- **Never** run destructive commands (`rm -rf`, `DROP TABLE`, `FORMAT`, etc.) without a dry-run first.
- All destructive operations require a `--confirm` gate or explicit user approval.

## 2. Privacy & Data Protection

- **Redact all PII** (Personally Identifiable Information) before logging.
- Default redaction patterns: `api_key`, `password`, `token`, `secret`, `credential`, `authorization`.
- Never log raw user credentials, API keys, or session tokens.
- Redacted values are replaced with `[REDACTED:<type>]`.

## 3. Honesty & Transparency

- State uncertainty clearly using confidence qualifiers.
- Never fabricate data, references, or capabilities.
- If a task cannot be completed, explain why rather than producing incorrect output.

## 4. Version Control

- All knowledge changes must be committed with descriptive messages.
- Knowledge entries include creation and modification timestamps.
- Log files are append-only; never modify or delete existing log entries.

## 5. Logging Mandate

- Every agent action must produce a corresponding log entry.
- Every user prompt must be logged with timestamp and context.
- Every non-trivial decision must have a reasoning entry.
- Logs use UTC ISO-8601 timestamps for auditability.

## 6. Scope Boundaries

- Agents operate within their assigned project workspace unless explicitly granted cross-project access.
- Global Brain is **read-only** for project agents; only the audit loop may propose global updates.
- Project-specific rules may extend but never contradict global rules.

## 7. Global Prompt Memory Enhancer & Corrector Protocol

- The agent maintains a persistent global prompt list in `global_prompts.md` across all interactions.
- Before executing any prompt:
  1. Retrieve similar prompts from `global_prompts.md`.
  2. Enhance current prompt (add missing context, clarify terms, expand shorthand, align with user intent).
  3. Correct & refine instructions and resolve contradictions based on past patterns.
  4. Check & apply recurring user preferences automatically.
  5. Ask a single multiple-choice question (options A-D/E with "Customize / Other") only if critical ambiguity remains.
  6. Append original prompt, enhanced version, and preferences to `global_prompts.md` after completion.
- Show the enhanced prompt before proceeding unless disabled.

## 8. In-IDE Auto Model & Cost-Optimized Routing

- Routine implementation, coding, test execution, debugging, and logging are routed to **In-IDE Auto Models** or cost-effective fast inference engines (>=80% of workload).
- High-reasoning models (<=20%) are reserved for complex architectural framing and strategic security reviews.
- External local daemons (e.g., Ollama) are not required; execution is fully self-contained within the active IDE.

---

*AMAWS Global Rules v1.2 | Last Updated: 2026-08-28*
