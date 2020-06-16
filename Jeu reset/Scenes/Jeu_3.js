class Scene4 extends Phaser.Scene {
    constructor() {
        super("Micro_3");
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
            this.press;
            this.isWin = 0;
            this.isLoose = 0;
            this.changerH = 1;
            this.changerB = 1;

            this.cursors = this.input.keyboard.createCursorKeys();


            this.niveau ++;

            this.postop = 0;
            this.posmid = 1;
            this.posbot = 0;

        //Difficulté
            this.diff = 1000 / (0.5*this.niveau);
            this.Y = Phaser.Math.Between(50,100);
            this.Y1 = Phaser.Math.Between(-10,80);
            this.X = Phaser.Math.Between(30,60);
        
        //Monde
            this.fond = this.add.image(0,0,'e_entier').setOrigin(0,0);
            this.add.image(80,315,'e_fleches').setInteractive();

        //Zonnes de touche
            this.zoneVic = this.physics.add.image(414, 208, "").setScale(1, 2).setAlpha(0).setAngle(45);
            this.zoneVic1 = this.physics.add.image(410, 212, "").setScale(1, 1).setAlpha(0).setAngle(45);
            this.zoneVic2 = this.physics.add.image(404, 234, "").setScale(1, 0.5).setAlpha(0).setAngle(45);

        //Choix couleur du personnage
            if (this.choix == 1){            
            this.perso_top = this.add.image(260,205,'perso_top').setAlpha(0);
            this.perso_mid = this.add.image(260,205,'perso_mid').setAlpha(1);
            this.perso_bot = this.add.image(260,205,'perso_bot').setAlpha(0);

            this.perso_a_top = this.add.image(270,195,'perso_a_top').setAlpha(0);
            this.perso_a_mid = this.add.image(270,195,'perso_a_mid').setAlpha(0);
            this.perso_a_bot = this.add.image(270,195,'perso_a_bot').setAlpha(0);
            }

            if (this.choix == 2){            
            this.perso_top = this.add.image(260,205,'perso_top1').setAlpha(0);
            this.perso_mid = this.add.image(260,205,'perso_mid1').setAlpha(1);
            this.perso_bot = this.add.image(260,205,'perso_bot1').setAlpha(0);

            this.perso_a_top = this.add.image(270,195,'perso_a_top1').setAlpha(0);
            this.perso_a_mid = this.add.image(270,195,'perso_a_mid1').setAlpha(0);
            this.perso_a_bot = this.add.image(270,195,'perso_a_bot1').setAlpha(0);
            }

            if (this.choix == 3){            
            this.perso_top = this.add.image(260,205,'perso_top2').setAlpha(0);
            this.perso_mid = this.add.image(260,205,'perso_mid2').setAlpha(1);
            this.perso_bot = this.add.image(260,205,'perso_bot2').setAlpha(0);

            this.perso_a_top = this.add.image(270,195,'perso_a_top2').setAlpha(0);
            this.perso_a_mid = this.add.image(270,195,'perso_a_mid2').setAlpha(0);
            this.perso_a_bot = this.add.image(270,195,'perso_a_bot2').setAlpha(0);
            }

            if (this.choix == 4){            
            this.perso_top = this.add.image(260,205,'perso_top3').setAlpha(0);
            this.perso_mid = this.add.image(260,205,'perso_mid3').setAlpha(1);
            this.perso_bot = this.add.image(260,205,'perso_bot3').setAlpha(0);

            this.perso_a_top = this.add.image(270,195,'perso_a_top3').setAlpha(0);
            this.perso_a_mid = this.add.image(270,195,'perso_a_mid3').setAlpha(0);
            this.perso_a_bot = this.add.image(270,195,'perso_a_bot3').setAlpha(0);
            }

            this.fleuret = this.physics.add.image(346,184,'fleuret');
            
        //Ennemis
            this.c_top = this.add.image(490,205,'c_top').setAlpha(0);
            this.c_mid = this.add.image(490,205,'c_mid').setAlpha(1);
            this.c_bot = this.add.image(490,205,'c_bot').setAlpha(0);

            this.c_fleuret = this.physics.add.image(418,208,'c_fleuret').setAlpha(0); //midC
            this.i_fleuret = this.add.image(418,184,'c_fleuret').setAlpha(1); //midC

        //Zones interactives
            this.zoneTap = this.add.image(668,315,'e_bouton').setInteractive();
            this.flecheH = this.add.image(80,296,'e_flecheH').setInteractive();
            this.flecheB = this.add.image(80,334,'e_flecheB').setInteractive();
            
        //Texte interactif
            this.victoireText = this.add.text(284, 176, "MEDAILLE D'OR", {'font': '23px', fill: '#fff'});
            this.victoireText.visible = false;

            this.argentText = this.add.text(254, 176, "MEDAILLE D'ARGENT", {'font': '23px', fill: '#fff'});
            this.argentText.visible = false;

            this.bronzeText = this.add.text(254, 176, "MEDAILLE DE BRONZE", {'font': '23px', fill: '#fff'});
            this.bronzeText.visible = false;

            this.perduText = this.add.text(324, 176, "HONTEUX", {'font': '23px', fill: '#fff'});
            this.perduText.visible = false;

        //Interaction des zones interactives
            this.flecheH.on('pointerdown',() => {
              if(this.posmid == 1){
                this.postop = 1;
                this.posmid = 0;
                this.perso_top.setAlpha(1);
                this.perso_mid.setAlpha(0);

                this.fleuret.x = 346;
                this.fleuret.y = 172;
              }
              if(this.posbot == 1){
                this.posmid = 1;
                this.posbot = 0;
                this.perso_mid.setAlpha(1);
                this.perso_bot.setAlpha(0);

                this.fleuret.x = 346;
                this.fleuret.y = 184;
              }
            })
           

            this.flecheB.on('pointerdown',() => {
              if(this.posmid == 1){
                this.posbot = 1;
                this.posmid = 0;
                this.perso_bot.setAlpha(1);
                this.perso_mid.setAlpha(0);
                this.fleuret.x = 340;
                this.fleuret.y = 200;
              }
              if(this.postop == 1){
                this.posmid = 1;
                this.postop = 0;
                this.perso_mid.setAlpha(1);
                this.perso_top.setAlpha(0);
                this.fleuret.x = 346;
                this.fleuret.y = 184;
              }
            })

            this.zoneTap.on('pointerdown',() => {
                this.flecheH.destroy(true,true);
                this.flecheB.destroy(true,true);
                if (this.postop == 1){
                  this.perso_top.setAlpha(0);
                  this.perso_a_top.setAlpha(1);
                  this.fleuret.x = 370;
                  this.fleuret.y = 186;
                }

                if (this.posmid == 1){
                  this.perso_mid.setAlpha(0);
                  this.perso_a_mid.setAlpha(1);
                  this.fleuret.x = 366;
                  this.fleuret.y = 208;
                }

                if (this.posbot == 1){
                  this.perso_bot.setAlpha(0);
                  this.perso_a_bot.setAlpha(1);
                  this.fleuret.x = 358;
                  this.fleuret.y = 228;
                }
              })

         //Changement de levels   
            function changeLevel () {
              this.scene.start('Transi', {choix: this.choix, or: this.or, argent: this.argent, bronze: this.bronze, niveau: this.niveau, vie: this.vie, score: this.score});
            }

            this.physics.add.overlap(this.fleuret, this.c_fleuret, etincelles, null,this);

        //Fonction touche des épées
            function etincelles(fleuret, c_fleuret){
              if(this.isWin == 0){
                this.fleuret.disableBody(true,true);
                this.vie --;
                this.perduText.visible = true;
                this.gameTimer.paused = true;
                this.isLoose = 1;
                if (this.isLoose == 1){
                  this.timedEvent = this.time.delayedCall(2000, changeLevel, [], this);
                }
              }
            };

        //Overlap des zones
            this.physics.add.overlap(this.fleuret, this.zoneVic, touche, null,this);
            this.physics.add.overlap(this.fleuret, this.zoneVic1, touche, null,this);
            this.physics.add.overlap(this.fleuret, this.zoneVic2, touche, null,this);

        //Conditions de victoire
            function touche(fleuret, ZoneVic){
              this.fleuret.disableBody(true,true);

              if(this.isLoose == 0){                
                this.gameTimer.paused = true;
                this.isWin = 1;
                if(this.timeLeft < 600 & this.timeLeft > 400){
                  this.or ++;
                  this.score += 200 * this.niveau;
                  this.victoireText.visible = true;
                }
                if(this.timeLeft < 400 & this.timeLeft > 200){
                  this.argent ++;
                  this.score += 100 * this.niveau;
                  this.argentText.visible = true;
                }
                if(this.timeLeft < 200 & this.timeLeft > 0){
                  this.bronze ++;
                  this.score += 50 * this.niveau;
                  this.bronzeText.visible = true;
                }
                if (this.isWin == 1){
                  this.timedEvent = this.time.delayedCall(2000, changeLevel, [], this);
                }
              }
            };

            
            
            this.timedEvent = this.time.addEvent({delay: this.diff, callback: play_c, callbackScope: this, loop: true});
            
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
                  //Défaite
                    if(this.timeLeft == 0){
                      this.zoneTap.destroy(true,true);
                      this.perduText.visible = true;
                      this.gameTimer.paused = true;
                      this.isLoose = 1;
                    if (this.isLoose == 1){
                      this.vie --;
                      this.timedEvent = this.time.delayedCall(2000, changeLevel, [], this);
                    }
                  }
                },
                callbackScope: this,
                loop: true

            });
        //Mouvement du personnage ennemis
            function play_c(){
              
              if(this.timeLeft > 0){
                 if(this.isWin == 0){
                  this.posC = Phaser.Math.Between(1, 3);
                  if(this.posC == 1){
                    this.c_top.setAlpha(1);
                    this.c_mid.setAlpha(0);
                    this.c_bot.setAlpha(0);
                    this.c_fleuret.x = 422;
                    this.c_fleuret.y = 186;
                    this.i_fleuret.y = 172;
                    }

                  if(this.posC == 2){
                    this.c_top.setAlpha(0);
                    this.c_mid.setAlpha(1);
                    this.c_bot.setAlpha(0);
                    this.c_fleuret.x = 418;
                    this.c_fleuret.y = 208;
                    this.i_fleuret.y = 184;
                    this.i_fleuret.x = 420;

                  }  

                  if(this.posC == 3){
                    this.c_top.setAlpha(0);
                    this.c_mid.setAlpha(0);
                    this.c_bot.setAlpha(1);
                    this.c_fleuret.x = 408;
                    this.c_fleuret.y = 230;
                    this.i_fleuret.y = 200;
                    this.i_fleuret.x = 423;
                  }
                }
              }
            }

    }
  update() {
  //Mouvements du joueur
    if(this.cursors.up.isDown & this.changerH == 1){
      this.changerH = 0;
      if(this.posmid == 1){
        this.postop = 1;
        this.posmid = 0;
        this.perso_top.setAlpha(1);
        this.perso_mid.setAlpha(0);

        this.fleuret.x = 346;
        this.fleuret.y = 172;
      }

      if(this.posbot == 1){
        this.posmid = 1;
        this.posbot = 0;
        this.perso_mid.setAlpha(1);
        this.perso_bot.setAlpha(0);

        this.fleuret.x = 346;
        this.fleuret.y = 184;
      }
    }
    if(this.cursors.up.isUp){
      this.changerH = 1;
    }
      
    if(this.cursors.down.isDown & this.changerB == 1){
      this.changerB = 0;
      if(this.posmid == 1){
        this.posbot = 1;
        this.posmid = 0;
        this.perso_bot.setAlpha(1);
        this.perso_mid.setAlpha(0);
        this.fleuret.x = 340;
        this.fleuret.y = 200;
      }

      if(this.postop == 1){
        this.posmid = 1;
        this.postop = 0;
        this.perso_mid.setAlpha(1);
        this.perso_top.setAlpha(0);
        this.fleuret.x = 346;
        this.fleuret.y = 184;
      }
    }

    if(this.cursors.down.isUp){
      this.changerB = 1;
    }

  }

}
