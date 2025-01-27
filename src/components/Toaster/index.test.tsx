import React from 'react';
import { render, screen } from '@testing-library/react';
import Toaster from '.';
import userEvent from '@testing-library/user-event';

describe('Toaster component', () => {
  it('renders component', () => {
    render(
      <Toaster isOpen toastInstance={{ type: 'info', content: <p>Hello World</p> }} />
    );
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it("calls Toast's onDismiss being passed from Toaster", () => {
    const mockOnDismiss = jest.fn();
    render(
      <Toaster
        isOpen
        toastInstance={{
          type: 'info',
          content: <p>Hello World</p>,
          onDismiss: mockOnDismiss,
        }}
      />
    );
    const close = screen.getByTitle('Close');
    userEvent.click(close);
    expect(mockOnDismiss).toHaveBeenCalledTimes(1);
  });
});
