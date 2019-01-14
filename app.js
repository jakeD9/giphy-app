$(document).ready(function() {
    // original array
    var topics = ["Pulp Fiction", "Clint Eastwood", "Dank Memes", "Post Malone", "Idiot", "Yes", "No"];

    // render buttons to the page
    function renderButtons() {
        $("#buttons").empty();

        // loop thru array of topics and make buttons
        for (var i=0; i < topics.length; i++) {
            var a = $("<button>");
            a.addClass("topic");
            a.attr("data-name", topics[i]);
            a.text(movies[i]);
            $("#buttons").append(a);
        }
    }

    // when submit button is clicked
    $("#submit").on("click", function(event) {
        event.preventDefault();
        var topic = $("#manual-input").val().trim();
        topoics.push(topic);
        renderButtons();
    })
});

renderButtons();