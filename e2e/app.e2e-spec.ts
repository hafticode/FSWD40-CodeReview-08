import { BusinessPage } from './app.po';

describe('business App', () => {
  let page: BusinessPage;

  beforeEach(() => {
    page = new BusinessPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
