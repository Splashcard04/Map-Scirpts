import { Difficulty, ModelScene, Environment, Wall, Geometry, LightRemapper, Vec3, rand, CustomEvent, notesBetween, EVENT } from "https://deno.land/x/remapper@2.1.0/src/mod.ts"
import * as ml from './src/exports.ts'
import * as nootils from './nootils/index.ts'
//this is SO inneficient :D

const map = new Difficulty("ExpertPlusLawless", "ExpertPlusStandard");

ml.despawn("Contains", [
    "Environment"
])

ml.stars(
  650, //ammount
  0.2, //individual size
  100, //distance
  0, //time
  9999 //duration
)
 

//=======================================================================================================================================================================
//==========================================================================ENHANCMENTS==================================================================================
//=======================================================================================================================================================================

// =======================================================================HANDS==========================================================================================
const hand = new Environment("HalloweenEnvironment.[0]Environment.[158]ZombieHand (1).[0]ZombieHand", "Contains")
hand.scale = [4, 4, 4];
hand.duplicate = 1;
hand.position = [-15, 1, 20];
hand.push();

const hand2 = new Environment("HalloweenEnvironment.[0]Environment.[158]ZombieHand (1).[0]ZombieHand", "Contains")
hand2.scale = [4, 4, 4];
hand2.duplicate = 1;
hand2.position = [6, 1, 13];
hand2.push();

const hand3 = new Environment("HalloweenEnvironment.[0]Environment.[158]ZombieHand (1).[0]ZombieHand", "Contains")
hand3.scale = [4, 4, 4];
hand3.duplicate = 1;
hand3.position = [18, 1, 13];
hand3.rotation = [0, 90, 0];
hand3.push();


//========================================================== trees ===============================================================================================================
const tree = new Environment("HalloweenEnvironment.[0]Environment.[19]Tree3", "Contains")
tree.position = [20, 0, 12];
tree.duplicate = 1;
tree.push();

const tree1 = new Environment("HalloweenEnvironment.[0]Environment.[148]Tree1 (1)", "Contains")
tree1.position = [13, 0, 13]
tree1.duplicate = 1;
tree1.push();

const tree2 = new Environment("HalloweenEnvironment.[0]Environment.[148]Tree1 (1)", "Contains")
tree2.duplicate = 1;
tree2.position = [-16, 0, 16];
tree2.push();

const tree3 = new Environment("HalloweenEnvironment.[0]Environment.[25]Tree2", "Contains")
tree3.position = [-25, 0, 18];
tree3.duplicate = 1;
tree3.push();

//the 3 dimentional trees
const tree4 = new Environment("HalloweenEnvironment.[0]Environment.[29]Tree5", "Contains")
tree4.position = [-27, 0, 10];
tree4.duplicate = 1;
tree4.push();

const tree5 = new Environment("HalloweenEnvironment.[0]Environment.[29]Tree5", "Contains")
tree5.position = [27, 0, 5];
tree5.duplicate = 1;
tree5.push();

const tree6 = new Environment("HalloweenEnvironment.[0]Environment.[29]Tree5", "Contains")
tree6.position = [-24, 0, -1];
tree6.duplicate = 1;
tree6.push();

const tree7 = new Environment("HalloweenEnvironment.[0]Environment.[29]Tree5", "Contains")
tree7.position = [25, 0, -3];
tree7.duplicate = 1;
tree7.push();

const tree8 = new Environment("HalloweenEnvironment.[0]Environment.[29]Tree5", "Contains")
tree8.position = [-10, 0, 20];
tree8.duplicate = 1;
tree8.push();

//==========================================================================GRAVES======================================================================================
const grave1 = new Environment("HalloweenEnvironment.[0]Environment.[13]Grave", "Contains")
grave1.duplicate = 1;
grave1.position = [-4, 0, 15];
grave1.scale = [5, 5, 5];
grave1.push();

const grave = new Environment("HalloweenEnvironment.[0]Environment.[11]Grave1", "Contains")
grave.duplicate = 1;
grave.position = [12, 0, 12];
grave.scale = [5, 5, 5];
grave.push();

const grave2 = new Environment("HalloweenEnvironment.[0]Environment.[10]Grave0 (1)", "Contains")
grave2.duplicate = 1;
grave2.position = [12, 0, 16];
grave2.scale = [5, 5, 5];
grave2.push();

const grave3 = new Environment("HalloweenEnvironment.[0]Environment.[10]Grave0 (1)", "Contains")
grave3.duplicate = 1;
grave3.position = [-24, 0, 12];
grave3.rotation = [0, 30, 0];
grave3.scale = [5, 5, 5];
grave3.push();
/*
//===========================================================================CROWS=======================================================================================
const crow0 = new Environment("HalloweenEnvironment.[0]Environment.[156]Crow", "Contains")
crow0.position*/
//=======================================================================================================================================================================
//======================================================================= BOX ===========================================================================================
//=======================================================================================================================================================================

