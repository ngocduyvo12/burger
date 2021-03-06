//logic
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    $(".change-devour").on("click", function (event) {

        var id = $(this).data("id");
        var newState = $(this).data("newstate");
        var name = $(this).val();

        var newDevourState = {
            state: newState
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed devour state to", newState);
                // Reload the page to get the updated list
                  location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        //new burger variable for assigning name object
        var newBurger = {
            name: $("#burger").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


});
  