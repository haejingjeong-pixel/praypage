The paper 자가문답진 card that rises out of a mood envelope — scalloped torn top edge, fixed header, internally-scrolling checkbox groups (long question sets never shrink the paper), footer CTA.

```jsx
const [sel, setSel] = React.useState({});
<AssessmentPaper
  icon="heart-crack" iconColor="var(--mood-broken-ink)"
  groups={[{ number: "01", question: "지금 마음의 강도는 어떤가요?", options: ["참을 만해요","계속 신경 쓰여요","마음이 꽉 찼어요","지금은 버거워요"] }]}
  selections={sel}
  onToggle={(g,o,v) => setSel(s => ({ ...s, [`${g}-${o}`]: v }))}
  onSubmit={() => {}}
/>
```

`groups` is fully data-driven — swap per-mood question sets without touching the component.
