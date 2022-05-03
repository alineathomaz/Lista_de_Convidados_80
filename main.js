var listaConvidadosArray = [];

function submit() //função submit (enviar) um nome na Lista:
{
    var displayConvidadoArray = [];
    var nomeConvidado = document.getElementById("nomeConvidado").value;
    listaConvidadosArray.push(nomeConvidado);  //push() serve para adicionar um nome à lista de convidados
    var lengthConvidadosArray = listaConvidadosArray.length;

    document.getElementById("displayNameWithCommas").innerHTML = listaConvidadosArray;
    var removeCommas = displayConvidadoArray.join(" ");
    document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;

    document.getElementById("sortButton").style.display = "inline-block";
}

function sorting() //função sorting (organizar)
{
    listaConvidadosArray.sort(); //sort() serve para organizar a lista de convidados
    var displayConvidadoArraySorting = [];

    var lengthConvidadosArray = listaConvidadosArray.length;
    for (var k = 0; k < lengthConvidadosArray; k++) 
    {
        displayConvidadoArraySorting.push("<h4>Convidado(a): " + listaConvidadosArray[k] + "</h4>");
    }

    var removeCommas = displayConvidadoArraySorting.join(" ");

    document.getElementById("displayNameWithoutCommasSorting").innerHTML = removeCommas;
}



function searching() //função para search (pesquisar) um nome na lista, a pesquisa só será válida se buscar o nome completo do convidado conforme foi cadastrado
{
    var s = document.getElementById("s1").value;
    var found = 0;
  
    listaConvidadosArray.forEach(element => {
       if(element == s){
       found++;
       }
    });

    document.getElementById("p2").innerHTML="Nome encontrado "+found+" vez(es)";
}
