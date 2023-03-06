addEventListener('DOMContentLoaded', (e) => {
    
    const counter = document.getElementById('counter')
    const time = setInterval(timeHandler, 1000)
    const pauseButton = document.getElementById('pause')
    pauseButton.addEventListener('click', handlePause)
    const minusButton = document.getElementById('minus')
    const plusButton = document.getElementById('plus')
    const likeButton = document.getElementById('heart')
    const input = document.getElementById('comment-input')
        
    function handlePause(e) {
        if (e.target.innerText === 'pause') {
            (e.target.innertext = 'resume') && (clearInterval(time))
        } else {
            (setInterval(timeHandler, 1000)) && (e.target.innerText = 'pause')
        }
    }
    
    function timeHandler() {
            counter.innerText = ++counter.innerText
    }

    function subtractTimer () {
        minusButton.addEventListener('click', () => {
            counter.innerText = --counter.innerText
        })
    }

    subtractTimer()

    function addTimer () {
        plusButton.addEventListener('click', () => {
            counter.innerText = ++counter.innerText
        })
    }

    addTimer()

    function likeNumber (input) {
        
        likeButton.addEventListener('click', () => {
            let listItem = document.getElementsByClassName('likes');
            listItem.appendChild(document.createTextNode(input.innerText));
            document.querySelector('ul').appendChild(listItem);
        })
    }

    likeNumber(input)
});

