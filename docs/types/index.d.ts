/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/array';

/**
* Returns an updated collection element.
*
* @returns updated element
*/
type Nullary<T, U> = ( this: U ) => T;

/**
*Returns an updated collection element.
*
* @param value - collection value
* @returns updated element
*/
type Unary<T, U> = ( this: U, value: T ) => T;

/**
* Returns an updated collection element.
*
* @param value - collection value
* @param index - collection index
* @returns updated element
*/
type Binary<T, U> = ( this: U, value: T, index: number ) => T;

/**
* Returns an updated collection element.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @returns updated element
*/
type Ternary<T, U> = ( this: U, value: T, index: number, collection: Collection<T> ) => T;

/**
* Returns an updated collection element.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @returns updated element
*/
type Callback<T, U> = Nullary<T, U> | Unary<T, U> | Binary<T, U> | Ternary<T, U>;

/**
* Invokes a function once for each element in a collection and updates the collection in-place.
*
* ## Notes
*
* -   The invoked function's return value is cached prior to updating a collection. Before updating the collection, a collection must be inspected to ensure that a collection has not been resized during invocation such that an index no longer has a corresponding element in the collection. Were a return value automatically used to update a collection, an input collection could be converted into a sparse data structure. While some might consider this a feature, here, we take stance that a user should be less clever.
*
* @param collection - input collection
* @param fcn - function to invoke
* @param thisArg - execution context
* @returns input collection
*
* @example
* function scale( value, index, collection ) {
*     return value * index;
* }
*
* var arr = [ 1, 2, 3, 4 ];
*
* var out = inmap( arr, scale );
* // returns [ 0, 2, 6, 12 ]
*
* var bool = ( out === arr );
* // returns true
*/
declare function inmap<T = unknown, U = unknown>( collection: Collection<T>, fcn: Callback<T, U>, thisArg?: ThisParameterType<Callback<T, U>> ): Collection<T>;


// EXPORTS //

export = inmap;
