const arr = [
    {
        name: 'Balassi Bálint',
        time:'reformáció',
        interest1:'Losonczy Anna',
        interest2:'Dobó Krisztina',
    },
    {
        name: 'Csokonai Vitéz Mihály',
        time: 'felvilágosodá',
        interest1: 'Vajda Juliána',
    },
    {
        name: 'Petőfi Sándor',
        time: 'magyar romantika',
        interest1: 'Mednyánszky Berta',
        interest2: 'Szendrey Júlia',
    },
    {
        name: 'Ady Endre',
        time: '20. század',
        interest1: 'Léda',
        interest2: 'Csinszka',
    }

]



const table = document.createElement('table')
document.body.appendChild(table)

const thead = document.createElement('thead')
table.appendChild(thead)

const tr = document.createElement('tr')
thead.appendChild(tr)

CreateCellElement('th', "szerző neve", tr)
CreateCellElement('th', "Korszak", tr)
const th3 = CreateCellElement('th', "Szerelmek", tr)

const tbody = document.createElement('tbody')
table.appendChild(tbody)

for (const a of arr){

    const tr2 = document.createElement('tr')
    tbody.appendChild(tr2)

    CreateCellElement('td', a.name, tr2)
    CreateCellElement('td', a.time, tr2)
    const td3 = CreateCellElement('td', a.interest1, tr2)

    if(a.interest2 != undefined){

        CreateCellElement('td', a.interest1, tr2)

    }
    else{
        td3.colSpan = "2"
        th3.colSpan = "2"
    }
}

/**
 * @param {string} celltype 
 * @param {string} cellcontent 
 * @param {HTMLTableRowElement} cellrow
 * @returns {HTMLTableCellElement}
 */
function CreateCellElement(celltype,cellcontent,cellrow){

    const cell = document.createElement(celltype)
    cell.innerText = cellcontent
    cellrow.appendChild(cell)

    return cell 
}









//hazi feladat


const form = document.createElement('form'); 
form.id = 'form_js'; 
document.body.appendChild(form); 


const h2 = document.createElement('h2'); 
h2.innerText = 'Javascript form'; 
form.appendChild(h2); 

/**
 * @param {string} labelText 
 * @param {string} inputType
 * @param {string} inputId 
 * @param {HTMLElement} forms 
 */
function createInputField(labelText, inputType, inputId, forms) {
    const label = document.createElement('label'); 
    label.htmlFor = inputId; 
    label.innerText = labelText; 
    forms.appendChild(label); 

    const br1 = document.createElement('br'); 
    forms.appendChild(br1); 

    const input = document.createElement('input'); 
    input.type = inputType; 
    input.id = inputId; 
    input.name = inputId; 
    forms.appendChild(input); 

    const br2 = document.createElement('br');
    forms.appendChild(br2); 

    const br3 = document.createElement('br');
    forms.appendChild(br3); 
}


createInputField('Költő neve:', 'text', 'kolto_nev', form); 
createInputField('Korszak:', 'text', 'korszak', form); 
createInputField('Szerelme:', 'text', 'szerelem1', form); 
createInputField('Szerelme:', 'text', 'szerelem2', form); 


const button = document.createElement('button'); 
button.innerText = 'Hozzáadás'; 
form.appendChild(button); 