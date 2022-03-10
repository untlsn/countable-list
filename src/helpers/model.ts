interface Model {
  <T>(value: T, onChange: (value: T) => void): { value: T, onChange(ev: any): void }
  wait<T>(value: T, onChange: (value: T) => void): { defaultValue: T, onBlur(ev: any): void }
}

const model: Model = (value, onChange) => ({
  value,
  onChange: ev => onChange(ev.currentTarget.value),
});

model.wait = (defaultValue, onBlur) => ({
  defaultValue,
  onBlur: (ev: any) => onBlur(ev.currentTarget.value),
});

export default model;
