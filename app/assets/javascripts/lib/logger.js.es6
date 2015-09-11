function logger (message) {
  return `${Date.now()} ${message}`;
}

function shouter (message) {
  console.log(message.toUpperCase());
}

exports.logger = logger;
exports.shouter = shouter;
