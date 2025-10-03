/**
 * @type {{theme:string, time:string, scientist1:string, scientist2:string}[]}
 */

const arr = [
    {
        theme: 'Optika',
        time: 'XI. szazad',
        scientist1: 'Alhazen'
    },
    {
        theme: 'Asztronómia',
        time: 'reneszánsz',
        scientist1: 'Kepler',
        scientist2: 'Galilei'
    },
    {
        theme: 'Kvantumfizika',
        time: 'XIX-XX. század',
        scientist1: 'Max Planck',
        scientist2: 'Albert Einstein'
    },
    {
        theme: 'Modern fizika',
        time: 'XX-XXI. század',
        scientist1: 'Richard Feynman',
        scientist2: 'Stephen Hawking'
    }
]

const table = document.createElement('table');
document.body.appendChild(table)

const thead = document.createElement('thead');
table.appendChild(thead)

const tr = document.createElement('tr');
thead.appendChild(tr)

const th = document.createElement('th');
th.innerText = "Fizika terület"
tr.appendChild(th)

const th2 = document.createElement('th');
th2.innerText = "időszak"
tr.appendChild(th2)

const th3 = document.createElement('th');
th3.innerText = "Képvisekők"
th3.colSpan="2"
tr.appendChild(th3)


const tbdody = document.createElement('tbody')
table.appendChild(tbody)

const tr2 = document.createElement('tr')
tbdody.appendChild(tr2)

const td = document.createElement('td')
td.innerText = "Optika"
tr2.appendChild(td)

const td2 = document.createElement('td')
td2.innerText = "XI. század"
tr2.appendChild(td)

const td3 = document.createElement('th');
td3.innerText = "Alhazen"
td3.colSpan="2"
tr2.appendChild(td3)
