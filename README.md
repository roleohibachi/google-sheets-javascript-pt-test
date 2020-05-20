# google-sheets-javascript-pt-test
How to borrow a website's javascript to create a google sheets function.

## Background
I was requested to build a survey for Air Force members to log their practice PT test results. That's easy enough - I used Google Forms to collect all the necessary data. But computing the actual score is a pain. The Air Force publishes lookup tables in PDF format for each age range - there is no published algorithm.

Someone else solved this, though. http://www.airforcefitnesscalculator.com/ exists (WHOIS says it's the work of [Andrew Kemendo](https://github.com/AndrewKemendo)), which implements this monstrosity of ladder logic lookup tables in javascript. Good on him for writing all that, it doesn't look fun. The script is inline with the page html.

## Implementation
Google forms dumps the input data into a spreadsheet. I'd like a column in that spreadsheet that calculates the pt score based on the input (number of push-ups, waist circumference, age, gender, etc). To make a custom function, fire up the script editor (tools -> script editor).

- Copy and paste Andrew's function into the script editor
- find/replace all "document.getElement..." lines. 
-- This means rewriting some parsing of input variables. Instead of reading them from page elements, they should be passed as arguments to the function. I also chose to implement walking as a boolean rather than a second duration variable, but that's just preference.
-- for output, I just deleted the lines that modified the page content.
- add a return statement, In my case, it was just `return total_score;`

Save the script. You should now be able to call `usafcalc()` (the original function) as a spreadsheet function `=usafcalc(K2,J2,L2,M2,F2,H2,G2,I2,R2)` 
