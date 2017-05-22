//
//  ViewController.swift
//  23_Binary_Counter
//
//  Created by Colin Jao on 5/22/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import UIKit

class BinaryCounterViewController: UIViewController, UITableViewDataSource, AddNumberDelegate {
    
    var powers = [1]
    let base = 1
    var total = 0
    @IBOutlet weak var tableView: UITableView!
    @IBOutlet weak var totalLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        tableView.dataSource = self
        for i in 1...15 {
            var res = base
            for _ in 1...i {
                res = res * 10
            }
            powers.append(res)
        }
        print(powers)
        tableView.reloadData()
        totalLabel.text = "Total: \(total)"
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    func decreaseButtonPressed(by controller: UITableViewCell, with amount: Int) {
        total -= amount
        totalLabel.text = "Total: \(total)"
    }
    
    func increaseButtonPressed(by controller: UITableViewCell, with amount: Int) {
        total += amount
        totalLabel.text = "Total: \(total)"
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return powers.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "powerCell") as! PowerCell
        cell.delegate = self
        cell.amount = powers[indexPath.row]
        cell.powerLabel.text = String(powers[indexPath.row])
        return cell
    }


}

