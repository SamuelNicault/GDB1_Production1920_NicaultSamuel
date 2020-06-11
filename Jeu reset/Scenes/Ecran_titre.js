class Scene1 extends Phaser.Scene {
    constructor() {
        super("Titre");
    }

  init(data){
    this.niveau = data.niveau;
    this.score = data.score;
    this.choix = data.choix;
    this.vie = data.vie;
    this.or = data.or;
    this.argent = data.argent;
    this.bronze = data.bronze;
  }

  preload() {
  
  }

  create() {
            
    this.vie = 3;
    

    this.bouton1 = this.add.image(375, 100, 'Start').setInteractive();
    this.bouton2 = this.add.image(375, 200, 'Trophées').setInteractive();
    this.bouton3 = this.add.image(375, 300, 'Quitter').setInteractive();

    this.bouton4 = this.add.image(560, 40, 'Change').setInteractive();
    this.bouton5 = this.add.image(710, 40, 'Change').setFlipX(true).setInteractive();

    this.bouton1.on('pointerdown',() => {
      this.timedEvent = this.time.delayedCall(0, changeLevel, [], this);
    })

    this.bouton1.on('pointerover',() => {
      this.bouton1.setScale(1.2);
    })

    this.bouton1.on('pointerout',() => {
      this.bouton1.setScale(1);

    })



    this.bouton2.on('pointerdown',() => {
      this.scene.start('Gallery', {choix: this.choix, or: this.or, argent: this.argent, bronze: this.bronze, niveau: this.niveau, vie: this.vie, score: this.score});
    })

    this.bouton2.on('pointerover',() => {
      this.bouton2.setScale(1.2);

    })

    this.bouton2.on('pointerout',() => {
      this.bouton2.setScale(1);

    })



    this.bouton3.on('pointerdown',() => {
    })

    this.bouton3.on('pointerover',() => {
      this.bouton3.setScale(1.2);
    })

    this.bouton3.on('pointerout',() => {
      this.bouton3.setScale(1);
    })

    this.bouton4.on('pointerdown',() => {
      if(this.choix > 1){this.choix --}
      else if (this.choix == 1){this.choix = 4}
    })

    this.bouton5.on('pointerdown',() => {
      if(this.choix < 4){this.choix ++}
      else if (this.choix == 4){this.choix = 1}  
    })

   
    function changeLevel () {
      this.scene.start('Transi', {choix: this.choix, or: this.or, argent: this.argent, bronze: this.bronze, niveau: this.niveau, vie: this.vie, score: this.score});        
    }

  }

  update() {
    if(this.or < 3 & this.choix == 2){this.choix = 1};
    if(this.or < 3 & this.choix == 3){this.choix = 1};
    if(this.or < 3 & this.choix == 4){this.choix = 1};

    if(this.or < 7 & this.choix == 3){this.choix = 1};
    if(this.or < 7 & this.choix == 4){this.choix = 1};

    if(this.or < 12 & this.choix == 4){this.choix = 1};

    console.log(this.choix);
    if (this.choix == 1){            
      this.color = this.add.image(635, 40, 'bandeau').setScale(1);
    }

    if (this.choix == 2 & this.or > 2){            
      this.color = this.add.image(635, 40, 'bandeau1').setScale(1);
    }

    if (this.choix == 3 & this.or > 6){            
      this.color = this.add.image(635, 40, 'bandeau2').setScale(1);
    }

    if (this.choix == 4 & this.or > 11){            
      this.color = this.add.image(635, 40, 'bandeau3').setScale(1);
    }  
  }
}
