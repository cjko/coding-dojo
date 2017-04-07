func commonInt(arr1: [Int], arr2: [Int]){
    var newArray: [Int] = []
    var x: Int = 0
    var y: Int = 0
    var z: Int = 0
    print(arr1)
    while x < arr1.count && z < arr2.count {
        if arr1[x] == arr2[y] {
            newArray.append(arr1[x])
            x += 1
            y = z
        } else if y == arr2.count {
            x += 1
        } else {
            z += 1
        }
    }
    print(newArray)
    
}

commonInt(arr1: [1,1,3,5,7,9,11], arr2: [2,3,3,6,7,11])



