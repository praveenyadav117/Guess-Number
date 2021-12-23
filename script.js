'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎶🎶Correct number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);// console mtlb read ki h usne value
// addEventListener// event ka name ki kya krna h aur what to do reaction to click/event event handler 
//addEventListener// ek event and event handler(function) 

// document.querySelector('.check').addEventListener('click',function(){
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess);
//   //document.querySelector('.message').textContent = '🎶🎶Correct number';

// })

// document.querySelector('.check').addEventListener('click',function(){
//   const guess =  Number(document.querySelector('.guess').value);
//   console.log(guess);
//   if(!guess){
//     document.querySelector('.message').textContent = '🎶Ops No Number !🎶';
//   }
// })
var snumber = Math.trunc(Math.random()*20+1);
var score = 20;
//
 //console.log(snumber);

document.querySelector('.check').addEventListener('click',function(){
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if(!guess){
    document.querySelector('.message').textContent = 'Please start Guessing ';
  }
  else if(guess>snumber){
    if(score>1){
    document.querySelector('.message').textContent = 'Too High ';
    score--;
    document.querySelector('.score').textContent = score;
    }
    else{
      document.querySelector('.message').textContent = 'You lost the game ';
      score=0;
      document.querySelector('.score').textContent = score;
    }
  }
  else if(guess<snumber){
    if(score>1){
    document.querySelector('.message').textContent = 'Too low ';
    score--;
    document.querySelector('.score').textContent = score;
    }
    else{
      document.querySelector('.message').textContent = 'You lost the game ';
      score=0;
      document.querySelector('.score').textContent = score;
    }
  }else if(guess===snumber){//=== 100 '100' ke equal h strict mode me
    document.querySelector('.message').textContent = 'Congoo !!!!!!!!! ';
    document.querySelector('body').style.backgroundColor = '#60B347';
    document.querySelector('.guess').style.width = '30rem';
    document.querySelector('.number').textContent = snumber;
  }
})

document.querySelector('.again').addEventListener('click',function(){
 score = 20;
   snumber = Math.trunc(Math.random()*20+1);
document.querySelector('.score').textContent = score;
document.querySelector('body').style.backgroundColor = '#222';
 document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.message').textContent = 'Start guessing...';
document.querySelector('.number').textContent = '?';
document.querySelector('.guess').value = '';
//   }


// })
