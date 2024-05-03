# Calculator mortgage 

*Note: This is an exercise from [frontendeval.com](https://frontendeval.com/questions/mortgage-calculator?tab=question).*

## Instructions
Create a calculator that accepts three inputs and calculates your monthly mortgage payment: 

- Principal loan amount
- Interest rate (annual)
- Number of years on your mortgage

The standard math equation for calculating your *monthly* mortgage payment is:

P(r(1+r)<sup>n</sup>/((1+r)<sup>n</sup>)-1)) where:

1. `P` is the principal loan amount
2. `r` is the **monthly** interest rate
3. `n` is the **total number of payments** on your mortgage


Note the bolded differences between the equation variables and the inputs. The inputs are set up that way as a matter of user experience: borrowers tend to be presented numbers like this by their bank. Your job when working on this feature is to convert the user inputs into the numbers that will be used in the calculation. Users will make 12 payments on their mortgage per year of their mortgage, and the monthly interest rate is the annual interest rate divided by 12.

For example:

Principal loan amount: $500,000
Interest rate: 3%
Length of loan: 30 years
=> $2,108 monthly mortgage

## Running app

````shell
git clone https://github.com/nadia-mm/Mortgage-Calculator.git
npm install
npm start
````

## Running tests

````shell
npm test
````

## DEMO

![](https://github.com/nadia-mm/Mortgage-Calculator/blob/main/gif/demo.gif)