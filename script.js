const btnCreate = document.getElementById("createTable");
const tableElement = document.querySelector(".table");

btnCreate.addEventListener("click", () => {

    const columnInput = document.getElementById("columns");
    const rowInput = document.getElementById("rows");
    const column = parseInt(columnInput.value);
    const row = parseInt(rowInput.value);
    while (tableElement.firstChild) {
        tableElement.removeChild(tableElement.firstChild);
    }
    const thead = document.createElement("thead")
    const headerRow = document.createElement("tr")
    for (let i = 0; i < column; i++) {
        const th = document.createElement("th");
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("style", "border:none");
        input.setAttribute("placeholder", "Column " + (i + 1))
        th.appendChild(input);
        headerRow.appendChild(th);
        thead.appendChild(headerRow);
    }
    tableElement.appendChild(thead);

    const tbody = document.createElement("tbody");
    for (let i = 0; i < row; i++) {
        const bodyRow = document.createElement("tr");
        for (let j = 0; j < column; j++) {
            const td = document.createElement("td");
            const input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("style", "border:none");
            input.setAttribute("placeholder", "Row " + (i + 1))
            td.appendChild(input);
            bodyRow.appendChild(td);
        }
        tbody.appendChild(bodyRow);
        tableElement.appendChild(tbody);
    }

});