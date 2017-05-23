//
//  AddTodoItemViewControllerDelegate.swift
//  24_Todo_List_App
//
//  Created by Colin Jao on 5/23/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import Foundation
import UIKit

protocol AddTodoItemViewControllerDelegate: class {
    func cancelButtonPressed(by controller: UIViewController)
    func addItemButtonPressed(by controller: UIViewController, with title: String, with description: String, on date: Date)
}
