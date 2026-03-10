---
name: usemcp
description: Uses the React Bits ScrollStack component (via shadcn/React Bits registries or MCP tools) to enhance the "How It Works / Our Process" section on the home page by adding a Scroll Stack background behind the process cards. Use when the user asks to apply Scroll Stack to the HiringProcess section or mentions /usemcp for that section.
---

# usemcp – Add Scroll Stack to "Our Process"

## When to use this skill

Use this skill when:
- The user mentions `/usemcp` in this project, or
- The user asks to "add Scroll Stack" (React Bits) to the **How It Works / Our Process** section on the home page.

## Target section and files

- The section is implemented in `src/components/sections/HiringProcess.tsx`.
- It renders the "How It Works" / "Our Process" grid using `PROCESS_STEPS` and `Reveal`.

Always:
1. Locate and read `src/components/sections/HiringProcess.tsx` before making changes.
2. Preserve existing copy, structure, and animations; only wrap/augment with ScrollStack.

## ScrollStack source (React Bits)

Prefer installing ScrollStack via the React Bits/shadcn registry:

```bash
pnpm dlx shadcn@latest add "https://shadcnregistry.com/r/react-bits/scrollstack-js-tw"
```

If using MCP-based registry tools instead, follow the same idea:
- Resolve the React Bits registry URL for `scrollstack-js-tw` or `scroll-stack` (depending on the registry),
- Add the generated component file(s) into the project under `components/react-bits` or a similar folder,
- Ensure any required utilities (e.g. smooth scrolling helpers, hooks) are also installed.

After installation you should have a reusable `ScrollStack` (or similarly named) component and, if needed, associated types/utilities.

## Integration pattern

Goal: Wrap the existing process cards in a ScrollStack so that each step becomes an item in the stack, while keeping the visual design (colors, typography) as close as possible to the current layout.

High‑level approach:

1. **Import the component**
   - From wherever ScrollStack was generated (for example):
     - `import { ScrollStack } from "@/components/react-bits/scroll-stack";`
   - Confirm the actual path/name by reading the generated file first.

2. **Map PROCESS_STEPS into ScrollStack items**
   - Instead of rendering the grid directly, pass the steps to ScrollStack.
   - Typical pattern (adapt to actual API of the installed component):

   ```tsx
   <ScrollStack items={PROCESS_STEPS}>
     {(step, index) => (
       // existing card content for each step
     )}
   </ScrollStack>
   ```

   - If the installed ScrollStack uses a different prop shape (e.g. `panels`, `children` render‑prop, or expects plain `children`), adapt accordingly but keep:
     - Step number,
     - Title,
     - Description,
     - Existing `Reveal` animations where they still make sense.

3. **Preserve section semantics**
   - Keep the outer `<section>` and heading markup for "How It Works" / "Our Process".
   - Keep the `container-custom` wrapper and background accents.
   - Replace only the inner grid of cards with the ScrollStack composition.

4. **Styling guidance**
   - Use the existing card classes as the starting point for each ScrollStack item:
     - Background: `bg-white/5` (or current tokens) on the navy background.
     - Borders and hover: reuse `border-white/10`, `hover:bg-white/10`, `hover:border-orange/30`.
   - If ScrollStack provides base item classes via props, merge them with these Tailwind classes; otherwise, keep the classes on your card container.
   - Make sure the ScrollStack container stretches full width on desktop but remains usable on mobile; if ScrollStack is desktop‑only, consider:
     - Using ScrollStack on `md+` breakpoints, and
     - Falling back to the original grid layout on small screens.

5. **Responsive and accessibility considerations**
   - Ensure keyboard navigation still reaches all steps (e.g. avoid trapping focus inside a single card).
   - Preserve semantic headings (`h2` for section, `h3` for each step).
   - Avoid relying solely on motion for understanding; keep the numeric step labels and text unchanged.

## Fallback pattern (if ScrollStack cannot be installed)

If registry access or installation fails:

1. **Do not block the request.** Explain briefly that ScrollStack couldn’t be installed.
2. Provide a graceful alternative:
   - Enhance the existing grid with subtle scroll‑triggered animation using the already‑present `Reveal` component.
   - Optionally add a simple parallax or translate/scale effect via CSS utilities (e.g. `md:hover:-translate-y-2`, `motion-safe:animate-[custom]`).

Document this clearly in the response so the user knows ScrollStack is not actually in use.

## Example workflow when user runs /usemcp

When the user types `/usemcp` or asks to add Scroll Stack to the process section:

1. Read `HiringProcess.tsx`.
2. Ensure ScrollStack is installed:
   - If not present, run the shadcn/React Bits add command (or equivalent MCP tool) and then read the generated component file.
3. Import ScrollStack into `HiringProcess.tsx`.
4. Replace the existing grid of cards with a ScrollStack composition that:
   - Renders one item per `PROCESS_STEPS` entry,
   - Uses the existing card design for each item,
   - Keeps headings and copy identical.
5. Test locally (or at least reason through) for:
   - Builds passing,
   - No TypeScript errors,
   - Acceptable layout on common breakpoints.
6. Summarize the change to the user succinctly.

