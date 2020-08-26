window.onload = function(){
  let principal = document.querySelector('#principal');
  let rate = document.querySelector('#rate');
  let time = document.querySelector('#time');
  let output1 = document.querySelector('#output1');
  let output2 = document.querySelector('#output2');
  let generate = document.querySelector('#generate');


  generate.addEventListener('click', function(){
    var interest = Number(principal.value)* Number(rate.value)* Number(time.value);
    var total_amount = Number(principal.value) + interest;

    output1.textContent = interest;
    output2.textContent = total_amount;
  })
}

// COMPOUND INTEREST JAVASCRIPT
const dailyInterest = (principal) => {
  const interestRate = 0.05;
  const dailyInterestRate = interestRate;

  return principal * dailyInterestRate;
};
const calculateInterestAccrued = (principal, investmentRate, time) => {
  console.log('Amount \t Day \t Earning');
  let cumulativeInvestment = principal;
  let totalInterest = 0;
  let rate = investmentRate;

  for (let dayIndex = 1; dayIndex <= time; dayIndex++) {
    if (dayIndex === rate + 1) {
      cumulativeInvestment += principal;
      rate += investmentRate;
    }

    totalInterest += dailyInterest(cumulativeInvestment);

    console.log(`${cumulativeInvestment} \t ${dayIndex} \t ${totalInterest.toFixed(2)}`);
  }

  return totalInterest;
};

const resultAccrued = () => {
  const principal = document.querySelector('input.principal').value;
  const rate = document.querySelector('input.rate').value;
  const time = document.querySelector('input.time').value;
  console.log(`${principal} ${rate} ${time}`);
  document.querySelector('p.result').innerText = calculateInterestAccrued(principal, rate, time);
}

console.log(calculateInterestAccrued(1000, 5, 90));
const calculateInterestAccured  = (principal, investment, time) => {
  
  let interestRate = 0.05;
  let dailyInterestRate = interestRate;

  return principal * dailyInterestRate;
}