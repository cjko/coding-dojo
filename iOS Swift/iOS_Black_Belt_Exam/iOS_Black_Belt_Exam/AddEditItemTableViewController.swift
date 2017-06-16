//
//  AddEditItemTableViewController.swift
//  iOS_Black_Belt_Exam
//
//  Created by Colin Jao on 5/26/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import UIKit

class AddEditItemTableViewController: UITableViewController {

    weak var delegate: AddEditItemTableViewControllerDelegate?
    @IBOutlet weak var textField: UITextField!
    var beastText: String = ""
    var indexPath: IndexPath?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        textField.text = beastText
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()

    }

    @IBAction func cancelButtonPressed(_ sender: UIBarButtonItem) {
        delegate?.cancelButtonPressed(by: self)
    }

    @IBAction func doneButtonPressed(_ sender: UIBarButtonItem) {
        if textField.text != "" {
            delegate?.doneButtonPressed(by: self, with: textField.text!, at: indexPath)
        }
    }

    override func numberOfSections(in tableView: UITableView) -> Int {

        return 1
    }

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
      
        return 1
    }

}
