import fetch from "fetch";

const url = "https://api.nba.com/v2/schedule?date=2023-11-01";

const response = await fetch(url);

const data = await response.json();

// Exibe os jogos
for (const game of data["dates"][0]["games"]) {
  const jogo = document.createElement("div");
  jogo.textContent = `
    ${game["homeTeam"]["fullTeamName"]} x ${game["awayTeam"]["fullTeamName"]}
    ${game["startTime"]}
  `;
  document.querySelector("#jogos").appendChild(jogo);
}
