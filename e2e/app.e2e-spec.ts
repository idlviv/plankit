import { PlankitPage } from './app.po';

describe('plankit App', () => {
  let page: PlankitPage;

  beforeEach(() => {
    page = new PlankitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
