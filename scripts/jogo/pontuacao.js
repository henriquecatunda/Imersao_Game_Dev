class Pontuacao {

  constructor(){
    
    this.pontos = 0 
    
  }
  
  exibe(){
  
    textAlign(RIGHT)
    fill('#fff')
    textSize(50);
    text( parseInt(this.pontos), width -30, 50);
  }
  
  adicionarPonto(){
  
    this.pontos += 0.2;
  
  }
  
  
  mudar(){
  
  
  if(this.pontos > 80){
    
    cenaAtual = 'jogo2';
    
    
  }
  }
  
  final(){
     textAlign(CENTER)
     text(`pontos: ${ parseInt(this.pontos)}`, width /2 , 130);
    
  }
  
  

  
}