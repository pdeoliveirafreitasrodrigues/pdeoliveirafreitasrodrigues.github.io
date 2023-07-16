function getPais(value) {

    const fieldSelect = document.querySelector("form").elements;

    if (fieldSelect[0] != undefined) {
        const url = `https://restcountries.com/v3.1/name/${value}?fullText=true`;

        fetch(url)
            .then((resultRequest) => {
                if (!resultRequest.ok) {
                    throw new Error("Erro ao requisitar");
                }
                return resultRequest.json();
            })
            .then((jsonRequest) => {

                let bandeira = jsonRequest[0].flags.png;
                let body = document.body;
                body.style.backgroundImage = 'url(' + bandeira + ')';
                body.style.backgroundSize = 'cover';


                fieldSelect[1].value = jsonRequest[0].altSpellings[1];
                fieldSelect[2].value = jsonRequest[0].altSpellings[0];
                //native name
                for (key in jsonRequest[0].name.nativeName) {
                    indiceNome = key;
                }
                fieldSelect[3].value = jsonRequest[0].name.nativeName[indiceNome].official;
                fieldSelect[4].value = jsonRequest[0].area + " km²";
                fieldSelect[5].value = jsonRequest[0].capitalInfo.latlng[0];
                fieldSelect[6].value = jsonRequest[0].capitalInfo.latlng[1];

                const mapsContainer = document.getElementById('maps');
                mapsContainer.innerHTML = ''; // Limpa o conteúdo existente

                const a = document.createElement('a');
                a.href = jsonRequest[0].maps.googleMaps;
                a.appendChild(document.createTextNode('Acesse no Google Maps'));
                document.getElementById('maps').appendChild(a);

                const img = document.getElementById('img');
                img.src = bandeira;

            })
            .catch((error) => {
                alert("Erro: " + error);
            });
    }

}