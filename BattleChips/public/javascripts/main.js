$(document).ready(function() {

    // playerGrid
    // adversaryGrid

    var gridUpdater = function (gridClass, coords) {
        for (var i = 0 ; i < coords.length ; i++) {
            document.getElementById(coords[i]).classList.add("X");
        }
    }

    //var playerGrid = new PlayerGrid();
    //var  = new AdversaryGrid();

    // server geeft aan of je player 1 of 2 bent
    // en de server stuurt de player's opstelling (in de vorm van array met bezette plaatsen)
    // update van het player scherm via de viewer object
    // player's beurt is player 1
    // while niet game over
    //  if player's beurt
    //  - wacht op click van use
    //  - indien veld nog niet aangeklikt stuur move naar server
    //  - server geeft antwoord hit or miss or game over
    //  - if niet game over
    //  -   update adversary grid met hit/miss
    //  -   disable player grid
    //  if niet player's beurt
    //  - wacht op server bericht
    //  - if niet game over
    //  -   update player grid
    //  -   enable player grid

    var testArray = ["a3", "b4"];
    gridUpdater("playBoardField", testArray);

    $(".advBoardField").click(function() {
        console.log("Click on: " + $(this).attr('id'));
        $(this).css('background-color', 'red');
        // send message to serer with attr('id')
    });
});
