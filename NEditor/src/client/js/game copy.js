
        var autoPlay = false;
    
        var uuid = 'new';
        var fork = '';
        var gameWidth = '800';
        var gameHeight = '600';
    
        var code = [ 
            "function preload() {\n\
    \n\
        game.stage.backgroundColor = '#85b5e1';\n\
    \n\
        game.load.baseURL = 'http://examples.phaser.io/assets/';\n\
        game.load.crossOrigin = 'anonymous';\n\
    \n\
        game.load.image('player', 'sprites/phaser-dude.png');\n\
        game.load.image('platform', 'sprites/platform.png');\n\
    \n\
    }", 
            "var player;\n\
    var platforms;\n\
    var cursors;\n\
    var jumpButton;\n\
    \n\
    function create() {\n\
    \n\
        player = game.add.sprite(100, 200, 'player');\n\
    \n\
        game.physics.arcade.enable(player);\n\
    \n\
        player.body.collideWorldBounds = true;\n\
        player.body.gravity.y = 500;\n\
    \n\
        platforms = game.add.physicsGroup();\n\
    \n\
        platforms.create(500, 150, 'platform');\n\
        platforms.create(-200, 300, 'platform');\n\
        platforms.create(400, 450, 'platform');\n\
    \n\
        platforms.setAll('body.immovable', true);\n\
    \n\
        cursors = game.input.keyboard.createCursorKeys();\n\
        jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);\n\
    \n\
    }", 
            "function update () {\n\
    \n\
        game.physics.arcade.collide(player, platforms);\n\
    \n\
        player.body.velocity.x = 0;\n\
    \n\
        if (cursors.left.isDown)\n\
        {\n\
            player.body.velocity.x = -250;\n\
        }\n\
        else if (cursors.right.isDown)\n\
        {\n\
            player.body.velocity.x = 250;\n\
        }\n\
    \n\
        if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))\n\
        {\n\
            player.body.velocity.y = -400;\n\
        }\n\
    }", 
            "function render () {\n\
    \n\
    }"
        ];