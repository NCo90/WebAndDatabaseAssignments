$(document).ready(function() {

    $(".advBoardField").click(function() {
        console.log("Click on: " + $(this).attr('id'));
        $(this).css('background-color', 'red');
        // send message to serer with attr('id')
    });
}
