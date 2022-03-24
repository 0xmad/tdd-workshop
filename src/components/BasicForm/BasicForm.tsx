import { useFormHook } from './hook';

export interface IBasicFormProps {
  onSubmit: (data: { amount: string }) => void;
}

export const BasicForm = ({ onSubmit }: IBasicFormProps): JSX.Element => {
  const { amount, handleChange, handleSubmit } = useFormHook({ onSubmit });

  return (
    <form>
      <input
        placeholder="Enter amount"
        value={amount}
        onChange={handleChange}
      />

      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};
