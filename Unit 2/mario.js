function printPyramid(numHashtags, height) {
  let result = ''
  let brick = '#'
  let space = " "
  for (let spaces = height - numHashtags; spaces >= 0; spaces--) {
    result += space
  }
  for (let count = 0; count <= numHashtags; count++) {
    result += brick
  }
  return result
  console.log(result)
}
let height = prompt("Enter the height of the pyramid: ")
height = parseInt(height)
for (let i = 1; i <= height; i++) {
  console.log(printPyramid(i, height))
}