import { Difficulty, ModelScene, Geometry, Event, rand, Wall, Environment, Regex } from "https://deno.land/x/remapper@3.0.0/src/mod.ts" 

const map = new Difficulty("ExpertPlusLawless", "ExpertPlusStandard");

import { despawn, fogAtentuation, modGroup, LRnotes } from "https://deno.land/x/enviromodder@1.0.3/src/exports.ts" 
import { rgb, animatePlayer } from './src/exports.ts' // the fixed version of rgb and animatePlayer locally

despawn("Contains", [
    "Environment"
], ["BurnMarks"])

const sun = new Environment("Sun", "Contains")
sun.duplicate = 1;
sun.lightID = 100;
sun.position = [0, 20, 100];
sun.rotation = [0, 0, 0];
sun.localRotation = [0, 0, 0];
sun.scale = [0.3, 0.3, 0.3];
sun.push();

const sun2 = new Environment("Sun", "Contains")
sun2.duplicate = 1;
sun2.lightID = 150;
sun2.position = [0, 20, 120];
sun2.rotation = [0, 0, 0];
sun2.localRotation = [0, 0, 0];
sun2.scale = [1.4, 1.4, 1.4]
sun2.push();

const env = new Environment("Mountains", "Contains")
env.scale = [2, 5.5, 2];
env.duplicate = 1;
env.push();

const smoke = new Environment("BigSmokePS", "Contains")
smoke.duplicate = 1;
smoke.position = [0, -1, 0];
smoke.scale = [10, 3, 0.1];
smoke.rotation = [90, 0, 0]
smoke.push();
smoke.duplicate = 1;
smoke.rotation = [0, 0, 0]
smoke.scale = [7, 7, 13];//modify and apply new changes
smoke.position = [0, 0, -10];
smoke.push();

fogAtentuation(0, 999, [
    [0.003, 0], [0.003, 1] // supa thick
])

const scene = new ModelScene(new Geometry())

map.geoMaterials.water = {
    shader: "BaseWater",
    track: "water"
}
map.geoMaterials.waterfall = {
    shader: "BaseWater",
    track: "waterfall"  
}

map.geoMaterials.leaf = {
    shader: "BTSPillar",
    color: [0, 1, 0],
    track: "leaf"
}

map.geoMaterials.snow = {
    shader: "Standard",
    color: [1, 1, 1],
    shaderKeywords: [],
    track: "snow"
}

map.geoMaterials.log = {
    shader: "Standard",
    color: [0.4, 0.1, 0],
    //shaderKeywords: [],
    track: "log"
}

map.geoMaterials.hat = {
    shader: "Standard",
    color: [0, 0, 0],
    //shaderKeywords: [],
    track: "hat"
}

map.geoMaterials.ice = {
    shader: "Standard",
    color: [0, 0.9, 1],
    //shaderKeywords: [],
    track: "ice"
}

map.geoMaterials.light = {
    shader: "TransparentLight",
    track: "light"
}

scene.addPrimaryGroups("water", new Geometry("Cube", "water"))
scene.addPrimaryGroups("waterfall", new Geometry("Cube", "waterfall"))
scene.addPrimaryGroups("light", new Geometry("Sphere", "light"))
scene.addPrimaryGroups("leaf", new Geometry("Triangle", "leaf"))
scene.addPrimaryGroups("snow", new Geometry("Sphere", "snow"))
scene.addPrimaryGroups("log", new Geometry("Cylinder", "log"))
scene.addPrimaryGroups("hat", new Geometry("Cylinder", "hat"))
scene.addPrimaryGroups("ice", new Geometry("Cube", "ice"))

scene.animate([
    ["rivers", 0, 999]
])




// mid floating walls 

for(let i = 1; i < 500; i++) {

    const posx = rand(-100, 100)
    const posy = rand(3, 25)
    const posz = rand(-40, 100)

    const addx = posx + rand(-10, 10)
    const addy = posy + rand(-2, 4)
    const addz = posz + rand(-10, 10)

    const wall = new Wall(0, 224);
    wall.animate.definitePosition = [[posx, posy, posz, 0], [addx, addy, addz, 1, "easeInOutBack"]]
    //wall.animate.color = [[0, 1, 1, 0.3, 0], [1, 0, 1, 0.3, 0.1], [1, 1, 1, 0.3, 0.3], [1, 1, 1, 1, 0.3], [1, 0.7, 0, 1, 0.5],  [0, 1, 0, 0.3, 1]];
    wall.color = rgb([230, 0, 150, 100])
    wall.scale = [0.1, 2.2, 0.1];
    wall.push()
}

