//
//  ViewController.swift
//  09_Cold_Call
//
//  Created by Colin Jao on 5/9/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    let nameArray = ["Colin", "Kyle", "Tahim", "Charles"]
    
    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var indexLabel: UILabel!

    @IBAction func coldCallButtonPressed(_ sender: UIButton) {
        let randInd = randomIndex()
        indexLabel.text = String(randInd+1)
        if indexLabel.text == "1" || indexLabel.text == "2" {
            indexLabel.textColor = UIColor.red
        } else {
            indexLabel.textColor = UIColor.orange
        }
        nameLabel.text = nameArray[randInd]
        indexLabel.isHidden = false
        
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        nameLabel.text = "Ready?"
        indexLabel.isHidden = true
    }
    
    func randomIndex() -> Int {
        return Int(arc4random_uniform(UInt32(nameArray.count)))
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

