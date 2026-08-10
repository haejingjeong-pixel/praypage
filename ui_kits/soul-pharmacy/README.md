# 마음약국 — UI Kit (soul-pharmacy)

Phone-first click-through of the **말씀 처방전** flow.

## Screens
- `IntroScreen.jsx` — 진입 화면. Wordmark, "오늘 마음이 어디가 아픈가요?", 말씀 처방받기 CTA.
- `MoodWallScreen.jsx` — 증상 선택. 8 MoodEnvelopes hanging on wooden rails; 처방전 발급하기 button enables on selection.
- `ResultScreen.jsx` — 결과 카드. PrescriptionCard filled from `rx-data.js`, plus 말씀광장 link / 저장 / 다시 처방 buttons.

## Data
- `rx-data.js` — `window.RX_DATA`: the 8 처방전 contents (증상·오늘의 말씀·복용법·주의사항·작은 실천·처방 단어), keyed by mood. Examples 1·2·3 are verbatim from the 기획서; the other five are written in the same voice.

## Run
Open `index.html`. It loads the compiled `_ds_bundle.js`, Lucide (CDN), then the screen files, and orchestrates `intro → mood → result` in a phone frame. Each MoodEnvelope maps to a 처방 단어 that would deep-link into 말씀광장 성경사전.
