//classe começa com letra maiuscula//;
class Jogador{
    constructor(){
      
      this.imagem = loadImage("jogo/imgJogo/jogador.png");
      this.posX= 280;
      this.posY= 250;
      this.velocidade= 5;
      this.altura= 80;
      this.largura= 140;
      
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posx + this.largura;
    }
  
   //Estrutura que descreve comportamentos de um determinado objeto(jogador);//
  
   mova(){
    image(this.imagem,this.posX,this.posY,this.altura,this.largura);     
    
      if((keyIsDown(39)) && ((this.xFinal<650))) {
        this.posX += this.velocidade;
        // o número 39 é responsável por mover a setinha para direita;//
      }
       if((keyIsDown(37)) && ((this.xInicial>0))){
        this.posX -= this.velocidade;
         // o número 37 é responsável por mover a setinha para a esquerda;//
      }
       
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
    // faz com que o jogador se mova;//
  
  } 