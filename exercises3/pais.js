const selectField = document.getElementById("idCountry");
selectField.addEventListener("change", getPais);

function getPais(){
    const url = `http://restcountries.com/v3.1/name/${selectField.value}?fullText=true`;

    fetch(url)
        .then((resultRequest) => {
            return resultRequest.json();
        })
        .then((jsonRequest) => {
            document.getElementById("id_pais").setAttribute("style", "display: block");
            document.getElementById("name").append(jsonRequest[0].altSpellings);
            document.getElementById("capital").append(jsonRequest[0].capital);
            document.getElementById("continente").append(jsonRequest[0].continents);

            for(key in jsonRequest[0].currencies){
                indiceMoeda = key;
            }

            document.getElementById("moeda").append(jsonRequest[0].currencies[indiceMoeda].name);

            for(key in jsonRequest[0].languages){
                indiceIdioma = key;
            }

            document.getElementById("moeda").append(jsonRequest[0].languages[indiceMoeda]);

            

        })
    ;
}