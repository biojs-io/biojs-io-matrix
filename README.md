biojs-io-matrix
==================

[![NPM version](http://img.shields.io/npm/v/biojs-io-matrix.svg)](https://www.npmjs.org/package/biojs-io-matrix) 
[![Build Status](https://secure.travis-ci.org/greenify/biojs-io-matrix.png?branch=master)](http://travis-ci.org/greenify/biojs-io-matrix) 

> Parse 2D matrices  (e.g. PAM)

## Getting Started
Install the module with: `npm install biojs-io-matrix`

```javascript
var Reader = require('biojs-io-matrix');
```
## B) Read a entire file

```
var matrix = Reader("A 1\nB 1 2");
> { A: { A: 1, B: 1 },
  B: { A: 1, B: 2 } }
```

## B) Line by line

```
var reader = new Reader();
reader.readLine("A 1");
reader.readLine("B 2 3");
var matrix = reader.buildMatrix();
```

## C) Save a matrix


```
var matrix = Reader("A 1\nB 1 2");
Reader.toString(matrix);
```

Or you can use objects

```
var matrix = new Reader("A 1\nB 1 2");
matrix.buildMatrix(); \\ returns the 2D array
matrix.toString();
> 'A\t1\nB\t1\t2'
```

## Contributing

Please submit all issues and pull requests to the [greenify/biojs-io-matrix](http://github.com/greenify/biojs-io-matrix) repository!

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/greenify/biojs-io-matrix/issues).

## License 

The MIT License

Copyright (c) 2014, greenify

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
