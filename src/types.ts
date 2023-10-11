import type { PaddingAlignment } from 'pads';

/**
 * Options to style columns.
 * It can be an array of options to style each column separately
 * or a single object to style all columns.
 *
 * @example
 * ```ts
 * import { column } from 'minicolumns';
 *
 * // style each column separately
 * column([
 *      // ...
 * ], [
 *      { separator: ' - ', align: 'right' }, // first column
 *      { separator: ' | ' }                  // second column
 * ]);
 *
 * // or all of them
 * column([
 *      // ...
 * ], { separator: ' | ' });
 * ```
 */
export declare interface ColumnOptions {
    /**
     * Alignment of rows in column.
     */
    align?: PaddingAlignment;
    /**
     * Column seperator.
     */
    separator?: string;
}