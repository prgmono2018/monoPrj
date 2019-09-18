/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2015 Photon Storm Ltd.
*/

/**
* Phaser Sandbox Editor functions. The modes are:
*
* 0 = preload
* 1 = create
* 2 = update
* 3 = render
* 4 = game
* 5 = help
*/

var mode = 0;
var prev = 0;
var svd = -1;
var frameReady = false;

var cursorMap = [ { "row": 0, "column": 0 }, { "row": 0, "column": 0 }, { "row": 0, "column": 0 }, { "row": 0, "column": 0 } ];
var modeMap = [ '#preload', '#create', '#update', '#render', '#game', '#help' ];
var titleMap = [ 'preload', 'create', 'update', 'render', 'PLAY', 'Help' ];

var editor;

function hoverSaveOver()
{
    $(modeMap[mode]).removeClass('icon-mode' + mode);
    $(modeMap[mode]).addClass('icon-save');
    $(modeMap[mode] + ' span').text('save');

}

function hoverSaveOut()
{
    if (svd !== mode)
    {
        $(modeMap[mode]).removeClass('icon-save');
        $(modeMap[mode]).addClass('icon-mode' + mode);
        $(modeMap[mode] + ' span').text(titleMap[mode]);
    }
}

function save(prjName)
{
    var bundle = {};
    code[mode] = editor.getSession().getValue();

   // bundle.fork = fork;
    bundle.code1 = code[0];
    bundle.code2 = code[1];
    bundle.code3 = code[2];
    bundle.code4 = code[3];
    bundle.width = gameWidth;
    bundle.height = gameHeight;
    bundle.prjName = prjName;

    //  Change active-tab icon to disk
    svd = mode;
    $(modeMap[svd]).removeClass('icon-mode' + svd);
    $(modeMap[svd]).addClass('icon-save');
    $(modeMap[svd] + ' span').text('saving');

    window.removeEventListener('beforeunload', confirmOnPageExit);

    $.ajax({
        type: "POST",
        url: "http://localhost:8000/save/" + window.uuid,
        data: bundle,
        success: function(data) {
            //data = JSON.parse(data);
            if (data.uuid !== 'error' && data.op === 'insert')
            {
                //  Updates saved ok, so lets redirect
                //window.location.href = "/edit/" + data.uuid;
            }
            else
            {
                //window.addEventListener('beforeunload', confirmOnPageExit);
            }
        },
        error: function(data) {
            console.log('error', data.responseText);
            //window.addEventListener('beforeunload', confirmOnPageExit);
        },
        complete: function(data) {save
           // $(modeMap[svd]).removeClass('icon-save');
          //  $(modeMap[svd]).addClass('icon-mode' + svd);
           // $(modeMap[svd] + ' span').text(titleMap[svd]);
            svd = -1;
        }
    }, "text");

}

function toggleView(view)
{
    /*   if (mode === view)
        {
            save();
            return;
        }
    */
    //  Set the tab
    $('#tab' + mode).removeClass('tab-current');
    $('#tab' + view).addClass('tab-current');

    if (mode === 5)
    {
        //  Leaving help mode, so shut down the chains nicely
        $('#chains').css('display', 'none');
    }
    else if (mode === 4)
    {
        //  Leaving game mode, so shut down the game nicely
        $('#sandboxed').attr('src', '/src/client/common/frame.html');
        $('#sandbox-container').css('display', 'none');
    }
    else
    {
        //  Leaving an editor mode
        if (view >= 4)
        {
            $('#editor').css('display', 'none');
        }

        //  Save the code you were working on
        code[mode] = editor.getValue();

        //  Make it remember the line and column they were on and restore it on change
        cursorMap[mode] = editor.getCursorPosition();
    }

    if (view === 5)
    {
        //  Entering Help Mode
        $('#chains').css('display', 'block');
       // document.querySelector('#donateBanner').style.display="none"
    
    }
    else if (view === 4)
    {
        startGame();

        //  Show the game
        $('#sandbox-container').css('display', 'block');
    }
    else
    {
        //  Show the editor
        $('#editor').css('display', 'block');

        //  Swap the code in the editor
        editor.getSession().setValue(code[view]);

        //  Restore previous col/row, if any
        editor.moveCursorTo(cursorMap[view].row, cursorMap[view].column);
        editor.focus();
    }

    prev = mode;
    mode = view;

}

