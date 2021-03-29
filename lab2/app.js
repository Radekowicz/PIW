'use stric'

// SELECT ELEMENTS
const list = document.getElementById('list')
const input = document.getElementById('input')
const button = document.getElementById('add-button')

let LIST = []
let id = 0

const LINE_THROUGH = 'lineThrough'

const addItem = (text, id, done, trash) => {
    if (trash) {
        return
    }

    const LINE = done ? LINE_THROUGH : ''

    const date = new Date(Date.now()).toISOString()
    console.log(date)

    const item = `
    <li class="item" >
      <p class="text ${LINE}" job="complete" id="${id}">
        ${text} 
      </p>
      <i class="bi bi-trash-fill" job="delete" id="${id}"></i>
    </li>
  `
    list.insertAdjacentHTML('beforeend', item)
}

const completeItem = (element) => {
    element.parentNode.querySelector('.text').classList.toggle(LINE_THROUGH)
    LIST[element.id].done = LIST[element.id].done ? false : true
    console.log(LIST[element.id])
    // const date = `<p id="date">${new Date(Date.now()).toISOString()}</p>`
    // if (LIST[element.id].done) {
    //     element.parentNode
    //         .querySelector('.text')
    //         .insertAdjacentHTML('beforeend', date)
    // } else {
    // }
}

const removeItem = (element) => {
    element.parentNode.parentNode.removeChild(element.parentNode)
    LIST[element.id].trash = true
}

document.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        const text = input.value
        if (text) {
            addItem(text, id, false, false)
            LIST.push({
                name: text,
                id: id,
                done: false,
                trash: false,
            })
        }
        input.value = ''
        id++
    }
})

button.addEventListener('click', (event) => {
    const text = input.value
    if (text) {
        addItem(text, id, false, false)
        LIST.push({
            name: text,
            id: id,
            done: false,
            trash: false,
        })
    }
    input.value = ''
    id++
})

list.addEventListener('click', (event) => {
    let element = event.target
    const elementJob = element.attributes.job.value
    if (elementJob === 'complete') {
        completeItem(element)
    } else if (elementJob === 'delete') {
        removeItem(element)
    }
})
