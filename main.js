listaConvidadosArray = [];

function submit() //função submit (enviar) um nome na Lista:
{
    var displayConvidadoArray = [];
    for (var i = 1; i <= 100 ; i++) //loop para inserir até 100 convidados
    {
        var nomeConvidado = document.getElementById("nomeConvidado"+i).value;
        console.log(nomeConvidado);
        listaConvidadosArray.push(nomeConvidado);  //push() serve para adicionar um nome à lista de convidados
    }

    console.log(listaConvidadosArray);

    var lengthConvidadosArray = listaConvidadosArray.length;
    console.log(lengthConvidadosArray);

    for (var k = 0; k < lengthConvidadosArray; k++) 
    {
        displayConvidadoArray.push("<h4>NAME - "+ listaConvidadosArray[k] + "</h4>");
        console.log(displayConvidadoArray);
    }

    console.log(displayConvidadoArray);
    document.getElementById("displayNameWithCommas").innerHTML = displayConvidadoArray;

    var removeCommas = displayConvidadoArray.join(" ");
    console.log(removeCommas);
    document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;


    document.getElementById("submitButton").style.display = "none";
    document.getElementById("sortButton").style.display = "inline-block";
}

function sorting() //função sorting (organizar)
{
    listaConvidadosArray.sort(); //sort() serve para organizar a lista de convidados
    console.log(listaConvidadosArray);

    var displayConvidadoArraySorting = [];

    var lengthConvidadosArray = listaConvidadosArray.length;
    console.log(lengthConvidadosArray);

    for (var k = 0; k < lengthConvidadosArray; k++) 
    {
        displayConvidadoArraySorting.push("<h4>NAME - " + listaConvidadosArray[k] + "</h4>");
        console.log(displayConvidadoArraySorting);
    }

    var removeCommas = displayConvidadoArraySorting.join(" ");
    console.log(removeCommas);

    document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;
}



function searching() //função para search (pesquisar) um nome na lista
{
    var s = document.getElementById("s1").value;
    var found = 0;
    var j;
    for (j=0; j<nomeConvidado.length; j++)
    {
        if (s == nomeConvidado[j])
        {
            found = found+1;
        }
    }
    document.getElementById("p2").innerHTML="Nome encontrado "+found+" vez(es)";
    console.log("Nome encontrado "+found+" vez(es)");
}