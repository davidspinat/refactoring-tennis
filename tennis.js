var TennisGame = function(player1Name, player2Name) {
    this.m_score1 = 0;
    this.m_score2 = 0;
};

TennisGame.prototype.wonPoint = function(playerName) {
    if (playerName === "player1")
        this.m_score1 += 1;
    else
        this.m_score2 += 1;
};

function getScoreName(tempScore, score) {
    var scoreMap = ['Love', 'Fifteen', 'Thirty', 'Forty'];
    return score += scoreMap[tempScore];
}
function getEqualScoreName(score) {
    var scoreMap = ['Love-All', 'Fifteen-All', 'Thirty-All', 'Deuce'];
    switch (this.m_score1) {
        case 0:
            score = scoreMap[0];
            break;
        case 1:
            score = scoreMap[1];
            break;
        case 2:
            score = scoreMap[2];
            break;
        default:
            score = scoreMap[3];
            break;
    }
    return score;
}
function getOverFour(score) {
    var minusResult = this.m_score1 - this.m_score2;
    if (minusResult === 1) score = "Advantage player1";
    else if (minusResult === -1) score = "Advantage player2";
    else if (minusResult >= 2) score = "Win for player1";
    else score = "Win for player2";
    return score;
}
TennisGame.prototype.getScore = function() {
    var score = "";
    var tempScore = 0;
    if (this.m_score1 === this.m_score2) {
        score = getEqualScoreName.call(this, score);
    } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
        score = getOverFour.call(this, score);
    } else {
        for (var i = 1; i < 3; i++) {
            if (i === 1) tempScore = this.m_score1;
            else {
                score += "-";
                tempScore = this.m_score2;
            }
            score = getScoreName(tempScore, score);
        }
    }
    return score;
};

export default TennisGame;