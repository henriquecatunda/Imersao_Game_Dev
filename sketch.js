function setup() {
  
  createCanvas(windowWidth,windowHeight);
  
   frameRate(40)
  //somDoJogo.loop();
  
  jogo = new Jogo()
  jogo.setup();
  
   jogo2 = new Jogo2();
  jogo2.setup();
  
  telaInicial = new TelaInicial();
  
  
  botaoGerenciador = new Botao('PLAY',width /2 , height/2 );
  
  cenas = {
    
    jogo,
    telaInicial,
    jogo2
  };
}

function keyPressed(){
  
  jogo.keyPressed(key);
}

function keyPressed(){
  
  jogo2.keyPressed(key);
}

function draw(){
  
  cenas[cenaAtual].draw();
  
  
}

