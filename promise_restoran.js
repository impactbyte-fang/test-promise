const promise1 = function(pesenan) {
  return new Promise(function(resolve, reject) {
    const menu = ['martabak', 'air putih']

    const ketemu = menu.find(function(makanan) {
      return makanan === pesenan
    })

    if (ketemu !== undefined) {
      resolve(ketemu)
    } else {
      reject('ga ketemu')
    }
  })
}

function promise2(pesenan) {
  const menu = ['martabak', 'air putih']

  const ketemu = menu.find(function(makanan) {
    return makanan === pesenan
  })

  if (ketemu !== undefined) {
    return Promise.resolve(ketemu)
  } else {
    return Promise.reject('ga ketemu')
  }
}

console.log(1)

promise1('martabak')
  .then(function(param) {
    return param + ' pesen 2'
  })
  .then(function(param) {
    return param + ' pesen 2'
  })
  .then(function(param) {
    return param + ' pesen 2'
  })
  .then(function(param) {
    return param + ' pesen 2'
  })
  .then(function(param) {
    console.log(1, 'makanannya adalah', param)
  })
  .catch(function(err) {
    console.log(1, 'makanannya ga ketemu')
  })

promise1('gyaung')
  .then(function(param) {
    console.log(2, 'makanannya adalah', param)
  })
  .catch(function(err) {
    console.log(2, 'makanannya ga ketemu')
  })

console.log(2)
