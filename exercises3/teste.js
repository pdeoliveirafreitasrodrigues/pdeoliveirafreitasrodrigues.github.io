function getCompleteAddress(value) {
    const aaa = document.getElementsByTagName('body')[0];
    const formFields = document.querySelector("form").elements;
    if (formFields[0] != undefined) {
      const url = `https://restcountries.com/v3.1/name/${value}/`;
      fetch(url)
        .then((resultRequest) => {
          if (!resultRequest.ok) {
            throw new Error("Erro na requisição");
          }
          return resultRequest.json();
        })
        .then((jsonRequest) => {
          let body = document.body;
          let bg = jsonRequest[0].flags.png
          body.style.backgroundImage = 'url(' + bg + ')';
          body.style.backgroundSize = 'cover';
          formFields[1].value = jsonRequest[0].altSpellings[1];
          formFields[2].value = jsonRequest[0].altSpellings[0];
          for (key in jsonRequest[0].name.nativeName) {
            indiceNome = key;
          }
          formFields[3].value = jsonRequest[0].name.nativeName[indiceNome].official;
          formFields[4].value = jsonRequest[0].tld;
          formFields[5].value = jsonRequest[0].independent ? "Independente" : "Não independente";
          formFields[6].value = jsonRequest[0].status;
          formFields[7].value = jsonRequest[0].unMember ? "Membro" : "Não membro";
          for (key in jsonRequest[0].currencies) {
            indiceMoeda = key;
          }
          formFields[8].value = jsonRequest[0].currencies[indiceMoeda].name;
          formFields[9].value = jsonRequest[0].currencies[indiceMoeda].symbol;
          formFields[10].value = jsonRequest[0].capital;
          formFields[11].value = jsonRequest[0].region;
          formFields[12].value = jsonRequest[0].subregion;
          for (key in jsonRequest[0].languages) {
            indiceIdioma = key;
          }
          formFields[13].value = jsonRequest[0].languages[indiceIdioma];
          formFields[14].value = jsonRequest[0].latlng;
          formFields[15].value = jsonRequest[0].borders ? jsonRequest[0].borders : "Não faz fronteira";
          formFields[16].value = jsonRequest[0].area + ' km²';
          formFields[17].value = jsonRequest[0].population;
          formFields[18].value = jsonRequest[0].timezones;
          formFields[19].value = jsonRequest[0].car.signs;
          formFields[20].value = jsonRequest[0].car.side == "right" ? "Direito" : "Esquerdo";
          formFields[21].value = jsonRequest[0].startOfWeek;
          formFields[22].value = jsonRequest[0].capitalInfo.latlng;
          formFields[23].value = jsonRequest[0].postalCode.format;
          formFields[24].value = jsonRequest[0].postalCode.regex;
          
          
        })
        .catch((error) => {
          alert("Erro na requisição:", error);

        });
    } else {
      limpa_formulário_pais();
    }
  }
  
function limpa_formulário_pais() {
    document.getElementById('name').value = ("");
    formFields[1].value = "";
    formFields[2].value = "";
    formFields[3].value = "";
    formFields[4].value = "";
    formFields[5].value = "";
    formFields[6].value = "";
    formFields[7].value = "";
    formFields[8].value = "";
    formFields[9].value = "";
    formFields[10].value = "";
    formFields[11].value = "";
    formFields[12].value = "";
    formFields[13].value = "";
    formFields[14].value = "";
    formFields[15].value = "";
    formFields[16].value = "";
    formFields[17].value = "";
    formFields[18].value = "";
    formFields[19].value = "";
    formFields[20].value = "";
    formFields[21].value = "";
    formFields[22].value = "";
    formFields[23].value = "";
    formFields[24].value = "";
}
