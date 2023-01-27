// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

// obrazki 

loadSprite("choinka", "choinka.png")
loadSprite("kometa", "kometa.png")
loadSprite("napis", "napis.png")
loadSound("cichanoc", "cichanoc.mp3")


add([
    sprite("choinka"),
    pos(0, 0),
])

const kometa = add([
    sprite("kometa"),
    pos(400, 50),
])

onUpdate( ()=>{

if(kometa.pos.x>50)

    kometa.pos.x -=1

else

{
    destroy(kometa)

    add([
        sprite("napis"),
        pos(190, 150),
    ])
}
})

onKeyPress("space", ()=>{
    play("cichanoc")
})