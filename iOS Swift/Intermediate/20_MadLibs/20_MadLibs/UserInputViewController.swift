//
//  UserInputViewController.swift
//  20_MadLibs
//
//  Created by Colin Jao on 5/17/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import UIKit

class UserInputViewController: UIViewController {
    
    weak var delegate: UserInputViewControllerDelegate?
    
    @IBOutlet weak var textField1: UITextField!
    @IBOutlet weak var textField2: UITextField!
    @IBOutlet weak var textField3: UITextField!
    @IBOutlet weak var textField4: UITextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    @IBAction func submitButtonPressed(_ sender: UIButton) {
        if (textField1.text != "" && textField2.text != "" && textField3.text != "" && textField4.text != "") {
            delegate?.receiveInputs(by: self, with: textField1.text!, with: textField2.text!, with: textField3.text!, with: textField4.text!)
            performSegue(withIdentifier: "unwindToMadLib", sender: self)
        }
    }
}
