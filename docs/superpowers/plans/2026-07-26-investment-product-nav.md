# Investment Product Navigation Entry Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a bilingual investment-learning-product entry with a compact `NEW` badge to the desktop and mobile navigation.

**Architecture:** Keep navigation metadata in `data/headerNavLinks.ts`, including the optional badge, so desktop and mobile render from one source. Reuse the existing localized-title and external-link components, adding only the badge markup needed by both navigation layouts.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS 4, Node.js built-in test runner

## Global Constraints

- The entry appears immediately after “Works / 项目”.
- The labels are exactly “Invest” in English and “投资产品” in Chinese.
- `NEW` is visually contained in a compact pill badge and is not bare navigation text.
- The label and badge form one link to `https://syoka.icu/chain/`.
- The external product opens in a new browser tab through the existing link component.
- Desktop and mobile navigation both expose the entry.
- Do not add a homepage hero, promotional card, analytics event, or product content page.
- Do not add a new runtime or test dependency.

---

### Task 1: Add and render the investment product navigation entry

**Files:**

- Create: `tests/header-nav-links.test.mjs`
- Create: `components/navigation/NavLinkContent.ts`
- Modify: `data/headerNavLinks.ts`
- Modify: `components/navigation/LocalizedNavTitle.tsx`
- Modify: `components/navigation/Header.tsx`
- Modify: `components/navigation/MobileNav.tsx`

**Interfaces:**

- Consumes: `headerNavLinks`, `LocalizedNavTitle`, and the existing `CustomLink` external-link behavior.
- Produces: navigation records shaped as `{ href: string; title: string; badge?: string }`; `NavLinkContent({ children, badge })` renders the shared desktop/mobile label and optional visual badge.

- [ ] **Step 1: Write the failing navigation behavior tests**

```js
import assert from 'node:assert/strict'
import test from 'node:test'
import { renderToStaticMarkup } from 'react-dom/server'
import headerNavLinks from '../data/headerNavLinks.ts'

let NavLinkContent
try {
  NavLinkContent = (await import('../components/navigation/NavLinkContent.ts')).default
} catch {
  NavLinkContent = undefined
}

test('investment product follows Works', () => {
  const worksIndex = headerNavLinks.findIndex((link) => link.title === 'Works')
  const investIndex = headerNavLinks.findIndex((link) => link.title === 'Invest')

  assert.equal(investIndex, worksIndex + 1)
})

test('investment product targets the chain URL', () => {
  const invest = headerNavLinks.find((link) => link.title === 'Invest')

  assert.equal(invest?.href, 'https://syoka.icu/chain/')
})

test('NEW is rendered as a compact visual badge', () => {
  assert.equal(typeof NavLinkContent, 'function')
  const markup = renderToStaticMarkup(NavLinkContent({ badge: 'NEW', children: '投资产品' }))

  assert.match(markup, /class="[^"]*rounded-full[^"]*"[^>]*>NEW<\/span>/)
})
```

- [ ] **Step 2: Run the test and confirm the expected failure**

Run:

```bash
node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --test tests/header-nav-links.test.mjs
```

Expected: three assertion failures because the `Invest` record and `NavLinkContent` function do not exist yet.

- [ ] **Step 3: Add the navigation metadata, localized label, and shared badge component**

Add this record immediately after `Works` in `data/headerNavLinks.ts`:

```ts
{ href: 'https://syoka.icu/chain/', title: 'Invest', badge: 'NEW' },
```

Add this entry in `components/navigation/LocalizedNavTitle.tsx`:

```ts
Invest: { en: 'Invest', zh: '投资产品' },
```

Create `components/navigation/NavLinkContent.ts`:

```ts
import { createElement, type ReactNode } from 'react'

export default function NavLinkContent({
  children,
  badge,
}: {
  children: ReactNode
  badge?: string
}) {
  return createElement(
    'span',
    { className: 'inline-flex items-start gap-1' },
    children,
    badge
      ? createElement(
          'span',
          {
            className:
              '-mt-1 rounded-full bg-violet-600 px-1.5 py-0.5 text-[8px] leading-none font-bold tracking-wide text-white shadow-sm ring-1 ring-violet-500/20 dark:bg-violet-500',
            'aria-hidden': true,
          },
          badge
        )
      : null
  )
}
```

- [ ] **Step 4: Use the shared content component in both navigation layouts**

Import `NavLinkContent` in `Header.tsx` and `MobileNav.tsx`. Inside each existing `Link`, wrap the localized title and optional badge:

```tsx
<NavLinkContent badge={link.badge}>
  <LocalizedNavTitle title={link.title} />
</NavLinkContent>
```

Keep the existing desktop and mobile link classes, click behavior, and mobile menu closing behavior unchanged.

- [ ] **Step 5: Run focused and project validation**

Run:

```bash
node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --test tests/header-nav-links.test.mjs
pnpm exec eslint data/headerNavLinks.ts components/navigation/NavLinkContent.ts components/navigation/LocalizedNavTitle.tsx components/navigation/Header.tsx components/navigation/MobileNav.tsx tests/header-nav-links.test.mjs
pnpm typecheck
```

Expected: the Node test passes, ESLint reports no errors, and TypeScript exits successfully.

- [ ] **Step 6: Visually verify responsive behavior**

Run:

```bash
pnpm dev
```

Verify at desktop and mobile widths:

- “Invest / 投资产品” appears after “Works / 项目”.
- `NEW` is a small violet pill at the upper-right of the label.
- The link opens `https://syoka.icu/chain/` in a new tab.
- The mobile menu closes after the link is selected.

- [ ] **Step 7: Commit the implementation**

```bash
git add tests/header-nav-links.test.mjs data/headerNavLinks.ts components/navigation/NavLinkContent.ts components/navigation/LocalizedNavTitle.tsx components/navigation/Header.tsx components/navigation/MobileNav.tsx docs/superpowers/plans/2026-07-26-investment-product-nav.md
git commit -m "feat: expose investment learning product"
```
