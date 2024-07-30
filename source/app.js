'use strict';

const table= document.getElementById("table");

let tableTR;
let tableTD;
let textNode;

const url = "https://www.dnd5eapi.co/api/classes/"
fetch(url)
    .then((response) => response.json())
    .then((json) => displayResults(json))
    .catch((error) => console.error(`Error fetching data: ${error.message}`));

function displayResults(json)
{
    for (let i = 0; i < json.results.length; i++)
    {
        tableTR = document.createElement("tr");
        tableTD = document.createElement("td");
        textNode = document.createTextNode(json.results[i].name);
        tableTD.appendChild(textNode);
        tableTR.appendChild(tableTD);
        table.firstElementChild.appendChild(tableTR);
    }
}