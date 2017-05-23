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
    
    // Initializes an array of Item objects
    var items = [Item]()
    
    // Creates a copy of the DB with a managed object context
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    
    // Creates a request to grab all Item objects from the DB and store in managed object context
    func fetchData() {
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "Item")
        do {
            let result = try managedObjectContext.fetch(request)
            // Handle result
            
            // Store fetched result in items array
            
            items = result as! [Item]
            for item in items {
                print("\(String(describing: item.text))")
            }
        } catch {
            print(error)
        }
    }
    
    // Saves data to managed object context and saves to db file
    func saveData() {
        do {
            try managedObjectContext.save()
        } catch {
            print(error)
        }
    }

    // Fetch data on load
    override func viewDidLoad() {
        super.viewDidLoad()
        fetchData()
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()

    }
    
    // Function performs segue and brings up add item modal view
    @IBAction func addButtonPressed(_ sender: UIBarButtonItem) {
        performSegue(withIdentifier: "AddListItemSegue", sender: self)
    }
    
    // Protocol function that dismisses modal view when cancel button is pressed
    func cancelButtonPressed(by controller: UITableViewController) {
        dismiss(animated: true, completion: nil)
    }
    
    // Protocol function that either adds an Item to the items array or edits an existing item in the items array depending on
    // if the IndexPath passed by the AddItemViewController is nil or not
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
   
    // Perform segue to edit item when accessory button is tapped
    override func tableView(_ tableView: UITableView, accessoryButtonTappedForRowWith indexPath: IndexPath) {
        performSegue(withIdentifier: "AddListItemSegue", sender: indexPath)
    }
    
    // Swipe left to bring up delete option. Delete removes the item from the items array as well as the managed object context
    override func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCellEditingStyle, forRowAt indexPath: IndexPath) {
        managedObjectContext.delete(items[indexPath.row])
        items.remove(at: indexPath.row)
        saveData()
        self.tableView.reloadData()
    }

    // When segueing to the modal add view, this function prepares the segue and sets the delegate as the main BucketListView controller
    // Data can be passed to the modal add view to display when the view appears
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
    
    // Sets number of rows in table view
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return items.count
    }
    
    // Populates each cell in table view using data in items array as source
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "BucketListCell")!
        cell.textLabel?.text = items[indexPath.row].text
        return cell
    }

}

