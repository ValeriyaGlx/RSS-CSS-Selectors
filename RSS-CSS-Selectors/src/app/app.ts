import './app.css';
import mouseMoveInsideCode, { mouseMoveInsideGame } from './usability/code-container';
import { getInputValue } from './usability/input-usability';
import {
  checkAnwser,
  chooseLevel,
  clearLocalStorage,
  getHelp,
  newGame,
  switchNextLevel,
  switchPrevLevel,
} from './usability/levels';
import setLocalStorage, { getArraysFromLocalStorage } from './usability/local-storage';
import { closeSetWindow } from './usability/open-settings';
import { removeSelector } from './usability/selectors';
import FooterView from './view/footer/footer';
import HeaderView from './view/header/header';
import MainView from './view/main/main';

export default class App {
  public footerView: FooterView;

  public headerView: HeaderView;

  public mainView: MainView;

  constructor() {
    this.footerView = new FooterView();
    this.headerView = new HeaderView();
    this.mainView = new MainView();
    this.createApp();
  }

  private createApp(): void {
    document.body.append(
      this.headerView.getHTMLElement(),
      this.mainView.getHTMLElement(),
      this.footerView.getHTMLElement(),
    );

    document.addEventListener('DOMContentLoaded', () => {
      window.addEventListener('click', closeSetWindow);
      document.querySelector('.code')?.addEventListener('mousemove', removeSelector);
      document.querySelector('.level-navigation-prev')?.addEventListener('click', switchPrevLevel);
      document.querySelector('.level-navigation-next')?.addEventListener('click', switchNextLevel);
      document.querySelector('.html-section-field')?.addEventListener('mousemove', (e) => mouseMoveInsideCode(e));
      document.querySelector('.result-block')?.addEventListener('mousemove', (e) => mouseMoveInsideGame(e));
      document.querySelectorAll('.level-button').forEach((el) => {
        el.addEventListener('click', (e) => chooseLevel(e));
      });
      (document.querySelector('.choose-reset') as HTMLElement).addEventListener('click', clearLocalStorage);
      (document.querySelector('.css-section_input') as HTMLElement).addEventListener('input', (e) => getInputValue(e));
      document.querySelector('.css-section_button')?.addEventListener('click', checkAnwser);
      window.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          checkAnwser();
        }
      });
      document.querySelector('.choose-help')?.addEventListener('click', getHelp);
      document.querySelector('.finish button')?.addEventListener('click', newGame);
      window.addEventListener('beforeunload', setLocalStorage);
      window.addEventListener('load', getArraysFromLocalStorage);
    });
  }
}
