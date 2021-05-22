class Game{
constructor(){

}
getState(){
database.ref('gameState').on('value',(data)=>{
gameState=data.val()
})
}
updateState(x){
database.ref('/').update({
    gameState:x
})
}
play(){
player.getplayerinfo()
if(allPlayers!==undefined){
    var textPosition=120;
    for(var plr in allPlayers){
        if(plr==="player"+player.index){
            fill ("red")
        }
        else{
            fill("black")
        }
            
        
        textPosition=textPosition+20
        text(allPlayers[plr].name+" : "+allPlayers[plr].distance,200,textPosition)
    }
    if(keyIsDown(UP_ARROW)){
        player.distance+=10
        player.update()
            } 
}
    
}
}