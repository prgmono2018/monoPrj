var confirmOnPageExit = function (e)  {

    // If we haven't been passed the event get the window.event
    e = e || window.event;

    var message = 'Any text will block the navigation';

    // For IE6-8 and Firefox prior to version 4
    if (e) 
    {
        e.returnValue = message;
    }

    // For Chrome, Safari, IE8+ and Opera 12+
    return message;

};

window.addEventListener('beforeunload', confirmOnPageExit);