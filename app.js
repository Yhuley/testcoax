let mouseTimeout
let screensaverActive = false
let windowWidth = window.innerWidth
let windowHeight = window.innerHeight

const activityEvents = [
    'mousedown', 'mousemove', 'keydown', 'scroll', 'touchstart', 'DOMContentLoaded'
]
const images = [
    {
        src: 'img/ocean-seacoast-rocks-water-87284.jpeg',
        width: 800,
        height: 533
    },
    {
        src: 'img/pexels-photo-885880.jpeg',
        width: 200,
        height: 300
    },
    {
        src: 'img/pexels-photo-1112598.jpeg',
        width: 1500,
        height: 1179
    },
    {
        src: 'img/pexels-photo-1275929.jpeg',
        width: 904,
        height: 678
    },
    {
        src: 'img/pexels-photo-1437629.jpeg',
        width: 377,
        height: 600
    },
    {
        src: 'img/pexels-photo-1451074.jpeg',
        width: 675,
        height: 900
    },
    {
        src: 'img/pexels-photo-1460880.jpeg',
        width: 400,
        height: 320
    },
]
const block = document.getElementById('block')
const screensaver = document.getElementById('screenSaver')

activityEvents.forEach(function(event) {
        document.addEventListener(event, function(){
            clearTimeout(mouseTimeout)

            if (screensaverActive){
                console.log('active')
                stopScreensaver()
            }

            mouseTimeout = setTimeout(function(){
                startScreensaver()
            }, 10000);
        }, true)
    })

function startScreensaver(){
    screensaver.style.display = 'block'
    screensaverActive = true
    screenSaver(images)
}

function stopScreensaver(){
    console.log('hide')
    hideImages(screensaver)
    screensaverActive = false
}

function screenSaver (images) {
    if (screensaverActive) {
        showImages(images)
    }
}

const getRandomOfArray = (images) => {
    return images[Math.floor(Math.random() * images.length)];
}
const getRandomPosition = (item) => {
    let x = Math.floor(Math.random() * windowWidth)
    let y = Math.floor(Math.random() * windowHeight)

    let sumX = x + item.width
    let sumY = y + item.height

    if (sumX > windowWidth) {
        x = 0;
    }
    if (sumY > windowHeight) {
        y = 0;
    }

        return { x, y }

}

const showImages = (images) => {
    setInterval(() => {
    let randomImage = getRandomOfArray(images)
    let position = getRandomPosition(randomImage)

    block.style.position = 'relative'
    block.setAttribute('src', randomImage.src)
    block.id = 'isVisible'
    block.style.left = `${position.x}px`
    block.style.top = `${position.y}px`
    }, 5000)
}

const hideImages = (screensaver) => {
    screensaver.style.display = 'none'
}