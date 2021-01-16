const fn = (par, callback) => {
  if (!par) {
    callback(new Error('Parameter needed'))
    return
  }
  callback(null, 'Data ' + par)
  return 'Value'
}

const result = fn('example', (err, data) => {
  if (err) throw err
  console.dir({ data })
})

console.dir({ result })
