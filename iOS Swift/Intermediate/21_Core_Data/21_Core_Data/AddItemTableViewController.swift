//
//  AddItemTableViewController.swift
//  21_Core_Data
//
//  Created by Colin Jao on 5/17/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import UIKit

class AddItemTableViewController: UITableViewController {
    
    weak var delegate: AddItemTableViewControllerDelegate?
    @IBOutlet weak var textField: UITextField!
    @IBOutlet weak var navBar: UINavigationItem!
    
    var titleText: String = "Add Item"
    var text: String? = ""
    var indexPath: NSIndexPath?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        textField.text = text
        navBar.title = titleText
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    // Cancel button pressed calls cancelButtonPressed function in main BucketListView controller since it was set as the delegate
    @IBAction func cancelButtonPressed(_ sender: UIBarButtonItem) {
        delegate?.cancelButtonPressed(by: self)
    }
    
    // Done button pressed calls doneButtonPressed function in main BucketListView controller since it was set as the delegate
    @IBAction func doneButtonPressed(_ sender: UIBarButtonItem) {
        if let text = textField.text {
            if text != "" {
                delegate?.doneButtonPressed(by: self, with: text, at: indexPath)
            }
        }
    }

}
