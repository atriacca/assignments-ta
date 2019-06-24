var matrix = [[1, 2, 3], [5, 6, 7], [9, 8, 4]]

for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix.length; j++){
        console.log(matrix[i][j])
    }
}
// The above won't work if one of the arrays is a different length
for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
        console.log(matrix[i][j])
    }
}


// var newMatrix = []
// for (let i = 0; i < matrix.length; i++){
//     matrix.splice(i, 1, 0)
//     newMatrix.push(matrix[0])
//     // for (let j = 0; j < matrix.length; j++){
//     // //     // matrix.map[i][j] 
//     // }
//     console.log(newMatrix)
// }

for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
        matrix[i][j] = 0
    }
}
console.log(matrix)
// matrix2 = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

let me = new Person ("Alan", true, "bald")

