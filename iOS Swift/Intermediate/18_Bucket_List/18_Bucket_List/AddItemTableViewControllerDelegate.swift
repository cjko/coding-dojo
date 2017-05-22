//
//  AddItemTableViewControllerDelegate.swift
//  18_Bucket_List
//
//  Created by Colin Jao on 5/16/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import UIKit

protocol AddItemTableViewControllerDelegate: class {
    func itemSaved(by controller: AddItemTableViewController, with text: String, at indexPath: NSIndexPath?)
    func cancelButtonPressed(by controller: AddItemTableViewController)
}
