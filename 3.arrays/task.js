function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index])
}

function getUsersNamesInAgeRange(users, gender) {
    return users
      .filter(item => item.gender === gender)
      .map(item => item.age)
      .reduce((acc, item, index, arr) => acc + item / arr.length, 0)
}