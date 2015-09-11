const { expect } = require('chai');
const { logger } = require('../../app/assets/javascripts/lib/logger');

describe('Logger', function () {
  it('should log summit', function () {
    expect(logger('summit')).to.contain('summit');
  });
});
