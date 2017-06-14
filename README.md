# Levin

Levin finds `<link rel="stylesheet">` and `<script src="...">` tags and replaces
them with the contents of the files that they link.

This is useful when you have a very small site and don't want to make two extra
requests for such a miserable number of bytes.

## Usage

**via CLI**

First, install it via npm:

```shell
$ npm install -g levin
```

Then call it via the command line. Levin receives the HTML path as a first argument
and an optional second argument if you want to customize the path in which levin
should look for the assets.

```shell
$ levin path/to/file.html [optional/path/to/assets]
```

**programatically**

First, install it via npm:

```shell
$ npm install levin
```

Then, use the `inline` function exported by levin.

```javascript
  var levin = require('levin');

  levin.inline('path/to/file.html', 'optional/path/to/assets', function(result) {
    console.log(result);
  });
```

## Why not use Harmony?

I wanted to make something kick and dirty to use on a ton of proyects that I own,
and I was lazy to implement a proper build pipeline.

## Roadmap to v0.1.0

- [x] Find `link` and `script` tags
- [x] Find the tags contents
- [x] Replace the tags contents
- [x] Add a CLI
- [ ] Optimize the code

## Roadmap for the future

- [ ] Add an option to look up for minified/unminified files
- [ ] Fetch remote files
- [ ] Batch process HTML files
