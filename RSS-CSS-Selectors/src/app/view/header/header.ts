import './header.css';
import View from '../view';
import { IElementCreator } from '../../../interfaces/interfaces';
import ElementCreator from '../../utils/element-creator';
import openSettings from '../../usability/open-settings';

const cssClases = {
  HEADER: 'header',
  OPEN_SETTINGS: 'open-settings',
  OPEN_SETTINGS_DIV: 'open-settings-toggle',
  HEADER_LOGO: 'header-logo',
  HEADER_ICON: 'header-icon',
};

export default class HeaderView extends View {
  constructor() {
    const params: IElementCreator = {
      tag: 'header',
      className: [cssClases.HEADER],
    };
    super(params);
  }

  public configureView(): void {
    const paramsLogo: IElementCreator = {
      tag: 'div',
      className: [cssClases.HEADER_LOGO],
      textContent: 'CSS Selectors',
    };
    const logo = new ElementCreator(paramsLogo);
    this.elementCreator.addInnerElement(logo);

    const paramsIcon: IElementCreator = {
      tag: 'div',
      className: [cssClases.HEADER_ICON],
    };
    const icon = new ElementCreator(paramsIcon);
    logo.addInnerElement(icon);

    const params: IElementCreator = {
      tag: 'div',
      className: [cssClases.OPEN_SETTINGS],
      callback: () => openSettings(),
      attr: [{ name: 'data-testid', propery: 'header-btn' }],
    };

    const settingsButton = new ElementCreator(params);
    this.elementCreator.addInnerElement(settingsButton);

    const paramsToggle: IElementCreator = {
      tag: 'div',
      className: [cssClases.OPEN_SETTINGS_DIV],
    };
    const buttonToggle = new ElementCreator(paramsToggle);
    settingsButton.addInnerElement(buttonToggle);
  }
}
