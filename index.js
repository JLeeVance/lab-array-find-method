function superbowlWin(array) {
    const winningGame = array.find((game) => game.result === "W");
    //declared a variable of Winning Year
    //assigned it to the result of the array.find() function. 
    //The '.find()' function returns the FIRST element in the array that satisfies the condition provided
    //As it goes through the game objects, it will check if the game.result is strictly equal to 'W'
    //If a game has a result value of "W", the ENTIRE object found itself is stored in the WinningGame var
    return winningGame ? winningGame.year : undefined;
    //I used a ternary expression to test the truthiness of winningYear
    //If winningGame is 'truthy', meaning it found an object that met its condition
    //it will return the first code statement, being '.year'
    //remember you just pulled the object and stored it and its key:value pairs in your variable
    //if it were not to be truthy, meaning no object met the condition, it would return the second line of code
}

// The function should receive 1 argument, an Array of JavaScript Objects
// Each object has two properties: year and result
// It should use find() to test each Object to see if the result is "W" — a win!
// It should return the year when the win occurred (if it occurred at all!)
// If no win is found, it should return, sadly, undefined