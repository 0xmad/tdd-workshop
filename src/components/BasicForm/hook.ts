import { ChangeEvent, useCallback, useState } from 'react';

export interface IUseFormHookArgs {
  onSubmit: (data: { amount: string }) => void;
}

export const useFormHook = ({ onSubmit }: IUseFormHookArgs) => {
  const [amount, setAmount] = useState('');

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setAmount(event.target.value);
    },
    [setAmount],
  );

  const handleSubmit = useCallback(() => {
    onSubmit({ amount });
  }, [amount, onSubmit]);

  return {
    amount,
    handleChange,
    handleSubmit,
  };
};
