//
//  BeastedViewController.swift
//  iOS_Black_Belt_Exam
//
//  Created by Colin Jao on 5/26/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import UIKit
import CoreData

class BeastedViewController: UIViewController, UITableViewDataSource {
    var beastedItems = [BeastedItem]()

    @IBOutlet weak var tableView: UITableView!
    
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    
    override func viewDidLoad() {
        super.viewDidLoad()
        tableView.dataSource = self
        fetchData()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        fetchData()
        self.tableView.reloadData()
    }

    func fetchData() {
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "BeastedItem")
        do {
            let result = try managedObjectContext.fetch(request)
            // Handle result
            beastedItems = result as! [BeastedItem]
        } catch {
            print(error)
        }
    }
    
    func saveData() {
        do {
            try managedObjectContext.save()
        } catch {
            print(error)
        }
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()

    }
    
    func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCellEditingStyle, forRowAt indexPath: IndexPath) {
        managedObjectContext.delete(beastedItems[indexPath.row])
        beastedItems.remove(at: indexPath.row)
        saveData()
        self.tableView.reloadData()
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return beastedItems.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "BeastedItemCell") as! BeastedItemCell
        cell.beastedItemLabel.text = beastedItems[indexPath.row].text
        
        let date = beastedItems[indexPath.row].date
        
        let formatter = DateFormatter()
        formatter.dateFormat = "E MMM yy"
        let dateString = formatter.string(from: date! as Date)
        
        cell.beastedDate.text = dateString
        return cell
    }
    
}
