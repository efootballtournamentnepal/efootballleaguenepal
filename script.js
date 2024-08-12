// Code by : Beeplove Bhandari //
document.addEventListener("DOMContentLoaded", function() {
    
    function updateRankings() {
        let table = document.querySelector("tbody");
        let rows = Array.from(table.querySelectorAll("tr"));

       
        rows.sort((rowA, rowB) => {
            let pointsA = parseInt(rowA.querySelector(".bold").innerText);
            let pointsB = parseInt(rowB.querySelector(".bold").innerText);
            let gdA = parseInt(rowA.cells[7].innerText); // Goal Difference
            let gdB = parseInt(rowB.cells[7].innerText);
            let gfA = parseInt(rowA.cells[5].innerText); // Goals For
            let gfB = parseInt(rowB.cells[5].innerText);

            if (pointsB !== pointsA) {
                return pointsB - pointsA;
            } else if (gdB !== gdA) {
                return gdB - gdA;
            } else {
                return gfB - gfA;
            }
        });

       
        rows.forEach((row, index) => {
            row.querySelector(".position").innerText = index + 1;
            table.appendChild(row);
        });
    }

   
    function updateTeamStats(teamName, played, wins, draws, losses, goalsFor, goalsAgainst) {
        let row = Array.from(document.querySelectorAll("tbody tr"))
                       .find(r => r.innerText.includes(teamName));

        if (row) {
            let cells = row.querySelectorAll("td");
            cells[1].innerText = played; // MP
            cells[2].innerText = wins; // W
            cells[3].innerText = draws; // D
            cells[4].innerText = losses; // L
            cells[5].innerText = goalsFor; // GF
            cells[6].innerText = goalsAgainst; // GA
            cells[7].innerText = goalsFor - goalsAgainst; // GD
            cells[8].innerText = (wins * 3) + draws; // PTS (W=3pts, D=1pt, L=0pt)

           
            updateRankings();
        }
    }

    
    function loadSeasonData(season) {
        console.log(`Loading data for ${season}`);
       
        if (season === 'season1') {
            updateTeamStats('Fc Barcelona', 10, 8, 1, 1, 20, 10);
            updateTeamStats('Manchester United', 10, 7, 2, 1, 18, 12);
            updateTeamStats('Arsenal FC', 10, 6, 3, 1, 15, 9);
        } else if (season === 'season2') {
            updateTeamStats('Fc Barcelona', 10, 5, 2, 3, 16, 14);
            updateTeamStats('Manchester United', 10, 6, 1, 3, 20, 13);
            updateTeamStats('Arsenal FC', 10, 7, 2, 1, 22, 8);
        }
    }

  
    document.querySelector(".season-dropdown").addEventListener("change", function() {
        let selectedSeason = this.value;
        loadSeasonData(selectedSeason);
    });

    

    document.querySelector("body").insertAdjacentHTML("beforeend", '<button id="simulate-update" style="margin: 20px;">Simulate Points Update</button>');
    document.getElementById("simulate-update").addEventListener("click", () => {
        updateTeamStats('Fc Barcelona', 10, 7, 2, 1, 20, 11);
        updateTeamStats('Manchester United', 10, 6, 3, 1, 18, 12);
        updateTeamStats('Arsenal FC', 10, 5, 4, 1, 16, 9);
    });


    updateRankings();
});

// Code by : Beeplove Bhandari //













