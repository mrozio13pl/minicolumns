# 🧩 minicolumns

Create simple text columns.

## Install

```
npm i minicolumns
```

## Usage

```ts
import { column } from 'minicolumns';

column([
    ['index.js', 'utils/time.js'],
    ['33.5 kB', '745 B']
])
```

```
index.js       33.5 kB
utils/time.js  745 B
```

## API

### `column(columns, options?)`

Generate columns from given columns.

```ts
import { column } from 'minicolumns';

column([
    ['abc', '123456789', 'foo'],     // first column
    ['abcdefghij', '123456', 'baz'], // second column
    ['abcdef', '123', 'foobar']      // third column
], /* options */ );
```

Returns:

```
abc        abcdefghij  abcdef
123456789  123456      123
foo        baz         foobar
```

### `row(rows, options?)`

Generate columns from given rows.

```ts
import { row } from 'minicolumns';

row([
    ['id', 'name'], // first row
    [1, 'zxcvbn'],  // second row
    [2, 'foo'],     // third row
    [3, 'test']     // fourth row
], /* options */ );
```

Returns:

```
id  name
1   zxcvbn
2   foo
3   test
```

### `options`

- `align` **{String}** - Aligns a column (`left`, `center`, `right`). Default is `left`.
- `separator` **{String}** - Column seperator. Default is `  ` (double-space).

It can be an array of options to style each column separately...

```ts
import { column } from 'minicolumns';

column([
    ['index.js', 'index.min.js', 'index.d.ts'],
    ['39.1 kB', '12.7 kB', '1.5 kB'],
    ['107 ms', '232 ms', '90 µs']
], [
    { separator: ' - ', align: 'right' }, // first column
    { separator: ' | ' }                  // second column
])
```

```
    index.js - 39.1 kB | 107 ms
index.min.js - 12.7 kB | 232 ms
  index.d.ts - 1.5 kB  | 90 µs
```

...or a single object to style all columns.

```ts
import { column } from 'minicolumns';

column([
    ['index.js', 'index.min.js', 'index.d.ts'],
    ['39.1 kB', '12.7 kB', '1.5 kB'],
    ['107 ms', '232 ms', '90 µs']
], { separator: ' | ' })
```

```
index.js     | 39.1 kB | 107 ms
index.min.js | 12.7 kB | 232 ms
index.d.ts   | 1.5 kB  | 90 µs
```

## Roadmap

- [ ] Expand options
- [ ] Headers
- [ ] More...

## License

MIT <3