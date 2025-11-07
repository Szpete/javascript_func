
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

/**
 * @type {{nationality:string, author:string, title:string, author2:?string, title2:?string}[]}
 */
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
    td2.addEventListener("click", function(e){
        /** 
        * @type {HTMLElement}
        */
        const i = e.target
        i.classList.add('marked')

    })
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

const form = document.getElementById("htmlform");
form.addEventListener("submit", function(e){
    e.preventDefault();
    /**
     * @type {HTMLFormElement}
     */
    const form = e.target
    /**
     * @type {HTMLInputElement}
     */
    const nemzetiseg = form.querySelector("#nemzetiseg")
     /**
     * @type {string}
     */
    const nemzetiseg_v = nemzetiseg.value

     /**
     * @type {HTMLInputElement}
     */
    const szerzo1 = form.querySelector("#szerzo1")

     /**
     * @type {string}
     */
    const szerzo1_v = szerzo1.value

    /**
     * @type {HTMLInputElement}
     */
    const mu1 = form.querySelector("#mu1")

     /**
     * @type {string}
     */
    const mu1_v = mu1.value

     /**
     * @type {HTMLInputElement}
     */
    const szerzo2 = form.querySelector("#szerzo2")

     /**
     * @type {string}
     */
    const szerzo2_v = szerzo2.value

     /**
     * @type {HTMLInputElement}
     */
    const mu2 = form.querySelector("#mu2")
    /**
     * @type {string}
     */
    const mu2_v = mu2.value

    /**
    * @type {{nationality:string, author:string, title:string, author2:?string, title2:?string}[]}
    */
    const obj = {}
    obj.nationality=nemzetiseg_v
    obj.author=szerzo1_v
    obj.title=mu1_v
    obj.author2=szerzo2_v
    obj.title2=mu2_v

    const tbo = document.getElementById("Kristaly")

    const tr5 = document.createElement('tr')
    tbo.appendChild(tr5)

    const td2 = document.createElement('td')
    td2.innerText = nemzetiseg_v
    tr5.appendChild(td2)


    const td3 = document.createElement('td')
    td3.innerText = szerzo1_v
    tr5.appendChild(td3)

    const td4 = document.createElement('td')
    td4.innerText = mu1_v
    tr5.appendChild(td4)

    if(szerzo2_v != "" && mu2_v != ""){
        
        const tr3 =document.createElement('tr')
        tbo.appendChild(tr3)

        const td5 = document.createElement('td')
        td5.innerText = szerzo2_v
        tr3.appendChild(td5)

        const td6 = document.createElement('td')
        td6.innerText = mu2_v
        tr3.appendChild(td6)

        td2.rowSpan="2"

    }


})


const form2 = document.createElement("form")
form2.id = "jsform";
document.body.appendChild(form2)

/**
 * 
 * @param {*} form2 
 * @param {string} id 
 * @param {string} labelcontent 
 */
function CreateFormContent(form2, id, labelcontent){
    const label = document.createElement('label')
    label.innerText= labelcontent
    label.htmlFor= id
    form2.appendChild(label)

    const input = document.createElement('input')
    input.id=id
    form2.appendChild(input)

}

CreateFormContent(form2, "nemzetiseg", "Nemzetiseg:")
CreateFormContent(form2, "szerzo1", "Szerző:")
CreateFormContent(form2, "mu1", "Mű:")
CreateFormContent(form2, "szerzo2", "Másik Szerző:")
CreateFormContent(form2, "mu2", "Mű:")




