//
//  ViewController.swift
//  22_Custom_Cell
//
//  Created by Colin Jao on 5/22/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import UIKit

class CustomCellsViewController: UITableViewController {
    
    var items = [("Float On", "Modest Mouse"), ("Seventeen Years", "Ratatat"), ("Houdini", "Foster the People")]

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return items.count
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "CustomCell") as! CustomCell
        cell.songTitleLabel.text = items[indexPath.row].0
        cell.artistLabel.text = items[indexPath.row].1
        return cell
    }


}

