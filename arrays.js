var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element) {
[element, ...array]
return array
}
function destructivelyAddElementToBeginningOfArray(array, element) {
array.unshift(element)
return array
}
function addElementToEndOfArray(array, element) {
return array=[array, ...element]
}
function destructivelyAddElementToEndOfArray(array, element) {
return array.push(element)
}
