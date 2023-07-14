import './footer.css';
import View from '../view';
import { IElementCreator } from '../../../interfaces/interfaces';
import ElementCreator from '../../utils/element-creator';

const cssClases = {
  FOOTER: 'footer',
  NAV: 'footer-nav',
  NAV_LINK: 'nav-link',
};

const navLinks = ['https://github.com/ValeriyaGlx', 'https://rs.school/js/'];

export default class FooterView extends View {
  constructor() {
    const params: IElementCreator = {
      tag: 'footer',
      className: [cssClases.FOOTER],
    };
    super(params);
  }

  public configureView(): void {
    const params: IElementCreator = {
      tag: 'nav',
      className: [cssClases.NAV],
    };

    const footerNav = new ElementCreator(params);
    this.elementCreator.addInnerElement(footerNav);

    const paramsP: IElementCreator = {
      tag: 'p',
      className: [cssClases.NAV_LINK],
      textContent: '2023 © created by Galakhova Valeriia',
    };

    const footerP = new ElementCreator(paramsP);
    footerNav.addInnerElement(footerP);

    navLinks.forEach((el) => {
      const paramslinks: IElementCreator = {
        tag: 'a',
        className: [cssClases.NAV_LINK],
        textContent: '',
        attr: [
          {
            name: 'href',
            propery: el,
          },
          {
            name: 'target',
            propery: '_blank',
          },
        ],
      };
      const link = new ElementCreator(paramslinks);
      footerNav.addInnerElement(link);
    });

    const firstLink = footerNav.element?.children[1];
    firstLink?.setAttribute('data-testid', 'footer-link');
  }
}
