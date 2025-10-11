
const arr = {}

let num = 6

if ( num > 5){
    arr.Name = "szoveg"
}
else{
    arr.Name="LAO G"
}
console.log(arr.Name)
console.log(arr['Name'])


const tomb = [
    {
        nationality: 'Orosz',
        author: 'gogol',
        title: 'A köpönyeg',
        author2: 'Csehov',
        title2: 'A csinovnyik halála',

    },
    {
        nationality: 'Cseh',
        author: 'Franz Kafka',
        title: 'Az átváltozás',
    },
    {
        nationality: 'Magyar',
        author: 'Örkény István',
        title: 'Egyperces Novellák',
        author2: 'József Attila',
        title2: 'Klárisok',
    },
    {
        nationality: 'Svájc',
        author: 'Friedrich Dürrenmatt',
        title: 'A fizikusok',
    }
];

const table = document.createElement('table')
document.body.appendChild(table)

const thead = document.createElement('thead')
table.appendChild(thead)

const tr = document.createElement('tr')
thead.appendChild(tr)

const tombHead = ["Nemzetiség", "szerző", "MŰ"]

for (const a of tombHead){
    const th = document.createElement('th')
    th.innerText= a
    tr.appendChild(th)
}

const tbody = document.createElement('tbody')
table.appendChild(tbody)

for(const a of tomb){
    const tr2 =document.createElement('tr')
    tbody.appendChild(tr2)

    const td2 = document.createElement('td')
    td2.innerText = a.nationality
    tr2.appendChild(td2)

    const td3 = document.createElement('td')
    td3.innerText = a.author
    tr2.appendChild(td3)

    const td4 = document.createElement('td')
    td4.innerText = a.title
    tr2.appendChild(td4)

    if(a.author2 != undefined && a.title2 != undefined){
        
        const tr3 =document.createElement('tr')
        tbody.appendChild(tr3)

        const td5 = document.createElement('td')
        td5.innerText = a.author2
        tr3.appendChild(td5)

        const td6 = document.createElement('td')
        td6.innerText = a.title2
        tr3.appendChild(td6)

        td2.rowSpan="2"

    }


}

