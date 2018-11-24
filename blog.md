# html-jtoast-notifications
A local popup notification plugin library, like toast(), that only uses HTML5, CSS3, and javascript

As a minimalist, I abhore large libraries to do simple things. I like the Android [library toast](https://developer.android.com/guide/topics/ui/notifiers/toasts). There is a version by Eddie Ver Bruggen called [cordova-plugin-x-toast](https://www.npmjs.com/package/cordova-plugin-x-toast) and other simple version called [cordova-plugin-simple-toast](https://www.npmjs.com/package/cordova-plugin-simple-toast). The big drawbacks for all these solutions include

- installed as a plugin
- inflexible time parameters
- poor control of asthetics (colors, fonts, style, etc)

Ideally with Phonegap&trade;, a single-object Javascript library should be able to do the job. This is *JToast*.

*JToast* is a single-object Javascript with multiple methods for grainular automatation. The object uses three (3) methods so these actions can be controlled via anonymous events. Those methods are `fire()`, `extinguish()`, and `flip()`. The first two (2) (`fire()` & `extinguish()`) can take parameters, but if none are given they follow the pre-assign actions (or the default action if no tasks are pre-assigned). The third method (`flip()`) makes the *jtoast* appear or disappear. `flip()` is the only method that takes no parameters.

Finer granularity is available with two additional methods (`init()` & `message()`). `init()` lets you use your own *div ID* and set the timeout parameter; both parameters are optional.  `message()` lets you set all the parmeters, but does not make *JToast* appear or disappear (`flip()`). All parameters for `message()` are optional.


- [Synopsis](#synopsis)
- [Methods](#methods)
- [Simple example toast.fire()](#fire)


## <a name=synopsis>Synopsis</a> ##

This library is for local notifications. It uses a `<div>` popup that gets positioned with `postion:absolute`. The notification has only one pane, and therefore only one window for a message. This means no title or subject. Hence, the name *jtoast*.

The notification is initially hidden and not visible. Once `fire()` is called, the notification goes through the process of becoming visible. `extinguish()` is used to make the notification hidden and invisible again.

## <a name=method>Methods</a> ##

There are five (5) methods for this library. If you need it quick, just use `fire()` or `extinguish()`. For more grainular control, there is `init()` and `message()`.

The notification can be customized via `init()` and `message()`. The purpose of `fire()` is to make a notification visible, and with `extinguish()` the notification becomes hidden. You should not have to use `flip()`.

method         |  purpose
---------------|-----------
`init()`       | set the `id` and `timeout` to the notifications 
`message()`    | set the text and *class* to the message
`fire()`       | launch the message &ndash; making it visible
`extinguish()` | manually halt the message &ndash; making it hidden
`flip()`       | actually make the notifications visible and hidden


## Simple Example using <a name=toast>toast.fire()</a> ###

------

**HTML**

    <link rel="stylesheet" href="jtoast.css" />
    <link rel="stylesheet" href="app.css" />
    ::
    <div id=jtoast class=jtoast></div>

**code**

    jtoast.fire({'message':'I am toast.'});

**explanation**

Calls `jtoast.fire()` with a *message*. It will "fade out" after the default `timeout` (7 seconds). Use `jtoast.init()` to change the `timeout`.


