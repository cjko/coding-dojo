//
//  BeastItemCellDelegate.swift
//  iOS_Black_Belt_Exam
//
//  Created by Colin Jao on 5/26/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import Foundation
import UIKit

protocol BeastItemCellDelegate: class {
    func beastButtonPressed(by cell: IndexPath, with text: String)
}
