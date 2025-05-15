const asabenehChallenges2020 = {
    description: 'Asabeneh Yetayeh challenges',
    challengeTitle: 'Asabeneh Yetayeh challenges',
    challengeSubtitle: '30DaysOfJavaScript Challenge',
    challengeYear: 2020,
    keywords: [
        'HTML',
        'HTML5',
        'CSS',
        'CSS3',
        'JS',
        'JavaScript',
        'ES6',
        'Promise',
        'async await',
        'Database',
        'React',
        'React Hooks',
        'Context API',
        'React Router',
        'Web Storage',
        'localStorage',
        'sessionStorage',
        'Redux',
        'Node',
        'MongoDB',
        'SQL',
        'API',
        'DOM',
        'data science',
        'MERN',
        'Python',
        'Flask',
        'Statistics',
        'Linear Algebra',
        'Numpy',
        'Pandas',
        'Scipy',
        'Scikit-learn',
        'Visualization',
        'D3.js'
    ],
    author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
        titles: [
            ['🌱', 'Educator'],
            ['💻', 'Programmer'],
            ['🌐', 'Developer'],
            ['🔥', 'Motivator'],
            ['📔', 'Content Creator']
        ],
        qualifications: [
            'MSc. Computer Science Ongoing',
            'BSc. Information and Communication Eng.',
            'MSc. Food Technology',
            'BSc.Food Technology'
        ],
        socialLinks: [
            {
                social: 'LinkedIn',
                url: 'https://www.linkedin.com/in/asabeneh/',
                fontawesomeIcon: '<i class="fab fa-linkedin">'
            },
            {
                social: 'Twitter',
                url: 'https://twitter.com/Asabeneh',
                fontawesomeIcon: '<i class="fab fa-twitter-square"></i>'
            },
            {
                social: 'Github',
                fontawesomeIcon: '<i class="fab fa-github-square"></i>',
                url: 'https://github.com/Asabeneh'
            },
            {
                social: 'DEV.to',
                fontawesomeIcon: '',
                url: 'https://dev.to/asabeneh'
            }
        ],
        skills: [
            'Web Development',
            'Data Analysis',
            'Data Visualization',
            'Programming',
            'Databases',
            'Developing API'
        ],
        bio:
            'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'
    },
    challenges: [
        {
            name: '30 Days Of Python',
            topics: [
                'Python',
                'Flask',
                'Numpy',
                'Pandas',
                'Statistics',
                'API',
                'MongoDB'
            ],
            days: 30,
            status: 'Done',
            questions: 'Above 500',
            projects: 'Two',
            interviewQns: '',
            githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python'
        },
        {
            name: '30 Days Of JavaScript',
            topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
            days: 30,
            status: 'Ongoing',
            questions: 'Above 500',
            projects: 'About 30',
            interviewQns: '',
            githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
        },
        {
            name: '30 Days Of HTML & CSS',
            topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
            days: 30,
            status: 'Coming',
            questions: 'Above 500',
            projects: 'Two',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of React',
            topics: [
                'React',
                'React Router',
                'Redux',
                'Context API',
                'React Hooks',
                'MERN'
            ],
            days: 30,
            status: 'Coming',
            questions: '',
            projects: '',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of ReactNative',
            topics: ['ReactNative', 'Redux'],
            days: 30,
            status: 'Coming',
            questions: '',
            projects: 'Two',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of Fullstack',
            topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
            days: 30,
            status: 'Coming',
            questions: '',
            projects: '',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of Data Analysis',
            topics: ['Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
            days: 30,
            status: 'Coming',
            questions: '',
            projects: '',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of Machine Learning',
            topics: [
                'Python',
                'Numpy',
                'Pandas',
                'Scikit-learn',
                'Scipy',
                'Linear Algebra',
                'Statistics',
                'Visualization'
            ],
            days: 30,
            status: 'Coming',
            questions: '',
            projects: '',
            interviewQns: '',
            githubUrl: ''
        }
    ]
}


const wrapperDiv = document.querySelector('.wrapper')

