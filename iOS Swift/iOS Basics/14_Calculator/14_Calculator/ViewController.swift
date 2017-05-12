//
//  ViewController.swift
//  14_Calculator
//
//  Created by Colin Jao on 5/11/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import UIKit

extension Double {
    var isInteger: Bool {
        return rint(self) == self
    }
}

class ViewController: UIViewController {
    var isFirstDigit: Bool = true
    var hasDecimal: Bool = false
    var numOne: Double = 0.0
    var numTwo: Double = 0.0
    var op: String = ""
    var newOperation: Bool = false
    
    
    @IBOutlet weak var displayLabel: UILabel!
    
    @IBAction func calculatorButtonPressed(_ sender: UIButton) {
        switch(sender.tag) {
        case 0:
            if !isFirstDigit || hasDecimal {
                // Append 0
                let digit = String(sender.tag)
                if let output = displayLabel.text {
                    displayLabel.text = isFirstDigit ? digit : output + digit
                }
            }
        // Divide (/)
        case 11:
            op = "/"
            performOp()
        // Multiply (X)
        case 12:
            op = "X"
            performOp()
        // Minus (-)
        case 13:
            op = "-"
            performOp()
        // Plus (+)
        case 14:
            op = "+"
            performOp()
        // Equals
        case 15:
            print(numOne)
            if let input = displayLabel.text {
                numTwo = Double(input)!
            }
            print(op)
            print(numTwo)
            switch op {
            case "/":
                let result = (numOne / numTwo)
                if result.isInteger {
                    displayLabel.text = String(Int(result))
                } else {
                    displayLabel.text = String(result)
                    hasDecimal = true
                }
                numOne = result
            case "X":
                let result = (numOne * numTwo)
                if result.isInteger {
                    displayLabel.text = String(Int(result))
                } else {
                    displayLabel.text = String(result)
                    hasDecimal = true
                }
                numOne = result
            case "-":
                let result = (numOne - numTwo)
                if result.isInteger {
                    displayLabel.text = String(Int(result))
                } else {
                    displayLabel.text = String(result)
                    hasDecimal = true
                }
                numOne = result
            case "+":
                let result = (numOne + numTwo)
                if result.isInteger {
                    displayLabel.text = String(Int(result))
                } else {
                    displayLabel.text = String(result)
                    hasDecimal = true
                }
                numOne = result
            default:
                displayLabel.text = ":("
            }
            newOperation = true
        // Clear calc
        case 16:
            hasDecimal = false
            displayLabel.text = "0"
            isFirstDigit = true
            numOne = 0.0
            numTwo = 0.0
        // Convert to negative/postive
        case 17:
            performOp()
            numTwo = -1.0
            let result = (numOne * numTwo)
            if result.isInteger {
                displayLabel.text = String(Int(result))
            } else {
                displayLabel.text = String(result)
                hasDecimal = true
            }
            numOne = result
        // Converts to percentage
        case 18:
            performOp()
            numTwo = 100
            let result = (numOne / numTwo)
            displayLabel.text = String(result)
            numOne = result
        // Adds decimal point
        case 19:
            if !hasDecimal {
                if newOperation {
                    isFirstDigit = true
                    newOperation = false
                }
                let decimalPoint = "."
                if let output = displayLabel.text {
                    displayLabel.text = isFirstDigit ? decimalPoint : output + decimalPoint
                }
                hasDecimal = true
                isFirstDigit = false
            }
        // Regular number input
        default:
            if newOperation {
                isFirstDigit = true
                newOperation = false
            }
            let digit = String(sender.tag)
            if let output = displayLabel.text {
                displayLabel.text = isFirstDigit ? digit : output + digit
            }
            isFirstDigit = false
        }
    }
    
    func performOp() {
        if let input = displayLabel.text {
            numOne = Double(input)!
        }
        hasDecimal = false
        isFirstDigit = true
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        displayLabel.text = "0"
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

