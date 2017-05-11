//
//  ViewController.swift
//  12_Tipster
//
//  Created by Colin Jao on 5/10/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    // Tip calculator input
    var isFirstDigit = true
    var hasDecimal = false
    var centDigits = 0
    
    // Group Size
    var groupSize: Int = 1
    
    // Tip Percentage Calculation Values
    var percentageOne: Double = 0.0
    var percentageTwo: Double = 0.0
    var percentageThree: Double = 0.0

    // IBOutlets
    @IBOutlet weak var billAmountLabel: UILabel!
    
    @IBOutlet weak var tipPercentageSlider: UISlider!
    @IBOutlet weak var groupSizeSlider: UISlider!
    @IBOutlet weak var groupSizeLabel: UILabel!
    
    @IBOutlet weak var tipPercentageOne: UILabel!
    @IBOutlet weak var tipPercentageTwo: UILabel!
    @IBOutlet weak var tipPercentageThree: UILabel!
    
    @IBOutlet weak var tipAmountOne: UILabel!
    @IBOutlet weak var tipAmountTwo: UILabel!
    @IBOutlet weak var tipAmountThree: UILabel!
    
    @IBOutlet weak var tipSubtotalOne: UILabel!
    @IBOutlet weak var tipSubtotalTwo: UILabel!
    @IBOutlet weak var tipSubtotalThree: UILabel!
    
    @IBAction func calculatorInputPressed(_ sender: UIButton) {
        switch (sender.tag) {
        // When C is pressed, reset tip calculator inputs
        case 10:
            billAmountLabel.text = "0"
            hasDecimal = false
            centDigits = 0
            isFirstDigit = true
            updateTable()
        // Add decimal point
        case 11:
            if !hasDecimal {
                let decimalPoint = "."
                billAmountLabel.text = billAmountLabel.text! + decimalPoint
                centDigits += 1
                hasDecimal = true
            }
        default:
            if !(centDigits > 2) {
                let digit = String(sender.tag)
                billAmountLabel.text = isFirstDigit ? digit : billAmountLabel.text! + digit
                isFirstDigit = false
                if hasDecimal {
                    centDigits += 1
                }
                updateTable()
            }
        }
    }
    
    func updateTable() {
        
        let billAmount = Double(billAmountLabel.text!)!/Double(groupSize)
        
        tipPercentageOne.text = String(Int(percentageOne*100))+"%"
        tipPercentageTwo.text = String(Int(percentageTwo*100))+"%"
        tipPercentageThree.text = String(Int(percentageThree*100))+"%"
        
        tipAmountOne.text = String(Double(Int(100 * percentageOne * billAmount))/100)
        tipAmountTwo.text = String(Double(Int(100 * percentageTwo * billAmount))/100)
        tipAmountThree.text = String(Double(Int(100 * percentageThree * billAmount))/100)
        
        tipSubtotalOne.text = String(Double(Int(100 * billAmount)/100) + Double(Int(100 * percentageOne * billAmount))/100)
        tipSubtotalTwo.text = String(Double(Int(100 * billAmount)/100) + Double(Int(100 * percentageTwo * billAmount))/100)
        tipSubtotalThree.text = String(Double(Int(100 * billAmount)/100) + Double(Int(100 * percentageThree * billAmount))/100)
        
        
    }
    
    @IBAction func tipPercentageSlider(_ sender: UISlider) {
        
        percentageOne = Double(Int(10 * sender.value))/100 + 0.05
        percentageTwo = percentageOne + 0.05
        percentageThree = percentageTwo + 0.05
        
        updateTable()
    }
    
    @IBAction func groupSizeSlider(_ sender: UISlider) {
        let float = 10 * sender.value
        groupSize = Int(float.rounded())+1
        
        groupSizeLabel.text = "Group Size: " + String(groupSize)
        
        updateTable()
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        billAmountLabel.text = "0"
        
        tipPercentageOne.text = String(Int(percentageOne*100))+"%"
        tipPercentageTwo.text = String(Int(percentageTwo*100))+"%"
        tipPercentageThree.text = String(Int(percentageThree*100))+"%"
 
        tipAmountOne.text = "0.0"
        tipAmountTwo.text = "0.0"
        tipAmountThree.text = "0.0"
        
        tipSubtotalOne.text = "0.0"
        tipSubtotalTwo.text = "0.0"
        tipSubtotalThree.text = "0.0"
        
        tipPercentageSlider.value = 0.50
        percentageOne = Double(Int(10 * tipPercentageSlider.value))/100 + 0.05
        percentageTwo = percentageOne + 0.05
        percentageThree = percentageTwo + 0.05
        
        groupSizeSlider.value = 0.00
        groupSize = 1
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

