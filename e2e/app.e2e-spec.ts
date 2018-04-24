import { FoodZillaAdminPage } from './app.po';

describe('food-zilla-admin App', function() {
  let page: FoodZillaAdminPage;

  beforeEach(() => {
    page = new FoodZillaAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
