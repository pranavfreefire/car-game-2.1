class Player{
constructor(){
this.index=null
this.name=null
this.distance=0
}
getCount(){
    database.ref('playerCount').on('value',(data)=>{
    playerCount=data.val()
    })
    }
    updateCount(x){
        database.ref('/').update({
            playerCount:x
        })
        }
         update() {
            var path="players/player"+player.index
            database.ref(path).updata({
                name:this.name,
                distance:this.distance
            })
        }
         getplayerinfo(){
             database.ref('players').on("value",(data)=>{
                 allPlayers=data.val()
             })
         }
        }


