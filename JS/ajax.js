
//CONTROLE DA PÁGINA INDEX QUANTO AS OUTRAS ----------> MODAL MENU
$(document).ready(function() {
    // Quando o botão "Abrir Menu" for clicado
    $("#btnModalMenu").on("click", function() {
      // Faça uma requisição AJAX para buscar o conteúdo do menu em "menu.html"
      $.ajax({
        url: "menu.html",
        method: "GET",
        dataType: "html",
        success: function(data) {
          // Quando a requisição for bem-sucedida, insira o conteúdo no modal
          $("#modalContent").html(data);
          // Exiba o modal
          $("#modalContainer").show();
        },
        error: function() {
          // Em caso de erro, exiba uma mensagem de erro ou aja de acordo com a situação
          console.log("Erro ao carregar o menu.");
        }
      });
    });
  
    // Feche o modal quando o usuário clicar em qualquer lugar fora dele
    $(document).on("click", function(event) {
      if ($(event.target).closest("#modalContainer").length === 0) {
        $("#modalContainer").hide();
      }
    });
  });
  

