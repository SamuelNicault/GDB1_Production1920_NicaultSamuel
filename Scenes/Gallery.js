class Scene6 extends Phaser.Scene {
    constructor() {
        super("Gallery");
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
    console.log('Bonjour');
    
    this.add.image(140, 100, 'boutons').setScale(0.75);
    this.add.image(140, 200, 'boutons').setScale(0.75);
    this.add.image(140, 300, 'boutons').setScale(0.75);
    
    this.add.image(375, 100, 'boutons').setScale(0.75);
    this.add.image(375, 200, 'boutons').setScale(0.75);
    this.add.image(375, 300, 'boutons').setScale(0.75);
    
    this.add.image(610, 100, 'boutons').setScale(0.75);
    this.add.image(610, 200, 'boutons').setScale(0.75);
    this.add.image(610, 300, 'boutons').setScale(0.75);

    
    this.bouton1 = this.add.image(35, 31, 'Change').setInteractive();

    this.bouton1.on('pointerdown',() => {
      this.timedEvent = this.time.delayedCall(0, changeLevel, [], this);
    })

    this.bouton1.on('pointerover',() => {
    })

    this.bouton1.on('pointerout',() => {

    })


    
    this.UnchaqText = this.add.text(75, 100, "Apprentis", {'font': '23px', fill: '#fff'}).setVisible(false);
    this.DeuxchaqText = this.add.text(88, 200, "Coureur", {'font': '23px', fill: '#fff'}).setVisible(false);
    this.TroisBText = this.add.text(90, 300, "Sportif", {'font': '23px', fill: '#fff'}).setVisible(false);
    this.SixBText = this.add.text(332, 100, "Hatlète", {'font': '23px', fill: '#fff'}).setVisible(false);
    this.TroisAText = this.add.text(330, 200, "Pactole", {'font': '23px', fill: '#fff'}).setVisible(false);
    this.SixAText = this.add.text(346, 300, "Géant", {'font': '23px', fill: '#fff'}).setVisible(false);
    this.TroisOText = this.add.text(576, 100, "Héros", {'font': '23px', fill: '#fff'}).setVisible(false);
    this.SixOText = this.add.text(556, 200, "Champion", {'font': '23px', fill: '#fff'}).setVisible(false);
    this.RText = this.add.text(512, 300, "Pied de podium", {'font': '23px', fill: '#fff'}).setVisible(false);
    
    if(this.or == 0 & this.argent == 0 & this.bronze == 0){
      this.RText.setVisible(true);
    }

    if(this.or >= 1 & this.argent >= 1 & this.bronze >= 1){
      this.UnchaqText.setVisible(true);
    }

    if(this.or >= 2 & this.argent >= 2 & this.bronze >= 2){
      this.DeuxchaqText.setVisible(true);
    }

    if(this.bronze >= 3){
      this.TroisBText.setVisible(true);
    }

    if(this.bronze > 6){
      this.SixBText.setVisible(true);
    }

    if(this.argent >= 3){
      this.TroisAText.setVisible(true);
    }

    if(this.argent > 6){
      this.SixAText.setVisible(true);
    }

    if(this.or >= 3){
      this.TroisOText.setVisible(true);
    }

    if(this.or > 6){
      this.SixOText.setVisible(true);
    }

    function changeLevel () {
      this.scene.start('Titre', {choix: this.choix, or: this.or, argent: this.argent, bronze: this.bronze, niveau: this.niveau, vie: this.vie, score: this.score});
    }

  }

  update() {
  }
}
