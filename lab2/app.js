'use stric';

// SELECT ELEMENTS
const list = document.getElementById('list');
const input = document.getElementById('input');
const button = document.getElementById('add-button');
const backButton = document.getElementById('back-button');

let LIST = [];
let id = 0;
let removedItemName;
let removedId;

const LINE_THROUGH = 'lineThrough';

const addItem = (text, id, done, trash) => {
    if (trash) {
        return;
    }

    const LINE = done ? LINE_THROUGH : '';

    // const date = new Date(Date.now()).toISOString();
    // const DATE = done ? date : '';
    // console.log(DATE);

    const item = `
    <li class="item" >
      <p class="text ${LINE}" job="complete" id="${id}">
        ${text}
      </p>
      <p class="date"></p>
      <i class="bi bi-trash-fill" job="delete" id="${id}"></i>
    </li>
  `;
    list.insertAdjacentHTML('beforeend', item);
};

const completeItem = (element) => {
    element.parentNode.querySelector('.text').classList.toggle(LINE_THROUGH);
    LIST[element.id].done = LIST[element.id].done ? false : true;
    console.log(LIST[element.id]);

    if (LIST[element.id].done) {
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1;
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        newdate = day + '/' + month + '/' + year;

        element.parentNode.querySelector('.date').textContent = newdate;
    } else {
        element.parentNode.querySelector('.date').textContent = '';
    }
};

const removeItem = (element) => {
    if (confirm('Do you want to delete this item?')) {
        //jquery
        $(element).parent().remove();
        removedItemName = LIST[element.id].name;
        removedId = element.id;
        LIST[element.id].trash = true;
    }
};

document.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        const text = input.value;
        if (text) {
            addItem(text, id, false, false);
            LIST.push({
                name: text,
                id: id,
                done: false,
                trash: false,
            });
        }
        input.value = '';
        id++;
    }
});

button.addEventListener('click', (event) => {
    const text = input.value;
    if (text) {
        addItem(text, id, false, false);
        LIST.push({
            name: text,
            id: id,
            done: false,
            trash: false,
        });
    }
    input.value = '';
    id++;
});

list.addEventListener('click', (event) => {
    let element = event.target;
    const elementJob = element.attributes.job.value;
    if (elementJob === 'complete') {
        completeItem(element);
    } else if (elementJob === 'delete') {
        removeItem(element);
    }
});

backButton.addEventListener('click', (event) => {
    if (removedItemName) {
        addItem(removedItemName, removedId, false, false);
        LIST[removedId].trash = false;
        removedItemName = '';
        removedId = -1;
    }
});
