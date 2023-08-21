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

  // Quando o botão "Abrir Menu" for clicado
  $("#openMenuButton").on("click", function() {
    // Exibe ou oculta o menu ao clicar no botão
    $("#menuContainer").toggle();
    // Esconde o conteúdo do currículo quando abrir o menu
    $("#curriculoContent").hide();
  });

  // Script para carregar o currículo via AJAX
  $("#curriculoLink").on("click", function() {
    $.ajax({
      url: "src/components/curriculo/curriculo.html",
      method: "GET",
      dataType: "html",
      success: function(data) {
        // Quando a requisição for bem-sucedida, insira o conteúdo do currículo no modal
        $("#modalContent").html(data);
        // Oculta o menu quando carregar o currículo
        $("#menuContainer").hide();
        // Exibe o modal
        $("#modalContainer").show();
      },
      error: function() {
        console.log("Erro ao carregar o currículo.");
      }
    });
  });
});
