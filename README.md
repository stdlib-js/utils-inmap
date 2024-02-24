<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# inmap

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Invoke a function for each element in a collection and update the collection in-place.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import inmap from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-inmap@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/utils-inmap/tags). For example,

```javascript
import inmap from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-inmap@v0.2.1-deno/mod.js';
```

#### inmap( collection, fcn\[, thisArg ] )

Invokes a `function` for each element in a `collection` and updates the `collection` in-place.

```javascript
function scale( value, index ) {
    return value * index;
}

var arr = [ 1, 2, 3, 4 ];

var out = inmap( arr, scale );
// returns [ 0, 2, 6, 12 ]

var bool = ( out === arr );
// returns true
```

The invoked `function` is provided three arguments:

-   `value`: collection element
-   `index`: collection index
-   `collection`: input collection

Basic support for dynamic collections is provided. Note, however, that index incrementation is monotonically increasing.

```javascript
function scale1( value, index, collection ) {
    if ( index === collection.length-1 && collection.length < 10 ) {
        collection.push( index+2 );
    }
    return value * index;
}

var arr = [ 1, 2, 3, 4 ];

var out = inmap( arr, scale1 );
// returns [ 0, 2, 6, 12, 20, 30, 42, 56, 72, 90 ]

function scale2( value, index, collection ) {
    collection.shift();
    return value * index;
}

arr = [ 1, 2, 3, 4 ];

out = inmap( arr, scale2 );
// returns [ 3, 3 ]
```

To set the function execution context, provide a `thisArg`.

```javascript
function sum( value ) {
    this.sum += value;
    this.count += 1;
    return value;
}

var arr = [ 1, 2, 3, 4 ];

var context = {
    'sum': 0,
    'count': 0
};

var out = inmap( arr, sum, context );
// returns [ 1, 2, 3, 4 ]

var mean = context.sum / context.count;
// returns 2.5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).

-   The function differs from [`Array.prototype.map`][mdn-array-map] in the following ways:

    -   The function returns the input `collection`.

    -   The function modifies `collection` elements in-place.

    -   The function does **not** skip `undefined` elements.

        <!-- eslint-disable no-sparse-arrays, stdlib/doctest-marker -->

        ```javascript
        function log( value, index ) {
            console.log( '%s: %s', index, value );
            return value;
        }

        var arr = [ 1, , , 4 ];

        var out = inmap( arr, log );
        /* =>
            0: 1
            1: undefined
            2: undefined
            3: 4
        */
        ```

    -   The function provides limited support for dynamic collections (i.e., collections whose `length` changes during execution).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isEven = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-even' ).isPrimitive;
import inmap from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-inmap@deno/mod.js';

var bool;
var arr;
var out;
var i;

function scale( value, index, collection ) {
    if ( isEven( index ) ) {
        collection.shift();
    } else {
        collection.push( index+1 );
    }
    return value * index;
}

arr = new Array( 100 );
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = i;
}
out = inmap( arr, scale );

bool = ( out === arr );
console.log( bool );

console.log( out );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-for-each`][@stdlib/utils/for-each]</span><span class="delimiter">: </span><span class="description">invoke a function for each element in a collection.</span>
-   <span class="package-name">[`@stdlib/utils-inmap-right`][@stdlib/utils/inmap-right]</span><span class="delimiter">: </span><span class="description">invoke a function for each element in a collection and update the collection in-place, iterating from right to left.</span>
-   <span class="package-name">[`@stdlib/utils-map`][@stdlib/utils/map]</span><span class="delimiter">: </span><span class="description">apply a function to each element in an array and assign the result to an element in an output array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-inmap.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-inmap

[test-image]: https://github.com/stdlib-js/utils-inmap/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/utils-inmap/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-inmap/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-inmap?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-inmap.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-inmap/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-inmap/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-inmap/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-inmap/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-inmap/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-inmap/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-inmap/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-inmap/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-inmap/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

[mdn-array-map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

<!-- <related-links> -->

[@stdlib/utils/for-each]: https://github.com/stdlib-js/utils-for-each/tree/deno

[@stdlib/utils/inmap-right]: https://github.com/stdlib-js/utils-inmap-right/tree/deno

[@stdlib/utils/map]: https://github.com/stdlib-js/utils-map/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
