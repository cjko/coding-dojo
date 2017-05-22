//
//  PowerCell.swift
//  23_Binary_Counter
//
//  Created by Colin Jao on 5/22/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import Foundation
import UIKit

class PowerCell: UITableViewCell {
    
    weak var delegate: AddNumberDelegate?
    var amount: Int?
    @IBOutlet weak var powerLabel: UILabel!
    
    @IBAction func decreaseButtonPressed(_ sender: UIButton) {
        delegate?.decreaseButtonPressed(by: self, with: amount!)
    }
    @IBAction func increaseButtonPressed(_ sender: UIButton) {
        delegate?.increaseButtonPressed(by: self, with: amount!)
    }
    
    
}
