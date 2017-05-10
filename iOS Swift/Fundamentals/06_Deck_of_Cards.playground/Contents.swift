import UIKit

struct Card {
    var value: String
    var suit: String
    var numerical_value: Int
}

class Deck {
    var cards: [Card] = [Card]()
    init() {
        let suits = ["Clubs", "Spades", "Hearts","Diamonds"]
        let numerical_values = [1,2,3,4,5,6,7,8,9,10,11,12,13]
        for suit in suits {
            for nv in numerical_values {
                var v: String
                switch(nv) {
                case 1:
                    v = "A"
                case 11:
                    v = "J"
                case 12:
                    v = "Q"
                case 13:
                    v = "K"
                default:
                    v = "\(nv)"
                }
                self.cards.append(Card(value: v, suit: suit, numerical_value: nv))
            }
        }
    }
    func dealCard() -> Card {
        let card = self.cards[0]
        self.cards.remove(at: 0)
        return card
    }
    func resetDeck() {
        let newDeck = Deck()
        self.cards = newDeck.cards
    }
    func shuffle() {
        var temp: Card
        for _ in 1...100 {
            let cardOne = Int(arc4random_uniform(UInt32(self.cards.count)))
            let cardTwo = Int(arc4random_uniform(UInt32(self.cards.count)))
            temp = self.cards[cardOne]
            self.cards[cardOne] = self.cards[cardTwo]
            self.cards[cardTwo] = temp
        }
    }
}

class Player {
    var name: String
    var hand = [Card]()
    init(name: String) {
        self.name = name
    }
    func drawCardFromDeck(deck: Deck) -> Card {
        let newCard = deck.dealCard()
        self.hand.append(newCard)
        return newCard
    }
    func discardFromHand(card: Card) -> Bool {
        for i in 0...self.hand.count-1 {
            if self.hand[i].numerical_value == card.numerical_value && self.hand[i].suit == card.suit {
                self.hand.remove(at: i)
                return true
            }
        }
        return false
    }
    
}

var newDeck = Deck()
//newDeck.shuffle()

var newPlayer = Player(name: "Colin")
print(newPlayer.drawCardFromDeck(deck: newDeck))
print(newPlayer.drawCardFromDeck(deck: newDeck))
print(newPlayer.drawCardFromDeck(deck: newDeck))
print(newPlayer.discardFromHand(card: newPlayer.hand[0]))
print(newPlayer.discardFromHand(card: newDeck.cards[2]))

for card in newDeck.cards {
    print(card)
}

print(newPlayer.hand)
