var selectionValue;
var currSelection;

// When the number button is clicked.
$(".num-btn").click(function (event) {
    // remove class.
    if (currSelection != null) {
        currSelection.removeClass("btn-select")
    }
    currSelection = $(this);
    // add class to change the color.
    currSelection.addClass("btn-select");
    // change selection to value in the button.
    selectionValue = currSelection.text();
    $(".selection").text("You selected " + selectionValue + " out of 5");
})

$(".sub-btn").click(function (event) {
    if (selectionValue != null) {
        $(".ask-card").hide();
        $(".thank-card").show();
    }
})