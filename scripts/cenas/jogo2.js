class Jogo2 {

  constructor() {

    this.inimigoAtual = 0;


  }

  setup() {

    cenario2 = new Cenario(imagemCenario2, 3);
    pontuacao = new Pontuacao();
    
     vida = new Vida(3,3);

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 120, 145, 220, 270);

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, 100);

    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10, 200);


    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 300);

    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);

  }

  keyPressed(key) {
    if (key === 'ArrowUp') {

      personagem.pular()
      
      somDoPulo.play()
    }
  }

  draw() {
    cenario2.exibe();
    cenario2.move();
    
     vida.draw();
    
    pontuacao.exibe();
    pontuacao.adicionarPonto();
    pontuacao.mudar();
    
    personagem.exibe();
    personagem.aplicandoGravidade();

    const inimigo = inimigos[this.inimigoAtual];

    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {

      this.inimigoAtual++;
       inimigo.aparece();

      if (this.inimigoAtual > 2) {

        this.inimigoAtual = 0;

      }

      inimigo.velocidade = parseInt(random(20, 40));

    }

    if (personagem.estaColidindo(inimigo)) {

      vida.perdeVida();
      personagem.ficaInvencivel();
      
      if(vida.vidas === 0 ){
       image(imagemGameOver,0,0, windowWidth,windowHeight);
      pontuacao.final();
       noLoop()
      }
      
    }
    
    
    

  }


}