class TelaInicial {

  construtor(){
  
  
  
  }
  
  
  
draw(){

 
    this._imagemDeFundo();
    this._texto();
  this._botao();
}

  _imagemDeFundo(){
  
    image(imagemTelaInicial, 0,0 , windowWidth,windowHeight);
  }
  
  _texto(){
  
    textFont(fontTelaInicial);
    textSize(50);
    textAlign(CENTER)   
    text('Guerras medievais', width /2  ,80);
    text('retorne o controle do reino', width /2 , 130)
  
     
  }
  
  _botao(){
  
      
     botaoGerenciador.y = height /7 *5;
    botaoGerenciador.draw();
    
  
  }
  
  
}