$(function () {

    $(".consume").on("click", function (event) {
        let id = $(this).data("id");

        let hasBeenEaten = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: hasBeenEaten
        }).then(
            function () {
                console.log("nom nom nom", hasBeenEaten);

                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burg").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("new burger added");
                location.reload();
            }
        );
    });



});