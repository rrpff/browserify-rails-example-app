const { expect } = require('chai');
const Flash = require('../../app/assets/javascripts/components/flash');

describe('Flash', function () {
  before('each', function () {
    (new Flash('Luke doesnt really suck')).render();
  });

  it('should render a flash message to the page', function () {
    expect(document.body.innerHTML).to.contain('class="flash"');
  });

  it('should remove the flash message after an interval', function (done) {
    expect(document.body.innerHTML).to.contain('Luke doesnt really suck');

    setTimeout(function () {
      expect(document.body.innerHTML).to.not.contain('Luke doesnt really suck');
      done();
    }, 501);
  });
});
