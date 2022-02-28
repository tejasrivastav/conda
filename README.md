The implementation is a basic version on the game

# Assumptions
- The game is always going to be a version of Rock paper scissor

# Entities
- Player
- Game 
- Score
- Trail // audit of the actions that took place

# Appraoch:

We define the possible option in the game and create a matrix for the scoring.

Based on the user selections we evalute for each user aganist all the other selection.
Assign a point if they win, remove one if they lose.

# Future:

The current implementation run only on browser playing aganist the browser.

To make it a proper mutli-player we need to run these against a server and a db.

Extensions:
- Lobby, create a lobby for all the users who are active but not playing a game
- Room, ability for users to create custom rooms or join random rooms

Options:
- Firebase, Firebase is a realtime database which can scale very well.
  We can subscribe for all user for a given channel and generate score aganist all of them

- WebRTC setup

- web sockets

- Unity, if we need to extend to a real gaming platform 