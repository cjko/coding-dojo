//
//  ViewController.swift
//  26_My_Dogs
//
//  Created by Colin Jao on 5/23/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import UIKit

class AddDogViewController: UIViewController, UIImagePickerControllerDelegate, UINavigationControllerDelegate {
    
    weak var delegate: AddDogViewControllerDelegate?
    
    var name: String?
    var color: String?
    var treat: String?
    var indexPath: IndexPath?
    var picture: UIImage?
    
    @IBOutlet weak var nameField: UITextField!
    @IBOutlet weak var colorField: UITextField!
    @IBOutlet weak var treatField: UITextField!
    
    let imagePicker = UIImagePickerController()

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        imagePicker.delegate = self
        nameField.text = name
        colorField.text = color
        treatField.text = treat
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func addPhotoButtonPressed(_ sender: UIButton) {
        imagePicker.allowsEditing = false
        imagePicker.sourceType = .photoLibrary
        
        present(imagePicker, animated: true, completion: nil)
    }
    
    // newfivefour.com/swift-ios-choose-an-image-UIImagePickerController.html
    func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [String : Any]) {
        picture = info[UIImagePickerControllerOriginalImage] as! UIImage
        dismiss(animated: true, completion: nil)
    }
    
    func imagePickerControllerDidCancel(_ picker: UIImagePickerController) {
        dismiss(animated: true, completion: nil)
    }

    @IBAction func addDogButtonPressed(_ sender: UIButton) {
        delegate?.addDogButtonPressed(by: self, with: nameField.text!, with: colorField.text!, with: treatField.text!, with: picture, at: indexPath)
        performSegue(withIdentifier: "unwindToCollection", sender: self)
    }

}

