export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = (guess) => ({
    type: ADD_GUESS,
    guess
});

export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = (correctAnswer) => ({
    type: RESTART_GAME,
    correctAnswer
});

export const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE';
export const generateAuralUpdate = () => ({
    type: GENERATE_AURAL_UPDATE
});