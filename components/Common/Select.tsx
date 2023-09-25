export interface SelectOption {
  value: string;
  name: string;
}
export interface SelectProps {
  label?: string,
  options: Array<SelectOption>,
  onChange: Function
}
export default function Select({label, options, onChange}: SelectProps) {
  return <div className="flex flex-col gap-3">
    {label?<p className="text-gray-300">{label}</p>:''}
    <select className="rounded-full py-2 px-5 border" onChange={(e) => onChange(e.target.value)}>
      { options.map((option: SelectOption) => <option key={ option.value } value={ option.value }> { option.name } </option>) }
    </select>
  </div>;
}