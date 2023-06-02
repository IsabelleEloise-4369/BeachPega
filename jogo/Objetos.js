class Objetos{
    constructor (parametroY){
      this.imagem = imgObjetos[int(random(0,5))];
      this.posX = 0;
      this.posY = random (30, 500);
      this.velocidade = random(1,5 +contador);
      this.largura = 100;
      this.altura = 50;
      
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
    //Estrutura que descreve comportamentos de um determinado objeto(Objetos);//
    
    mova(){
      this.posX += this.velocidade;
      image(this.imagem,this.posY,this.posX,this.largura,this.altura);
      
      this.xInicial = this.posY;
      this.xFinal = this.posY + this.altura;
      this.yInicial = this.posX;
      this.yFinal = this.posX + this.largura;
    }
    //mova serve para fazer o objeto se mover;//
  }