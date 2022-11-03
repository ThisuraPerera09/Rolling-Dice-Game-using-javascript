let scores, c_score, activePlayer, playing,s1;

const player0 = document.querySelector('.player0');
const player1 = document.querySelector('.player1');
const score0 = document.querySelector('score0');
const score1 = document.getElementById('score1');
const current_score0 = document.getElementById('current0');
const current_score1 = document.getElementById('current1');
  
const diceEl = document.querySelector('.dice1');
const diceE2 = document.querySelector('.dice2');
const btnRoll = document.querySelector('.btnr');

 function total() {
  
  c_score = 0;
  scores = [0, 0];
  activePlayer = 0;
  playing = true;
  
  score0.textContent = 0;
  score1.textContent = 0;
  current_score0.textContent = 0;
  current_score1.textContent = 0;
  
  diceEl.classList.add('hide'); 
  diceE2.classList.add('hide');
  player0.classList.remove('player_w');
  player1.classList.remove('player_w');
  player0.classList.add('player_a');
  player1.classList.remove('player_a');
};

  


btnRoll.addEventListener('click', function () {
  
  if (playing) {
    
   
    const dice1 = Math.trunc(Math.random() * 6) + 1;
	const dice2 = Math.trunc(Math.random() * 6) + 1;
  
    
    diceEl.classList.remove('hide');
    diceEl.src = `dice_${dice1}.png`;
	
	diceE2.classList.remove('hide');
    diceE2.src = `dice_${dice2}.png`;
  
  
    if (dice1 !== 1 || dice2 !== 1) {
		
		 if ((dice1 === 2 && dice2 === 2)  || (dice1 === 3 && dice2 === 3) || (dice1 === 4 && dice2 === 4)  || (dice1 === 5 && dice2 === 5)  || (dice1 === 6 && dice2 === 6) )
		 {
          
   
      c_score = c_score + dice1 + dice2;
	  s1=c_score;
	     scores[activePlayer] += c_score;
      document.getElementById(`current${activePlayer}`).textContent = s1;
	  document.getElementById(`score${activePlayer}`).textContent = scores[activePlayer];
	  document.getElementById(`current${activePlayer}`).textContent = c_score;
	  c_score = 0;
	  
	  if (activePlayer===0 && scores[activePlayer] >= 20) {
      
   
                    playing = false;
                    diceEl.classList.add('hide');
	                diceE2.classList.add('hide');
					
				
                    document.querySelector(`.player${activePlayer}`).classList.add('player_w');
                    document.querySelector(`.player${activePlayer}`).classList.remove('player_a');
				    document.querySelector("h1").innerHTML = ( " Player 1 WINS!");
					
                   }
				   
				   else if(activePlayer===1 && scores[activePlayer] >= 20){
					   
					playing = false;
                    diceEl.classList.add('hide');
	                diceE2.classList.add('hide');
					
				
					
  
                    document.querySelector(`.player${activePlayer}`).classList.add('player_w');
                    document.querySelector(`.player${activePlayer}`).classList.remove('player_a');
				    document.querySelector("h1").innerHTML = ( " Player 2 WINS!");
					
	  
                   }
	
	              else {
	 
	                 switch_p();
	               }
	  
	  

	} 
	     else{
		 c_score = c_score + dice1 + dice2;
		 s1=c_score;
		 scores[activePlayer] += c_score;
	 document.getElementById(`current${activePlayer}`).textContent = s1;
	 document.getElementById(`score${activePlayer}`).textContent = scores[activePlayer];
	  
	             if (activePlayer===0 && scores[activePlayer] >= 20) {
      
   
                    playing = false;
                    diceEl.classList.add('hide');
	                diceE2.classList.add('hide');
					
				
                    document.querySelector(`.player${activePlayer}`).classList.add('player_w');
                    document.querySelector(`.player${activePlayer}`).classList.remove('player_a');
				    document.querySelector("h1").innerHTML = ( " Player 1 WINS!");
					
                   }
				   
				   else if(activePlayer===1 && scores[activePlayer] >= 20){
					   
					playing = false;
                    diceEl.classList.add('hide');
	                diceE2.classList.add('hide');
					
				
					
  
                    document.querySelector(`.player${activePlayer}`).classList.add('player_w');
                    document.querySelector(`.player${activePlayer}`).classList.remove('player_a');
				    document.querySelector("h1").innerHTML = ( " Player 2 WINS!");
					
	  
                   }
	
	              else {
	 
	                 switch_p();
	               }
      
	}}
	
	 else{
         c_score = c_score + dice1 + dice2;
		 s1=c_score;
		 scores[activePlayer] += c_score;
	     document.getElementById(`current${activePlayer}`).textContent = s1;
	     scores[activePlayer] = 0;
	     document.getElementById(`score${activePlayer}`).textContent = scores[activePlayer];
         switch_p();
    }
  }
});


 function switch_p () {
	
  document.getElementById(`current${activePlayer}`).textContent = c_score;
  c_score = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
    document.getElementById(`current${activePlayer}`).textContent = c_score;
  player0.classList.toggle('player_a');
  player1.classList.toggle('player_a');
};



total();