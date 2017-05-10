class Animal {
    var name: String
    var health: Int
    init(name: String) {
        self.name = name
        self.health = 100
    }
    func displayHealth() {
        print("Health:",self.health)
    }
}

class Cat: Animal {
    override init(name: String) {
        super.init(name: name)
        self.health = 150
    }
    func growl() {
        print("Rawr!")
    }
    func run() {
        print("Running")
        self.health -= 10
    }
}

class Lion: Cat {
    override init(name: String) {
        super.init(name:name)
        self.health = 200
    }
    override func growl() {
        print("ROAR!!!! I am the King of the Jungle")
    }
    
}

class Cheetah: Cat {
    override init(name: String) {
        super.init(name:name)
        self.health = 200
    }
    func sleep() {
        if self.health > 150 {
            self.health = 200
        } else if self.health <= 150 {
            self.health += 50
        }
        print("Sleeping..ZZZ")
    }
    override func run() {
        if self.health >= 50 {
            print("Running Fast")
            self.health -= 50
        } else {
            print("Not enough health! Get some rest.")
        }
    }
}

let cat = Cat(name: "Kitty")
cat.displayHealth()
cat.run()
cat.displayHealth()

let newCheetah = Cheetah(name: "Rita the Cheetah")
newCheetah.run()
newCheetah.run()
newCheetah.run()
newCheetah.run()
newCheetah.displayHealth()
newCheetah.run()
newCheetah.sleep()
newCheetah.displayHealth()

let newLion = Lion(name: "Simba")
newLion.run()
newLion.run()
newLion.run()
newLion.growl()
