import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter'; 


beforeEach(() => {
  render(<Counter />)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const countDisplay = screen.getByTestId('count');
  expect(countDisplay).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCountElement = screen.getByTestId('count');
  const initialCount = Number(initialCountElement.textContent); 
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton); 
  const updatedCount = Number(screen.getByTestId('count').textContent); 
  expect(updatedCount).toBe(initialCount + 1);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCountElement = screen.getByTestId('count');
  const initialCount = Number(initialCountElement.textContent);
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton); 
  const updatedCount = Number(screen.getByTestId('count').textContent); 
  expect(updatedCount).toBe(initialCount - 1);
});
