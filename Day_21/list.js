// let completedChllange=document.getElementsByClassName('completedChllange')
// for (let index = 0; index < completedChllange.length; index++) {
//     completedChllange[index].style.backgroundColor='#32CD32'
// }

// let OngoingChllange=document.getElementsByClassName('OngoingChllange')
// for (let index = 0; index < OngoingChllange.length; index++) {
//     OngoingChllange[index].style.backgroundColor='#FFFF00'
// }

// let comingChllange=document.getElementsByClassName('comingChllange')
// for (let index = 0; index < comingChllange.length; index++) {
//     comingChllange[index].style.backgroundColor='#FF6347'
// }


let liElements = document.querySelectorAll('li')
// liElements.forEach((liElements) => {
    
// })
for (let index = 0; index < liElements.length; index++) {
    if (liElements[index].textContent.toUpperCase().includes('DONE')) {
        liElements[index].style.backgroundColor = '#32CD32'
        continue
    }
    if (liElements[index].textContent.toUpperCase().includes('ONGOING')) {
        liElements[index].style.backgroundColor = '#FFFF00'
        continue
    }
    
    liElements[index].style.backgroundColor = '#FF6347'
    
}





