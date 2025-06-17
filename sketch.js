//variáveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 33;
let raio = diametro / 2;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 110;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons jogo
let raquetada;
let ponto;
let trilha;

let colidiu = false;




function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
    background("lightpink");
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
    movimentaMinhaRaquete();
    verificaColisaoRaquete(xRaquete, yRaquete);
    verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaRaqueteOponente();
    incluiPlacar();
    marcaPonto();
}




function mostraBolinha() {
  fill("lightblue")
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x,y) {
    rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if(keyIsDown(87)) {
    yRaquete -= 10;
  }
  if(keyIsDown(83)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete() {
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXBolinha *= -1;
      raquetada.play();
  }
}

function movimentaRaqueteOponente() {
    if(keyIsDown(UP_ARROW)) {
    yRaqueteOponente -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaqueteOponente += 10;
  }
}
function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(30);
    fill(color(0, 130, 0));
    rect(150, 10, 40, 30);
    fill(255);
    text(meusPontos, 170, 35);
    fill(color(200, 0, 0));
    rect(450, 10, 40, 30);
    fill(255);
    text(pontosDoOponente, 470, 35);
    
}

function marcaPonto() {
    if (xBolinha + raio > 597) {
        meusPontos += 1;
      ponto.play();
    }
    if (xBolinha - raio < 3) {
        pontosDoOponente += 1;
      ponto.play();
    }
}

function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}
