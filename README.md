# saml2json

Converts a SAML 2.0 response into a JSON object. Nothing more.

## Install

```
$ npm install saml2json
```

## Usage

```
var express = require('express')
  , saml2json = require('saml2json')
  ;
  
var app = express();

app.post("/saml/callback", function(req, res, next){
  var profile = saml2json.parse(req.body.SAMLResponse);
  res.json(profile);
});

app.listen(3000);

```

## License

[The MIT License (MIT)](http://flesch.mit-license.org/)

Copyright © 2013 John Flesch, http://fles.ch

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

