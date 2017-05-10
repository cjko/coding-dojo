import UIKit

func tossCoin() -> String {
    print("Tossing a Coin!")
    let flip = Int(arc4random_uniform(10))
    if flip <= 5 {
        print("Heads")
        return "Heads"
    }
    print("Tails")
    return "Tails"
}

tossCoin()


func tossMultipleCoints(num: Int) -> Double {
    var heads: Double = 0.0
    var tails: Double = 0.0
    
    for _ in  1...num {
        if tossCoin() == "Heads" {
            heads += 1.0
        } else {
            tails += 1.0
        }
    }
    let ratio: Double = heads/tails
    
    return ratio
}

print(tossMultipleCoints(num: 14))