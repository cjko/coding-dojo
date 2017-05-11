//
//  ViewController.swift
//  10_Ninja_Gold
//
//  Created by Colin Jao on 5/10/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    var userScore: Int = 0
    
    @IBOutlet weak var clickActivityLabel: UILabel!
    @IBOutlet weak var scoreLabel: UILabel!
    @IBAction func locationButtonPressed(_ sender: UIButton) {
        switch(sender.tag) {
        case 0:
            let payout = Int(arc4random_uniform(11))+10
            userScore += payout
            scoreLabel.text = "Score: " + String(userScore)
            clickActivityLabel.text = "You earned \(String(payout)) gold!"
        case 2:
            let payout = Int(arc4random_uniform(6))+5
            userScore += payout
            scoreLabel.text = "Score: " + String(userScore)
            clickActivityLabel.text = "You earned \(String(payout)) gold!"
        case 1:
            let payout = Int(arc4random_uniform(4))+2
            userScore += payout
            scoreLabel.text = "Score: " + String(userScore)
            clickActivityLabel.text = "You earned \(String(payout)) gold!"
        case 3:
            let payout = Int(arc4random_uniform(101))-51
            userScore += payout
            scoreLabel.text = "Score: " + String(userScore)
            if payout < 0 {
                clickActivityLabel.text = "You lost \(String(payout)) gold! ☹️"
            } else {
                clickActivityLabel.text = "You earned \(String(payout)) gold! 😎"
            }
        default:
            clickActivityLabel.isHidden = true
        }
    }
    @IBAction func resetButtonPressed(_ sender: UIButton) {
        clickActivityLabel.text = "Click a location to search for gold"
        scoreLabel.text = "Score: 0"
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        clickActivityLabel.text = "Click a location to search for gold"
        scoreLabel.text = "Score: 0"
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

