///////////////////////////////////Code Started///////////////////////////////////////

//  Created variables : drumImg, drum, pianoImg, piano, brassImg, brass, guitarImg, guitar
var drumImg, drum, pianoImg, piano, brassImg, brass, guitarImg, guitar

//Created variables : handImg, hand, canvas
var handImg, hand, canvas

//Created variables : startImg, start, stopImg, stop
var startImg, start, stopImg, stop

//Created a variable SERVE and set it's value as 0
var SERVE = 0

//Created a variable PLAY and set it's value as 1
var PLAY = 1

//Created a variable gameState and set it's value as SERVE
var gameState = SERVE

//Created variable edges
var edges

//Created variables : brassSound, pianoSound, guitarSound, drumSound
var brassSound, pianoSound, guitarSound, drumSound

///////////////////////////////////Preload Function Started/////////////////////////////////////

//Images and Sounds Storage pre-defined function
function preload() {

    //Loaded an image "hand.png" under handImg
    handImg = loadImage("hand.png")

    //Loaded an image "drum.png" under drumImg
    drumImg = loadImage("drum.png")

    //Loaded an image "piano.png" under pianoImg
    pianoImg = loadImage("piano.png")

    //Loaded an image "brass.png" under brassImg
    brassImg = loadImage("brass.png")

    //Loaded an image "guitar.png" under guitarImg
    guitarImg = loadImage("guitar.png")

    //Loaded an image "start.png" under startImg
    startImg = loadImage("start.png")

    //Loaded an image "stopSound".png" under stopImg
    stopImg = loadImage("stopSound.png")

    //Loaded a sound  "brassSound.wav" under brassSound
    brassSound = loadSound("brassSound.wav")

    //Loaded a sound  "pianoSound.wav" under pianoSound
    pianoSound = loadSound("pianoSound.wav")

    //Loaded a sound  "guitarBeat".wav" under guitarSound
    guitarSound = loadSound("guitarBeat.wav")

    //Loaded a sound  "drumBeat.wav" under drumSound
    drumSound = loadSound("drumBeat.wav")

}

//////////////////////////////////Preload Function Ended//////////////////////////////
/////////////////////////////////Setup Function Started//////////////////////////////

//Pre-defined function : (setup)
function setup() {

    //Created a canvas with window's width and height
    canvas = createCanvas(windowWidth, windowHeight)

    //Created a sprite drum with (X-position,Y-position,Width,Height) coordinates
    drum = createSprite(150, 630, 20, 20)

    //Added an image drumImg under drum
    drum.addImage("drum_play", drumImg)

    //Resize the image under drum using scale property
    drum.scale = 0.6

    //Created a sprite piano with (X-position,Y-position,Width,Height) coordinates
    piano = createSprite(drum.width + 100, 630, 20, 20)

    //Added an image pianoImg under piano
    piano.addImage("piano_play", pianoImg)

    //Resize the image under piano using scale property
    piano.scale = 0.6

    //Created a sprite brass with (X-position,Y-position,Width,Height) coordinates
    brass = createSprite(piano.width + 500, 630, 20, 20)

    //Added an image brassImg under brass
    brass.addImage("brass_play", brassImg)

    //Resize the image under brass using scale property
    brass.scale = 0.6

    //Created a sprite guitar with (X-position,Y-position,Width,Height) coordinates
    guitar = createSprite(brass.width + 900, 540, 20, 20)

    //Added an image guitarImg under guitar
    guitar.addImage("guitar_play", guitarImg)

    //Resize the image under guitar using scale property
    guitar.scale = 0.6

    //Created a sprite start with (X-position,Y-position,Width,Height) coordinates
    start = createSprite(750, 465, 20, 20)

    //Added an image startImg under start
    start.addImage("startButton", startImg)

    //Resize the image under start using scale property
    start.scale = 0.6

    //Created a sprite hand with (X-position,Y-position,Width,Height) coordinates
    hand = createSprite(random(20, 750), 100, 40, 40)

    //Added an image handImg under hand
    hand.addImage("pressed_hand", handImg)

    //Set velocityX of hand as 4 (right-side)
    hand.velocityX = 4

    //Set velocityY of hand as 5 (down-side)
    hand.velocityY = 5
    //Velocity set of hand as diagonal down-right side

    //Resize the image under hand using scale property
    hand.scale = 0.3

    //Set visiblity of hand as false
    hand.visible = false

    //Created a sprite stop with (X-position,Y-position,Width,Height) coordinates
    stop = createSprite(750, 200, 20, 20)

    //Added an image stopImg under stop 
    stop.addImage("stop_sound", stopImg)

    //Resize the image under stop using scale property  
    stop.scale = 0.6

    //Set visiblity of stop as false
    stop.visible = false

    //Set hand's depth equal to stop's depth
    hand.depth = stop.depth

    //Increased hand's depth by 1 or hand's depth will be greater than stop's depth always by 1
    hand.depth = hand.depth + 1

}