const header = document.createElement('h1')
header.innerHTML = asabenehChallenges2020.challengeTitle + ' in ' + '<span>' + asabenehChallenges2020.challengeYear + '</span>'
header.setAttribute('align', 'center')


wrapperDiv.appendChild(header)
const spanYear = document.querySelector('span')
spanYear.style.fontSize = '70px'


const description = document.createElement('h2')
description.textContent = asabenehChallenges2020.challengeSubtitle
description.style.textDecoration = 'underline'
description.setAttribute('align', 'center')

wrapperDiv.appendChild(description)

const dateString = document.createElement('div')
dateString.id = 'clock'
dateString.setAttribute('align', 'center')
wrapperDiv.appendChild(dateString)

let colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']
let currentColor = 0
let lis = document.querySelectorAll("span")
let dateAndTime = document.querySelectorAll("#clock")

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


setInterval(showTime, 1000);
// Defining showTime funcion
function showTime() {
    let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    // Getting current time and date
    function addZero(params) {
        if (params < 10) {
            params = '0' + params
            return params
        } else {
            return params
        }
    }
    let time = new Date();
    let nowYear = time.getFullYear()
    let month = time.getMonth()
    let date = addZero(time.getDate())
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "  PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = " AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = monthArray[month] + ' ' + date + ',' + '  ' + nowYear + ' ' + hour + ":" + min + ":" + sec + am_pm;

    let dateTime = document.getElementById("clock")
    dateTime.innerHTML = currentTime;
    dateTime.style.width = '250px'
    dateTime.style.margin = 'auto'


    function changeColor() {
        --currentColor
        if (currentColor < 0) {
            currentColor = colors.length - 1
        }
        for (let i = 0; i < lis.length; i++) {
            dateAndTime[i].style.backgroundColor = colors[(currentColor + i) % colors.length]
        }
    }
    changeColor()


}
showTime();

let listOfCources = document.createElement('ul')
wrapperDiv.appendChild(listOfCources)

for (const challenge in asabenehChallenges2020['challenges']) {
    let courceTopics = asabenehChallenges2020['challenges'][challenge]['topics']
    let courceStatus = (asabenehChallenges2020['challenges'][challenge]['status']).toUpperCase()
    let listElement = document.createElement('li')
    let listText = document.createElement('div')
    listText.className='liDivs'
    listText.style.textDecoration ='underline'
    // listText.style.color ='purple'
    listText.textContent = asabenehChallenges2020['challenges'][challenge]['name']
    listElement.appendChild(listText)
    let detailsDiv=document.createElement('div')
    detailsDiv.className='liDivs'
    let topicsDetails = document.createElement('details')
    detailsDiv.appendChild(topicsDetails)
    topicsDetails.style.paddingLeft='0'
    let topicSummry = document.createElement('summary')
    topicSummry.textContent = courceTopics[0]
    courceTopics.map((topic) => {
        let topicName = document.createElement('p')
        topicName.textContent = topic
        topicsDetails.appendChild(topicName)
    })
    let status = document.createElement('div')
    status.style.textAlign='right'
    status.className='liDivs'
    if (courceStatus == 'DONE') {
        listElement.style.backgroundColor = '#32CD32'
        status.textContent = 'Done'
        listText.style.color='darkblue'
    }
    if (courceStatus == 'ONGOING') {
        listElement.style.backgroundColor = '#FFFF00'
        status.textContent = 'OnGoing'
        listText.style.color='purple'

    }
    if (courceStatus == 'COMING') {

        listElement.style.backgroundColor = '#FF6347'
        status.textContent = 'Comming'
    }

    topicsDetails.appendChild(topicSummry)
    listElement.append(detailsDiv)
    listElement.appendChild(status)
    listOfCources.appendChild(listElement)
}

const auther = document.createElement('h1')
auther.innerHTML = asabenehChallenges2020.author.firstName+' '+asabenehChallenges2020.author.lastName
auther.setAttribute('align', 'center')
wrapperDiv.appendChild(auther)



