function stringLength(string) {
  if (string.length < 10 && string.length > 0) {
    return string.length;
  } else {
    return new Error('The string short');
  }
}

module.exports = stringLength;
