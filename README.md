# tiled-map-resize-loader

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

``` javascript
var url = require("file!tiled-map-resize-loader?scale=4./map1.json");
// => emits file.json as file in the output directory and returns the public url
// => returns i. e. "/public-path/0dcbbaa701328a3c262cfd45869e351f.json"
// => every measurement and position in the map will be multiplied by scale.
```

By default the filename of the resulting file is the MD5 hash of the file's contents
with the original extension of the required resource.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
