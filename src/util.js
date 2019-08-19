// THIS FILE DOESNT DO ANYTHING FOR WINDOW.SESSION NOTES ONLY   
function apiKey () {
    return window.sessionStorage.getItem('api_key')
};

function isLoggedIn () {
    if(window.sessionStorage.getItem('api_key')) {
        return true } else {
            return false
        };
};

const baseURL = 'http://127.0.0.1:5000'

export {apiKey, isLoggedIn, baseURL} 
// for exporting nondefault functions/classes wrap in curly brackets