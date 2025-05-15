// console.log('ByTagName')
// const allH1 = document.getElementsByTagName('h1')
// console.log(allH1) //HTMLCollections
// console.log(allH1.length) // 4

// for (let i = 0; i < allH1.length; i++) {
//     console.log(allH1[i]) // prints each elements in the HTMLCollection
// }
// const allH2 = document.getElementsByTagName('h2')
// console.log(allH2)
// console.log(allH2.length)

// for (let i = 0; i < allH2.length; i++) {
//     console.log(allH2[i]) // prints each elements in the HTMLCollection
// }
// console.log('ByClassName')

// const allTitles = document.getElementsByClassName('title')

// console.log(allTitles) //HTMLCollections
// console.log(allTitles.length) // 4

// for (let i = 0; i < allTitles.length; i++) {
//     console.log(allTitles[i]) // prints each elements in the HTMLCollection
// }
// console.log('ById')
// let firstTitle = document.getElementById('first-title')
// console.log(firstTitle) // <h1>First Title</h1>

// let firstTitle1 = document.querySelector('h1') // select the first available h1 element
// let firstTitle2 = document.querySelector('#first-title') // select id with first-title
// let firstTitle3 = document.querySelector('.title') // select the first available element with class title

// console.log('QuerySelector')
// console.log(firstTitle1,firstTitle2,firstTitle3)

// console.log('QuerySelectorAll tag NAme')
// let allTitles = document.querySelectorAll('h1') //# selects all the available h1 elements in the page

// console.log(allTitles.length) // 4
// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i])
// }
// console.log('QuerySelectorAll class NAme')

// allTitles = document.querySelectorAll('.title') // the same goes for selecting using class
// allTitles.forEach(title => console.log(title))

// const titles = document.querySelectorAll('h1')
// titles[3].className = 'titles'
// titles[3].id = 'fourth-title'

// //another way to setting an attribute: append the class, doesn't over ride
// titles[3].classList.add('title', 'header-title')
// console.log(titles)
// //another way to setting an attribute: append the class, doesn't over ride
// titles[3].classList.remove('title', 'header-title')

// console.log(titles)


const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
    title.style.fontSize = '30px' // all titles will have 24px font size
    if (i % 2 === 0) {
        title.style.color = 'green'
        title.style.background = 'yellow'

    } else {
        title.style.color = 'red'
    }
})

let colors = ["blue", "yellow", "red", "green", "orange","voilet","black","skyblue","purple"]
let currentColor = 0
let lis = document.querySelectorAll("#stepsId li")
function changeColor() {
    --currentColor
    if (currentColor < 0) {
        currentColor = colors.length - 1
    }
    for (let i = 0; i < lis.length; i++) {
        lis[i].style.color = colors[(currentColor + i) % colors.length]
    }
}
setInterval(changeColor, 1000)
// const titles = document.querySelectorAll('h1')
titles[3].textContent = 'Fourth Title Added By textContent                      '
