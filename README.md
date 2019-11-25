# card-game

Card mind-game where you pick 2 cards one cards from each deck.
If both the flipped cards (from same deck) have different numbers then both the cards will be flipped back.
and if both the flipped cards (from same deck) have same numbers then both the cards will be remained open.
This will continue till all the cards are matched.

Once all the cards are matched from the 2 decks. You can start the game using the play button

## COMMANDS:
Use **npm install** to download all the dependencies. <br/>
To start the application - **npm start**  <br/>
To build the code - **npm run build** <br/>
To run the test cases - **npm run test:watch**

## Functionalities not working
1. **Card match functionality to match cards between decks.** <br/>
    As per the current implemenation a user can choose 2 cards from each deck instead of one.  <br/>
2. **Shuffle game and high score display.** <br/>
    Shuffle cards api is not used due to time constraint but written a method to shuffle the cards <br/>
    

## Improvements
**Resuability of Left and Righ Deck components**<br/>
Due to time constraint we are using different components for Left and Right Decks . We could have reused a single component instead of using different components  
