'use strict';

var loaderUtils = require('loader-utils');

module.exports = function(content) {
  this.cacheable && this.cacheable();
  if (!this.emitFile) {
    throw new Error('emitFile is required from module system');
  }
  var query = loaderUtils.parseQuery(this.query);
  var scale = query.scale;
  if (!scale) {
    throw new Error('Must define scale to use this loader');
  }
  scale = parseInt(scale, 10);
  var map = JSON.parse(content);
  // Let the resizing begin!
  map.width *= scale;
  map.height *= scale;
  map.tilewidth *= scale;
  map.tileheight *= scale;
  map.layers.forEach(function(l) {
    if (l.data) {
      // Tile layer.
      l.x *= scale;
      l.y *= scale;
    } else if (l.objects) {
      // Object layer.
      l.x *= scale;
      l.y *= scale;
      l.objects.forEach(function(o) {
        o.width *= scale;
        o.height *= scale;
        o.x *= scale;
        o.y *= scale;
      });
    }
  });
  map.tilesets.forEach(function(t) {
    t.imagewidth *= scale;
    t.imageheight *= scale;
    t.margin *= scale;
    t.spacing *= scale;
    t.tilewidth *= scale;
    t.tileheight *= scale;
  });
  return JSON.stringify(map);
};
