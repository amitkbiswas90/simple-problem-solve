const monthlySaving = (payment, livingCost) => {
    let paymentSum = 0;

    for (let i = 0; i < payment.length; i++) {
        let paymentAmount = payment[i];

        if (paymentAmount >= 3000) {
            let tax = (paymentAmount * 20) / 100;
            let amount = paymentAmount - tax;
            paymentSum += amount;  
        } else {
            paymentSum += paymentAmount; 
        }
    }

    let saving = paymentSum - livingCost;
    
    if (saving < 0) {
        console.log("earn more");
    } else if (saving === 0) {
        console.log(0);
    } else {
        console.log(saving);
    }
}

let paymentArray = [1000, 2000, 3400];
let livingCost = 10000;

let result = monthlySaving(paymentArray, livingCost);
