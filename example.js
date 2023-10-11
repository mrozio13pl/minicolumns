/* eslint-disable */
const { column, row } = require('./dist');

console.log(
    column([
        ['index.js', 'utils/time.js'],
        ['33.5 kB', '745 B']
    ])
);

console.log(
    column([
        ['abc', '123456789', 'foo'],
        ['abcdefghij', '123456', 'baz'],
        ['abcdef', '123', 'foobar']
    ])
);

console.log(
    row([
        ['id', 'name'],
        [1, 'zxcvbn'],
        [2, 'foo'],
        [3, 'test']
    ])
);

console.log(
    column([
        ['index.js', 'index.min.js', 'index.d.ts'],
        ['39.1 kB', '12.7 kB', '1.5 kB'],
        ['107 ms', '232 ms', '90 µs']
    ], [{ separator: ' - ', align: 'right' }, { separator: ' | ' }])
);

console.log(
    column([
        ['index.js', 'index.min.js', 'index.d.ts'],
        ['39.1 kB', '12.7 kB', '1.5 kB'],
        ['107 ms', '232 ms', '90 µs']
    ], { separator: ' | ' })
);