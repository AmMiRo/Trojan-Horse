import {} from "./gameActions";

const initialState = {
    call: {
        isShuffling: false,
        error: false
    },
    game: {
        pile: [],
        isWon: false
    },
    player: {
        hand: [],
        isTurn: false,
    },
    npc1: {
        hand: [],
        isTurn: false
    },
    npc2: {
        hand: [],
        isTurn: false
    },
    npc3: {
        hand: [],
        isTurn: false
    }
};

export const gameReducer = (state = initialState, action) => {

};