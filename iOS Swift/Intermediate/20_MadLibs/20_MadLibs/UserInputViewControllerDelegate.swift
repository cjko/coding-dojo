//
//  UserInputViewControllerDelegate.swift
//  20_MadLibs
//
//  Created by Colin Jao on 5/17/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import UIKit

protocol UserInputViewControllerDelegate: class {
    func receiveInputs(by controller: UIViewController, with input1: String, with input2: String, with input3: String, with input4: String)
}
