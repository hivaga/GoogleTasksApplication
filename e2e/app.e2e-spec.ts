import { GoogleTasksAppPage } from './app.po';

describe('google-tasks-app App', () => {
  let page: GoogleTasksAppPage;

  beforeEach(() => {
    page = new GoogleTasksAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
