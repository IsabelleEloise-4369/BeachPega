// variavel começa com letra minuscula//;
var jogador= [];
var imgObjetos = []; 
var objetos= []; 
var contador= 0;
var somObjetos;
var somBomba;
var imgAbertura;
var controleTela = "INICIO";
var imgGameOver;
var vidas= 0;

//var cria uma variável;//


function preload(){
  imgPraia = loadImage("jogo/imgJogo/Praia.jpg");
  
   imgObjetos[0] = loadImage("jogo/imgJogo/chinelo.png");
   imgObjetos[1] = loadImage("jogo/imgJogo/coco.png");
   imgObjetos[2] = loadImage("jogo/imgJogo/oculos.png");
   imgObjetos[3] = loadImage("jogo/imgJogo/concha.png");
   imgObjetos[4] = loadImage("jogo/imgJogo/Bomba.png");

   imgAbertura= loadImage("img/Canvas/abertura.png");
   imgGameOver= loadImage("img/Canvas/game_over.gif");
  
  
  
  objetos [0]= new Objetos(45);
  objetos [1]= new Objetos(115);
  objetos [2]= new Objetos(290);
  objetos [3]= new Objetos (300);
  objetos [4]= new Objetos (400);
  
  //Adiciona som 
  somObjetos = loadSound("Audio/som.objeto.mp3");
  somBomba = loadSound ("Audio/som.bomba.mp3");
 
  
    jogador = new Jogador();
  
}
// Adiciona as imagens e defini seus tamanhos;//

function setup() {
  createCanvas(600, 400).parent("jogo");
} 

function keyPressed(){
  if(keyCode == 13){
     controleTela = "JOGO";
  }
}

function draw() {
  if (controleTela == "INICIO"){
    mostraAbertura();
  } else{
    executarJogo();
  } if(controleTela == "GameOver"){
    GameOver();
  }
 
}