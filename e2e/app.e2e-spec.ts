import { JsWorldPage } from './app.po';

describe('js-world App', () => {
  let page: JsWorldPage;

  beforeEach(() => {
    page = new JsWorldPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
