/**
 * @jest-environment jsdom
 */

import { screen, fireEvent } from '@testing-library/dom';
import App from '../app/app';

const app = new App();

window.document.dispatchEvent(
  new Event('DOMContentLoaded', {
    bubbles: true,
    cancelable: true,
  }),
);

describe('App usability', () => {
  beforeEach(() => {
    jest.setTimeout(1000);
  });
  test('is input blinked', () => {
    const input = screen.getByPlaceholderText('Type a css selector');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('blink');
  });
  test('is input listen value', () => {
    const input = screen.getByPlaceholderText('Type a css selector');
    expect(screen.getByTestId('input')).toContainHTML('');
    expect(screen.getByTestId('input')).toHaveClass('blink');
    fireEvent.input(input, {
      target: { value: 'fox' },
    });
    expect(screen.getByTestId('input')).not.toHaveClass('blink');
    fireEvent.input(input, {
      target: { value: '' },
    });
    expect(screen.getByTestId('input')).toHaveClass('blink');
  });
  test('is input gets value', () => {
    const input = screen.getByPlaceholderText('Type a css selector');
    const inputBtn = screen.getByText('enter');
    fireEvent.click(inputBtn);
    expect(screen.getByTestId('code')).toHaveClass('shake');
    fireEvent.input(input, {
      target: { value: 'aa' },
    });
    expect(screen.getByTestId('code')).toHaveClass('shake');
  });
  test('check level switch with arrows', () => {
    const nextLevelBtn = screen.getByTestId('next-lvl');
    expect(screen.getByText('Level 1 of 20')).toBeInTheDocument();
    fireEvent.click(nextLevelBtn);
    expect(screen.getByText('Level 2 of 20')).toBeInTheDocument();
    fireEvent.click(nextLevelBtn);
    expect(screen.getByText('Level 3 of 20')).toBeInTheDocument();
  });
  test('check level switch with buttons', () => {
    expect(screen.getByText('Level 3 of 20')).toBeInTheDocument();
    fireEvent.click(screen.getByText('8. A *'));
    expect(screen.getByText('Level 8 of 20')).toBeInTheDocument();
  });
});
