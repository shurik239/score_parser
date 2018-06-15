const fetch = require('node-fetch');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const parse = (homeName, awayName) => {
  const q = encodeURIComponent(`World Cup ${homeName} vs ${awayName}`);
  const url  = `https://www.google.com/search?q=${q}`;

  return fetch(url)
    .then(res => res.text())
    .then(body => {
      const dom = new JSDOM(Buffer.from(body, "utf-8"));
      const doc = dom.window.document.documentElement;
      const results = doc.querySelectorAll("div.VewdRc div.eb7Tab > div");
      const [home, away] = results[0].textContent.split(' - ');
      const finished = results[1].textContent === 'Final';
      return {
        score: {
          home,
          away,
        },
        finished,
      };
    });
};

module.exports = parse;
