var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
const array = [1]
function addElementToBeginningOfArray(array, element) {
return array=[element, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
return array=array.unshift(element)
}
function addElementToEndOfArray(array, element) {
return array=[array, ...element]
}
function destructivelyAddElementToEndOfArray(array, element) {
return array=array.push(element)
}
