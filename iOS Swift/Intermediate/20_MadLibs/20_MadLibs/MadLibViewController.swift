//
//  ViewController.swift
//  20_MadLibs
//
//  Created by Colin Jao on 5/17/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import UIKit

class MadLibViewController: UIViewController, UserInputViewControllerDelegate {
    @IBOutlet weak var sentenceLabel: UILabel!

    override func viewDidLoad() {
        super.viewDidLoad()
        sentenceLabel.text = "..."
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    @IBAction func composeMadLib(_ sender: UIBarButtonItem) {
        performSegue(withIdentifier: "composeSegue", sender: self)
    }

    @IBAction func unwindToMadLib(segue: UIStoryboardSegue) {}
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let composeMadLib = segue.destination as! UserInputViewController
        composeMadLib.delegate = self
    }
    
    func receiveInputs(by controller: UIViewController, with input1: String, with input2: String, with input3: String, with input4: String) {
        sentenceLabel.text = "We are having a perfectly \(input1) time now. Later we will \(input2) and \(input3) in the \(input4)."
    }

}

