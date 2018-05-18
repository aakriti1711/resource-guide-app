import { ResourceGuideAppPage } from './app.po';

describe('resource-guide-app App', function() {
  let page: ResourceGuideAppPage;

  beforeEach(() => {
    page = new ResourceGuideAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
