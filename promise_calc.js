function promise2 (num) {
  if (num % 2 === 0) {
    return Promise.resolve(num)
  } else {
    return Promise.reject(num * 3)
  }
}

promise2(2)
  .then(function (genap) {
    return genap * 2
  })
  .then(function (genap) {
    console.log("then", genap)
  })
  .catch(function (ganjil) {
    console.log("catch", ganjil)
  })
