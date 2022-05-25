export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',  // we use capital cose should never change
    payload: user
});