//
//  AddItemTableViewControllerDelegate.swift
//  21_Core_Data
//
//  Created by Colin Jao on 5/17/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import Foundation
import UIKit

protocol AddItemTableViewControllerDelegate: class {
    func cancelButtonPressed(by controller: UITableViewController)
    func doneButtonPressed(by controller: UITableViewController, with text: String, at indexPath: NSIndexPath?)
}
