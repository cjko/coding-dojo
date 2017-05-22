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
    @IBAction func cancelButtonPressed(_ sender: UIBarButtonItem) {
        delegate?.cancelButtonPressed(by: self)
    }
    @IBAction func doneButtonPressed(_ sender: UIBarButtonItem) {
        if let text = textField.text {
            if text != "" {
                delegate?.doneButtonPressed(by: self, with: text, at: indexPath)
            }
        }
    }

}
