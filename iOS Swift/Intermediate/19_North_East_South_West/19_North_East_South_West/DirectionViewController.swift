//
//  DirectionViewController.swift
//  19_North_East_South_West
//
//  Created by Colin Jao on 5/17/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import UIKit

class DirectionViewController: UIViewController {

    @IBOutlet weak var directionButton: UIButton!
    var buttonText: String?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        directionButton.setTitle(buttonText, for: UIControlState.normal)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    @IBAction func directionButtonPressed(_ sender: UIButton) {
        performSegue(withIdentifier: "unwindToCompass", sender: self)
    }
}
