# 마음약국 (Soul Pharmacy) — Design System

> 오늘 마음이 아픈 곳에, 말씀 한 알.

A warm, faith-based **초경량 웹 콘텐츠**: the user picks how their heart feels today and receives a **말씀 처방전** (Word Prescription) card, which links out to the 말씀광장 성경사전 for the prescribed word. Not a heavy platform — a small, kind apothecary you drop into, receive one verse, and share.

This design system captures that product's look and feel: a warm apothecary tone (ivory paper, pastel "mood" envelopes, prescription-blue linework, a coral brand accent), the token foundations, the reusable components, and a phone-first UI kit of the full flow.

---

## Sources
- **Product brief** (기획서): *마음약국: 말씀 처방전* — the definitive source for naming, copy voice, flow, the 8 마음 증상, the 3 sample 처방전, color/mood direction, and MVP scope.
- **Three product mockups** (`uploads/`): the envelope wall (마음 선택), the tall blue-ink 말씀 처방전 result card, and the coral-envelope 접수카드 form. Colors here were sampled directly from these images.
- **Figma mounts** — *"Material 3 Design Kit (Community)"* and *"iOS and iPadOS 26 (Community)"* were attached, but both are **generic Apple/Google system kits unrelated to this brand**. They were used only as generic interaction reference; none of their proprietary tokens, components, or icons were imported. Recreating Apple/Material as "마음약국's system" would be both wrong and a copy of another party's proprietary design language, so this system is built from the brand's true source above.

## Brand mark
The source provides **no logo binary**. The brand renders in type (`Wordmark`), accompanied by a simple line **cross** or **heart** mark drawn directly from the mockups' own compositions. Do not fabricate a separate logo.

## Intentional additions
- **Icon** — a thin line-icon wrapper. The mockups use a single-weight line-icon set with no SVG source available (the Figma mounts are unrelated kits), so **Lucide** (CDN) is used as the nearest match. See Iconography.

---

## Content fundamentals (voice & tone)

The voice is **warm, gentle, and de-shaming** — a small pharmacist handing you something kind, never a clinic or a lecture.

- **Language:** Korean throughout. Soft, spoken register with 해요체 endings ("골라주세요", "받아가세요", "괜찮아요").
- **Address:** speaks *to* the reader (당신 / 나), often reframing the patient as "**오늘의 나**". Reassuring second person ("말로 다 설명하지 않아도 괜찮아요").
- **Reframe, don't condemn:** the throughline is **정죄가 아니라 회복** — receive the Word as an *invitation* (초대), not a whip (채찍) or a verdict. Every 처방전 carries a 주의사항 that gently guards against self-condemnation.
- **Prescription metaphor, softened:** medical field names (처방일 · 환자명 · 증상 · 복용법 · 주의사항) are kept for structure but filled with tender content. "복용법: 오늘 자기 전, 이 말씀을 천천히 3번 읽기."
- **Short over long:** one verse beats a long meditation. "마음이 무너진 날, 긴 설명보다 한 구절이 필요할 때가 있습니다."
- **Emoji:** essentially none. A single soft **♡** appears as a warm closing accent on the card footer. No emoji cards, no unicode icon soup.
- **Sample lines:** "오늘 마음이 어디가 아픈가요?", "지금 마음에 가까운 증상을 하나 골라주세요", "당신의 하루가 말씀으로 회복되길 바랍니다 ♡".

---

## Visual foundations (v2 — quiet 마음 접수대)

- **Overall tone:** 조용하고 진지한 마음 접수대. Quiet, serious, considered — not kids'-content or stationery-shop cute. No character/sticker motifs, no rounded gothic display type.
- **Color:** same brand coral / rx-blue roles, but **8 mood envelope colors are desaturated, muted paper tones** (dusty mint, coral, lavender, mustard, dusty pink, dusty blue, olive, ochre) rather than bright pastels.
- **Type:** serious Korean serif for titles/증상명 (**Noto Serif KR**, substituting MaruBuri — no CDN binary available, see caveat), clean **Pretendard** for body/labels. No rounded/cute gothic (Jua, Gowun Dodum removed).
- **Ink:** dark brown/ink (`--ink-900 #362E27`), never pure black.
- **Envelopes:** flat paper, near-square corners (2–4px), minimal clip-path notch at the flap, hung from a **CSS wood-grain shelf rail** (`WoodShelf`) via a small metal ring — no bright brass, no 3D bevel.
- **Shadows:** soft "paper-lift" only (`--shadow-sm/md/lg`, low-opacity warm ink) — no strong drop shadow, no 3D/glossy effects.
- **Spacing:** generous gaps between envelopes and between the two shelf rows for a calm, uncluttered read.
- **Corner radii:** small and quiet — `--radius-sm 4px` … `--radius-xl 14px` (previously rounded/pill; now near-square).


---

## Iconography

