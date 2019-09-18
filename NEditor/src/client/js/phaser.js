var PhaserCommands = [

    //  mode 0 (preload)
    {
        "Loader": {
            "Load Image": "game.load.image('${1:key}', '${2:url}');",
            "Load Texture Atlas": "game.load.atlas('${1:key}', '${2:textureUrl}', '${3:atlasUrl}');",
            "Load Texture Atlas (Array)": "game.load.atlasJSONArray('${1:key}', '${2:textureUrl}', '${3:atlasUrl}');",
            "Load Texture Atlas (XML)": "game.load.atlasXML('${1:key}', '${2:textureUrl}', '${3:atlasUrl}');",
            "Load Sprite Sheet": "game.load.spritesheet('${1:key}', '${2:url}', ${3:frameWidth}, ${4:frameHeight});",
            "Load Audio": "game.load.audio('${1:key}', ['${2:urls}'], ${3:true /* autoDecode*/});",
            "Load Audio Sprite": "game.load.audiosprite('${1:key}', ['${2:urls}'], '${3:jsonURL}');",
            "Load Tilemap": "game.load.tilemap('${1:key}', '${2:url}', null, Phaser.Tilemap.TILED_JSON);",
            "Load CSV Tilemap": "game.load.tilemap('${1:key}', '${2:url}');",
            "Load Bitmap Font": "game.load.bitmapFont('${1:key}', '${2:textureURL}', '${3:xmlURL}');",
            "Load XML": "game.load.xml('${1:key}', '${2:url}');",
            "Load Text": "game.load.text('${1:key}', '${2:url}');",
            "Load JSON": "game.load.json('${1:key}', '${2:url}');",
            "Load Physics Data": "game.load.physics('${1:key}', '${2:url}');",
            "Load JavaScript": "game.load.script('${1:key}', '${2:url}', '${3:callback}', '${4:callbackContext}');",
            "Load Binary File": "game.load.binary('${1:key}', '${2:url}', '${3:callback}', '${4:callbackContext}');",
            "div": "",
            "Set Preload Sprite": "game.load.setPreloadSprite('${1:sprite}');",
            "Set Base URL": "game.load.baseURL = '${1:url}';",
            "Set CrossOrigin": "game.load.crossOrigin = 'anonymous';"

        }
    },

    //  mode 1 (create)
    {
        "GameObjectFactory": {
            "Add Sprite": "game.add.sprite(${1:x}, ${2:y}, '${3:key}', ${4:null} ${5:/* frame */});",
            "Add Image": "game.add.image(${1:x}, ${2:y}, '${3:key}', ${4:null} ${5:/* frame */});",
            "Add Sound": "game.add.sound('${1:key}', ${2:1} ${3:/* volume */}, ${4:false} ${5:/* loop */});",
            "Add Bitmap Text": "game.add.bitmapText(${1:x}, ${2:y}, '${3:font}', '${4:text}', ${5:size});",
            "Add Text": "game.add.text(${1:x}, ${2:y}, '${3:text}', { font: \"${4:65px Arial}\", fill: \"${5:#ff0044}\" });",
            "Add Group": "game.add.group();",
            "Add Physics Group": "game.add.physicsGroup();",
            "Add Graphics": "game.add.graphics();",
            "Add TileSprite": "game.add.tileSprite(${1:x}, ${2:y}, ${3:width}, ${4:height}, '${5:key}', ${6:null} ${7:/* frame */});",
            "Add Emitter": "game.add.emitter(${1:x}, ${2:y}, ${3:maxParticles});",
            "Add Tilemap": "game.add.tilemap('${1:key}', ${2:tileWidth}, ${3:tileHeight});",
            "Add Render Texture": "game.add.renderTexture(${1:width}, ${2:height}, '${3:key}');",
            "Add BitmapData": "game.add.bitmapData(${1:width}, ${2:height}, '${3:key}');",
            "Add Sprite Batch": "game.add.spriteBatch();",
            "Add AudioSprite": "game.add.audioSprite('${1:key}');"

        },

        "Arcade Physics": {
            "Enable Sprite for Physics": "game.physics.arcade.enable(${1:sprite});",
            "Gravity": "${1:sprite}.body.gravity.set(${2:x}, ${3:y});",
            "Velocity": "${1:sprite}.body.velocity.set(${2:x}, ${3:y});",
            "Acceleration": "${1:sprite}.body.acceleration.set(${2:x}, ${3:y});",
            "Drag": "${1:sprite}.body.drag.set(${2:x}, ${3:y});",
            "Bounce": "${1:sprite}.body.bounce.set(${2:x}, ${3:y});",
            "Set Body Size": "${1:sprite}.body.setSize(${2:width}, ${3:height}, ${4:offsetX}, ${5:offsetY});",
            "World Gravity": "game.physics.arcade.gravity.set(x: ${1:x}, y: ${2:y});",
            "Start": "game.physics.startSystem(Phaser.Physics.ARCADE);"
        },

        "Animation": {
            "Add Animation to Sprite": "${1:sprite}.animations.add('${2:name}', [ ${3:frames} ], ${4:frameRate}, ${5:loop});",
            "Play Animation": "${1:sprite}.animations.play('${2:key}', ${4:frameRate}, ${5:loop}, ${6:killOnComplete});",
            "Stop Animation": "${1:sprite}.animations.stop('${2:key}');"
        },

        "Sound": {
            "Play Sound": "var ${1:sound} = game.sound.play('${2:key}', ${3:volume});",
            "Loop Sound": "var ${1:sound} = game.sound.play('${2:key}', ${3:volume}, true);",
            "Stop Sound": "game.sound.stop('${1:key}');",
            "Mute Sound": "game.sound.mute = true;",
            "Unmute Sound": "game.sound.mute = false;"
        },

        "Sprite": {
            "Set Alpha": "${1:sprite}.alpha = ${2:alpha};",
            "Set Angle": "${1:sprite}.angle = ${2:degrees};",
            "Set Rotation": "${1:sprite}.rotation = ${2:radians};",
            "Set Scale": "${1:sprite}.scale.set(${2:x}, ${3:y});",
            "Set Anchor": "${1:sprite}.anchor.set(${2:x}, ${3:y});",
            "Set Pivot": "${1:sprite}.pivot.set(${2:x}, ${3:y});",
            "Set Visible": "${1:sprite}.visible = true;",
            "Set Invisible": "${1:sprite}.visible = false;",
            "Set Texture": "${1:sprite}.loadTexture('${2:key}');"
        },

        "Events": {
            "onAddedToGroup": "${1:sprite}.events.onAddedToGroup.add(${2:callback}, ${3:callbackContext});",
            "onRemovedFromGroup": "${1:sprite}.events.onRemovedFromGroup.add(${2:callback}, ${3:callbackContext});",
            "onRemovedFromWorld": "${1:sprite}.events.onRemovedFromWorld.add(${2:callback}, ${3:callbackContext});",
            "onDestroy": "${1:sprite}.events.onDestroy.add(${2:callback}, ${3:callbackContext});",
            "onKilled": "${1:sprite}.events.onKilled.add(${2:callback}, ${3:callbackContext});",
            "onRevived": "${1:sprite}.events.onRevived.add(${2:callback}, ${3:callbackContext});",
            "onOutOfBounds": "${1:sprite}.events.onOutOfBounds.add(${2:callback}, ${3:callbackContext});",
            "onEnterBounds": "${1:sprite}.events.onEnterBounds.add(${2:callback}, ${3:callbackContext});",
            "onInputOver": "${1:sprite}.events.onInputOver.add(${2:callback}, ${3:callbackContext});",
            "onInputOut": "${1:sprite}.events.onInputOut.add(${2:callback}, ${3:callbackContext});",
            "onInputDown": "${1:sprite}.events.onInputDown.add(${2:callback}, ${3:callbackContext});",
            "onInputUp": "${1:sprite}.events.onInputUp.add(${2:callback}, ${3:callbackContext});",
            "onDragStart": "${1:sprite}.events.onDragStart.add(${2:callback}, ${3:callbackContext});",
            "onDragStop": "${1:sprite}.events.onDragStop.add(${2:callback}, ${3:callbackContext});",
            "onAnimationStart": "${1:sprite}.events.onAnimationStart.add(${2:callback}, ${3:callbackContext});",
            "onAnimationComplete": "${1:sprite}.events.onAnimationComplete.add(${2:callback}, ${3:callbackContext});",
            "onAnimationLoop": "${1:sprite}.events.onAnimationLoop.add(${2:callback}, ${3:callbackContext});"
        },

        "Group": {
            "Add Child to Group": "${1:group}.add(${2:child});",
            "Add Multiple Children to Group": "${1:group}.addMultiple([ ${2:child1}, ${3:child2} ]);",
            "Add Child at Position": "${1:group}.addAt(${2:child}, ${3:index});",
            "Create in Group": "${1:group}.create(${2:x}, ${3:y}, '${4:key}', ${5:null} ${6:/* frame */});",
            "Create Multiple Children": "${1:group}.createMultiple(${2:quantity}, '${3:key}', ${4:null} ${5:/* frame */});",
            "Get First Child that Exists": "${1:group}.getFirstExists(${2:true} ${3:/* exists */});",
            "Get First Child that is Alive": "${1:group}.getFirstAlive();",
            "Get First Dead Child": "${1:group}.getFirstDead();",
            "Get Top Child": "${1:group}.getTop();",
            "Get Bottom Child": "${1:group}.getBottom();",
            "Get Child at Position": "${1:group}.getAt(${2:index});",
            "Get Index of Child": "${1:group}.getIndex(${2:child});",
            "Get Random Child": "${1:group}.getRandom();",
            "Swap Children": "${1:group}.swap(${2:child1}, ${3:child2});",
            "Replace Child": "${1:group}.replace(${2:oldchild}, ${3:newchild});",
            "Bring Child to Top": "${1:group}.bringToTop(${2:child1});",
            "Send Child to Back": "${1:group}.sendToBack(${2:child1});",
            "Move Child Up": "${1:group}.moveUp(${2:child1});",
            "Move Child Down": "${1:group}.moveDown(${2:child1});",
            "Remove Child from Group": "${1:group}.remove(${2:child});",
            "Remove All from Group": "${1:group}.removeAll(${2:false} ${3:/* destroy */});",
            "Remove Between": "${1:group}.removeBetween(${2:startIndex}, ${3:stopIndex}, ${4:false} ${5:/* destroy */});",
            "Child has Property": "${1:group}.hasProperty(${2:child}, '${3:key}');",
            "Set Child Property": "${1:group}.setProperty(${2:child}, '${3:key}', ${4:value});",
            "Check Child Property": "${1:group}.checkProperty(${2:child}, '${3:key}', ${4:value});",
            "Set Property on All Children": "${1:group}.setAll('${2:key}', ${3:value}, ${4:checkAlive}, ${5:checkVisible});",
            "Call Function on All Children": "${1:group}.callAll(${2:function}, ${3:context});",
            "For Each Child": "${1:group}.forEach(${2:function}, ${3:context});",
            "For Each Existing Child": "${1:group}.forEachExists(${2:function}, ${3:context});",
            "For Each Alive Child": "${1:group}.forEachAlive(${2:function}, ${3:context});",
            "For Each Dead Child": "${1:group}.forEachDead(${2:function}, ${3:context});",
            "Count Living": "${1:group}.countLiving();",
            "Count Dead": "${1:group}.countDead();"

        },

        "Tween": {
            "Tween.to": "game.add.tween(${1:object}).to( { ${2:properties} }, ${3:duration}, \"${4:Linear}\", ${5:autoStart});",
            "Tween.from": "game.add.tween(${1:object}).from( { ${2:properties} }, ${3:duration}, \"${4:Linear}\", ${5:autoStart});",
            "Tween Position": "game.add.tween(${1:sprite}).to( { x: ${2:x}, y: ${3:y} }, ${4:duration}, \"${5:Linear}\", true);",
            "Tween Scale": "game.add.tween(${1:sprite}.scale).to( { x: ${2:x}, y: ${3:y} }, ${4:duration}, \"${5:Linear}\", true);",
            "Tween Loop": "game.add.tween(${1:sprite}).to( { ${2:properties} }, ${3:duration}, \"${4:Linear}\", true, 0, 0, true);"
        },

        "Input": {
            "Any Pointer onDown": "game.input.onDown.add(${1:function}, ${2:context});",
            "Any Pointer onUp": "game.input.onUp.add(${1:function}, ${2:context});",
            "Enable Sprite for Input": "${1:sprite}.inputEnabled = true;",
            "Enable Sprite for Drag": "${1:sprite}.input.enableDrag(${2:lockCenter}, ${3:bringToTop}, ${4:pixelPerfect});",
            "Add Movement Callback": "game.input.addMoveCallback(${1:function}, ${2:context});",
            "Create Cursor Keys": "game.input.keyboard.createCursorKeys();",
            "Add Key": "game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);",
            "Remove Key": "game.input.keyboard.removeKey(Phaser.Keyboard.SPACEBAR);"
        },

        "Core": {
            "World Bounds": "game.world.setBounds(${1:x}, ${2:y}, ${3:width}, ${4:height});",
            "World Resize": "game.world.resize(${1:width}, ${2:height});",
            "Camera Follow": "game.camera.follow(${1:sprite}, ${2:height});"
        },

        "Time": {
            "Create Timed Event": "game.time.events.add(${1:duration}, ${2:function}, ${3:context});",
            "Create Repeated Event": "game.time.events.repeat(${1:duration}, ${2:repeatTotal}, ${3:function}, ${4:context});",
            "Create Looped Event": "game.time.events.loop(${1:duration}, ${2:function}, ${3:context});",
            "Create Custom Timer": "var timer = game.time.create(false);"
        },

        "Geometry": {
            "Point": "new Phaser.Point(${1:x}, ${2:y});",
            "Rectangle": "new Phaser.Rectangle(${1:x}, ${2:y}, ${3:width}, ${4:height});",
            "Circle": "new Phaser.Circle(${1:x}, ${2:y}, ${3:diameter});",
            "Line": "new Phaser.Line(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2});",
            "Ellipse": "new Phaser.Ellipse(${1:x}, ${2:y}, ${3:width}, ${4:height});",
            "Polygon": "new Phaser.Polygon([${1:x}, ${2:y}]);"
        }

    },

    //  mode 2 (update)
    {
        "Arcade Physics": {
            "Collide": "game.physics.arcade.collide(${1:object1}, ${2:object2}, ${3:collideCallback}, ${4:processCallback}, ${5:callbackContext});",
            "Overlap": "game.physics.arcade.overlap(${1:object1}, ${2:object2}, ${3:overlapCallback}, ${4:processCallback}, ${5:callbackContext});",
            "Move To Object": "game.physics.arcade.moveToObject(${1:sprite}, ${2:destination}, ${3:60} ${4:/* speed */);",
            "Move To Pointer": "game.physics.arcade.moveToPointer(${1:sprite}, ${2:60} ${3:/* speed */);",
            "Move To XY": "game.physics.arcade.moveToXY(${1:sprite}, ${2:x}, ${3:y}, ${4:60} ${5:/* speed */);",
            "Velocity From Angle": "game.physics.arcade.velocityFromAngle(${1:angle}, ${2:speed}, ${3:point});",
            "Velocity From Rotation": "game.physics.arcade.velocityFromRotation(${1:rotation}, ${2:speed}, ${3:point});",
            "Acceleration From Rotation": "game.physics.arcade.accelerationFromRotation(${1:rotation}, ${2:speed}, ${3:point});",
            "Distance Between": "game.physics.arcade.distanceBetween(${1:sprite1}, ${2:sprite2});",
            "Angle Between": "game.physics.arcade.angleBetween(${1:sprite1}, ${2:sprite2});"
        }

    },

    //  mode 3 (render)
    {
        "Debug": {
            "Text": "game.debug.text('${1:text}', ${2:x}, ${3:y}, '${4:rgb(255,255,255)}');",
            "Physics Body": "game.debug.body(${1:sprite}, '${2:rgba(0,255,0,0.4)}');",
            "Geometry": "game.debug.geom(${1:geometryObject}, '${2:rgba(0,255,0,0.4)}', true);",
            "Sprite Info": "game.debug.spriteInfo(${1:sprite}, ${2:x}, ${3:y});",
            "Camera Info": "game.debug.cameraInfo(${1:game.camera}, ${2:x}, ${3:y});",
            "Sound Info": "game.debug.soundInfo(${1:sound}, ${2:x}, ${3:y});"
        }
    }

];

function createCommandsArray(mode) {

    var output = [];
    var c = 0;
    var d = 0;
    var s = 1000;

    for (section in PhaserCommands[mode])
    {
        //  A Section (like Preload, Create ...) can have multiple command blocks in it

        for (command in PhaserCommands[mode][section])
        {
            if (command === 'div')
            {
                output.push( { name: "div" + d, value: '---------------------------------------', score: s, meta: '' });
                d++;
            }
            else
            {
                output.push( { name: "cmd" + c, value: command, score: s, meta: section });
            }

            c++;
            s--;
        }
        
        output.push( { name: "div" + d, value: '---------------------------------------', score: s, meta: '' });
        s--;
        d++;
    }

    return output;

}

function getSnippet(mode, item) {

    for (section in PhaserCommands[mode])
    {
        //  A Section (like Preload, Create ...) can have multiple command blocks in it
        for (command in PhaserCommands[mode][section])
        {
            if (command === item)
            {
                return { item: item, len: item.length, snippet: PhaserCommands[mode][section][command] };
            }
        }
    }

    return null;

}

var PhaserCommandsArray = [
    createCommandsArray(0),
    createCommandsArray(1),
    createCommandsArray(2),
    createCommandsArray(3)
];
