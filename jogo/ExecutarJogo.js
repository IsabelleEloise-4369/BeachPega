function executarJogo(){
    background(imgPraia);
  jogador.mova();
  // move o objeto
  
  for(let i = 0; i < objetos.length; i++){
    objetos[i].mova();
    if (objetos[i].posX > 600){
      objetos[i] = new Objetos(objetos[i].posY);
    }
    if (
    jogador.xInicial<objetos[i].xFinal &&
    jogador.xFinal>objetos[i].xInicial &&
    jogador.yInicial<objetos[i].yFinal &&
    jogador.yFinal>objetos[i].yInicial
      ) {
      
      if(
        objetos[i].imagem == imgObjetos [4]
      ){ 
        objetos[i] = new Objetos (objetos[i].PosY)
        //Zera a pontuação
        vidas ++;
        somBomba.play();//Exibir som
        controleTela = ("MORTE")

        if(vidas == 3){
          controleTela = "GameOver";
          contador = 0;
          vidas = 0;
          jogador = new Jogador ();
        }


      }else{ //Colidi com a fruta 
        objetos[i] = new Objetos (objetos[i].PosY);
        contador ++ // somar pontuação 
        somObjetos.play();// Exibi som
      }
    }
    text("PONTUAÇÃO:" + contador, 250,20);
    text("BOMBAS:" +vidas, 10, 390);
  //executa o código que está dentro dela infinitamente. 
 }
}