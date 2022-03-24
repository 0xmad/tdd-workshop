import { act, renderHook } from '@testing-library/react-hooks';
import { ChangeEvent } from 'react';

import { useFormHook } from '../hook';

describe('components/BasicForm/hook', () => {
  test('should return initial data', () => {
    const { result } = renderHook(() => useFormHook({ onSubmit: jest.fn() }));

    expect(result.current.amount).toBe('');
  });

  test('should change amount', () => {
    const { result } = renderHook(() => useFormHook({ onSubmit: jest.fn() }));

    expect(result.current.amount).toBe('');

    act(() => {
      const event = {
        target: { value: '4' },
      };

      result.current.handleChange(event as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.amount).toBe('4');
  });
});
