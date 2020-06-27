class Personagem  extends Animacao {

  constructor(matriz,imagem,x,variacaoy,largura,altura,larguraSprite,alturaSprite){
  
super(matriz,imagem,x,variacaoy,largura,altura,larguraSprite,alturaSprite)
    
    this.variacaoy = variacaoy;
    this.yInicial = height - this.altura - this.variacaoy;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0 
    this.gravidade = 5;
    this.alturaDoPulo = -50;
    this.pilos = 0;
    this.invencivel = false;
    
  }
  
  pular(){
  
   if(this.pulos < 2 ){
     
   this.velocidadeDoPulo  =  this.alturaDoPulo;
     this.pulos++;
   }
  
  }
  
  aplicandoGravidade(){
  
   this.y = this.y + this.velocidadeDoPulo 
  this.velocidadeDoPulo = this.velocidadeDoPulo +           this.gravidade;
    
      if(this.y > this.yInicial){
       
        this.y = this.yInicial;
        this.pulos = 0;
      }
  }
  
  ficaInvencivel(){
  
  this.invencivel = true;
  setTimeout(()=> {
  
     this.invencivel = false
  },1000)
  }
  
  
  estaColidindo(inimigo){
  
    if(this.invencivel){
      
      return false;
       
       }
    
      const precisao = .7
      const colisao =   collideRectRect(this.x,this.y,this.largura * precisao  ,this.altura * precisao,inimigo.x ,inimigo.y ,inimigo.largura * precisao,inimigo.altura * precisao )
      
      return colisao;
  
  }
  
  
  
  }