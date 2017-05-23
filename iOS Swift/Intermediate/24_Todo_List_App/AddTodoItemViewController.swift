//
//  AddTodoItemViewController.swift
//  24_Todo_List_App
//
//  Created by Colin Jao on 5/23/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import UIKit

class AddTodoItemViewController: UIViewController {
    
    weak var delegate: AddTodoItemViewControllerDelegate?
    var titleLabel: String?
    var descriptionLabel: String?
    @IBOutlet weak var datePicker: UIDatePicker!

    @IBOutlet weak var textField: UITextField!
    @IBOutlet weak var textView: UITextView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        textView.text = "Edit description..."
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    @IBAction func cancelButtonPressed(_ sender: UIBarButtonItem) {
        delegate?.cancelButtonPressed(by: self)
    }
    
    @IBAction func addItemButtonPressed(_ sender: UIButton) {
        delegate?.addItemButtonPressed(by: self, with: textField.text!, with: textView.text, on: datePicker.date)
    }
    
}
