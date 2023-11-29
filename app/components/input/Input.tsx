import {useField} from 'remix-validated-form';

type InputProps = {
  name: string;
  label: string;
  type: 'email' | 'password';
};
export function Input({name, label, type}: InputProps) {
  const {error, getInputProps} = useField(name);
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} {...getInputProps({id: name})} />
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
}
