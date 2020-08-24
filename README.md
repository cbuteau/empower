
# Empower

The original mod was a Quake 3 mod I experimented with...

The concept was simple...

Kill people while in the air would increase your jump modifier.
Kill people while crouching ups your knockback modifier.
Kill people while running ups your speed modifier.

You became a GOD just by surviving.


## BabylonJS

When we investigated tech again...no game engine companies were building moddable games...

SO we are looking at BabylonJS

### Links

+ [Main](https://www.babylonjs.com/)
+ [GitHub](https://github.com/BabylonJS/Babylon.js)
+ [Playground](http://www.babylonjs-playground.com/)
+ [Our Tester](http://localhost:3000/)


## Loading

Going to try and let go of requirejs and maybe do something new like systemjs

## Technical Plan

+ Load some scene
+ Load and move through scene
+ Load level detail of some sort.

## Logic

### Startup

The Wait is waiting for other players to finish downloading and maybe pre-initializing.


```plantuml
LevelEnd --> DownloadingLevel
DownloadingLevel --> Wait
Wait --> Start
```

## If you work on this...

Download and install the native babylonjs editor.

https://doc.babylonjs.com/resources/getting_started#project-example

This package has an npm script edntry called edit...
that will launc the editor from an install point.

IF we have to move it to an environment variable we will do that.


## Status

 Have not touched...we should start from scratch.
 Lets check out PixiJS

 https://github.com/kittykatattack/learningPixi

### 12/31/2019

PIXI is not 3D at all we should switch back to babylon

Started loading Babylon from CDN.
Need to figure out controller integration next.

https://doc.babylonjs.com/how_to/how_to_use_gamepads

Did not figure it out yet...


### 1/4/2020

THis is what we should do...
ES6
https://doc.babylonjs.com/features/es6_support

For starters...
GEt a couple of levels with the editor...
Hook them together dynamically (code instead of settings)

And get working on the exposition system...

A way to project large TEXT ONTO a PLANE in the GAME...

Big 3D translucent letters you can walk through.

### 2/2/2020

Get editor running locally.

### 8/23/2020

Installed bablyon es6 packages...start from scratch...
