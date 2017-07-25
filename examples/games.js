var StattleshipAPI = require('../index');

var stattleship = new StattleshipAPI('');

var params = {
  status: 'ended',
  since: 'yesterday',
};

stattleship.games('basketball', 'nba', params).then(function(games) {
  games.forEach(function(element, index, array) {
    console.log(element);
  });
});
