function GameState(View, StatusBar, socket) {

    this.playerGrid = new PlayerGrid();
    this.adversaryGrid = new AdversaryGrid();

    this.initialize = function() {
        // If player 1 then enable adversary grid
        // (player 1 gets to start)
        playerGrid.setupGrid();
        
    }

    this.whoWon = function() {

        if playerGrid.numberOfHits === 18 {
            return "Player";
        } else if adversaryGrid.numberOfHits === 18 {
            return "Adversary";
        } else {
            return void;
        };

    }

    this.playerHasLost = function(socket) {

    }

    this.playerShotResult = function(socket) {
        // function called by server to give feedback on player move
    }

    this.advShotResult = function(socket) {
        // function called after adversary move received
    }

    this.playerMove = function(move, socket) {
        
    }

    this.advMove = function(socket) {
        PlayerGrid
    }
    
    this.numberOfHits = function(socket) {
        // function called by server to get update on number of hits (anti-cheat)
    }








}