const socialLinks=document.createElement('div')
socialLinks.setAttribute('align', 'center')
socialLinks.style.display='felx'
socialLinks.style.justifyContent='spacebetween'
let arrayOfsocialLinks=asabenehChallenges2020.author.socialLinks
arrayOfsocialLinks.map((singleSocial)=>{
    // console.log(singleSocial.fontawesomeIcon)
    let socialSingleDiv=document.createElement('div')
    socialSingleDiv.innerHTML=singleSocial.fontawesomeIcon
    socialLinks.append(socialSingleDiv)
})
wrapperDiv.appendChild(socialLinks)

const authorBio=document.createElement('p')
authorBio.innerHTML=asabenehChallenges2020.author.bio
authorBio.setAttribute('align', 'center')
authorBio.style.paddingLeft='15%'
authorBio.style.width='70%'
wrapperDiv.appendChild(authorBio)


const skillsDiv=document.createElement('div')
skillsDiv.style.display='flex'
skillsDiv.style.justifyContent='centre'
skillsDiv.style.marginLeft='15%'
skillsDiv.style.width='70%'
wrapperDiv.appendChild(skillsDiv)

const titlesDiv=document.createElement('div')
// titlesDiv.style.width='500px'
titlesDiv.innerHTML='<h1>Titles</h1>'
titlesDiv.style.width='35%'
titlesDiv.style.marginLeft='5%'
let titlesArray=asabenehChallenges2020.author.titles
titlesArray.map((title)=>{
    let singleTitleDiv=document.createElement('div')
    singleTitleDiv.style.display='flex'
    // singleTitleDiv.style.justifyContent='sp'
    // console.log(title[0],title[1])
    let logoDiv=document.createElement('div')
    logoDiv.innerHTML=title[0]
    let titleText=document.createElement('div')
    titleText.innerHTML=title[1]
    singleTitleDiv.appendChild(logoDiv)
    singleTitleDiv.appendChild(titleText)
    titlesDiv.appendChild(singleTitleDiv)
})

const skills=document.createElement('div')
skills.style.width='35%'
skills.style.marginLeft='10%'
skills.innerHTML='<h1>Skills</h1>'
asabenehChallenges2020.author.skills.map((skill)=>{
    // &#9989;
    let skilDiv=document.createElement('div')
    skilDiv.innerHTML=`&#9989;${skill}`
    skills.appendChild(skilDiv)
})
const qualification=document.createElement('div')
qualification.style.width='70%'
qualification.style.marginLeft='15%'
qualification.innerHTML='<h1>Qualifications</h1>'
asabenehChallenges2020.author.qualifications.map((qua)=>{
    // &#9989;
    let skilDiv=document.createElement('div')
    skilDiv.innerHTML=`&#xf501;${qua}`
    qualification.appendChild(skilDiv)
})


skillsDiv.appendChild(titlesDiv)
skillsDiv.appendChild(skills)
skillsDiv.appendChild(qualification)

const keywordsDiv=document.createElement('div')
keywordsDiv.innerHTML='<h1>Keywords</h1>'
keywordsDiv.style.marginLeft='15%'
keywordsDiv.style.marginRight='15%'
const keysDiv=document.createElement('div')

// keysDiv.style.width=''
keysDiv.style.display='flex'
keysDiv.style.flexWrap='wrap'
keysDiv.style.justifyContent='spacebetween'
asabenehChallenges2020.keywords.map((keyword,index)=>{
    let keydiv=document.createElement('div')
    if (index>=colors.length) {
        index-=colors.length/2
    }
    keydiv.style.backgroundColor=colors[index]
    keydiv.classList.add('keydiv')
    let word='#'+keyword.toUpperCase() 
    keydiv.innerHTML=word
    keysDiv.appendChild(keydiv)
})
keywordsDiv.appendChild(keysDiv)

wrapperDiv.appendChild(keywordsDiv)




const footerDiv=document.createElement('div')
footerDiv.style.height='100px'
wrapperDiv.appendChild(footerDiv)



