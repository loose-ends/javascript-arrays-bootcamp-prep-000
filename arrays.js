var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
const array = [1]
function addElementToBeginningOfArray(array, element) {
array=[element, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
array=array.unshift(element)
}
function addElementToEndOfArray(array, element) {
[array, ...element]
}
function destructivelyAddElementToEndOfArray(array, element) {
array=array.push(element)
}
