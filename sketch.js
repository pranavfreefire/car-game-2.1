var  database;
var form,gameState,playerCount
var allPlayers

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  form=new Form()
  form.display()
game=new Game()
game.getState()
player=new Player()
player.getCount()
 
}
function draw(){

  if(playerCount===4){
    gameState=1
  }
  if(gameState===1){
    game.play()
  }
}