//front wall
const front = new Wall(0, 251)
front.color = [15, 0, 0, 20];
front.scale = [2000, 2000, 0.5],
front.animate.definitePosition = [[-1000, -30, 50, 0], [-1000, -30, 50, 1]]
front.push();

//back wall
const back = new Wall(0, 251)
back.color = [15, 0, 0, 20];
back.scale = [2000, 2000, 0.5],
back.animate.definitePosition = [[-1000, -30, -200, 0], [-1000, -30, -200, 1]]
back.push();

//left wall
const left = new Wall(0, 251)
left.color = [15, 0, 0, 20];
left.scale = [0.5, 2000, 2000],
left.animate.definitePosition = [[200, -30, -1000, 0], [200, -30, -1000, 1]]
left.push();

//right wall
const right = new Wall(0, 251)
right.color = [15, 0, 0, 20];
right.scale = [0.5, 2000, 2000],
right.animate.definitePosition = [[-200, -30, -1000, 0], [-200, -30, -1000, 1]]
right.push();

//top wall
const top = new Wall(0, 251 )
top.color = [15, 0, 0, 20];
top.scale = [2000, 0.5, 2000],
top.animate.definitePosition = [[-1000, 200, -1000, 0], [-1000, 200, -1000, 1]]
top.push();

//bottom platform
const plat = new Geometry("Cube", {
    _shader: "Standard",
    _color: [0, 0, 0]
})
plat.position = [-2000, -1.5, -2000];
plat.scale = [4000, 0.5, 4000];
plat.push();

//=======================================================================scene2 walls==================================================================================

const front2 = new Wall(251, 279)
front2.color = [3, 2, 0, 20];
front2.scale = [2000, 2000, 0.5],
front2.animate.definitePosition = [[-1000, -30, 50, 0], [-1000, -30, 50, 1]]
front2.push();

//========================================================================as if there is a scene three walls================================================================
const front3 = new Wall(279, 9999)
front3.color = [15, 0, 0, 20];
front3.scale = [2000, 2000, 0.5],
front3.animate.definitePosition = [[-1000, -30, 50, 0], [-1000, -30, 50, 1]]
front3.push();

//=======================================================================================================================================================================
//======================================================================= MODEL ===========================================================================================
//=======================================================================================================================================================================

const scene = new ModelScene(new Geometry())

scene.static("Cabin")

//=========================================================FOG==================================================================================
const fog = new CustomEvent(0).animateTrack("fog", 296);
fog.animate.attenuation = [[0.1, 0], [0.001, 1]];
fog.push();
//=================================================================NOTE PATHS=============================================================================================
ml.LRnotes(
  0,
  56,
  {
    _position: [[5, 5, 0, 0], [0, 0, 0, 0.5, "easeInOutExpo"], [0, 0, 0, 1]],
    _dissolve: [[0, 0], [0,3, 0.2], [0.8, 0.5], [1, 1]],
    _dissolveArrow: [[0, 0], [0.5, 0.2], [0.7, 0.5], [1, 1]]
  },
  {
    _position: [[-5, 5, 0, 0], [0, 0, 0, 0.5, "easeInOutExpo"], [0, 0, 0, 1]],
    _dissolve: [[0, 0], [0,3, 0.2], [0.8, 0.5], [1, 1]],
    _dissolveArrow: [[0, 0], [0.5, 0.2], [0.7, 0.5], [1, 1]]
  }
)

ml.LRnotes(
  56,
  127,
  {
    _dissolve: [[0, 0], [0.8, 0.4], [1, 1]],
    _dissolveArrow: [[0, 0], [0.5, 0.4],[1, 1]]
  },
  {
    _dissolve: [[0, 0], [0.8, 0.4], [1, 1]],
    _dissolveArrow: [[0, 0], [0.5, 0.4],[1, 1]]
  }
)

ml.LRnotes(
  127,
  296,
  {
    _postion: [[0, 40, 0, 0], [0, 0, 0, 0.4, "easeInOutCirc"], [0, 0, 0, 1]],
    _dissolve: [[0, 0], [0.5, 0.1], [0.7, 0.4], [1, 1]],
    _dissolveArrow: [[0, 0], [0.5, 0.1], [0.7, 0.4], [1, 1]]
  },
  {
    _postion: [[0, 40, 0, 0], [0, 0, 0, 0.4, "easeInOutCirc"], [0, 0, 0, 1]],
    _dissolve: [[0, 0], [0.5, 0.1], [0.7, 0.4], [1, 1]],
    _dissolveArrow: [[0, 0], [0.5, 0.1], [0.7, 0.4], [1, 1]]
  }
)

nootils.Smoke(
  0,
  9999,
  3,
  1,
  12.3,
  17.5,
  27.8
)


map.save();
