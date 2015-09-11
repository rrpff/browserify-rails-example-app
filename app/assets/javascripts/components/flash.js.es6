const $ = require('jquery');

class Flash {
  constructor (message) {
    this.message = message;
    this.interval = 500;
  }

  render () {
    this.element = $(`<div class="flash">${this.message}</div>`);
    $('body').append(this.element);

    setTimeout(this.destroy.bind(this), this.interval);
  }

  destroy () {
    this.element.remove();
  }
}

module.exports = Flash;
