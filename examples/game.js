var StattleshipAPI = require('../index');

var stattleship = new StattleshipAPI('YOUR_TOKEN');

var params = {
  game_id: 'nba-2016-2017-ny-mia-2017-03-31-2000'
};

stattleship.game('basketball', 'nba', params).then(function(games) {
  games.forEach(function(element, index, array) {
    console.log(element.slug);
    console.log(element.label);
    console.log(element.name);
    console.log(element.scoreline);
    console.log(element.status);
  });
});
