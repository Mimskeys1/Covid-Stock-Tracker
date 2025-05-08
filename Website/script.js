

let investmentChart = null;

document.getElementById('calculate-btn').addEventListener('click', () => {
    const returns = (document.getElementById('returns').value * .01);
    const initial = parseFloat(document.getElementById('initial').value);
    const contribution = parseFloat(document.getElementById('contribution').value);
    const years = parseInt(document.getElementById('years').value);

    if (isNaN(initial) || isNaN(contribution) || isNaN(years) ||isNaN(returns) || initial <= 0 || years <= 0) {
        alert('Please enter valid positive numbers.');
        return;
    }

    const annualReturn = returns;
    const results = calculateReinvestment(initial, contribution, annualReturn, years);
    displayResults(results, initial, contribution, annualReturn, years);
});

function calculateReinvestment(initial, contribution, annualReturn, years) {
    let balance = initial;
    let totalInvested = initial;
    const values = [initial];

    
    for (let year = 1; year <= years; year++) {
        for (let week = 1; week <= 52; week++) {
            balance += contribution;  
            totalInvested += contribution; 
            balance += (balance * (annualReturn / 52)); 
        }
        values.push(parseFloat(balance.toFixed(2)));
    }

    return { totalInvested, finalAmount: balance, values };
}
function displayResults(results, initial, contribution, annualReturn, years) {
    const resultsSection = document.getElementById('results');
    const summary = document.getElementById('summary');
    const percentageGain = ((results.finalAmount - results.totalInvested) / results.totalInvested) * 100;

    
    const sp500FinalBalance = calculateSP500Balance(results.totalInvested, years);

    

   
    let comparisonMessage = '';
   

    // Result Message
    summary.innerHTML = `
        Investing with an initial investment of <strong>$${initial}</strong>, adding <strong>$${contribution}</strong> per week over <strong>${years} years</strong>,
        with an annual return of <strong>${(annualReturn * 100).toFixed(2)}%</strong> results in:
        <br><br>
        Total Capital Invested: <strong>$${results.totalInvested.toFixed(2)}</strong><br>
        Final Balance: <strong>$${results.finalAmount.toFixed(2)}</strong><br>
        Historical Percentage Gain: <strong>${percentageGain.toFixed(2)}%</strong><br><br>
        ${comparisonMessage} 
        
    `;
  
    resultsSection.classList.remove('hidden');
    renderChart(results.values, years, contribution, annualReturn);
}
// 
function calculateSP500Balance(initialInvestment, weeklyContribution, years) {
    let balance = initialInvestment;
    let totalInvested = initialInvestment;

    for (let year = 1; year <= years; year++) {
        for (let week = 1; week <= 52; week++) {
            balance += weeklyContribution;
            totalInvested += weeklyContribution;
            
            balance += (balance * 0.08 / 52);  
        }
    }

    return balance;
}

function renderChart(data, years, contribution, annualReturn) {
    const ctx = document.getElementById('investmentChart').getContext('2d');

  
    if (investmentChart instanceof Chart) {
        investmentChart.destroy();
    }

    
    let sp500AverageData = [data[0]]; 

    
    for (let year = 1; year <= years; year++) {
        let sp500Balance = sp500AverageData[year - 1]; 
        for (let week = 1; week <= 52; week++) {
            sp500Balance += contribution;  
            sp500Balance += (sp500Balance * (0.08 / 52)); 
        }
        sp500AverageData.push(parseFloat(sp500Balance.toFixed(2)));
    }
  
console.log("User's final balance: " + data);
console.log("S&P 500 final balance: " + sp500AverageData);


    // Chart
    investmentChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: years + 1 }, (_, i) => `Year ${i}`),
            datasets: [
                {
                    label: 'Your Investment ($)',
                    data: data,
                    borderColor: '#4caf50',
                    backgroundColor: 'rgba(76, 175, 80, 0.2)',
                    fill: true,
                    tension: 0.1
                },
                {
                    label: 'S&P 500 Historic Avg (8%/yr)',
                    data: sp500AverageData,
                    borderColor: '#ff5733',
                    borderDash: [5, 5],
                    pointStyle: 'circle',
                    pointRadius: 3,
                    backgroundColor: 'rgba(255, 87, 51, 0.2)',
                    fill: true,
                    tension: 0.1
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });
    
}
