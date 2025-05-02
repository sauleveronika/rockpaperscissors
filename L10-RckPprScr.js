/*let score = {
                win: 0,
                loose: 0,
                tie: 0
            }*/

            let score = JSON.parse(localStorage.getItem("storedScore")) || {
                            win: 0,
                            loose: 0,
                            tie: 0
                        }

            document.querySelector(".js-score").innerHTML = `Wins: ${score.win}, Loses: ${score.loose}, Ties: ${score.tie}`;            
            
            function comparePicks(yourPick) {

                function getRandomItem() {
                    const arr = ["Rock", "Paper", "Scissors"];
                    let index = Math.floor(Math.random() * arr.length);
                    return arr[index]
                };
                
                let computerPick = getRandomItem();
                let result = "";

                if (yourPick == "Rock"){
                    if (computerPick == "Paper"){
                        result = "You've lost!";
                        score.loose = score.loose + 1;
                    }
                    else if (computerPick == "Rock") {
                        result = "It's a draw.";
                        score.tie = score.tie + 1;
                    }     
                    else{
                        result = "You've won!";
                        score.win = score.win + 1;
                    }   
                
                }

                else if(yourPick == "Paper") {
                    if(computerPick =="Paper"){
                        result = "It's a draw.";
                        score.tie = score.tie + 1;
                    }
                    else if(computerPick == "Scissors"){
                        result = "You've lost!";                        
                        score.loose = score.loose + 1;
                    }
                    else{
                        result = "You've won!";
                        score.win = score.win + 1;
                    }
                                  
                }

                else{
                    if (computerPick =="Scissors"){
                        result = "It's a draw.";
                        score.tie = score.tie + 1;
                    }
                    else if(computerPick == "Rock"){
                        result = "You've lost!";                        
                        score.loose = score.loose + 1;
                    }
                    else{
                        result = "You've won!";
                        score.win = score.win + 1;
                    } 

                }

        

                let scoreString = JSON.stringify(score);

                localStorage.setItem("storedScore", scoreString);
                
                document.querySelector(".js-picks").innerHTML = `You: <img class="result-icon"src=\"images/${yourPick}-emoji.png\">, Computer: <img class="result-icon" src=\"images/${yourPick}-emoji.png\">`
                 /* `You: ${yourPick} \nComputer pick: ${computerPick}`;*/
                document.querySelector(".js-result").innerHTML = result;
                document.querySelector(".js-score").innerHTML = `Wins: ${score.win}, Loses: ${score.loose}, Ties: ${score.tie}`;

                //return alert(`Your pick: ${yourPick} \nComputer pick: ${computerPick} \n ${result} \n\nWins: ${score.win}, Loses: ${score.loose}, Ties: ${score.tie}`)

            };

            function resetScore() {
                localStorage.removeItem('storedScore'); 

                document.querySelector(".js-picks").innerHTML = "";
                document.querySelector(".js-result").innerHTML = "Your score has been re-set.";
                document.querySelector(".js-score").innerHTML = `Wins: ${score.win}, Loses: ${score.loose}, Ties: ${score.tie}`;
            }
 
            // resetScoreOld() NO LONGER IN USE, replaced by memory reset
            function resetScoreOld() { 

                for (let key in score) {
                    score[key] = 0
                }
            
                //return alert(`Your score has been re-set!\nWins: ${score.win}, Loses: ${score.loose}, Ties: ${score.tie}`)
            }