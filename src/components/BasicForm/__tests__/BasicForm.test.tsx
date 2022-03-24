import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BasicForm } from '../BasicForm';

describe('components/BasicForm/BasicForm', () => {
  test('should render properly', async () => {
    const props = {
      onSubmit: jest.fn(),
    };
    render(<BasicForm {...props} />);

    const input = await screen.findByPlaceholderText('Enter amount');
    const button = await screen.findByText('Submit');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('should enter the value and submit properly', async () => {
    const props = {
      onSubmit: jest.fn(),
    };

    render(<BasicForm {...props} />);

    const input = await screen.findByPlaceholderText('Enter amount');

    userEvent.type(input, '1234');

    const button = await screen.findByText('Submit');

    button.click();

    expect(props.onSubmit).toBeCalledTimes(1);
    expect(props.onSubmit).toBeCalledWith({ amount: '1234' });
  });
});
