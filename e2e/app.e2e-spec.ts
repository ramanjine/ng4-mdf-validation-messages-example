import { MdfExamplePage } from './app.po';

describe('mdf-example App', () => {
  let page: MdfExamplePage;

  beforeEach(() => {
    page = new MdfExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
