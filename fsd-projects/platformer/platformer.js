$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
//createPlatform(xPos, yPos, Width, Height)
createPlatform(400, 600, 10, 5, "white")
createPlatform(200, 700, 10, 5, "white")
createPlatform(500, 500, 15, 5, "white")
createPlatform(500, 400, 10, 5, "white")
createPlatform(200, 400, 10, 5, "white")
createPlatform(100, 300, 50, 5, "white")
    // TODO 3 - Create Collectables
//createCollectables("type", xPos, yPos, gravity?, bounce?, minX = null, maxX = null, speed = 1)
//"type" can be 6 things . . . database diamond grace kennedi max steve
createCollectable("database", 100, 200)
    
    // TODO 4 - Create Cannons
//createCannon("wall", pos, secondsX1000, width, height)
createCannon("right", 400, 1000, 25, 25)
createCannon("right", 700, 2000, 25, 25)   
createCannon("top", 400, 2000, 25, 25)    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
