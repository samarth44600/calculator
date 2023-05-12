export const numberValidation = (evt: any) => {
    // evt.preventDefault();
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === 'paste' && typeof window !== "undefined") {
        key = navigator.clipboard.read();
        // key = window.event?.clipboardData.getData('text/plain');



    } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /(\d+([-+*/()]\d+)*)+/;
    // var regex = /([-+]?\d+\.?\d*)(?:\s*([+\-*\/])\s*([-+]?\d+\.?\d*))+/;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}