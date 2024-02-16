type numORstr = number | string
const printId = (id: numORstr) => {
  console.log(`The id is ${id}`)
}

printId(1)
printId('d')
