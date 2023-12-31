import {useField} from 'remix-validated-form';

type MyInputProps = {
  name: string;
  label: string;
};

export const Input = ({name, label}: MyInputProps) => {
  const {error, getInputProps} = useField(name);
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input {...getInputProps({id: name})} />
      {error && <span className="">{error}</span>}
    </div>
  );
};
