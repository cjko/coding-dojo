//
//  ViewController.swift
//  13_Great_Number_Game
//
//  Created by Colin Jao on 5/11/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import UIKit



class ViewController: UIViewController {
    var numberToGuess: Int = 0
    var guessCount: Int = 0

    @IBOutlet weak var guessCountLabel: UILabel!
    
    @IBOutlet weak var userInput: UITextField!
    @IBAction func userHasSubmitted(_ sender: UIButton) {
        if let input = userInput.text {
            if let numberInput = Int(input) {
                hasGuessed(num: numberInput)
            } else {
                userInput.text = ""
//                print("Please enter a valid number.")
                let alert = UIAlertController(title: "Invalid Number", message: "Please enter a valid number 1-100.", preferredStyle: UIAlertControllerStyle.alert)
                alert.addAction(UIAlertAction(title: "OK", style: UIAlertActionStyle.default, handler: nil))
                self.present(alert, animated: true, completion: nil)
            }
        } else {
//            print("Please enter an input.")
            let alert = UIAlertController(title: "Missing Input", message: "Please enter a valid number 1-100.", preferredStyle: UIAlertControllerStyle.alert)
            alert.addAction(UIAlertAction(title: "OK", style: UIAlertActionStyle.default, handler: nil))
            self.present(alert, animated: true, completion: nil)
        }
    }
    
    func hasGuessed(num: Int) {
        userInput.text = ""
        if num > 100 || num < 0 {
//            print("Please enter a valid number.")
            let alert = UIAlertController(title: "Invalid Number", message: "Please enter a valid number 1-100.", preferredStyle: UIAlertControllerStyle.alert)
            alert.addAction(UIAlertAction(title: "OK", style: UIAlertActionStyle.default, handler: nil))
            self.present(alert, animated: true, completion: nil)
        } else if num > numberToGuess {
            guessCount += 1
            guessCountLabel.text = "# of Guesses: " + String(guessCount)
//            print("Too high! The number to guess was: " + String(numberToGuess))
            let alert = UIAlertController(title: "Too high!", message: "Your number was too high.", preferredStyle: UIAlertControllerStyle.alert)
            alert.addAction(UIAlertAction(title: "OK", style: UIAlertActionStyle.default, handler: nil))
            self.present(alert, animated: true, completion: nil)
        } else if num < numberToGuess {
            guessCount += 1
            guessCountLabel.text = "# of Guesses: " + String(guessCount)
//            print("Too low! The number to guess was: " + String(numberToGuess))
            let alert = UIAlertController(title: "Too low!", message: "Your number was too low.", preferredStyle: UIAlertControllerStyle.alert)
            alert.addAction(UIAlertAction(title: "OK", style: UIAlertActionStyle.default, handler: nil))
            self.present(alert, animated: true, completion: nil)
        } else {
//            print("You got it! The number to guess was: " + String(numberToGuess) + ". It took you " + String(guessCount) + " attempt(s).")
            let alert = UIAlertController(title: "You got it!", message: "The number was " + String(numberToGuess) + ". It took you " + String(guessCount) + " attempt(s).", preferredStyle: UIAlertControllerStyle.alert)
            alert.addAction(UIAlertAction(title: "OK", style: UIAlertActionStyle.default, handler: nil))
            self.present(alert, animated: true, completion: nil)
            numberToGuess = Int(arc4random_uniform(101))
            guessCount = 0
            guessCountLabel.text = "# of Guesses: " + String(guessCount)
        }
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        numberToGuess = Int(arc4random_uniform(101))
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

