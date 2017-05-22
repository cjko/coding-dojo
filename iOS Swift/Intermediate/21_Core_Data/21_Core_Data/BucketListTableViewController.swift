//
//  ViewController.swift
//  21_Core_Data
//
//  Created by Colin Jao on 5/17/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import UIKit
import CoreData

class BucketListTableViewController: UITableViewController, AddItemTableViewControllerDelegate {
    
    var items = [Item]()
    
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    
    func fetchData() {
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "Item")
        do {
            let result = try managedObjectContext.fetch(request)
            // Handle result
            items = result as! [Item]
            for item in items {
                print("\(String(describing: item.text))")
            }
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

    override func viewDidLoad() {
        super.viewDidLoad()
        fetchData()
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()

    }
    
    @IBAction func addButtonPressed(_ sender: UIBarButtonItem) {
        performSegue(withIdentifier: "AddListItemSegue", sender: self)
    }
    
    func cancelButtonPressed(by controller: UITableViewController) {
        dismiss(animated: true, completion: nil)
    }
    
    func doneButtonPressed(by controller: UITableViewController, with text: String, at indexPath: NSIndexPath?) {
        if let indexPath = indexPath {
            items[indexPath.row].text = text
        } else {
            let item = NSEntityDescription.insertNewObject(forEntityName: "Item", into: managedObjectContext) as! Item
            item.text = text
            items.append(item)
        }
        saveData()
        self.tableView.reloadData()
        dismiss(animated: true, completion: nil)
    }
    
   override func tableView(_ tableView: UITableView, accessoryButtonTappedForRowWith indexPath: IndexPath) {
        performSegue(withIdentifier: "AddListItemSegue", sender: indexPath)
    }
    
    override func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCellEditingStyle, forRowAt indexPath: IndexPath) {
        managedObjectContext.delete(items[indexPath.row])
        items.remove(at: indexPath.row)
        saveData()
        self.tableView.reloadData()
    }

    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let navController = segue.destination as! UINavigationController
        let addItemController = navController.topViewController as! AddItemTableViewController
        addItemController.delegate = self
        
        if sender is NSIndexPath? {
            let sender = sender as! NSIndexPath
            addItemController.text = items[sender.row].text
            addItemController.indexPath = sender
            addItemController.titleText = "Edit Item"
        }
    }
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return items.count
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "BucketListCell")!
        cell.textLabel?.text = items[indexPath.row].text
        return cell
    }

}

