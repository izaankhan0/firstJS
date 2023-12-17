const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses : 0,
    ties: 0
  }
  function pickComputerMove(){
    let randNum = Math.random();
    let computerMove = "";
    if (randNum >= 0 && randNum < 1 / 3) {
      computerMove = "✊";
    } else if (randNum >= 1 / 3 && randNum < 2 / 3) {
        computerMove = "✋";
        } else if (randNum >= 2 / 3 && randNum < 3) {
        computerMove = "✌️";
        }
        return computerMove
    }
    function displayResult(userPick, loosingPick) {
        let result = "";
        computerPick = pickComputerMove()
        if (computerPick === userPick) {
          result = "Tie";
          score.ties++
        } else if (computerPick === loosingPick) {
          result = "Loose!";
          score.losses++
        } else {
        result = "Win!";
        score.wins++
    }

        document.querySelector('.js-result')
            .innerHTML = result

        document.querySelector('.js-resultDetail')
            .innerHTML = `You: ${userPick} - Computer: ${computerPick}`
        localStorage.setItem('score', JSON.stringify(score))
        updateScoreElement()
      }
    function resetScore(){
      score.wins = 0
      score.losses = 0
      score.ties = 0
      localStorage.setItem('score', JSON.stringify(score))
      updateScoreElement()

    }
    function updateScoreElement(){
        document.querySelector('.scoreBoard')
            .innerHTML = ` 
                Wins: ${score.wins}
                Ties: ${score.ties}
                Losses: ${score.losses}`
        }