var StattleshipAPI = require('../index');

var stattleship = new StattleshipAPI('0d742c11259a1a7f1038c0a5506a948e');

var params = {
  status: 'ended',
  since: 'yesterday',
};

stattleship.games('basketball', 'nba', params).then(function(games) {
  games.forEach(function(element, index, array) {
    console.log(element);
  });
});
