The tall cream 말씀 처방전 card (arched cartouche header + blue frame). Fill the body with RxField rows, Dividers and a PrescriptionWord.

```jsx
<PrescriptionCard>
  <RxField icon="calendar" label="처방일" value="2026.07.03" inline />
  <Divider />
  <RxField icon="book-open" label="오늘의 말씀"
    verse="너희는 마음에 근심하지 말라 하나님을 믿으니 또 나를 믿으라" reference="요한복음 14:1" />
  <Divider />
  <PrescriptionWord word="믿음" />
</PrescriptionCard>
```

Vertical, share-friendly ratio. `footer=""` hides the closing line.
