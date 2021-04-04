const TOKEN_KEY = 'paintAppToken';

export const login = (user) => {
    localStorage.setItem(TOKEN_KEY, user);    
}

export const isLoggedIn = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}