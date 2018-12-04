function AdversaryGrid() {

    const CHIPS = [5,4,3,2,2];

    this.field = new Array();
    
    this.setupGrid = function() {
        
        // initialize the grid with void squares
        for (var i = 0 ; i < 10 ; i++) {
            for (var j = 0 ; j < 10 ; j++) {
                this.field[i][j] = "void";
            }
        }
    }

    this.updateGrid = function(move, result) {

        coords = convertMoveToCoords(move);
        if (coords === null) { 
            return null; 
        };
        if (result === "HIT") {
            this.field[coords[0]][coords[1]] = "stolen";
        } else {
            this.field[coords[0]][coords[1]] = "miss";
        }
    }

    this.convertMoveToCoords = function(move) {
        if (move.length != 2) {
            return null;
        }
        var x;
        var y;
        row = move.charAt[0];
        if (row === "A") {
            x = 0;
        } else if (row === "B") {
            x = 1;
        } else if (row === "C") {
            x = 2;
        } else if (row === "D") {
            x = 3;
        } else if (row === "E") {
            x = 4;
        } else if (row === "F") {
            x = 5;
        } else if (row === "G") {
            x = 6;
        } else if (row === "H") {
            x = 7;
        } else if (row === "I") {
            x = 8;
        } else if (row === "J") {
            x = 8;
        };
        y = parseInt(move.charAt[1]);
        var returnArray = new Array();
        returnArray[0] = x;
        returnArray[1] = y;
        return returnArray;
    }

    this.numberOfHits = function() {
        var counter = 0;
        for (var i = 0 ; i < 10 ; i++) {
            for (var j = 0 ; j < 10 ; j++) {
                if (this.field[i][j] === "stolen") {
                    counter++;
                }
            }
        }
        return counter;
    }
    
}