//high floating walls
for(let i = 1; i <= 172; i++) {

    const x = rand(-100, 100)
    const y = rand(40, 60)
    const z = rand(-50, 100)
    const sub = z - rand(40, 70)

    const blue = new Wall(0, 224)
    blue.scale = [rand(3, 5), 0.5, rand(3, 7)];
    blue.animate.definitePosition = [[x, y, z, 0], [x, y, sub, 1]]
    blue.color = [255, 0, rand(20, 255), 1] // yes ik this isnt rgb lmao
    //blue.color = color.export();
    blue.rotation = [rand(-20, 20), rand(-20, 20), rand(-30, 30)]
    blue.animate.dissolve = [[0.7, 0], [0.6, 1]]
    blue.push();

    const green = new Wall(0, 224)
    green.scale = [rand(3, 5), 0.5, rand(3, 7)];
    green.animate.definitePosition = [[x, y, z, 0], [x, y, sub, 1]]
    green.color = [0, rand(20, 40), 255, 1] // yes ik this isnt rgb lmao
    //green.color = color.export();
    green.rotation = [rand(-20, 20), rand(-20, 20), rand(-30, 30)]
    green.animate.dissolve = [[0.7, 0], [0.6, 1]]
    green.push();

}

//ice
for(let i = 1; i < 5; i++) {

    const ice = new Wall(0, 999);
    //ice.color = rgb([255, 420, 510, 1]);
    ice.color = [3, 100, 200, 1]
    ice.animate.definitePosition = [rand(-10, 10), -0.3, rand(-5, 40)];
    ice.localRotation = [0, rand(-90, 90), 0];
    ice.scale = [rand(2.2, 4), 0.3, rand(5, 7)];
    ice.push();

}

//light with blue color        vvv  and                 lightID 100!!
new Event(0).centerLasers().on([0, 2, 3, 3], 100).push();
new Event(0).centerLasers().on([2, 1, 2, 1], [150]).push();
new Event(0).leftLasers().on([0, 10, 0, 10], 100).push();
new Event(0).rightLasers().on([0, 10, 0, 10], 100).push();

new Event(32.25).centerLasers().on([0, 2, 0, 10], 100).push();
new Event(42.75).centerLasers().fade([0, 2, 0, 1], 100).push();
new Event(42.75).rightLasers().fade([0, 2, 0, 1], 100).push();

new Event(44.5).centerLasers().fade([0, 2, 0, 1], 100).push();
new Event(44.5).rightLasers().fade([0, 2, 0, 1], 100).push();

new Event(45.5).centerLasers().fade([0, 2, 0, 1], 100).push();
new Event(45.5).rightLasers().fade([0, 2, 0, 1], 100).push();


new Event(46.25).centerLasers().fade([0, 2, 0, 1], 100).push();
new Event(46.25).rightLasers().fade([0, 2, 0, 1], 100).push();

new Event(48).centerLasers().fade([0, 2, 0, 1], 100).push();
new Event(48).rightLasers().fade([0, 2, 0, 1], 100).push();

new Event(50).centerLasers().fade([0, 2, 0, 1], 100).push();
new Event(50).rightLasers().fade([0, 2, 0, 1], 100).push();

new Event(51.75).centerLasers().fade([0, 2, 0, 1], 100).push();
new Event(51.75).rightLasers().fade([0, 2, 0, 1], 100).push();

new Event(52.5).centerLasers().fade([0, 2, 0, 1], 100).push();
new Event(52.5).rightLasers().fade([0, 2, 0, 1], 100).push();

new Event(53.5).centerLasers().fade([0, 2, 0, 1], 100).push();
new Event(53.5).rightLasers().fade([0, 2, 0, 1], 100).push();

new Event(55.5).centerLasers().fade([0, 2, 0, 1], 100).push();
new Event(55.5).rightLasers().fade([0, 2, 0, 1], 100).push();

new Event(32.25).centerLasers().on([0, 2, 1, 1], 100).push();

new Event(55.5).centerLasers().on([0, 2, 3, 1], 100).push();
new Event(55.5).rightLasers().on([0, 2, 3, 1], 100).push();

new modGroup(["Chroma", "Noodle Extensions"])

