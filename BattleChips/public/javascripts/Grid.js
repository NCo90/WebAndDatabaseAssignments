function Grid(player) {

    const CHIPS = [5,4,3,2,2];

    this.field = new Array();
    
    this.setupGrid = function() {
        
        // initialize the grid with void squares
        for (var i = 0 ; i < 10 ; i++) {
            for (var j = 0 ; j < 10 ; j++) {
                this.field[i][j] = "void";
            }
        }
        
        // if the grid is the Player's then we randomly add chips
        if (player === "Player") {
            for (var i = 0 ; i < CHIPSlength ; i++) {
            // will chips be stored horizontally or vertically: 0 is horizontal, 1 is vertical      
                var horOrVert = Math.floor(Math.random() + 0.5);
                var startX = Math.floor(Math.random() * (10 - (1 - horOrVert) * CHIPS[i]));
                var startY = Math.floor(Math.random() * (10 - horOrVert * CHIPS[i]));
                for (var j = 0 ; j < CHIPS[i] ; j++) {
                    this.field[startX + j * (1 - horOrVert)][startY + j * horOrVert] = "safe";                
                }
            }
        }
    }

    this.updateGrid = function(move) {

        coords = convertMoveToCoords(move);
        if (coords === null) { 
            return null; 
        };
        if (this.field[coords[0]][coords[1]] === "safe") {
            this.field[coords[0]][coords[1]] = "stoled";
            return "HIT";
        } else if (this.field[coords[0]][coords[1]] === "void"){
            this.field[coords[0]][coords[1]] = "miss";
            return "MISS";
        }
        return "MISS";
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

    this.processMove = function(move) {
        result = this.updateGrid(move);
        return result;
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

    // add even listener to adversary board
    
    
}