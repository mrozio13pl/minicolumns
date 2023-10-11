const { suite } = require('uvu');
const { is } = require('uvu/assert');
const { column } = require('../dist');

const test = suite('columns');

test('formatting columns without options', () => {
    const columns = [['A', 'B'], ['1', '2']];
    const expected = 'A  1\nB  2';
    is(column(columns), expected);
});

test('formatting columns with options', () => {
    const columns = [['A', 'B'], ['1', '22']];
    const options = { separator: ' | ', align: 'right' };
    const expected = 'A |  1\nB | 22';
    is(column(columns, options), expected);
});

test('formatting rows with ansi', () => {
    const columns = [['\x1b[32mGreen\x1b[0m', 'empty', 'footer'], ['1', '2', '3']];
    const options = { separator: ' | ' };
    const expected = '\x1b[32mGreen\x1b[0m  | 1\nempty  | 2\nfooter | 3';
    is(column(columns, [options]), expected);
});

test.run();
