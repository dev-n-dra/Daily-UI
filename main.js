//javascript
const main = document.querySelector('main')

arr = [{
    day: 01,
    title: 'sign up',
    body: 'Vel augue aliquam vitae enim eu morbi iaculis.Faucibus diam tempor,verra nunc.Velit at eros,amet elit.Nunc id vitae,erat posuer diam tempor,viverra nunc.',
    link: '#'
}, {
    day: 02,
    title: 'credit card checkout',
    body: 'Vel augue aliquam vitae enim eu morbi iaculis.Faucibus diam tempor,verra nunc.Velit at eros,amet elit.Nunc id vitae,erat posuer diam tempor,viverra nunc.',
    link: '#'
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