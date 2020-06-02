class Scene1 extends Phaser.Scene {
    constructor() {
        super("Titre");
    }


  init(){
    this.quete;
    this.press;
    this.niveau = 1;
  }

 preload() {
          this.load.image("timebar", "assets/timer.png");
          this.load.image("coureur", "assets/coureur.png");
          this.load.image("entier", "assets/c_entier1.png");
          this.load.image("base", "assets/base.png");
          this.load.image("bouton", "assets/c_bouton.png");
          this.load.image("bandeau_o", "assets/c_bandeau_o.png");
          this.load.image("bandeau_f", "assets/c_bandeau_f.png");
    }

    create() {
            this.diff = 50 * this.niveau;
          

            this.add.image(0,0,'base').setOrigin(0,0);
            //this.add.image(0,0,'debut').setOrigin(0,0);
            this.add.image(0,0,'entier').setOrigin(0,0);
            this.bandeau_f = this.add.image((672 + this.diff),198,'bandeau_f').setOrigin(0,0);
            this.bandeau_o = this.add.image((672 + this.diff),198,'bandeau_o').setOrigin(0,0).setAlpha(0);

            
                        
            this.coureur = this.add.image(500,150,'coureur').setOrigin(0,0);
            this.zoneTap = this.add.image(80,315,'bouton').setInteractive().setScrollFactor(0, 0);

            this.cameras.main.startFollow(this.coureur);
            this.cameras.main.setBounds(0, 0, 1456, 600);
            
            this.zoneTap.on('pointerdown',() => {
              this.coureur.x += 20;
              console.log("hello");
            })
            

            

        //Timer
            let gameOptions = { initialTime: 600 }
            this.timeLeft = gameOptions.initialTime;

            let timecontainer = this.add.sprite(0, 0, "timecontainer").setOrigin(0,0);
            let timebar = this.add.sprite(0, 0, "timebar").setOrigin(0,0);
            this.energyMask = this.add.sprite(timebar.x, timebar.y, "timebar").setOrigin(0,0);

            this.energyMask.visible = false;

            this.tweens.addCounter({
              from: 255,
              to: 255,
              duration: 5000,
              onUpdate: function (tween)
              {
                var value = Math.floor(tween.getValue());

                timebar.setTint(Phaser.Display.Color.GetColor(value, value, value));
              }
            });
     
            timebar.mask = new Phaser.Display.Masks.BitmapMask(this, this.energyMask);

            this.gameTimer = this.time.addEvent({
                delay: 10,
                callback: function(){
                    this.timeLeft --;
                    let stepWidth = this.energyMask.displayWidth / gameOptions.initialTime;
                    this.energyMask.x -= stepWidth;
                    if(this.timeLeft == 0){
                        console.log("looser");
                        //this.scene.start("PlayGame");
                    }
                },
                callbackScope: this,
                loop: true
            });
    }
  update() {
    if (this.coureur.x >= (653 + this.diff)){
      this.zoneTap.destroy(true,true);
      this.bandeau_o.setAlpha(1);
      this.gameTimer.paused = true;
    }
    

  }

}
