# Golden Samples Library

> **Every agent producing frontend code MUST read at least ONE golden sample before writing HTML.**
> These files are the absolute reference for visual quality. They are user-approved mockups
> that demonstrate the compositional patterns, proportions, and craft level expected.

## How Agents Should Use This

1. **Before writing code**, read the golden sample closest to your project's domain.
2. **Study the HTML comments** — they explain WHY each compositional decision was made.
3. **Clone the patterns** — don't reinvent structure. Adapt the specific HTML/CSS patterns.
4. **Match the density** — count the number of CSS classes per element. Your output should match.

## Available Samples

| # | File | Domain | Key Patterns |
|---|------|--------|-------------|
| 01 | `01-executive-planner-dashboard.html` | Executive SaaS / Planner | Oversized numbered list, Hero metric (80px), Segmented bar, Staggered timeline, Section eyebrow with colored bar, Italic serif motto |

## Adding New Samples

When the user approves a mockup and says it looks good, extract the dashboard/main view
into a new golden sample here. Annotate every compositional pattern with `<!-- PATTERN: ... -->` comments.

## The Golden Rule

> **If your output doesn't look like it belongs next to these samples, it's not ready.**
