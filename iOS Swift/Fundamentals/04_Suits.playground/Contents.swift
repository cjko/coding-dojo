let suits = ["Clubs", "Diamonds", "Hearts", "Spades"]
let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
var deckOfCards = [String: [Int]]()

for suit in suits {
    var arr = [Int]()
    for card in cards {
        arr.append(card)
    }
    deckOfCards[suit] = arr
}


print(deckOfCards)