function pingGame() {

    var frame = document.getElementById('sandboxed');
    frame.contentWindow.postMessage('ping', '*');

    if (!frameReady)
    {
        window.setTimeout(pingGame, 100);
    }
    else
    {
        startGame();
    }

}

function startGame() {

    //  Entering Game Mode
    console.clear();

    var src = "var game = new Phaser.Game(" + gameWidth + ", " + gameHeight + ", Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render });\n\n";
    src = src + code[0];
    src = src + code[1];
    src = src + code[2];
    src = src + code[3];

    var frame = document.getElementById('sandboxed');
    frame.contentWindow.postMessage(src, '*');

}

function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}

function handleFileSelect(evt) {

    evt.stopPropagation();
    evt.preventDefault();

    // FileList object.
    var files = evt.dataTransfer.files; 

    // files is a FileList of File objects.
    // We only want the first one though
    var output = [];

    for (var i = 0, f; f = files[i]; i++)
    {
        if (!f.type.match('application/javascript') && !f.type.match('text/plain'))
        {
            // Only process text files
            continue;
        }

        var reader = new FileReader();

        reader.onload = (function(theFile) {

            var text = theFile.target.result;
            editor.getSession().setValue(text);

        });

        reader.readAsText(f);

    }

}

$(document).ready(function() {

    var Range = ace.require("ace/range").Range;
    var languageTools = ace.require("ace/ext/language_tools");
    var snippetManager = ace.require("ace/snippets").snippetManager;

    editor = ace.edit("editor");
    editor.setFontSize(15);
    editor.setTheme("ace/theme/cobalt");
    editor.getSession().setMode("ace/mode/javascript");
    editor.getSession().setUseWrapMode(true);
    editor.setShowPrintMargin(false);
    editor.$blockScrolling = Infinity;

    languageTools.setCompleters([]);

    var phaserCompleter = {

        getCompletions: function(editor, session, pos, prefix, callback) {

            callback(null, PhaserCommandsArray[mode]);

        }

    };

    languageTools.addCompleter(phaserCompleter);

    editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: false
    });

    editor.commands.on("afterExec", function(e) {

        if (e.command.name === 'insertstring' && e.args !== undefined)
        {
            var item = getSnippet(mode, e.args);

            if (item !== null)
            {
                var pos = editor.getCursorPosition();
                var line = editor.session.getLine(pos.row).substring(0, pos.column);
                editor.session.replace(new Range(pos.row, pos.column - item.len, pos.row, pos.column), '');

                if (pos.column - item.len === 0)
                {
                    snippetManager.insertSnippet(editor, "\t" + item.snippet);
                }
                else
                {
                    snippetManager.insertSnippet(editor, item.snippet);
                }
            }
        }

    });

    editor.commands.addCommand({

        name: 'preload',
        bindKey: { win: 'Ctrl-1',  mac: 'Command-1' },
        exec: function(editor) {
            toggleView(0);
        },
        readOnly: true

    });

    editor.commands.addCommand({

        name: 'create',
        bindKey: { win: 'Ctrl-2',  mac: 'Command-2' },
        exec: function(editor) {
            toggleView(1);
        },
        readOnly: true

    });

    editor.commands.addCommand({

        name: 'update',
        bindKey: { win: 'Ctrl-3',  mac: 'Command-3' },
        exec: function(editor) {
            toggleView(2);
        },
        readOnly: true

    });

    editor.commands.addCommand({

        name: 'render',
        bindKey: { win: 'Ctrl-4',  mac: 'Command-4' },
        exec: function(editor) {
            toggleView(3);
        },
        readOnly: true

    });

    editor.commands.addCommand({

        name: 'play',
        bindKey: { win: 'Ctrl-Enter',  mac: 'Command-Enter' },
        exec: function(editor) {
            toggleView(4);
        },
        readOnly: true

    });

    $('#ide-font-inc').click(function(){
        var size = parseInt(document.getElementById('editor').style.fontSize, 10) + 1;
        document.getElementById('editor').style.fontSize = size.toString() + "px";
    });

    $('#ide-font-dec').click(function(){
        var size = parseInt(document.getElementById('editor').style.fontSize, 10) - 1;
        document.getElementById('editor').style.fontSize = size.toString() + "px";
    });

    var dropZone = document.getElementById('editor');
    dropZone.addEventListener('dragover', handleDragOver, false);
    dropZone.addEventListener('drop', handleFileSelect, false);

    $('#preload').click(function(e){
        toggleView(0);
    });

    $('#create').click(function(e){
        toggleView(1);
    });

    $('#update').click(function(e){
        toggleView(2);
    });

    $('#render').click(function(e){
        toggleView(3);
    });

    $('#game').click(function(e){
        toggleView(4);
    });

    $('#help').click(function(e){
        toggleView(5);
    });

    $('#preload').hover(
        function() {
            if (mode !== 0) { return; }
            hoverSaveOver();
        },
        function() {
            if (mode !== 0) { return; }
            hoverSaveOut();
        }
    );

    $('#create').hover(
        function() {
            if (mode !== 1) { return; }
            hoverSaveOver();
        },
        function() {
            if (mode !== 1) { return; }
            hoverSaveOut();
        }
    );

    $('#update').hover(
        function() {
            if (mode !== 2) { return; }
            hoverSaveOver();
        },
        function() {
            if (mode !== 2) { return; }
            hoverSaveOut();
        }
    );

    $('#render').hover(
        function() {
            if (mode !== 3) { return; }
            hoverSaveOver();
        },
        function() {
            if (mode !== 3) { return; }
            hoverSaveOut();
        }
    );

    $('#game').hover(
        function() {
            if (mode !== 4) { return; }
            hoverSaveOver();
        },
        function() {
            if (mode !== 4) { return; }
            hoverSaveOut();
        }
    );

    $('#updateSize').click(function(e){

        $('#sandboxed').attr('src', '<!DOCTYPE html>\n\
        <html>\n\
        <head>\n\
            <meta charset="utf-8">\n\
            <title>Phaser Sandbox Frame</title>\n\
            <style type="text/css">\n\
                body {\n\
                    margin: 0;\n\
                }\n\
            </style>\n\
            <script src="//cdn.jsdelivr.net/phaser/2.6.2/phaser.min.js"></script>\n\
        </head>\n\
        <body>\n\
            <div id="game"></div>\n\
            <script type="text/javascript">\n\
            var _isAlive = false;\n\
            window.onload = function() {\n\
                _isAlive = true;\n\
            }\n\
            window.addEventListener(\'message\', function (e) {\n\
                var mainWindow = e.source;\n\
                if (e.data == \'ping\')\n\
                {\n\
                    mainWindow.postMessage(_isAlive, event.origin);\n\
                }\n\
                else\n\
                {\n\
                    try {\n\
                        eval(e.data);\n\
                    } catch (e) {\n\
                        console.warn(e);\n\
                        //  This could probably be displayed in a modal of some kind in the main page\n\
                        mainWindow.postMessage(e, event.origin);\n\
                    }\n\
                }\n\
            });\n\
            </script>\n\
        </body>\n\
        </html>');

        gameWidth = $('#gameSizeW').val();
        gameHeight = $('#gameSizeH').val();

        $('#sandboxed').css('width', gameWidth);
        $('#sandboxed').css('height', gameHeight);

        window.setTimeout(startGame, 2000);

    });

    $(document).on('keydown', function (e) {

        if (e.ctrlKey && e.which === 13)
        {
            if (mode === 4)
            {
                //  Swap back to previous tab
                toggleView(prev);
            }
            else
            {
                //  Run game
                toggleView(4);
            }
        }
        else if (e.ctrlKey && e.which === 83)
        {
            save();
            e.preventDefault();
        }

    });

    window.addEventListener('message', function (e) {

        var frame = document.getElementById('sandboxed');

        if (e.data == true)
        {
            frameReady = true;
        }

        // if (e.origin === "null" && e.source === frame.contentWindow)
        // {
            // alert('Result: ' + e.data);
        // }

    });

    window.addEventListener('resize', function (e) {

        var h = $(window).height() - 204;

        $('.ace_editor').css('height', h + 'px');
        editor.resize();

    });

    //  Set editor size
    var h = $(window).height() - 204;

    $('.ace_editor').css('height', h + 'px');
    editor.resize();

    editor.getSession().setValue(code[0]);

    if (autoPlay)
    {
        mode = 4;

        $('#tab0').removeClass('tab-current');
        $('#tab4').addClass('tab-current');
        $('#editor').css('display', 'none');
        $('#sandbox-container').css('display', 'block');

        window.setTimeout(pingGame, 100);
    }
    else
    {
        editor.focus();

        //  because something steals it, somewhere
        window.setTimeout(function() { editor.focus() }, 1000);
    }

});
