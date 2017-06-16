//
//  BeastItemCell.swift
//  iOS_Black_Belt_Exam
//
//  Created by Colin Jao on 5/26/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import Foundation
import UIKit

class BeastItemCell: UITableViewCell {
    
    weak var delegate: BeastItemCellDelegate?
    
    var indexPath: IndexPath?
    
    @IBOutlet weak var beastItemLabel: UILabel!
    
    @IBAction func beastButton(_ sender: UIButton) {
        delegate?.beastButtonPressed(by: indexPath!, with: beastItemLabel.text!)
    }
    
}
