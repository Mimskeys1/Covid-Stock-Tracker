### Index

[Concept description](#concept-description)

[User Stories](#user-stories)

[Use-Cases](#use-cases)

[Use-Case Diagram](#use-case-diagram)

[Table of requirements](#table-of-requirements)

[Entity Relationship Diagram](#entity-relationship-diagram)

[UML Class Diagram](#uml-class-diagram)

[Data Access Layer](#data-access-layer)


<h1><p align="center">Concept description</p></h1>

This project revolves around the idea of a Basic reinvestment calculator. From that idea I would like to allow the user to have access to choose to decide which stock in the SPY that they would like to reinvest the money into. The calculator would then show how much capital was invested in, the money at the end of the timeline and the historic percentage gain. I would also like this to be shown on a line graph showing both figures.

<h1><p align="center">Wire Frame</p></h1>                       


![image](https://github.com/user-attachments/assets/486e9c2f-2699-4c3f-ab45-b748b4f2d15f)


<h1><p align="center">User Stories</p></h1>

Create (at least 5) User Stories to describe how the application is intended to be used.
The use-cases should be formatted correctly and consistently.
1.	A user is interested in the difference between SPY as a whole vs google's stock.
2.	A user is interested if reinvesting weekly vs biweekly would be significantly different. 
3.	A user is interested in how much money he may have after investing 100 dollars weekly for 3 years.
4.	A user is interested in comparing google vs Nvidia over the pandemic. 
5.	A user is interested in seeing if lump sum is better than investing overtime.
   
<h1><p align="center">Use-Cases</p></h1>                

1.	Educational tool for new investors.
2.	Comparing different stocks.
3.	Tracking market trends over time.
4.	Savings vs. Investment comparison.
5.	Personal investment planning.


<h1><p align="center">Use-Case Diagram</p></h1>
  
![image](https://github.com/user-attachments/assets/9c7d90e0-ccba-432b-bab6-f2327a0ad2e9)

<h1><p align="center">Table of Requirements</p></h1>

Number | Requirement | Testable |
--- | --- |  --- |
1 | The software shall calculate and display the final investment value based on historical stock price data. | Yes |
2 | The software shall allow users to select a stock from the S&P 500 or The SPY itself for reinvestment simulation. |  Yes |
3 | The software shall allow users to select the investment frequency (weekly, biweekly, or monthly). |  Yes |
4 | The software shall calculate and display the total capital invested over the selected investment timeline. |  Yes |
5 | The software shall generate and display a line graph showing both total invested capital and final investment value over time. |  Yes |

<h1><p align="center">Entity Relationship Diagram</p></h1>

![image](https://github.com/user-attachments/assets/fc9ba9e4-f105-465f-b007-bb6883ac1593)


<h1><p align="center"></p>UML Class Diagram</h1>

![image](https://github.com/user-attachments/assets/cca8d4c0-991c-4d02-a3e9-d71855ea0634)


<h1><p align="center"></p>Data Access Layer</h1>

![image](https://github.com/user-attachments/assets/bbd34140-1a1b-4e79-8fd5-353ae1af8377)

![image](https://github.com/user-attachments/assets/f33c3e2f-8a0f-4f87-b7d2-38ae81696b5c)

![image](https://github.com/user-attachments/assets/d439ccd3-2ae2-435b-b3b7-19e130996b5f)


<h1><p align="center"></p>Week One Burndown chart</h1>
import matplotlib.pyplot as plt

# Sprint 1 setup
days = list(range(8))  # Day 0 to Day 7
total_estimated_hours = 19

# Ideal burndown (linear)
ideal_remaining = [total_estimated_hours - (total_estimated_hours / 7) * day for day in days]

# Actual progress (mock data)
actual_remaining = [19, 18, 15, 13, 10, 7, 3, 0]

# Plotting the burndown chart
plt.figure(figsize=(10, 6))
plt.plot(days, ideal_remaining, label='Ideal Burndown', linestyle='--', marker='o', color='blue')
plt.plot(days, actual_remaining, label='Actual Burndown', linestyle='-', marker='s', color='green')
plt.title('Sprint 1 Burndown Chart (Week 1)')
plt.xlabel('Day of Sprint')
plt.ylabel('Remaining Work (Hours)')
plt.xticks(days)
plt.yticks(range(0, total_estimated_hours + 1, 2))
plt.grid(True)
plt.legend()
plt.tight_layout()
plt.show()
