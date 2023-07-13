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

            document.getElementById("imagem").src= jsonRequest[0].flags.png;

            carregarIFrame();
        })
    ;

    function carregarIFrame(country){
        
        document.getElementById("iframe_images").setAttribute("style", "display: block");
        const url = `https://www.google.com.br/search?q=${country}&tbm=isch`;
        const iframe = document.querySelector("iframe");
        iframe.src = url;

    }
}