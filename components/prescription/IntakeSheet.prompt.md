The 접수카드 intake form sheet. Compose numbered `IntakeSheet.Group`s of `Checkbox`es.

```jsx
<IntakeSheet>
  <IntakeSheet.Group number="01" question="지금 마음의 강도는 어떤가요?" columns={4}>
    <Checkbox label="참을 만해요" /><Checkbox label="계속 신경 쓰여요" />
    <Checkbox label="마음이 꽉 찼어요" /><Checkbox label="지금은 버거워요" />
  </IntakeSheet.Group>
</IntakeSheet>
```
