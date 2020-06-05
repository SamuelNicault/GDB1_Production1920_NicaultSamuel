class Scene2 extends Phaser.Scene {
    constructor() {
        super("Suite");
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
            this.cible;
            this.press;

            this.niveau ++;

            this.isWin = 0;
            this.isLoose = 0;


            this.camera3 = this.cameras.add(0, 0, 748, 376);
            this.camera2 = this.cameras.add(0, 0, 748, 376);
            this.camera1 = this.cameras.add(285, 100, 177, 177);

            this.diff = 400 / (0.5*this.niveau);
            this.Y = Phaser.Math.Between(50,100);
            this.Y1 = Phaser.Math.Between(-10,80);
            this.X = Phaser.Math.Between(30,60);

            this.fond = this.add.image(0,0,'entier').setOrigin(0,0);
                        
            this.viseur = this.physics.add.image(374,188,'viseur');
            this.viseur.setCollideWorldBounds(true);

            this.centre = this.physics.add.image(this.viseur.x,this.viseur.y,'centre');
            this.centre.setCollideWorldBounds(true);

            this.zoneTap = this.add.image(668,315,'t_bouton').setInteractive();
            this.croix =   this.add.image(80,315,'fleches').setInteractive();
            this.flecheH = this.add.image(80,289,'flecheH').setInteractive();
            this.flecheB = this.add.image(80,341,'flecheB').setInteractive();
            this.flecheG = this.add.image(54,315,'flecheG').setInteractive();
            this.flecheD = this.add.image(106,315,'flecheD').setInteractive();


            this.cibles = this.physics.add.group({
              key: 'cible',
              repeat: 3,
              setXY: {x: 200, y: this.Y, stepX: 100, stepY: this.Y1}
            });
            this.cibles.children.iterate(function (cible) {
              cible.setGravityY(0);
            });

            this.victoireText = this.add.text(284, 176, "MEDAILLE D'OR", {'font': '23px', fill: '#fff'});
            this.victoireText.visible = false;

            this.argentText = this.add.text(254, 176, "MEDAILLE D'ARGENT", {'font': '23px', fill: '#fff'});
            this.argentText.visible = false;

            this.bronzeText = this.add.text(254, 176, "MEDAILLE DE BRONZE", {'font': '23px', fill: '#fff'});
            this.bronzeText.visible = false;

            this.perduText = this.add.text(324, 176, "HONTEUX", {'font': '23px', fill: '#fff'});
            this.perduText.visible = false;

            this.camera1.setAlpha(1).startFollow(this.viseur).setBounds(0, 0, 748, 376).ignore(this.zoneTap).ignore(this.croix).ignore(this.flecheH).ignore(this.flecheB).ignore(this.flecheG).ignore(this.flecheD);
            this.camera2.setAlpha(1).setBounds(0, 0, 748, 376).setBackgroundColor(0x000).ignore(this.centre).ignore(this.cibles).ignore(this.viseur).ignore(this.fond);
            this.camera3.setBounds(0, 0, 748, 376).setBackgroundColor(0x000).ignore(this.zoneTap,this.croix).ignore(this.cibles).ignore(this.croix).ignore(this.flecheH).ignore(this.flecheB).ignore(this.flecheG).ignore(this.flecheD);

            this.physics.add.overlap(this.centre, this.cibles, shoot, null,this);

            function shoot(centre, cible){
              this.zoneTap.on('pointerdown',() => {
                cible.disableBody(true,true);
                if (this.isWin == 1){
                  this.timedEvent = this.time.delayedCall(2000, changeLevel, [], this);
                }
              })
            };

            this.isWin = 0;


            this.flecheH.on('pointerdown',() => {
              this.viseur.setVelocityY(-this.diff); 
              this.centre.setVelocityY(-this.diff);
              if (this.isWin == 1){
              this.timedEvent = this.time.delayedCall(2000, changeLevel, [], this);
            } 
            })
            this.flecheH.on('pointerup',() => {
              this.viseur.setVelocityY(0); 
              this.centre.setVelocityY(0); 
            })


            this.flecheB.on('pointerdown',() => {
              this.viseur.setVelocityY(this.diff);
              this.centre.setVelocityY(this.diff);
              if (this.isWin == 1){
              this.timedEvent = this.time.delayedCall(2000, changeLevel, [], this);
            }
            })
            this.flecheB.on('pointerup',() => {
              this.viseur.setVelocityY(0);
              this.centre.setVelocityY(0);
            })


            this.flecheG.on('pointerdown',() => {
              this.viseur.setVelocityX(-this.diff);
              this.centre.setVelocityX(-this.diff);
              if (this.isWin == 1){
              this.timedEvent = this.time.delayedCall(2000, changeLevel, [], this);
            }
            })
            this.flecheG.on('pointerup',() => {
              this.viseur.setVelocityX(0);
              this.centre.setVelocityX(0);
            })


            this.flecheD.on('pointerdown',() => {
              this.viseur.setVelocityX(this.diff);
              this.centre.setVelocityX(this.diff);
              if (this.isWin == 1){
              this.timedEvent = this.time.delayedCall(2000, changeLevel, [], this);
            }
            })
            this.flecheD.on('pointerup',() => {
              this.viseur.setVelocityX(0);
              this.centre.setVelocityX(0);
            })

            function changeLevel () {
              this.scene.start('Transi', {or: this.or, argent: this.argent, bronze: this.bronze, niveau: this.niveau, vie: this.vie, score: this.score});
            }
            

        //Timer
            let gameOptions = { initialTime: 600 }
            this.timeLeft = gameOptions.initialTime;

            let timecontainer = this.add.sprite(-50, -50, "timecontainer").setOrigin(0,0);
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
                      this.zoneTap.destroy(true,true);
                      if (this.cibles.countActive(true) === 1){
                        this.argent ++;
                        this.score += 100 * this.niveau;
                        this.argentText.visible = true;
                        this.timedEvent = this.time.delayedCall(2000, changeLevel, [], this);
                      }
                      if (this.cibles.countActive(true) === 2){
                        this.bronze ++;
                        this.score += 50 * this.niveau;
                        this.bronzeText.visible = true;
                        this.timedEvent = this.time.delayedCall(2000, changeLevel, [], this);
                      }
                      if (this.cibles.countActive(true) === 3){
                        this.vie --;
                        this.perduText.visible = true;
                        this.timedEvent = this.time.delayedCall(2000, changeLevel, [], this);
                      }
                      if (this.cibles.countActive(true) === 4){
                        this.vie --;
                        this.perduText.visible = true;
                        this.timedEvent = this.time.delayedCall(2000, changeLevel, [], this);
                      }
                    }
                    if (this.cibles.countActive(true) === 0 & this.timeLeft > 0){
                      this.or ++;
                      this.isWin = 1;  
                      this.score += 200 * this.niveau;
                      this.gameTimer.paused = true;
                      this.victoireText.visible = true;
                      this.timedEvent = this.time.delayedCall(2000, changeLevel, [], this);
                    }
                },
                callbackScope: this,
                loop: true
            });

    }
  update() {
      if (this.cibles.countActive(true) === 0){
        this.isWin = 1;  
        this.gameTimer.paused = true;
        this.victoireText.visible = true;
      } 

  }

}