/////////////////////////////////////////Setup Function Ended//////////////////////////////////////////
////////////////////////////////////////Draw Function Started/////////////////////////////////////////

//Pre-defined function- draw ( repeats every command written inside)
function draw() {

    //Set background color of canvas as "grey"
    background("grey")

    //Created EdgeSprites() inside edges
    edges = createEdgeSprites()

    //As and when hand will touch edges it will bounce off
    hand.bounceOff(edges)

    //Set a condition if gameState is equal to SERVE
    if (gameState == SERVE) {

        //Set visiblity of start as true
        start.visible = true

        //Set text's color ad "red"
        fill("red")

        //set text's size as 100 pixels
        textSize(100)

        //Set text's outline as "blue"
        stroke("blue")

        //Set text's outline weight as  30
        strokeWeight(30)

        //Set text's family (style) as "Comic Sans Ms"
        textFont("Comic Sans Ms")

        //Set text as "Music Insrtuments" with X-position: 300 and Y-position: (height of canvas)/2
        text("Music Instruments", 300, height / 2)

        //Set visiblity of stop as false
        stop.visible = false

        //Set visiblity of hand as false
        hand.visible = false

        //Set hand's Y-position as 100
        hand.y = 100
    }

    //Set a condition if mouse is pressed over start and gameState is equal to SERVE
    if (mousePressedOver(start) && gameState == SERVE) {

        //Set visiblity of start as false
        start.visible = false

        //Assigned gameState's value as PLAY
        gameState = PLAY

    }

    //Set a condition if gameState is equal to PLAY
    if (gameState == PLAY) {

        //Set visiblity of hand as true
        hand.visible = true

        //Set visiblity of stop as true
        stop.visible = true

        //Set a condition if hand isTouching brass
        if (hand.isTouching(brass)) {

            //Play the sound brassSound
            brassSound.play()

            //As soon as hand will touch brass it will bounce off
            hand.bounceOff(brass)

        }

        //Set a condition if hand isTouching piano
        if (hand.isTouching(piano)) {

            //As soon as hand will touch piano it will bounce off
            hand.bounceOff(piano)

            //Play the sound pianoSound 
            pianoSound.play()

        }

        //Set a condition if hand isTouching drum
        if (hand.isTouching(drum)) {

            //As soon as hand will touch drum it will bounce off
            hand.bounceOff(drum)

            //Play the sound drumSound 
            drumSound.play()

        }

        //Set a condition if hand isTouching guitar
        if (hand.isTouching(guitar)) {

            //As soon as hand will touch guitar it will bounce off
            hand.bounceOff(guitar)

            //Play the sound guitarSound  
            guitarSound.play()

        }

        //Set a condition if mouse is pressed over stop and gameState is equal to PLAY
        if (mousePressedOver(stop) && gameState == PLAY) {

            //Stop the sound brassSound   
            brassSound.stop()

            //Stop the sound guitarSound   
            guitarSound.stop()

            //Stop the sound pianoSound   
            pianoSound.stop()

            //Stop the sound drumSound   
            drumSound.stop()

            //Returned the gameState value to SERVE
            gameState = SERVE

            //Set visiblity of start as true
            start.visible = true

        }

    }

    //Added a function drawSprites() will draw the sprites again and again as there in function draw()
    drawSprites();

}

//////////////////////////////////////////Draw Function Ended/////////////////////////////////////////////

/////////////////////////////////////////Code Ended//////////////////////////////////////////////////////
