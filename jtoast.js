/*
    Date: 2016-02-23
*/
var jtoast = {
    visible     : 0,          // This indicate the pop is not visible.
    timeout     : 7000,       // 7 seconds
    id          : 'jtoast', // default `id` for messagebox.
    obj         : null,
    once        : 1,
    extraClass  : '',
    //
    init : function (parms) {
        console.log("jtoast.init:",JSON.stringify(parms));
        if (parms) {
            jtoast.id        = (parms.id)      ? parms.id      : 'jtoast';
            jtoast.timeout   = (parms.timeout) ? parms.timeout : 7000;
        }
    },
    message : function (obj) {
        if ('id' in obj || 'timeout' in obj) {
            jtoast.init(obj);
        }
        jtoast.obj = document.getElementById(jtoast.id);
        if ('class' in obj) {
            // remove any clases added after 
            if (jtoast.extraClass.length) {
                jtoast.obj.classList.remove(jtoast.extraClass);
            }
            jtoast.obj.classList.add(obj.class);
            // save the class(es) added
            jtoast.extraClass = obj.class;
        }
        if ('message' in obj) {
            jtoast.obj.innerHTML = obj.message;
        }
    },
    fire : function (obj) {
        // Set the message
        if (obj) { jtoast.message(obj); }
        jtoast.toggle();        
    },
    extinguish : function (obj, timeout) {
        // change the message, if we have a new one.
        if (obj) { jtoast.message(obj); }
        // remove from screen, after timeout
        if (timeout) {
            setTimeout(function () { jtoast.toggle(); }, timeout);
        } else {
            jtoast.toggle();
        }
    },
    //
    // This function deals with the visibility and fading.
    //
    toggle : function () {
        jtoast.obj = document.getElementById(jtoast.id);
        if (jtoast.visible === 0) {
            jtoast.obj.style.transitionProperty = 'opacity';
            jtoast.obj.style.opacity = 1;
            jtoast.obj.style.visibility = 'visible';
            jtoast.visible = 1;
            jtoast.once    = 1;
        } else {
            // Without this, the popup 'jtoast.id' does not 'fade'.
            jtoast.obj.style.transitionProperty = 'all';
            // This actually triggers the fade.
            jtoast.obj.style.opacity = 0;
            // Without this, the popup invisibly blocks what is underneath
            jtoast.obj.style.visibility = 'collapse';
            jtoast.visible = 0;
            jtoast.once    = 0;
        }
        // if 'timeout' is set to zero ('0'=string), this never fires
        // This allows a single message that fades after timeout, like toast().
        if (jtoast.timeout > 0) {
            if (jtoast.once > 0) {
                setTimeout(jtoast.toggle, jtoast.timeout);
            }
        }
        console.log('jtoast.toggle:', jtoast.visible);
    }
};
