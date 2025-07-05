import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  it('renders with options', () => {
    render(<Dropdown options={['A', 'B']} value="A" onChange={() => {}} />);
    expect(screen.getByDisplayValue('A')).toBeVisible();
    expect(screen.getByText('B')).toBeVisible();
  });

  it('applies disabled styles', () => {
    render(<Dropdown options={['A']} value="A" disabled onChange={() => {}} />);
    const select = screen.getByDisplayValue('A');
    expect(select).toHaveStyle('opacity: 0.7');
    expect(select).toHaveStyle('cursor: not-allowed');
    expect(select).toBeDisabled();
  });
});

