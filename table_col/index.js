/**
 * 
 * @param {string} celltype 
 * @param {string} cellcontent 
 * @param {HTMLTableRowElement} cellrow 
 */

function CreateCellElement(celltype, cellcontent, cellrow){ 
    const cell=document.createElement(celltype)
    cell.innerText=cellcontent
    cellrow.appendChild(cell)
    
}