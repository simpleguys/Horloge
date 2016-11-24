Horloge is a [Pomodoro](http://cirillocompany.de/pages/pomodoro-technique)-style timer, aiming at improving your work productivity.

## Core Features

* [not implemented] Breaks your work sessions down into smaller work-slots and break-slots
* [not implemented] Allows to customize the length of work-slots and break-slots
* [not implemented] Uses native system notifications to let the user know when a session ends or start (with [node-notifier](https://github.com/mikaelbr/node-notifier))
* [not implemented] System notifications can be disabled. If so, all output is written to the terminal in which Horloge has been started.
* [not implemented] A time session can be pause or reinitialized at any time.
* [not implemented] The program can be run as a daemon (in the background) or as a command line application attached to the terminal.

## Installation instructions

[ Comming soon ]

## Usage

To start a new session use:

```
horloge start
```

in the terminal.

### In daemon mode

Note: this is not yet implemented

- (Not implemented) `horloge pause` will pause the current timer.
- (Not implemented) `horloge status` will display an overview of all session runs so far, and progress of current session, in a system notification or the terminal (as per configuration).
- (Not implemented) `horloge stop` will first display the output of `horloge status` then 
- (Not implemented) `horloge reset` will reset the current session, while `horloge reset --all` will destroy all existing sessions and start again from scratch.

## Wishlist

* When run as a daemon, allow reload of configuration, pause / resets of timers (see [Usage](#indaemon-mode)).
* Allow longer breaks every X time slots.
* Default to actual pomodoro methodology (work-slots of 25mn, 5mn short-breaks, longer 15mn breaks every 4 sessions) 
* Let the user know 2mn (configurable) ahead of a end of any time slot that it's about to finish.
* Audio support: will send send notification *alongside* or *instead of* (as per configuration) system notifications.
* Provide links to useful break activities in the break notifications (e.g. Youtube videos to guide you through fitness / Yoga exercises, distracting read etc...) 
* Full-screen mode for smart-TVs and standalone computers in co-working spaces. Features motivating graphics and autoload of break activities.


## Useful resources

* FreeCodeCamp article: [Writing command line applications in Node.js](https://medium.freecodecamp.com/writing-command-line-applications-in-nodejs-2cf8327eee2#.liebnbpwt)
