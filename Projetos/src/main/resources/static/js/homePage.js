var valorTotal = 0

function inserirCarrinho(position) {

    var name_item = document.querySelectorAll(".txtDesc")[position].getElementsByTagName("p")[0].innerText;
    var valor_item = document.querySelectorAll(".txtDesc")[position].getElementsByTagName("p")[3].innerText.substring(3,8);

    var select = document.querySelectorAll(".txtDesc")[position].getElementsByTagName("select")[0];
    var qtd_item = select.options[select.selectedIndex].value

    var table = document.getElementById("carrinho");
    var numberOfRows = table.rows.length;
    var numberOfCells = table.rows[0].cells.length;
    var index = null;
    if (numberOfRows == 1) {
        index = 1;
    } else {
        index = parseInt(table.rows[(parseInt(numberOfRows) - 1)].cells[0].innerHTML) + 1
    }


    var newRow = table.insertRow(numberOfRows);

    for (var c = 0; c < numberOfCells; c++) {
        if (c == 0) {
            newRow.insertCell(0).innerHTML = index;
        }
        else if (c == 1) {
            newRow.insertCell(1).innerHTML = name_item;
        }
        else if (c == 2) {
            newRow.insertCell(2).innerHTML = valor_item;
        }
        else if (c == 3) {
            newRow.insertCell(3).innerHTML = qtd_item;
        }
        else if (c == 4) {
            newRow.insertCell(4).innerHTML = "<button class='btn btn-danger' onclick='deleteRow(this)'>Excluir</button>";
        }
    }

    atualizaLabel();

}

function deleteRow(cell) {
    
    var i = cell.parentNode.parentNode.rowIndex;
    var table = document.getElementById("carrinho");
    var valor = parseFloat(table.rows[i].cells[2].innerText)
    document.getElementById("carrinho").deleteRow(i);
    valorTotal -= valor;
    document.getElementById("vlrTotalLabel").innerHTML = valorTotal;

}

function atualizaLabel(){

    var table = document.getElementById("carrinho");
    var numberOfRows = table.rows.length - 1;
    
    var descLastItem = table.rows[numberOfRows].cells[1].innerHTML
    var indexLastItem = table.rows[numberOfRows].cells[0].innerHTML
    var valorLastItem = table.rows[numberOfRows].cells[2].innerHTML

    valorTotal += parseFloat(valorLastItem);
    document.getElementById("descItemLabel").innerHTML = indexLastItem + " - " + descLastItem
    document.getElementById("vlrTotalLabel").innerHTML = valorTotal;
    
}

function salvarVendar(){
    
    var table = document.getElementById("carrinho");
    var numberOfRows = table.rows.length;
    var numberOfCells = table.rows[0].cells.length;
    var information = { 
        "linha" :
        [
            {
                "descricao": "",
                "valor": "",
                "quantidade": "",
            }
        ]
    };
    
    for(var x = 1; x < numberOfRows; x++){
        for(var y = 0; y < numberOfCells; y++){

        }
    }


    const dadosVenda = {

    };

}
