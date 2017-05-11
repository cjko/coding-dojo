//
//  ViewController.swift
//  11_TTT
//
//  Created by Colin Jao on 5/10/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    var playerTurn: String = "Red"
    var gameInProgress = true
    
    @IBOutlet weak var button1: UIButton!
    @IBOutlet weak var button2: UIButton!
    @IBOutlet weak var button3: UIButton!
    
    @IBOutlet weak var button4: UIButton!
    @IBOutlet weak var button5: UIButton!
    @IBOutlet weak var button6: UIButton!
    
    @IBOutlet weak var button7: UIButton!
    @IBOutlet weak var button8: UIButton!
    @IBOutlet weak var button9: UIButton!
    
    
    @IBOutlet weak var winnerLabel: UILabel!

    @IBAction func resetButtonPressed(_ sender: UIButton) {
        gameInProgress = true
        winnerLabel.isHidden = true
        
        button1.backgroundColor = UIColor.gray
        button2.backgroundColor = UIColor.gray
        button3.backgroundColor = UIColor.gray
        
        button4.backgroundColor = UIColor.gray
        button5.backgroundColor = UIColor.gray
        button6.backgroundColor = UIColor.gray
        
        button7.backgroundColor = UIColor.gray
        button8.backgroundColor = UIColor.gray
        button9.backgroundColor = UIColor.gray
    }
    
    @IBAction func tttButtonPressed(_ sender: UIButton) {
        if sender.backgroundColor == UIColor.gray && gameInProgress {
            if playerTurn == "Red" {
                sender.backgroundColor = UIColor.red
                if calculateWinner() {
                    winnerLabel.text = "Congrats Red Won!"
                    gameInProgress = false
                    winnerLabel.isHidden = false
                } else {
                    playerTurn = "Blue"
                }
            } else {
                sender.backgroundColor = UIColor.blue
                if calculateWinner() {
                    winnerLabel.text = "Congrats Blue Won!"
                    gameInProgress = false
                    winnerLabel.isHidden = false
                } else {
                    playerTurn = "Red"
                }
            }
        }
    }
    func calculateWinner() -> Bool {
        let color1 = button1.backgroundColor
        let color2 = button2.backgroundColor
        let color3 = button3.backgroundColor
        
        let color4 = button4.backgroundColor
        let color5 = button5.backgroundColor
        let color6 = button6.backgroundColor
        
        let color7 = button7.backgroundColor
        let color8 = button8.backgroundColor
        let color9 = button9.backgroundColor
        
        
        if color1 == color2 && color1 == color3 && color1 != UIColor.gray {
            return true
        }
        if color4 == color5 && color4 == color6 && color4 != UIColor.gray {
            return true
        }
        if color7 == color8 && color7 == color9 && color7 != UIColor.gray {
            return true
        }
        
        if color1 == color4 && color1 == color7 && color1 != UIColor.gray {
            return true
        }
        if color2 == color5 && color2 == color8 && color2 != UIColor.gray {
            return true
        }
        if color3 == color6 && color3 == color9 && color3 != UIColor.gray {
            return true
        }
        
        
        if color1 == color5 && color1 == color9 && color1 != UIColor.gray {
            return true
        }
        if color3 == color5 && color3 == color7 && color3 != UIColor.gray {
            return true
        }
        return false
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        playerTurn = "Red"
        winnerLabel.isHidden = true
        gameInProgress = true
        
        button1.backgroundColor = UIColor.gray
        button2.backgroundColor = UIColor.gray
        button3.backgroundColor = UIColor.gray
        
        button4.backgroundColor = UIColor.gray
        button5.backgroundColor = UIColor.gray
        button6.backgroundColor = UIColor.gray
        
        button7.backgroundColor = UIColor.gray
        button8.backgroundColor = UIColor.gray
        button9.backgroundColor = UIColor.gray
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

