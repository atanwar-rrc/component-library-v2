import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';

const headers = ['Name', 'Age', 'City'];
const data = [
  ['Alice', 24, 'Toronto'],
  ['Bob', 29, 'Vancouver'],
];
const footer = ['Total', '2', ''];

describe('Table', () => {
  it('renders headers and data', () => {
    render(<Table headers={headers} data={data} footer={footer} />);
    expect(screen.getByText('Name')).toBeVisible();
    expect(screen.getByText('Alice')).toBeVisible();
    expect(screen.getByText('2')).toBeVisible();
  });

  it('applies disabled styles', () => {
    render(<Table headers={headers} data={data} footer={footer} disabled />);
    const table = screen.getByRole('table');
    expect(table).toHaveStyle('opacity: 0.8');
    expect(table).toHaveStyle('cursor: not-allowed');
  });
});
