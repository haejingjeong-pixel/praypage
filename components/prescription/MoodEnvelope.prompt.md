Hanging pastel envelope for the 마음 선택 wall — pick a `mood` and it fills in the color, line icon and Korean label. Exports the `MOODS` map (label / icon / fill / ink / 처방 단어) for all 8 states.

```jsx
const [sel, setSel] = React.useState("anxious");
<MoodEnvelope mood="broken" selected={sel === "broken"} onClick={() => setSel("broken")} />
```

Moods: `anxious` 불안해요·믿음, `broken` 마음이 무너졌어요·긍휼, `compare` 비교돼요·사랑, `waiting` 기다리기 힘들어요·인내, `forgive` 용서가 안 돼요·용서, `distant` 하나님이 멀게 느껴져요·말씀, `calling` 사명이 버거워요·사명, `thanks` 감사가 사라졌어요·감사. `selected` lifts the envelope.
