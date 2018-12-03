function GameState(View, StatusBar, socket) {

    this.playerGrid = new Grid();
    this.adversaryGrid = new Grid();

    this.initialize = function() {
        // If player 1 then enable adversary grid
        // (player 1 gets to start)
    }

    this.whoWon = function() {

    }

    this.playerHasLost = function(socket) {

    }

    this.playerShotResult = function(socket) {
        // function called by server to give feedback on player move
    }

    this.advShotResult = function(socket) {
        // function called after adversary move received
    }

    this.playerMove = function(socket) {
        // function called to send move to server
        // disables adversary grid
    }

    this.advMove = function(socket) {
        // function called by server to update adv move
        // enable adversary grid
    }
    
    this.numberOfHits = function(socket) {
        // function called by server to get update on number of hits (anti-cheat)
    }








}