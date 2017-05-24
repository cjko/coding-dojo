//
//  AddDogViewControllerDelegate.swift
//  26_My_Dogs
//
//  Created by Colin Jao on 5/23/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import Foundation
import UIKit

protocol AddDogViewControllerDelegate: class {
    func addDogButtonPressed(by controller: UIViewController, with name: String, with color: String, with treat: String, with picture: UIImage?, at indexPath: IndexPath?)
}
