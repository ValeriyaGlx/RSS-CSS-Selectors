/**
 * @jest-environment jsdom
 */

import { screen, fireEvent } from '@testing-library/dom';
import HeaderView from '../app/view/header/header';
import MainView from '../app/view/main/main';
import FooterView from '../app/view/footer/footer';

const header = new HeaderView();
const main = new MainView();
const footer = new FooterView();
document.body.append(header.getHTMLElement());
document.body.append(main.getHTMLElement());
document.body.append(footer.getHTMLElement());

window.document.dispatchEvent(
  new Event('DOMContentLoaded', {
    bubbles: true,
    cancelable: true,
  }),
);

describe('Header', () => {
  test('header exist', () => {
    expect(header.getHTMLElement).toBeDefined();
  });

  test('header children exist', () => {
    expect(screen.getByText('CSS Selectors')).toBeInTheDocument();
  });

  test('click event header button', () => {
    const btn = screen.getByTestId('header-btn');
    expect(btn).not.toHaveClass('active');
    fireEvent.click(btn);
    expect(btn).toHaveClass('active');

    fireEvent.click(btn);
    expect(btn).not.toHaveClass('active');
  });
});

describe('Main', () => {
  test('main exist', () => {
    expect(main.getHTMLElement).toBeDefined();
  });
  test('main children exist', () => {
    expect(screen.getByText('Select The Foxes')).toBeInTheDocument();
  });

  test('main settings opens', () => {
    const btnOpenSettings = screen.getByTestId('header-btn');
    fireEvent.click(btnOpenSettings);
    const settings = screen.getByTestId('settings');
    expect(settings).toHaveStyle('transform: translate(0%, 0px);');
    fireEvent.click(btnOpenSettings);
    expect(settings).toHaveStyle('transform: translate(100%, 0px);');
  });

  test('is button "levels" exist', () => {
    const btnOpenSettings = screen.getByTestId('header-btn');
    const btnChooseLevel = screen.getByTestId('choose-level');
    expect(screen.getByText('Select The Foxes')).toBeInTheDocument();
    fireEvent.click(btnOpenSettings);
    expect(screen.getByText('Choose level')).toBeInTheDocument();
    fireEvent.click(btnChooseLevel);
    expect(screen.getByText('Show description')).toBeInTheDocument();
    fireEvent.click(btnChooseLevel);
    expect(screen.getByText('Choose level')).toBeInTheDocument();
  });
});

describe('Footer', () => {
  test('footer exist', () => {
    expect(header.getHTMLElement).toBeDefined();
  });

  test('footer children exist', () => {
    expect(screen.getByText('2023 © created by Galakhova Valeriia')).toBeInTheDocument();
  });

  test('is footer link work', () => {
    const footerLink = screen.getByTestId('footer-link');
    expect(footerLink).toHaveAttribute('href', 'https://github.com/ValeriyaGlx');
  });
});
