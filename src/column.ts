import pads from 'pads';
import stripAnsi from 'strip-ansi';
import type { ColumnOptions } from './types.js';

/**
 * Generate columns from given columns.
 *
 * @param {[][]} columns Columns.
 * @param {ColumnOptions | ColumnOptions[]} options Assing options for each column or for all columns.
 * @returns {string} Generated columns.
 *
 * @example
 * ```ts
 * import { column } from 'minicolumns';
 *
 * column([
 *     ['abc', '123456789', 'foo'],     // first column
 *     ['abcdefghij', '123456', 'baz'], // second column
 *     ['abcdef', '123', 'foobar']      // third column
 * ]);
 *
 * // abc        abcdefghij  abcdef
 * // 123456789  123456      123
 * // foo        baz         foobar
 * ```
 */
function column<T>(columns: T[][], options?: ColumnOptions | ColumnOptions[]): string {
    const rows: string[][] = [];

    for (let i = 0; i < columns.length; i++) {
        const maxlen = Math.max(...columns[i].map(item => stripAnsi(String(item)).length));
        const { separator, align }: ColumnOptions = { separator: '  ', align: 'left', ...(Array.isArray(options) ? options[i] : options) };

        for (let j = 0; j < columns[i].length; j++) {
            const row = String(columns[i][j]);

            if (!rows[j]) rows[j] = [];
            rows[j][i] = pads(row, maxlen - stripAnsi(row).length, align, { reverseAlignment: true });

            // add separator if it's not the last column
            if (i !== columns.length - 1) {
                rows[j][i] += separator;
            } else {
                // remove trailing spaces from the last column
                rows[j][i] = rows[j][i].trimEnd();
            }
        }
    }

    return rows.map(row => row.join('')).join('\n');
}

export { column };