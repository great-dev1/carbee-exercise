interface InputProps {
  type?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: Function;
}

export default function Input({label, placeholder, value, onChange, type = 'text'}: InputProps) {
  return <div className="flex flex-col gap-3">
    {label?<p>{label}</p>:''}
    <input type={type} className="rounded-full px-5 py-1 border" placeholder={placeholder} value={value} onChange={(e) => onChange?onChange(e.target.value):''} />
  </div>
}