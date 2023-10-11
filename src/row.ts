import { column } from './column';
import type { ColumnOptions } from './types';

/**
 * Generate columns from given rows.
 *
 * @param {[][]} rows Rows.
 * @param {ColumnOptions | ColumnOptions[]} options Assing options for each column or for all columns.
 * @returns {string} Generated columns.
 *
 * @example
 * ```ts
 * import { row } from 'minicolumns';
 *
 * row([
 *     ['id', 'name'], // first row
 *     [1, 'zxcvbn'],  // second row
 *     [2, 'foo'],     // third row
 *     [3, 'test']     // fourth row
 * ]);
 *
 * // id  name
 * // 1   zxcvbn
 * // 2   foo
 * // 3   test
 * ```
 */
function row<T>(rows: T[][], options?: ColumnOptions | ColumnOptions[]): string {
    const columns = rows[0].map((_, col) => rows.map(row => row[col]));
    return column(columns, options);
}

export { row };