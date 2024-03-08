const team = {
    _players: [],
    _games: [],
  
    get players() {
      return this._players;
    },
  
    get games() {
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName, newAge) {
      const newPlayer = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
  
      this._players.push(newPlayer);
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      const newGame = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
  
      this._games.push(newGame);
    }
  };
  
  team.addPlayer("Pete", "Wheeler", 54);
  team.addPlayer("Mark", "Jones", 42);
  team.addPlayer("Lisa", "Smith", 35);
  
  console.log(team.players);
  
  team.addGame("Titans", 100, 98);
  
  console.log(team.games);