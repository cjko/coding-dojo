//: Playground - noun: a place where people can play

import UIKit

print ("Problem #1: ")
for i in 1...255 {
    print(i)
}

print ("\nProblem #2: ")
for i in 1...100 {
    if !(i % 15 == 0) && (i % 3 == 0 || i % 5 == 0) {
        print(i)
    }
}

print ("\nProblem #3: ")
for i in 1...100 {
    if (i % 15 == 0) {
        print("\(i) FizzBuzz")
    } else if (i % 3 == 0) {
        print ("\(i) Fizz")
    } else if (i % 5 == 0) {
        print ("\(i) Buzz")
    }
}
