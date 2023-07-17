// suggestions
let availableKeywords = [
  'HTML',
  'CSS',
  'React',
  'JavaScript',
  'Typescript',
  'Tailwind',
  'SASS',
  'Front end development',
  'Vite',
  'Astro',
  'JS',
  'Git',
  'GitHub'
]

// wrap DOM elements
const resultBox = document.querySelector('.result-box'),
inputBox = document.getElementById('input-box')

inputBox.onkeyup = () => {
  let result = []
  let input = inputBox.value
  if (input.length) {
    result = availableKeywords.filter(keyword => {
      return keyword.toLowerCase().includes(input.toLowerCase())
    })
    console.log(result)
  }
  showSuggestions(result)

  // don't  show suggestions if no there are letters
  if (!result.length) {
    resultBox.innerHTML = ''
  }
}

// show suggestions list
function showSuggestions(result) {
  const content = result.map(list => {
    return `<li onclick=selectInput(this)>${list}</li>`
  })
  resultBox.innerHTML = `<ul>${content.join('')}</ul>`
}

// select one suggestion
function selectInput(list) {
  inputBox.value = list.innerHTML
  resultBox.innerHTML = ''
}