LRnotes(0, 32, nR => {
    nR.animate.dissolve = [[0, 0], [0.9, 0.1], [1, 1]]
    nR.animate.dissolveArrow = [[0, 0], [0.8, 0.3], [0, 1]]
    nR.animate.position = [[2, 3, 0, 0], [0, 0, 0, 0.2, "easeOutSine"]]
}, nL => {
    nL.animate.dissolve = [[0, 0], [0.9, 0.1], [1, 1]]
    nL.animate.dissolveArrow = [[0, 0], [0.8, 0.3], [0, 1]]
    nL.animate.position = [[-2, 3, 0, 0], [0, 0, 0, 0.2, "easeOutSine"]]
})

LRnotes(32, 42, nR => {
    nR.animate.position = [[0, -10, 0, 0], [0, 0, 0, 0.1, "easeOutSine"]]
    nR.animate.dissolve = [[0.5, 0], [0.8, 0.3], [1, 1]]
    nR.animate.dissolveArrow = [[0, 0], [0.8, 0.3], [1, 1]]
}, nL => {
    nL.animate.position = [[0, -10, 0, 0], [0, 0, 0, 0.1, "easeOutSine"]]
    nL.animate.dissolve = [[0.5, 0], [0.8, 0.3], [1, 1]]
    nL.animate.dissolveArrow = [[0, 0], [0.8, 0.3], [1, 1]]
})

LRnotes(42, 57, nr => {
    nr.NJS = 13
    nr.animate.position = [[10, 8, 0, 0], [0, 0, 0, 0.15, "easeOutElastic"]]
    nr.animate.dissolve = [[0, 0], [0, 0.1], [0.7, 0.15], [1, 1]]
    nr.animate.dissolveArrow = [[0, 0], [0.8, 0.3], [1, 1]]
}, nl => {
    nl.NJS = 13
    nl.animate.position = [[-10, 8, 0, 0],  [0, 0, 0, 0.15, "easeOutElastic"]]
    nl.animate.dissolve = [[0, 0], [0, 0.1], [0.7, 0.15], [1, 1]]
    nl.animate.dissolveArrow = [[0, 0], [0.8, 0.3], [1, 1]]
})

animatePlayer(57, 112, [
    [0, 0, 0, 0], [0, 35, -40, 0.5, "easeInOutCirc"], [0, 0, 0, 1, "easeInOutExpo"]
])

LRnotes(57, 122, n => {
    n.animate.dissolveArrow = [0.7]
    n.animate.dissolve = [0.7]
}, n => {
    n.animate.dissolveArrow = [0.7]
    n.animate.dissolve = [0.7]
})

LRnotes(112, 158, nr => {
    nr.animate.position = [[5, 5, 0, 0], [0, 0, 0, 0.35, "easeInOutQuad"]]
    nr.animate.dissolve = [[0, 0], [0, 0.1], [0.7, 0.3], [1, 1]]
    nr.animate.dissolveArrow = [[0, 0], [0.8, 0.3], [1, 1]]
    nr.NJS = 7  
}, nl => {
    nl.animate.position = [[-5, 8, 0, 0], [0, 0, 0, 0.35, "easeInOutQuad"]]
    nl.animate.dissolve = [[0, 0], [0, 0.1], [0.7, 0.3], [1, 1]]
    nl.animate.dissolveArrow = [[0, 0], [0.8, 0.3], [1, 1]]
    nl.NJS = 7
})

LRnotes(159, 999, nr => {
    nr.NJS = 8;
    nr.animate.position = [[0, 30, 0, 0,], [0, 0, 0, 0.2, "easeOutSine"]]
    nr.animate.dissolve = [[0, 0], [0.6, 0.2], [1, 1]]
    nr.animate.dissolveArrow = [[0, 0], [0.8, 0.2], [1, 1]]
}, nl => {
    nl.NJS = 8
    nl.animate.position = [[0, 30, 0, 0,], [0, 0, 0, 0.2, "easeOutSine"]]
    nl.animate.dissolve = [[0, 0], [0.6, 0.2], [1, 1]]
    nl.animate.dissolveArrow = [[0, 0], [0.8, 0.2], [1, 1]]
})

animatePlayer(159, 999, [
    [0, 0, 0, 0], [0, 2, -4, 1, "easeInOutSine"]
])

animatePlayer(191, 212, [
    [0, 0, 0, 0], [0, 0, -50, 1, "easeInCirc"]
])

map.save();
