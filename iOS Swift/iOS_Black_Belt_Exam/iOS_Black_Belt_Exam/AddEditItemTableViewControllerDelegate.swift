//
//  AddEditItemTableViewControllerDelegate.swift
//  iOS_Black_Belt_Exam
//
//  Created by Colin Jao on 5/26/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import Foundation
import UIKit

protocol AddEditItemTableViewControllerDelegate: class {
    func cancelButtonPressed(by controller: UITableViewController)
    func doneButtonPressed(by controller: UITableViewController, with text: String, at indexPath: IndexPath?)
}
