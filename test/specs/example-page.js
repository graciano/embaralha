const { expect } = require('chai');

describe('embaralha example page', () => {
  browser.url('/');
  it('should have the right title', () => {
    const title = browser.getTitle();
    expect(title).to.be.equal('Embaralha');
  });
});
