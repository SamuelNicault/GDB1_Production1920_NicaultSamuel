class Scene2 extends Phaser.Scene {
    constructor() {
        super("Micro_1");
    }


  init(data){
    this.niveau = data.niveau;
    this.score = data.score;
    this.vie = data.vie;
    this.or = data.or;
    this.argent = data.argent;
    this.bronze = data.bronze;
  }

  preload(){
    
  }

  create() {
            this.diff = 100 * this.niveau;
            this.niveau ++;

            this.add.image(0,0,'base').setOrigin(0,0);
            this.add.image(0,0,'entier').setOrigin(0,0);

            this.bandeau_f = this.add.image((450 + this.diff),198,'bandeau_f').setOrigin(0,0);
            this.bandeau_o = this.add.image((450 + this.diff),198,'bandeau_o').setOrigin(0,0).setAlpha(0);
                        
            this.coureur = this.add.image(30,150,'coureur').setOrigin(0,0);
            this.c_c_1 = this.add.image(30,150,'c_coureur').setOrigin(0,0);
            this.c_c_2 = this.add.image(30,150,'c_coureur').setOrigin(0,0);
            this.c_c_3 = this.add.image(30,150,'c_coureur').setOrigin(0,0);
            this.remplace = this.add.image(0,0,'base').setOrigin(0,0).setAlpha(1);

            this.zoneTap = this.add.image(80,315,'c_bouton').setInteractive().setScrollFactor(0, 0);


            this.cameras.main.startFollow(this.coureur);
            this.cameras.main.setBounds(0, 0, 2244, 600);
            
            this.zoneTap.on('pointerdown',() => {
              this.remplace.setAlpha(0);
              this.coureur.x += 20;
            })

            function changeLevel () {
              this.scene.start('Transi', {or: this.or, argent: this.argent, bronze: this.bronze, niveau: this.niveau, vie: this.vie, score: this.score});
            }
        this.press;
        this.isWin = 0;
        this.isLoose = 0;


        //Timer
            let gameOptions = { initialTime: 600 }
            this.timeLeft = gameOptions.initialTime;

            let timecontainer = this.add.sprite(-50, -50, "timecontainer").setOrigin(0,0).setScrollFactor(0, 0);
            let timebar = this.add.sprite(0, 0, "timebar").setOrigin(0,0).setScrollFactor(0, 0);
            this.energyMask = this.add.sprite(timebar.x, timebar.y, "timebar").setOrigin(0,0).setScrollFactor(0, 0);

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
                    if (this.coureur.x >= (431 + this.diff)){
                      if(this.isLoose == 0){
                        this.gameTimer.paused = true;
                        this.isWin = 1;
                        if(this.timeLeft < 600 & this.timeLeft > 100){
                          this.score += 200 * this.niveau;
                          this.victoireText.visible = true;
                          this.or ++;
                        }
                        if(this.timeLeft < 100 & this.timeLeft > 40){
                          this.score += 100 * this.niveau;
                          this.argentText.visible = true;
                          this.argent ++;
                        }
                        if(this.timeLeft < 40 & this.timeLeft > 0){
                          this.score += 50 * this.niveau;
                          this.bronzeText.visible = true;
                          this.bronze ++;
                        }
                      }
                      this.timedEvent = this.time.delayedCall(2000, changeLevel, [], this);
                      this.zoneTap.destroy(true,true);
                      this.bandeau_o.setAlpha(1);
                    }
                    if(this.timeLeft == 0){
                      
                        this.zoneTap.destroy(true,true);
                        this.perduText.visible = true;
                        this.gameTimer.paused = true;
                        this.isLoose = 1;
                        if (this.isLoose == 1){
                          this.vie --;
                          this.timedEvent = this.time.delayedCall(2000, changeLevel, [], this);
                        }
                      //this.scene.start("PlayGame");
                    }
                },
                callbackScope: this,
                loop: true
            });

            if (this.isWin == 1){
                  this.timedEvent = this.time.delayedCall(2000, changeLevel, [], this);
            }
        this.victoireText = this.add.text(431 + this.diff, this.coureur.y, "MEDAILLE D'OR", {'font': '23px', fill: '#fff'});
        this.victoireText.visible = false;

        this.argentText = this.add.text(431 + this.diff, this.coureur.y, "MEDAILLE D'ARGENT", {'font': '23px', fill: '#fff'});
        this.argentText.visible = false;

        this.bronzeText = this.add.text(431 + this.diff, this.coureur.y, "MEDAILLE DE BRONZE", {'font': '23px', fill: '#fff'});
        this.bronzeText.visible = false;

        this.perduText = this.add.text(431 + this.diff, this.coureur.y, "HONTEUX", {'font': '23px', fill: '#fff'});
        this.perduText.visible = false;

        this.timedEvent = this.time.addEvent({delay: 100, callback: c_course, callbackScope: this, loop: true});

        function c_course(){
          if(this.timeLeft > 0){
            if(this.isWin == 0){
              this.c_c_1.x += 5;
              this.c_c_2.x += 7;
              this.c_c_3.x += 10;
            }
          }
        }
    }

  update() {
    if (this.coureur.x >= (431 + this.diff)){
      this.zoneTap.destroy(true,true);
      this.bandeau_o.setAlpha(1);
    } 
  }

}


