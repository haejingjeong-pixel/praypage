---
name: soul-pharmacy-design
description: Use this skill to generate well-branded interfaces and assets for 마음약국 (Soul Pharmacy) — the "말씀 처방전" faith web content — either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files (tokens/, components/, ui_kits/, guidelines/).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Link `styles.css` for tokens, load Lucide (`https://unpkg.com/lucide@0.544.0/dist/umd/lucide.min.js`) for icons, and load `_ds_bundle.js` to use the React components via `window.DesignSystem_<hash>` (run the design-system check to confirm the exact namespace). If working on production code, copy the token CSS and read the rules here to become an expert in designing with this brand.

Brand essence: 따뜻한 작은 약국 — warm apothecary, ivory paper, pastel mood envelopes, prescription-blue linework, coral accent. Voice is gentle and de-shaming (정죄가 아니라 회복). Korean 해요체. No emoji (a single ♡ accent only). No logo binary — render 마음약국 in type with a line cross/heart mark.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
