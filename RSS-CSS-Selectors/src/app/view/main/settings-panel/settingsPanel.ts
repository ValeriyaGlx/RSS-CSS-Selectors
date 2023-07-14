import './settingsPanel.css';
import { IElementCreator } from '../../../../interfaces/interfaces';
import View from '../../view';
import { settingsLayout } from '../../../utils/constants';

const cssClasses = {
  SETTINGS: 'settings',
  BUTTON: 'choose',
};

export default class SettingsPanel extends View {
  constructor() {
    const params: IElementCreator = {
      tag: 'div',
      className: [cssClasses.SETTINGS],
      attr: [{ name: 'data-testid', propery: 'settings' }],
    };
    super(params);
  }

  public configureView(): void {
    (this.elementCreator.element as HTMLElement).innerHTML = settingsLayout;
  }
}
