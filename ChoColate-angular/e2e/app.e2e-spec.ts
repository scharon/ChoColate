import { ChoColateAngularPage } from './app.po';

describe('cho-colate-angular App', function() {
  let page: ChoColateAngularPage;

  beforeEach(() => {
    page = new ChoColateAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
