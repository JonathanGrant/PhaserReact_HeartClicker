import React, { useRef, useEffect } from 'react';
import Phaser from 'phaser';

const HeartGame = ({ setScore }) => {
  const gameRef = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: gameRef.current,
      scene: {
        preload: preload,
        create: create,
        update: update,
      },
    };

    const game = new Phaser.Game(config);

    let heart;
    let velocity = { x: 150, y: 80 };

    function preload() {
      this.load.image('heart', './heart.png');
      this.load.image('background', '/bg.jpeg');
    }

    function create() {
this.input.setDefaultCursor('url(/camera.png), pointer');
this.input.cursor = 'url(/camera.png), pointer'
this.input.manager.canvas.style.cursor = 'url(/camera.png), pointer';

  const background = this.add.image(400, 300, 'background'); // Center the background image on the screen (assuming 800x600 game size)
     
  // Calculate scale factors
  const scaleX = this.cameras.main.width / background.width;
  const scaleY = this.cameras.main.height / background.height;
  const scale = Math.max(scaleX, scaleY);
  
  // Set the scale
  background.setScale(scale);

      heart = this.add.sprite(Phaser.Math.Between(50, 750), Phaser.Math.Between(50, 550), 'heart');
	const targetWidth = 50;
	const targetHeight = 50;

	const hscaleX = targetWidth / heart.width;
	const hscaleY = targetHeight / heart.height;

	heart.setScale(hscaleX, hscaleY);

      this.input.on('pointerdown', function (pointer) {
        if (Phaser.Geom.Intersects.RectangleToRectangle(heart.getBounds(), new Phaser.Geom.Rectangle(pointer.x, pointer.y, 1, 1))) {
          setScore(prevScore => prevScore + 10);
        } else {
          setScore(prevScore => prevScore - 1);
        }
      });
    }

    function update(time, delta) {
      heart.x += velocity.x * (delta / 1000);
      heart.y += velocity.y * (delta / 1000);

      if (heart.x <= 0 || heart.x >= config.width) {
        velocity.x *= -1;
      }

      if (heart.y <= 0 || heart.y >= config.height) {
        velocity.y *= -1;
      }
    }

    return () => game.destroy(true);
  }, []);

  return <div ref={gameRef}
/>;
};

export default HeartGame;

