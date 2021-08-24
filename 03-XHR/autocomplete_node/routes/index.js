let express = require('express');
let router = express.Router();
let fs = require('fs');
let path = require('path');

let COUNTRIES_PATH = path.join(__dirname, '../data/countries.json');

router.get('/', function(_req, res, _next) {
  res.render('index', { title: 'Autocomplete!' });
});

router.get('/countries', function(req, res, _next) {
  let query = req.query.matching.toLowerCase() || '';
  let searchResults = searchCountry(query);
  res.json(searchResults);
});

function searchCountry(query) {
  if (query.length === 0) return [];
  return countries().filter(function(country) {
    return nameStartsWith(country, query);
  }).slice(0, 20);
}

function countries() {
  let file = fs.readFileSync(COUNTRIES_PATH, 'utf8');
  return JSON.parse(file);
}

function nameStartsWith(country, characters) {
  return country['name'].toLowerCase().startsWith(characters);
}

module.exports = router;
