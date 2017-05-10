//: Playground - noun: a place where people can play

import UIKit

var arr = [Int]()
for i in 1...255 {
    arr.append(i)
}

var temp: Int
var num: Int
var numTwo: Int
var i = 0
while i < 100 {
    num = Int(arc4random_uniform(254))
    numTwo = Int(arc4random_uniform(254))
    temp = arr[num]
    arr[num] = arr[numTwo]
    arr[numTwo] = temp
    i = i+1
}

for i in 0...254 {
    if (arr[i] == 42) {
        arr.remove(at: i)
        print("We found the answer to the Ultimate Question of Life, the Universe, and Everything at index \(i)")
        break
    }
}

print(arr)



