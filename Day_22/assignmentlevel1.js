const numberContainer = document.createElement('div')
numberContainer.className = 'numberContainer'
numberContainer.style.display='flex'
numberContainer.style.flexWrap='wrap'




function isPrime(num) {
    if (num <= 1) return false
    if (num <= 3) return true
    if (num % 2 === 0 || num % 3 === 0) return false
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false
    }
    return true
}

for (let i = 0; i <= 101; i++) {
    let numberDiv = document.createElement("div")
    numberDiv.style.width='50px'
    numberDiv.style.height='50px'
    numberDiv.style.display='flex'
    numberDiv.style.alignItems='center'
    numberDiv.style.justifyContent='center'
    numberDiv.style.margin='1px'
    if (i % 2 === 0) {
        numberDiv.style.backgroundColor="green"
    } else {
        numberDiv.style.backgroundColor="yellow"
    }
    if (isPrime(i)) {
        numberDiv.style.backgroundColor="red"
    }
    numberDiv.textContent = i
    numberContainer.appendChild(numberDiv)
}
document.body.appendChild(numberContainer)















