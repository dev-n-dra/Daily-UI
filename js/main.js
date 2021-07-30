//javascript
const main = document.querySelector('main')
const footer = document.querySelector('footer')

arr = [{
    day: 01,
    title: 'sign up',
    body: 'The challenge is to Design and Develop a signup page. And when it comes to forms, the most crucial thing is Accessibility. So to make this page accessible, I used the custom focus state and chose the colors with good contrast.',
    link: 'Projects/day-1/index.html'
}, {
    day: 02,
    title: 'credit card checkout',
    body: 'The challenge is to Design and Develop the credit card checkout page. I used the gradients to look the UI of the page appealing and the use of monospace font makes the card look real.',
    link: 'Projects/day-2/index.html'
}]

console.log(arr)

let renderString = ''
arr.forEach(element => {
    let day = element.day
    if (day < 10) {
        day = `0${element.day}`
    }
    if (element.day % 2 === 0) {
        renderString += `
        <section class="even">
            <div class="container">
                <div class="flex">
                    <div class="num">${day}</div>
                    <div class="content">
                        <h1 class="accent">${element.title}</h1>
                        <p>${element.body}</p>
                        <a href="${element.link}">
                            <div class="button">Visit project</div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `
    } else {
        renderString += `
        <section class="odd">
            <div class="container">
                <div class="flex">
                    <div class="num">${day}</div>
                    <div class="content">
                        <h1 class="accent">${element.title}</h1>
                        <p>${element.body}</p>
                        <a href="${element.link}">
                            <div class="button">Visit project</div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `
    }
});

main.innerHTML += renderString

if (arr.length % 2 == 0) {
    footer.style.background = '#0d5c63'
    footer.style.color = '#0ffe0b5'
} else {
    footer.style.background = '#ffe0b5'
    footer.style.color = '#0d5c63'
}