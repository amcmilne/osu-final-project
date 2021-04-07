const token_key = 'paintAppToken';

export const login = (user) => {
    localStorage.setItem(token_key, user);    
}

export const isLoggedIn = () => {
    if (localStorage.getItem(token_key)) {
        return true;
    }

    return false;
}