- **System:** thin single-weight **line icons** via **Lucide** (CDN, `lucide@0.544.0`), wrapped by the `Icon` component (`stroke-width` 1.6). This is a **substitution** — the mockups' own icon set has no extractable SVG source (the attached Figma files are unrelated system kits). Lucide's stroke weight and rounded joins match the mood/prescription glyphs closely.
- **Mood glyphs:** `waves` (불안), `heart-crack` (무너짐), `user` (비교), `hourglass` (기다림), `heart-handshake` (용서), `church` (멀게 느껴짐), `sprout` (사명), `sunrise` (감사).
- **Prescription glyphs:** `calendar`, `user`, `heart-pulse`, `book-open`, `pill`, `triangle-alert`, `sprout`, `star`, plus a hand-built medical **cross** in the cartouche/logo.
- **Emoji / unicode:** avoided, except a single decorative **♡** on the card footer.

---

## Foundations (tokens)
- `tokens/colors.css` — coral, rx-blue, paper neutrals, warm ink, 8 mood pairs, semantic aliases.
- `tokens/fonts.css` — Google Fonts @import + font-family vars.
- `tokens/typography.css` — sizes, leading, tracking, weights, `.t-*` utility classes.
- `tokens/spacing.css` — spacing scale, radii, warm shadows, motion, layout widths.
- `styles.css` — root entry (imports the four token files only).

## Components (`components/`)
- **actions/** — `Button` (coral / rx / outline / ghost; sm·md·lg; icon; block).
- **core/** — `Icon` (Lucide line-icon wrapper).
- **forms/** — `Checkbox` (intake), `StepIndicator` (1·2·3·4 flow progress).
- **brand/** — `Wordmark` (typographic lockup + cross/heart line mark).
- **prescription/** — `MoodEnvelope` (+ exported `MOODS` map), `PrescriptionCard`, `RxField`, `PrescriptionWord`, `Divider`, `IntakeSheet` (+ `IntakeSheet.Group`), `WoodShelf`, `AssessmentPaper`.

## UI kit (`ui_kits/soul-pharmacy/`)
Full click-through of the product, PC + mobile. Open `index.html`. Flow:

1. **IntroSequence** — 3-step fade intro (안녕하세요 → 마음 카드 선택 안내 → 감정 선택 유도), calm cross-fade, then a brief loading veil so asset loads are unseen.
2. **MainScreen** — 마음 선택. 8 `MoodEnvelope`s hung on two `WoodShelf` rails over the ivory `bg-main` backdrop with soft leaf-shadow. Serif title "오늘 마음은 어떤가요?".
3. **AssessmentScreen** — 오늘의 마음 접수. A brief "오늘의 마음 접수" veil, then the `AssessmentPaper` (접수카드) rises out of the selected mood's envelope; 3 questions revealed one at a time (single-select), `< >` arrow nav, then a "준비되셨나요?" screen. Q1 answer auto-classifies the user A/B.
4. **Loading** — "말씀 처방전을 준비하고 있어요…" veil before the result.
5. **ResultScreen** — 말씀 처방전. Centered `PrescriptionCard`, sections fade in one at a time (처방일 · 증상 · 마음 소견 · 오늘의 말씀 + 개역한글 본문 · 복용법 · 주의사항 · 작은 실천 · 처방 단어). Bottom actions: 말씀광장 열기 / 스티커 붙여서 공유 / 이미지로 저장 / 다시 처방받기.
6. **StickerScreen** — 스티커 붙이기 & 공유. Emoji stickers a link-recipient drags onto the card; resize/rotate handles stay active until a blank click; PC shows a side sticker panel, mobile stacks it. 이미지로 저장 / 공유 링크 만들기.

Data files: `assessment-data.js` (8 감정 자가문진 + Q1 `optionTypes` A/B), `rx-prescriptions.js` (감정별 A/B 처방전, 성구·개역한글 본문·소견·복용법·주의사항·작은 실천·처방 단어), `rx-data.js` (fallback 요약).

A single-file offline build lives at project root: `마음약국-체험.html` (webp assets, fonts via CDN).

### Screen data map (for sync)
| Screen | Built from |
|--|--|
| MainScreen / MoodEnvelope | `MOODS`, `assets/env-*.png`, `wood-bar.png`, `bg-main.png` |
| AssessmentScreen | `assessment-data.js`, `env-front/back-*.png`, `AssessmentPaper` |
| ResultScreen / StickerScreen | `rx-prescriptions.js`, `rx-data.js`, `PrescriptionCard` |

## Caveats / substitutions to confirm
- **Fonts:** MaruBuri has no public CDN, so titles/증상명 use **Noto Serif KR** (nearest serious Korean serif). Pretendard loads via jsdelivr CDN for body/labels. Swap in real MaruBuri/Pretendard files if you have them. (`check_design_system` flags Pretendard every run because it can't fetch the remote CSS itself — the CDN does serve it, so no action needed.)
- **Icons** are Lucide (substitution, see Iconography).
- **No logo binary** — brand is typographic. The screens currently lead with the "말씀 처방전" wordmark rather than a "마음약국" mark; add a mark only if the client provides one.
- **Wood shelf** is pure CSS grain (no texture image asset available from source).
- **A/B classification** is driven by each emotion's Q1 `optionTypes` in `assessment-data.js` (no index fallback); the user never picks A/B directly.

## Namespace
Components compile to `window.DesignSystem_d4e5a3` (run `check_design_system` to confirm). Cards mount via `const { Button, … } = window.DesignSystem_d4e5a3`.
