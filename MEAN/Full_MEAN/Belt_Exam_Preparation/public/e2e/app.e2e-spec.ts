import { DiscussionBoardPage } from './app.po';

describe('discussion-board App', () => {
  let page: DiscussionBoardPage;

  beforeEach(() => {
    page = new DiscussionBoardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
