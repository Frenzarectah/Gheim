
import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";

kaboom({
    width:600,
    height:200,
    letterbox:true,
    canvas: document.getElementById('gheim')
});

loadSprite("player","assets/frenz_spritesheet.png",{
    sliceX:3,
    anims:{
        "idle":{
            from: 0,
            to: 0
        },
        "sopra":{
            from: 1,
            to: 1,
        },
        "sotto":{
            from: 2,
            to: 2,
        }
    }
});

//setGravity(1600);

const SPEED = 320;

const player = add([
    sprite('player'),
    pos(40, 0),
    body(),
    area(),
])
player.play("idle");

onKeyDown("right", () => {
    player.play("idle");
    player.move(SPEED, 0);
    player.flipX = false;
})
onKeyDown("left", () => {
    player.play("idle");
    player.move(-SPEED, 0);
    player.flipX = true;
})
onKeyDown("up", () => {
    // player.jump()
    player.move(0,-SPEED);
    player.play("sopra");
})
onKeyDown("down", () => {
    // player.jump()
    player.move(0,SPEED);
    player.play("sotto");
})

add([
    rect(60, 60),
    pos(500,250),
    outline(10),
    area(),
    body({ isStatic: false }),
    color(127, 200, 255),
])