//
//  ViewController.swift
//  24_Todo_List_App
//
//  Created by Colin Jao on 5/23/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import UIKit
import CoreData

class TodoListViewController: UITableViewController, AddTodoItemViewControllerDelegate {
    
    var items = [TodoItem]()
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    
    override func viewDidLoad() {
        super.viewDidLoad()
        fetchData()
    }
    
    func fetchData() {
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "TodoItem")
        do {
            let result = try managedObjectContext.fetch(request)
            // Handle result
            items = result as! [TodoItem]
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

    func cancelButtonPressed(by controller: UIViewController) {
        dismiss(animated: true, completion: nil)
    }
    
    @IBAction func addButtonPressed(_ sender: UIBarButtonItem) {
        performSegue(withIdentifier: "AddItemSegue", sender: self)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let navController = segue.destination as! UINavigationController
        let addController = navController.topViewController as! AddTodoItemViewController
        addController.delegate = self
    }
    
    func addItemButtonPressed(by controller: UIViewController, with title: String, with description: String, on date: Date) {
        dismiss(animated: true, completion: nil)
        let todoItem = NSEntityDescription.insertNewObject(forEntityName: "TodoItem", into: managedObjectContext) as! TodoItem
        todoItem.title = title
        todoItem.desc = description
        todoItem.date = date as NSDate
        todoItem.complete = false
        items.append(todoItem)
        saveData()
        self.tableView.reloadData()
    }
    
    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let item = items[indexPath.row]
        item.complete = !item.complete
        saveData()
        self.tableView.reloadData()
    }
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return items.count
    }

    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "TodoCell") as! TodoCell
        cell.titleLabel.text = items[indexPath.row].title
        cell.descriptionLabel.text = items[indexPath.row].desc
        if let date = items[indexPath.row].date {
            let formatter = DateFormatter()
            formatter.dateFormat = "MM'/'dd'/'yyyy"
            let dateString = formatter.string(from: date as Date)
            cell.dateLabel.text = dateString
        }
        if items[indexPath.row].complete {
            cell.accessoryType = .checkmark
        } else {
            cell.accessoryType = .none
        }
        return cell
    }
}

