//inefficiency at its finest
import { Difficulty, ENV, ModelScene, Environment, Regex, Geometry, Wall } from "https://deno.land/x/remapper@2.1.0/src/mod.ts"
import * as EnvModder from "./EnvMods/index.ts"
import * as nootils from "./nootils/index.ts"
const map = new Difficulty("ExpertPlusStandard", "ExpertPlusLawless");
EnvModder.despawn("bts")
/*
to do list:
fog,
finish lights
*/
const water = new Environment("BTSEnvironment.[0]Environment.[6]PlayersPlace.[0]Mirror", "Contains")
water.duplicate = 1;
water.scale = [2000, 0.5, 2000];
water.position = [0, -1.5, 0];
water.push();

//Big Laser ids: [21, 22]
//Side laser ids: [23, 30]
//Mid laser ids: [31, 43]
const Mountain = new ModelScene(new Environment(ENV.BTS.PILLAR.ID,"Regex"),ENV.BTS.PILLAR.SCALE, ENV.BTS.PILLAR.ANCHOR)
const BigLaser = new ModelScene(new Environment(ENV.BTS.SOLID_LASER.ID,"Regex"), ENV.BTS.SOLID_LASER.SCALE, ENV.BTS.SOLID_LASER.ANCHOR)
const MidLaser = new ModelScene(new Environment(ENV.BTS.SOLID_LASER.ID,"Regex"), ENV.BTS.SOLID_LASER.SCALE, ENV.BTS.SOLID_LASER.ANCHOR)
Mountain.static("Mountain")
BigLaser.static("BigLaser")
MidLaser.static("SmallLaser")

nootils.Smoke(0, 1000, 1, 1, 12, -1.5, 14)
nootils.Smoke(0, 1000, 1, 1, -15, -1.5, 11)

map.save();
