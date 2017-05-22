//
//  AddNumberDelegate.swift
//  23_Binary_Counter
//
//  Created by Colin Jao on 5/22/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import Foundation
import UIKit

protocol AddNumberDelegate: class {
    func increaseButtonPressed(by controller: UITableViewCell, with amount: Int)
    func decreaseButtonPressed(by controller: UITableViewCell, with amount: Int)
}
