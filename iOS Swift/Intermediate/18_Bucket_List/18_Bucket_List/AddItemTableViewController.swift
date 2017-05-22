//
//  AddItemTableViewController.swift
//  18_Bucket_List
//
//  Created by Colin Jao on 5/16/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import UIKit

class AddItemTableViewController: UITableViewController {
    
    weak var delegate: AddItemTableViewControllerDelegate?
    var item: String?
    var indexPath: NSIndexPath?
    
    @IBOutlet weak var textField: UITextField!
    
    @IBAction func cancelBarButtonPressed(_ sender: UIBarButtonItem) {
        delegate?.cancelButtonPressed(by: self)
    }
    @IBAction func saveButtonPressed(_ sender: UIBarButtonItem) {
        
        let text = textField.text!
        delegate?.itemSaved(by: self, with: text, at: indexPath)
    }
    

    override func viewDidLoad() {
        super.viewDidLoad()
        textField.text = item
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
}
