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
          this.load.image('boutons', 'assets/boutons_titre.png');

              //Jeu 1
          this.load.image("timebar", "assets/timer.png");
          this.load.image("coureur", "assets/coureur.png");
          this.load.image("c_coureur", "assets/c_coureur.png");
          this.load.image("entier", "assets/c_entier1.png");
          this.load.image("base", "assets/base.png");
          this.load.image("c_bouton", "assets/c_bouton.png");
          this.load.image("bandeau_o", "assets/c_bandeau_o.png");
          this.load.image("bandeau_f", "assets/c_bandeau_f.png");

              //Jeu 2
          this.load.image("cible", "assets/t_cible.png");
          this.load.image("timebar", "assets/timer.png");
          this.load.image("viseur", "assets/t_viseur.png");
          this.load.image("centre", "assets/t_centre_viseur.png");
          this.load.image("entier", "assets/fin.png");
          this.load.image("t_bouton", "assets/t_bouton.png");
          this.load.image("fleches", "assets/t_fleches.png");
          this.load.image("flecheH", "assets/t_fleche_h.png");
          this.load.image("flecheB", "assets/t_fleche_b.png");
          this.load.image("flecheG", "assets/t_fleche_g.png");
          this.load.image("flecheD", "assets/t_fleche_d.png");

              //Jeu 3
          this.load.image("timebar", "assets/timer.png");
          this.load.image("entier", "assets/fin.png");

          this.load.image("perso_a_top", "assets/e_attak_top.png");
          this.load.image("perso_a_mid", "assets/e_attak_mid.png");
          this.load.image("perso_a_bot", "assets/e_attak_bot.png");
          this.load.image("perso_mid", "assets/e_mid.png");
          this.load.image("perso_top", "assets/e_top.png");
          this.load.image("perso_bot", "assets/e_bot.png");
          this.load.image("fleuret", "assets/e_fleuret.png");

          this.load.image("c_mid", "assets/e_c_mid.png");
          this.load.image("c_top", "assets/e_c_top.png");
          this.load.image("c_bot", "assets/e_c_bot.png");
          this.load.image("c_fleuret", "assets/e_c_fleuret.png");

          this.load.image("e_bouton", "assets/e_bouton.png");
          this.load.image("e_fleches", "assets/e_fleches.png");
          this.load.image("e_flecheH", "assets/e_fleche_h.png");
          this.load.image("e_flecheB", "assets/e_fleche_b.png");        

              //Transition
          this.load.image("vie", "assets/vie.png");
          this.load.image("mort", "assets/mort.png");
          this.load.image("or", "assets/medaille_or.png");        
          this.load.image("argent", "assets/medaille_argent.png");        
          this.load.image("bronze", "assets/medaille_bronze.png");        

  }

  create() {
    this.niveau = 0;
    this.score = 0;
    this.vie = 3;
    this.or = 0;
    this.argent = 0;
    this.bronze = 0;
       

    this.timedEvent = this.time.delayedCall(1, changeLevel, [], this);

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
