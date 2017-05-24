import { Angular2.1Page } from './app.po';

describe('angular2.1 App', () => {
  let page: Angular2.1Page;

  beforeEach(() => {
    page = new Angular2.1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
