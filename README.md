# N Back Task


## To get started
1. Clone this repository
2. Run npm install
3. Run npm run dev
4. Open http://localhost:5173/ in your browser


## Deployed App
TBC

## My approach
Build app with Vite, React, TypeScript, TailwindCSS using template form Vite Community.
Implement testing with Vitest and React Testing Library.

### Project plan in bullet points

* Responsive design
* User needs to input their name before game starts
* Create random seqence of 15 letters
* Show one at a time for 3 seconds
* User has to press a key if letter that was shown 2 steps back is displayed again
* Task ends if 2 error or maximum of 15 letters displayed
* App to show number of correct answers and errors at end of game
* Log correct answers and errors including date/time to local storage to mimic backend
* Make user friendly and engaging
* Create repo on github with README.md and instruction to get started
* Deploy on Amazon S3

logs:
type - startGame, name, repeatedLetter, endGame
date - timestamp
details - name, correct, error


