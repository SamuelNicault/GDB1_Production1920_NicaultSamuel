class Scene0 extends Phaser.Scene {
    constructor() {
        super("Init");
    }

  init(data){
    this.niveau = data.niveau;
    this.choix = data.choix;
    this.score = data.score;
    this.vie = data.vie;
    this.or = data.or;
    this.argent = data.argent;
    this.bronze = data.bronze;
  }

  preload() {
              //Titre
          this.load.image('boutons', 'Assets/Monde/boutons_titre.png');
          this.load.image('Change', 'Assets/Monde/change.png');
          this.load.image('Quitter', 'Assets/Monde/bouton_quitter.png');
          this.load.image('Start', 'Assets/Monde/bouton_start.png');
          this.load.image('Trophées', 'Assets/Monde/bouton_trophées.png');
          this.load.image('logo', 'Assets/Logo.png');
          this.load.image("timebar", "Assets/Monde/timer.png");
          this.load.image("bandeau", "Assets/Monde/bandeau.png");
          this.load.image("bandeau1", "Assets/Monde/bandeau1.png");
          this.load.image("bandeau2", "Assets/Monde/bandeau2.png");
          this.load.image("bandeau3", "Assets/Monde/bandeau3.png");    


              //Jeu 1
          this.load.spritesheet("coureur", "Assets/Course/c_coureur.png", {frameWidth: 136, frameHeight: 134});
          this.load.spritesheet("coureur1", "Assets/Course/c_coureur_1.png", {frameWidth: 136, frameHeight: 134});
          this.load.spritesheet("coureur2", "Assets/Course/c_coureur_2.png", {frameWidth: 136, frameHeight: 134});
          this.load.spritesheet("coureur3", "Assets/Course/c_coureur_3.png", {frameWidth: 136, frameHeight: 134});
          this.load.spritesheet("c_coureur", "Assets/Course/c_c_coureur.png", {frameWidth: 136, frameHeight: 134});
          this.load.image("entier", "Assets/Course/c_fond.png");
          this.load.image("c_bouton", "Assets/Course/c_bouton.png");
          this.load.image("bandeau_o", "Assets/Course/c_bandeau_o.png");
          this.load.image("bandeau_f", "Assets/Course/c_bandeau_f.png");

              //Jeu 2
          this.load.image("cible", "Assets/Tir/t_cible.png");
          this.load.image("viseur", "Assets/Tir/t_viseur.png");
          this.load.image("centre", "Assets/Tir/t_centre_viseur.png");
          this.load.image("t_entier", "Assets/Tir/t_fond.png");
          this.load.image("t_bouton", "Assets/Tir/t_bouton.png");
          this.load.image("fleches", "Assets/Tir/t_fleches.png");
          this.load.image("flecheH", "Assets/Tir/t_fleche_h.png");
          this.load.image("flecheB", "Assets/Tir/t_fleche_b.png");
          this.load.image("flecheG", "Assets/Tir/t_fleche_g.png");
          this.load.image("flecheD", "Assets/Tir/t_fleche_d.png");

              //Jeu 3
          this.load.image("e_entier", "Assets/Escrime/e_fond.png");

          this.load.image("perso_a_top", "Assets/Escrime/e_attak_top.png");
          this.load.image("perso_a_mid", "Assets/Escrime/e_attak_mid.png");
          this.load.image("perso_a_bot", "Assets/Escrime/e_attak_bot.png");
          this.load.image("perso_mid", "Assets/Escrime/e_mid.png");
          this.load.image("perso_top", "Assets/Escrime/e_top.png");
          this.load.image("perso_bot", "Assets/Escrime/e_bot.png");

          //niv1
          this.load.image("perso_a_top1", "Assets/Escrime/niv1/e_attak_top_1.png");
          this.load.image("perso_a_mid1", "Assets/Escrime/niv1/e_attak_mid_1.png");
          this.load.image("perso_a_bot1", "Assets/Escrime/niv1/e_attak_bot_1.png");
          this.load.image("perso_mid1", "Assets/Escrime/niv1/e_mid_1.png");
          this.load.image("perso_top1", "Assets/Escrime/niv1/e_top_1.png");
          this.load.image("perso_bot1", "Assets/Escrime/niv1/e_bot_1.png");

          //niv2
          this.load.image("perso_a_top2", "Assets/Escrime/niv2/e_attak_top_2.png");
          this.load.image("perso_a_mid2", "Assets/Escrime/niv2/e_attak_mid_2.png");
          this.load.image("perso_a_bot2", "Assets/Escrime/niv2/e_attak_bot_2.png");
          this.load.image("perso_mid2", "Assets/Escrime/niv2/e_mid_2.png");
          this.load.image("perso_top2", "Assets/Escrime/niv2/e_top_2.png");
          this.load.image("perso_bot2", "Assets/Escrime/niv2/e_bot_2.png");

          //niv3
          this.load.image("perso_a_top3", "Assets/Escrime/niv3/e_attak_top_3.png");
          this.load.image("perso_a_mid3", "Assets/Escrime/niv3/e_attak_mid_3.png");
          this.load.image("perso_a_bot3", "Assets/Escrime/niv3/e_attak_bot_3.png");
          this.load.image("perso_mid3", "Assets/Escrime/niv3/e_mid_3.png");
          this.load.image("perso_top3", "Assets/Escrime/niv3/e_top_3.png");
          this.load.image("perso_bot3", "Assets/Escrime/niv3/e_bot_3.png");

          this.load.image("fleuret", "Assets/Escrime/e_fleuret.png");

          this.load.image("c_mid", "Assets/Escrime/e_c_mid.png");
          this.load.image("c_top", "Assets/Escrime/e_c_top.png");
          this.load.image("c_bot", "Assets/Escrime/e_c_bot.png");
          this.load.image("c_fleuret", "Assets/Escrime/e_c_fleuret.png");

          this.load.image("e_bouton", "Assets/Escrime/e_bouton.png");
          this.load.image("e_fleches", "Assets/Escrime/e_fleches.png");
          this.load.image("e_flecheH", "Assets/Escrime/e_fleche_h.png");
          this.load.image("e_flecheB", "Assets/Escrime/e_fleche_b.png");        

              //Transition
          this.load.image("vie", "Assets/Monde/vie.png");
          this.load.image("mort", "Assets/Monde/mort.png");
          this.load.image("or", "Assets/Monde/Medal_G.png");        
          this.load.image("argent", "Assets/Monde/Medal_S.png");        
          this.load.image("bronze", "Assets/Monde/Medal_C.png");        

  }

  create() {

    this.add.image(200,0,'logo').setOrigin(0,0).setScale(0.14);

    this.niveau = 0;
    this.score = 0;
    this.vie = 3;
    this.or = 20;
    this.argent = 20;
    this.bronze = 20;
    this.choix = 1;
       

    this.timedEvent = this.time.delayedCall(50, changeLevel, [], this);

    function changeLevel () {
      this.scene.start('Titre', {choix: this.choix, or: this.or, argent: this.argent, bronze: this.bronze, niveau: this.niveau, vie: this.vie, score: this.score});

    }

  }

  update() {
  }
}
