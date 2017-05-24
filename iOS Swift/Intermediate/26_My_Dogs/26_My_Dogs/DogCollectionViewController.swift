//
//  DogCollectionViewController.swift
//  26_My_Dogs
//
//  Created by Colin Jao on 5/23/17.
//  Copyright © 2017 Colin Jao. All rights reserved.
//

import UIKit
import CoreData

private let reuseIdentifier = "Cell"

class DogCollectionViewController: UICollectionViewController, AddDogViewControllerDelegate {
    
    var dogs = [Dog]()
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Uncomment the following line to preserve selection between presentations
        // self.clearsSelectionOnViewWillAppear = false
        fetchData()

        // Register cell classes
        self.collectionView!.register(UICollectionViewCell.self, forCellWithReuseIdentifier: reuseIdentifier)

        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    func fetchData() {
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "Dog")
        do {
            let result = try managedObjectContext.fetch(request)
            // Handle result
            dogs = result as! [Dog]
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
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let addDogController = segue.destination as! AddDogViewController
        addDogController.delegate = self
        
        if sender is IndexPath {
            let indexPath = sender as! IndexPath
            addDogController.name = dogs[indexPath.row].name
            addDogController.color = dogs[indexPath.row].color
            addDogController.treat = dogs[indexPath.row].treat
            addDogController.indexPath = indexPath
        }
        
    }
    
    @IBAction func addButtonPressed(_ sender: UIBarButtonItem) {
        performSegue(withIdentifier: "AddDogSegue", sender: self)
    }
    
    override func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        performSegue(withIdentifier: "AddDogSegue", sender: indexPath)
    }
    
    func addDogButtonPressed(by: UIViewController, with name: String, with color: String, with treat: String, with picture: UIImage?, at indexPath: IndexPath?) {
        if let indexPath = indexPath {
            dogs[indexPath.row].name = name
            dogs[indexPath.row].color = color
            dogs[indexPath.row].treat = treat
            if let picture = picture {
                dogs[indexPath.row].picture = UIImagePNGRepresentation(picture)! as NSData
            }
        } else {
            let dog = NSEntityDescription.insertNewObject(forEntityName: "Dog", into: managedObjectContext) as! Dog
            dog.name = name
            dog.color = color
            dog.treat = treat
            if let picture = picture {
                dog.picture = UIImagePNGRepresentation(picture)! as NSData
            }
            dogs.append(dog)
        }
        saveData()
        self.collectionView?.reloadData()
        
    }
    
    @IBAction func unwindToCollection(segue: UIStoryboardSegue){}

    override func numberOfSections(in collectionView: UICollectionView) -> Int {
        // #warning Incomplete implementation, return the number of sections
        return 1
    }

    override func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        // #warning Incomplete implementation, return the number of items
        return dogs.count
    }

    override func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "DogCollectionCell", for: indexPath) as! DogCollectionCell
        cell.nameLabel.text = dogs[indexPath.row].name
        cell.pictureView.image = UIImage(data: dogs[indexPath.row].picture! as Data)
        return cell
    }

}
