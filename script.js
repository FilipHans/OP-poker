import { shuffle } from "./shuffle.js";

class Deck {

    constructor (card) {
        this.card = card;
        this.deck = [];
        console.log(this.deck);

    }

    addCardToDeck(card) {
        this.deck.push(card);
    }
}

class Card {

    constructor (suit, rank, name) {
        this.suit = suit;
        this.rank = rank;
        this.name = name;
    }

}

class Player {

    constructor(name) {
        this.name = name;
        this.hand = [];

    }

    dealCards(){
        
        for (let i = 0; i < 5; i++) {
            this.hand.push(myDeck.deck[i]);
            myDeck.deck.splice(i, 1);
        }
    }
}
const myDeck = new Deck();

function makeDeck (suit) {

    const currentSuit = suit;
    for (let i = 2; i < 15; i++) {
        let value = i;
        
        switch (i) {
            case 11:
                value = 'Jack'
            break;
            case 12:
                value = 'Queen'
            break;
            case 13:
                value = 'King'
            break;
            case 14:
                value = 'Ace'
            break;
        }
        const card = new Card (`${currentSuit}`, i, `${value} of ${currentSuit}s`);
        myDeck.addCardToDeck(card);
    }
}
makeDeck('Diamond');
makeDeck('Spade');
makeDeck('Clover');
makeDeck('Heart');
shuffle(myDeck.deck);
function newPlayer (name) {

    const player = new Player(`${name}`);
    player.dealCards();
    console.log(player)
}
newPlayer('boser');
newPlayer('Coco');
console.log(myDeck.deck)
