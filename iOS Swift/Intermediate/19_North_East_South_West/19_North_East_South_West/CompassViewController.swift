//
//  ViewController.swift
//  19_North_East_South_West
//
//  Created by Colin Jao on 5/17/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import UIKit

class CompassViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    @IBAction func directionButtonPressed(_ sender: UIButton) {
        performSegue(withIdentifier: "directionSegue", sender: sender)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        var direction: String
        
        let button = sender as! UIButton
        
        switch (button.tag) {
        case 1:
            direction = "NORTH"
        case 2:
            direction = "EAST"
        case 3:
            direction = "SOUTH"
        case 4:
            direction = "WEST"
        default:
            direction = "NORTH"
        }
        
        let directionViewController = segue.destination as! DirectionViewController
        directionViewController.buttonText = direction
        
    }
    
    @IBAction func unwindToCompass(segue: UIStoryboardSegue) {}

}

