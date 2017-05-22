//
//  ViewController.swift
//  16_Aging_People
//
//  Created by Colin Jao on 5/15/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    var person = ["Colin", "Tahim", "Kyle", "Kavya", "Charles", "George", "Betty", "Fran", "Joe","Helda","Winifred", "Zed"]

    @IBOutlet weak var tableView: UITableView!
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        tableView.dataSource = self
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
}

extension ViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return person.count
    }
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "MyCell", for: indexPath) as! PersonTableViewCell
        cell.nameLabel?.text = person[indexPath.row]
        cell.ageLabel?.text = "\(arc4random_uniform(100)+1) years old"
        return cell
    }
}

class PersonTableViewCell: UITableViewCell {
    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var ageLabel: UILabel!
    
}


















