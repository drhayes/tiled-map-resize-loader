'use strict';

module.exports = function(content) {
  this.cacheable && this.cacheable();
  if (!this.emitFile) {
    throw new Error('emitFile is required from module system');
  }
  console.log(content);
  return content;
};
