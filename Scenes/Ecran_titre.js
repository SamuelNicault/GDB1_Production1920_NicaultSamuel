class Scene1 extends Phaser.Scene {
    constructor() {
        super("Titre");
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
    console.log('Bonjour');

    this.bouton1 = this.add.image(375, 100, 'boutons').setInteractive();
    this.bouton2 = this.add.image(375, 200, 'boutons').setInteractive();
    this.bouton3 = this.add.image(375, 300, 'boutons').setInteractive();

    this.bouton1.on('pointerdown',() => {
      this.timedEvent = this.time.delayedCall(0, changeLevel, [], this);
    })

    this.bouton1.on('pointerover',() => {
      this.bouton1.setScale(1.2);
      this.nbText.setScale(1.2)
    })

    this.bouton1.on('pointerout',() => {
      this.bouton1.setScale(1);
      this.nbText.setScale(1)

    })



    this.bouton2.on('pointerdown',() => {
      this.scene.start('Gallery', {or: this.or, argent: this.argent, bronze: this.bronze, niveau: this.niveau, vie: this.vie, score: this.score});
    })

    this.bouton2.on('pointerover',() => {
      this.bouton2.setScale(1.2);
      this.glText.setScale(1.2)

    })

    this.bouton2.on('pointerout',() => {
      this.bouton2.setScale(1);
      this.glText.setScale(1)

    })



    this.bouton3.on('pointerdown',() => {
    })

    this.bouton3.on('pointerover',() => {
      this.bouton3.setScale(1.2);
      this.qtText.setScale(1.2)
    })

    this.bouton3.on('pointerout',() => {
      this.bouton3.setScale(1);
      this.qtText.setScale(1)
    })

    this.nbText = this.add.text(346, 90, "PLAY", {'font': '23px', fill: '#fff'});
    this.glText = this.add.text(326, 190, "GALLERY", {'font': '23px', fill: '#fff'});
    this.qtText = this.add.text(326, 290, "QUITTER", {'font': '23px', fill: '#fff'});

   
    function changeLevel () {
      this.scene.start('Transi', {or: this.or, argent: this.argent, bronze: this.bronze, niveau: this.niveau, vie: this.vie, score: this.score});
       console.log(this.niveau);
        console.log(this.vie);
         console.log(this.score);
    }

  }

  update() {
  }
}
