const container = document.querySelector('.container')
const URL = 'https://source.unsplash.com/random/'
const rows = 10

for(var i = 0; i < rows * 3; i++)
{
    const img = document.createElement('img')
    img.src = `${URL}${getRandomSize()}`
    container.appendChild(img)
}

console.log(getRandomSize())
function getRandomSize()
{
    return `${getRondomNumber()}x${getRondomNumber()}` 
}

function getRondomNumber() {
    return Math.floor(Math.random() * 30) + 300
}