$(window).on("load", function () {

    // Create Flickity carousel variable
    const $carousel = $('.carousel').flickity();

    // Round edges
    // Gold text shadow around Funky Heroes display text ?
    // Need global music player function (pass url)
    // Need health bars, character name divs, and scrolling "story" text to complete style
    // Make dialogue box border look like jumbotron display text (multiple lines)

    // Character Class
    // Properties:
    // Health Points
    // Base attack power
    // Current attack (initialized based on base attack power, increases with attack method)
    // Counter attack power
    // Song url
    // Image url
    // Is it an enemy or the player character?
    // Methods:
    // beAttacked -> Function to pass to another character object when being attacked
    // attack -> Function that accepts another character object and attacks them using their beAttacked()
    //      then increases attack power and adds dialogue element to dialogue box based on 
    //      whether or not it is an enemy or the player character

    // Character object takes a name (string name) , a base health (int health), a base attack(int baseAttack), 
    // a base counter attack (int counterAttack), the url for song to be played while fighting (string songUrl),
    // the url for the character's image (string imgUrl), and whether or not the character is an enemy or not (bool enemyOrNot)
    // This Character object is super stateful and probably bad practice... Esp. not knowing OOP in JS as well
    // as I should. Violates encapsulation, not truly OOP. Can refactor later...
    function Character (name, health, baseAttack, counterAttack, songUrl, imageUrl, enemyOrNot) {
        // Initialize properties
        this.name = name; this.health = health; this.baseAttack = baseAttack;
        this.counterAttack = counterAttack; this.songUrl = songUrl; 
        this.imageUrl = imageUrl; this.enemyOrNot = enemyOrNot; this.currentAttack = baseAttack;

        // beAttacked() method decreases health by given integer value
        this.beAttacked = function (attackPower) {
            this.health -= attackPower;
        };

        // attack() method takes another Character object's beAttacked method
        this.attack = function (enemy) {
            // Call enemy's beAttacked() method and pass base attack
            enemy.beAttacked(this.currentAttack);

            // double the base attack
            this.currentAttack += this.baseAttack;
        };

        // generateElement() method returns a new html element to add to Flickity carousel or 
        // Bootstrap card based on the Character's properties. String parameter flickityOrCard
        // expects "flickity" or "card" string to determine whether or not it will return an
        // element for the flickity carousel or the Bootstrap card in the stage
        this.generateElement = function () {
            let charElement = $(`<div class="carousel-cell my-2 mx-2" id="></div>`);
            charElement.append($(`<img class="charImgsrc="` + this.imageUrl + `" alt`))
            console.log(charElement);
            return charElement;
        };

        // isEnemy() method is a setter method to make the Character object an enemy
        // (enemyOrNot is true)
        this.isEnemy = function () {
            this.enemyOrNot = true;
        }

        // isCharacter() method is a setter method to make the Character object the player character
        // (enemyOrNot is false)
        this.isPlayerCharacter = function () {
            this.enemyOrNot = false;
        }

    }

    var charTest = new Character("Fred", 100, 6, 20, "www.nothing.com", "www.otherNothing.com", true);

    // Game progresses through 3 states: Character Select, In-game, Win/Loss 

    // Character Select is initial page state (Base page upon window.onload()) 

    // In-game contained in runGame()

    // Win/Loss to be window state once runGame() finishes execution

    // Since initial page state is Character Select, location.reload() makes sense to restart game (Play Again? button executes location.reload())

// GAME PROCESS

    // On window load, generate an array of Character objects to hold the roster
    const roster = [];

    // runGame()
    //      runGame() starts on character select button press
    function runGame () {
        // Remove .is-selected character from flickity carousel

        // Use that element and corresponding character object to stage the player character
        
        // Set all characters not player character, 

        // Pop first non-player character and use element and object to populate the enemy section of stage

        // Begin attack functionality:
            // Call attack on ATTACK button click, as
            // Display dialogue
            // Enemy auto attack in response

        // Go through all characters in carousel
        // Upon defeating the last one, display win state

        // Display loss message if hp drops to zero
    }


    // Function declarations

    



    // Event listeners and hooks

    // Character Select confirm / Game Runner
     $(`#chooseCharButton`).click(function () {
        $('.collapse').collapse();
        runGame();
    });

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

    // Add flickity listener to change #charNameDisplay to display selected character's name
    
// TEMPORARY
    // Temp helper to delete enemies. Delete's character by 
        $(`#deleteEnemy`).click(function () {
        let element = $(`#billy`).get();
        console.log(element);
        $carousel.flickity('remove', $(`#billy`).get(0));
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

    // Flexible feature test button
    $(`#testButton`).click(function () {
        console.log(charTest);
        charTest.generateElement();
        $(`#tempStorage`).append(charTest.generateElement());
    });


// END TEMPORARY



    // Game logic run


});