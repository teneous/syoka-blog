# Investment Product Navigation Entry

## Goal

Expose Syoka's self-built investment learning product from the blog homepage navigation without restructuring the homepage.

## User-facing behavior

- Add a new navigation entry immediately after “Works / 项目”.
- Display the entry as “Invest / 投资产品”.
- Attach a compact `NEW` pill badge to the upper-right side of the label. `NEW` is a visual badge, not plain navigation copy.
- Treat the label and badge as one clickable target.
- Open `https://syoka.icu/chain/` in a new browser tab.
- Show the same entry and badge in both the desktop navigation and mobile menu.

The resulting desktop order is:

`Works / 项目` → `Invest / 投资产品` → `Notes / 笔记` → `About / 关于`

## Implementation shape

- Extend the centralized header navigation data with the external product URL and an optional badge value.
- Extend the localized navigation labels with the Chinese and English product names.
- Render the optional badge next to the localized label in the shared desktop and mobile navigation paths.
- Reuse the existing external-link behavior, which already adds `target="_blank"` and `rel="noopener noreferrer"`.
- Match the site's existing violet visual language; keep the badge small enough that it does not compete with the navigation label.

## Scope

This change only adds the navigation exposure requested here. It does not add a homepage hero, promotional card, analytics event, or content page for the product.

## Validation

- Confirm the new entry appears after Works / 项目 at desktop widths.
- Confirm the new entry appears in the mobile menu.
- Confirm Chinese and English labels switch with the existing language control.
- Confirm `NEW` is visually contained in a badge rather than rendered as bare text.
- Confirm the complete entry opens `https://syoka.icu/chain/` in a new tab.
- Run the existing type check and targeted lint checks for touched files.
