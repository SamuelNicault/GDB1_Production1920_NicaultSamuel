class Scene0 extends Phaser.Scene {
    constructor() {
        super("Init");
    }

  init(data){
    this.niveau = data.niveau;
    this.score = data.score;
    this.vie = data.vie;
    this.or = data.or;
    this.argent = data.argent;
    this.bronze = data.bronze;
  }

  preload() {
              //Titre
          this.load.image('boutons', 'Assets/boutons_titre.png');
          this.load.image('logo', 'Assets/Logo.png');
          this.load.image('retour', 'Assets/retour.png');

              //Jeu 1
          this.load.image("timebar", "Assets/timer.png");
          this.load.spritesheet("coureur", "Assets/c_coureur.png", {frameWidth: 136, frameHeight: 134});
          this.load.spritesheet("c_coureur", "Assets/c_c_coureur.png", {frameWidth: 136, frameHeight: 134});
          this.load.image("entier", "Assets/c_fond.png");
          this.load.image("c_bouton", "Assets/c_bouton.png");
          this.load.image("bandeau_o", "Assets/c_bandeau_o.png");
          this.load.image("bandeau_f", "Assets/c_bandeau_f.png");

              //Jeu 2
          this.load.image("cible", "Assets/t_cible.png");
          this.load.image("timebar", "Assets/timer.png");
          this.load.image("viseur", "Assets/t_viseur.png");
          this.load.image("centre", "Assets/t_centre_viseur.png");
          this.load.image("t_entier", "Assets/t_fond.png");
          this.load.image("t_bouton", "Assets/t_bouton.png");
          this.load.image("fleches", "Assets/t_fleches.png");
          this.load.image("flecheH", "Assets/t_fleche_h.png");
          this.load.image("flecheB", "Assets/t_fleche_b.png");
          this.load.image("flecheG", "Assets/t_fleche_g.png");
          this.load.image("flecheD", "Assets/t_fleche_d.png");

              //Jeu 3
          this.load.image("timebar", "Assets/timer.png");
          this.load.image("e_entier", "Assets/e_fond.png");

          this.load.image("perso_a_top", "Assets/e_attak_top.png");
          this.load.image("perso_a_mid", "Assets/e_attak_mid.png");
          this.load.image("perso_a_bot", "Assets/e_attak_bot.png");
          this.load.image("perso_mid", "Assets/e_mid.png");
          this.load.image("perso_top", "Assets/e_top.png");
          this.load.image("perso_bot", "Assets/e_bot.png");
          this.load.image("fleuret", "Assets/e_fleuret.png");

          this.load.image("c_mid", "Assets/e_c_mid.png");
          this.load.image("c_top", "Assets/e_c_top.png");
          this.load.image("c_bot", "Assets/e_c_bot.png");
          this.load.image("c_fleuret", "Assets/e_c_fleuret.png");

          this.load.image("e_bouton", "Assets/e_bouton.png");
          this.load.image("e_fleches", "Assets/e_fleches.png");
          this.load.image("e_flecheH", "Assets/e_fleche_h.png");
          this.load.image("e_flecheB", "Assets/e_fleche_b.png");        

              //Transition
          this.load.image("vie", "Assets/vie.png");
          this.load.image("mort", "Assets/mort.png");
          this.load.image("or", "Assets/Medal_G.png");        
          this.load.image("argent", "Assets/Medal_S.png");        
          this.load.image("bronze", "Assets/Medal_C.png");        

  }

  create() {

    this.add.image(200,0,'logo').setOrigin(0,0).setScale(0.14);

    this.niveau = 0;
    this.score = 0;
    this.vie = 3;
    this.or = 0;
    this.argent = 0;
    this.bronze = 0;
       

    this.timedEvent = this.time.delayedCall(5000, changeLevel, [], this);

    function changeLevel () {
      this.scene.start('Titre', {or: this.or, argent: this.argent, bronze: this.bronze, niveau: this.niveau, vie: this.vie, score: this.score});
       console.log(this.niveau);
        console.log(this.vie);
         console.log(this.score);
    }

  }

  update() {
  }
}
