var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element) {
array=[element, ...array]
}
console.log(array)

function destructivelyAddElementToBeginningOfArray(array, element) {
array=array.unshift(element)
}
function addElementToEndOfArray(array, element) {
[array, ...element]
}
function destructivelyAddElementToEndOfArray(array, element) {
array=array.push(element)
}
