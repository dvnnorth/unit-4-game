$(window).on("load", function () {

    // Function declarations

    



    // Event listeners and hooks

    // Initialize flickity carousel (character select)
    $(`.main-carousel`).flickity({
        // options
        cellAlign: `center`,
        draggable: false,
        contain: true,
        wrapAround: false,
        pageDots: false,
        contain: true,
        cellSelector: `.carousel-cell`
    });
    
// TEMPORARY
    // Temp helper to delete enemies
    $(`#deleteEnemy`).click(function () {
        $carousel.flickity(`remove`, elements)
    });

    // Change Flickity options on stage prep button press
    $(`#changeStage`).click(function () {
        $(`.main-carousel`).flickity({
            // Options
            cellAlign: `left`,
            draggable: false,
            contain: true,
            wrapAround: false,
            pageDots: false,
            contain: true,
            cellSelector: `.carousel-cell`,
            prevNextButtons: false
        });

        $(`.is-selected`).removeClass(".is-selected");
    });

    // Reload page button
    $(`#reload`).click(function () {
        location.reload();
    });


// END TEMPORARY



    // Game logic run


});