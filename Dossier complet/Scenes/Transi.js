class Scene4 extends Phaser.Scene {
    constructor() {
        super("Transi");
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
 
  }

  create() {
    this.add.image(125, 140, 'or').setScale(0.5,0.5);
    this.add.image(375, 140, 'argent').setScale(0.5,0.5);
    this.add.image(625, 140, 'bronze').setScale(0.5,0.5);

    this.add.image(325, 300, 'mort');
    this.vie1 = this.add.image(325, 300, 'vie');

    this.add.image(375, 300, 'mort');
    this.vie2 = this.add.image(375, 300, 'vie');

    this.add.image(425, 300, 'mort');
    this.vie3 = this.add.image(425, 300, 'vie');

    this.nb_orText = this.add.text(90, 216, "OR X" + this.or, {'font': '23px', fill: '#fff'});
    this.nb_argentText = this.add.text(310, 216, "ARGENT X" + this.argent, {'font': '23px', fill: '#fff'});
    this.nb_bronzeText = this.add.text(564, 216, "BRONZE X" + this.bronze, {'font': '23px', fill: '#fff'});
    this.scoreText = this.add.text(310, 40, "Score : " + this.score, {'font': '23px', fill: '#fff'});
    this.niveauText = this.add.text(250, 20, "Prochain Niveau: " + (this.niveau + 1), {'font': '23px', fill: '#fff'});

    if (this.vie > 0){
      this.Choix_lvl = Phaser.Math.Between(1, 3);
      if(this.Choix_lvl == 1){
        this.timedEvent = this.time.delayedCall(5000, changeLevel1, [], this);
      }

      if(this.Choix_lvl == 2){
        this.timedEvent = this.time.delayedCall(5000, changeLevel2, [], this);
      }  

      if(this.Choix_lvl == 3){
        this.timedEvent = this.time.delayedCall(5000, changeLevel3, [], this);
      }


      function changeLevel1 () {
        this.scene.start('Titre', {or: this.or, argent: this.argent, bronze: this.bronze, niveau: this.niveau, vie: this.vie, score: this.score});
      }

      function changeLevel2 () {
        this.scene.start('Suite', {or: this.or, argent: this.argent, bronze: this.bronze, niveau: this.niveau, vie: this.vie, score: this.score});
      }

      function changeLevel3 () {
        this.scene.start('Escrime', {or: this.or, argent: this.argent, bronze: this.bronze, niveau: this.niveau, vie: this.vie, score: this.score});
      }
    }

  }

  update() {
    if (this.vie <= 2){
      this.vie1.destroy (true,true);
    }

    if (this.vie <= 1){
      this.vie2.destroy (true,true);
    }

    if (this.vie <= 0){
      this.vie3.destroy (true,true);
    }
  }
}

