# date-in-utc

> Convert date with UTC offset


## Install

```
$ yarn add date-in-utc
```


## Usage

```js
const dateInUtc = require('date-in-utc');

dateInUtc(0, new Date('2018-4-25 18:30')).toLocaleString();
//=> '2018-4-25 12:30:00'

dateInUtc(5.5, new Date('2018-4-25 18:30')).toLocaleString();
//=> '2018-4-25 18:00:00'

dateInUtc(-12, new Date('2018-4-25 18:30')).toLocaleString();
//=> '2018-4-25 00:30:00'
```

## API

### dateInUtc(utcOffset, date)

## License

MIT © Joynal Abedin
