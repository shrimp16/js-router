import Home from './scripts/home.js'
import Login from './scripts/login.js' 
import Register from './scripts/register.js'
import NotFound from './scripts/notFound.js'

export default class Router {
    constructor() {
        window.addEventListener("hashchange", () => {
            this.routeChangeHandler();
        })
        this.slot = document.querySelector('#slot');
        this.routeChangeHandler();
    }

    routeChangeHandler() {
        const hashLocation = window.location.hash.substring(1);
        const url = Array.from(hashLocation.split('/'));
        this.slot.innerHTML = '';

        console.log(url[0]);

        switch (url[0]) {
            case '':
                new Home();
                break;
            case 'login':
                new Login();
                break;
            case 'register':
                console.log("REGISTER")
                new Register();
                break;
            default:
                console.log("NOT FOUND")
                new NotFound();

        }
    }
}