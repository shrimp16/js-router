class Router {
    constructor() {
        window.addEventListener("hashchange", () => {
            this.routeChangeHandler();
        })
        this.slot = document.querySelector('#slot');
        document.body.onload = () => {
            this.routeChangeHandler();
        }
    }

    routeChangeHandler() {
        const hashLocation = window.location.hash.substring(1);
        const url = Array.from(hashLocation.split('/'));
        this.slot.innerHTML = '';

        console.log(url[0]);

        switch (url[0]) {
            case '':
                new HomePage();
                break;
            case 'login':
                new Login();
                break;
            case 'register':
                new Register();
                break;
            default:
                this.notFound();

        }
    }

    async notFound() {
        await fetch('/pages/404.html')
            .then((response) => {
                response.text()
                    .then((response) => {
                        this.slot.innerHTML = response;
                    })
            })
    }
}

new Router();

class HomePage {
    constructor() {
        this.loadPage();
    }

    async loadPage() {
        await fetch('/pages/home.html')
            .then((response) => response.text()
                .then((response) => {
                    document.querySelector('#slot').innerHTML = response;
                }))
    }
}

class Login {

    constructor() {
        this.loadPage();
    }

    async loadPage() {
        await fetch('/pages/login.html')
            .then((response) => response.text()
                .then((response) => {
                    document.querySelector('#slot').innerHTML = response;
                }))
        this.preparePage();
    }

    preparePage() {
        document.getElementById('submit').addEventListener('click', () => {
            console.log(document.querySelector('#un').value);
            console.log(document.querySelector('#pw').value);
        })
    }
}

class Register {

    constructor() {
        this.loadPage();
    }

    async loadPage() {
        await fetch('/pages/register.html')
            .then((response) => response.text()
                .then((response) => {
                    document.querySelector('#slot').innerHTML = response;
                }))
        this.preparePage();
    }

    preparePage() {
        document.getElementById('register').addEventListener('click', () => {
            console.log('REGISTER');
            console.log(document.querySelector('#un').value);
            console.log(document.querySelector('#pw').value);
            console.log(document.querySelector('#email').value);
        })
    }
}