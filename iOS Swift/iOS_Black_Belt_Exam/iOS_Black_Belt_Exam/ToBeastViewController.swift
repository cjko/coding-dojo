//
//  ViewController.swift
//  iOS_Black_Belt_Exam
//
//  Created by Colin Jao on 5/26/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import UIKit
import CoreData

class ToBeastViewController: UIViewController, UITableViewDataSource, UITableViewDelegate, AddEditItemTableViewControllerDelegate, BeastItemCellDelegate {
    var toBeast = [BeastItem]()
    
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    
    @IBOutlet weak var tableView: UITableView!

    override func viewDidLoad() {
        super.viewDidLoad()
        tableView.delegate = self
        tableView.dataSource = self
        fetchData()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    func fetchData() {
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "BeastItem")
        do {
            let result = try managedObjectContext.fetch(request)
            toBeast = result as! [BeastItem]
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

    func cancelButtonPressed(by controller: UITableViewController) {
        dismiss(animated: true, completion: nil)
    }
    
    func doneButtonPressed(by controller: UITableViewController, with text: String, at indexPath: IndexPath?) {
        dismiss(animated: true, completion: nil)
        
        if let indexPath = indexPath {
            toBeast[indexPath.row].text = text
        } else {
            let beastItem = NSEntityDescription.insertNewObject(forEntityName: "BeastItem", into: managedObjectContext) as! BeastItem
            beastItem.text = text
            toBeast.append(beastItem)
        }
        
        saveData()
        self.tableView.reloadData()
    }
    
    func beastButtonPressed(by cell: IndexPath, with text: String) {
        let beastedItem = NSEntityDescription.insertNewObject(forEntityName: "BeastedItem", into: managedObjectContext) as! BeastedItem
        beastedItem.text = text
        beastedItem.date = Date() as NSDate
        managedObjectContext.delete(toBeast[cell.row])
        toBeast.remove(at: cell.row)
        saveData()
        self.tableView.reloadData()
    }
    
    func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCellEditingStyle, forRowAt indexPath: IndexPath) {
        managedObjectContext.delete(toBeast[indexPath.row])
        toBeast.remove(at: indexPath.row)
        saveData()
        self.tableView.reloadData()
    }
    
    @IBAction func newItemButtonPressed(_ sender: UIBarButtonItem) {
        performSegue(withIdentifier: "NewItemSegue", sender: self)
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        performSegue(withIdentifier: "NewItemSegue", sender: indexPath)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let navController = segue.destination as! UINavigationController
        let addEditController = navController.topViewController as! AddEditItemTableViewController
        addEditController.delegate = self
        
        if sender is IndexPath? {
            let indexPath = sender as! IndexPath
            addEditController.beastText = toBeast[indexPath.row].text!
            addEditController.indexPath = indexPath
        }
        
    }

    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return toBeast.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "BeastItemCell") as! BeastItemCell
        cell.delegate = self
        cell.beastItemLabel.text = toBeast[indexPath.row].text
        cell.indexPath = indexPath
        return cell
    }
    
}

