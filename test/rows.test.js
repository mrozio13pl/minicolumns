const { suite } = require('uvu');
const { is } = require('uvu/assert');
const { row } = require('../dist');

const test = suite('rows');

test('formatting rows without options', () => {
    const rows = [['A', '1'], ['B', '2']];
    const expected = 'A  1\nB  2';
    is(row(rows), expected);
});

test('formatting rows with options', () => {
    const rows = [['A', '1'], ['B', '2']];
    const options = { separator: ' | ', align: 'right' };
    const expected = 'A | 1\nB | 2';
    is(row(rows, options), expected);
});

test('formatting rows with ansi', () => {
    const rows = [['\x1b[32mGreen\x1b[0m', 'empty', 'footer'], ['1', '2', '3']];
    const options = { separator: ' | ' };
    const expected = '\x1b[32mGreen\x1b[0m | empty  footer\n1     | 2      3';
    is(row(rows, [options]), expected);
});

test.run();