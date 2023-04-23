# Space Invaders

A JavaScript implementation of the classic game Space Invaders.

## How to Play

- Use the left and right arrow keys to move the player spaceship
- Use the space bar to shoot bullets at the alien invaders
- The game is over when either an alien bullet collides with the player or the aliens reach the bottom of the screen
- You win by destroying all of the aliens

## Code

The game is implemented in JavaScript using the following classes:

- `EnemyController`: controls the movement and behavior of the alien invaders
- `Player`: controls the movement and behavior of the player spaceship
- `BulletController`: controls the movement and behavior of bullets fired by both the player and aliens

The main game loop is implemented in the `game` function. The `displayGameOver` function displays the game over message and restart button when the game is over.

## Styling

The game is styled using CSS. The canvas has a box shadow to give it a 3D effect. The start button and restart button have custom styling and use the "Press Start 2P" font.

## Running the Game

To run the game, simply open the `index.html` file in a web browser. Click the "Start" button to begin the game.

## Acknowledgments

This implementation is based on the classic arcade game Space Invaders. The original game was created by Tomohiro Nishikado and released by Taito in 1978.
