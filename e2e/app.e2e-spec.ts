import { AngularDevmeetingPage } from './app.po';

describe('angular-devmeeting App', () => {
  let page: AngularDevmeetingPage;

  beforeEach(() => {
    page = new AngularDevmeetingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
