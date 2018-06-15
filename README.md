# score_parser

##live score parser for World Cup 2018

Just quick port https://github.com/jonhue/tip-the-world-cup/blob/master/app/services/livescore.rb to NodeJS.

###Install:

npm install --save https://github.com/Amitesh/gulp-rev-all/tarball/master

###Usage:

```javascript
const score_parser = require('score_parser');
score_parser('Russia', 'Saudi Arabia').then(console.log);
```

score_parser is promise that resolves with object:
```javascript 
{
  score: {
    home: String,
    away: String,
  },
  finished: Boolean,
}
```


