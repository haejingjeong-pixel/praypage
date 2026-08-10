Square line checkbox with a Korean label, matching the 접수카드 intake form.

```jsx
const [on, setOn] = React.useState(false);
<Checkbox label="괜찮은 척 중이에요" checked={on} onChange={setOn} />
```

Controlled via `checked` + `onChange(next)`.
