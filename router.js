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

        switch (url[0]) {
            case '/': 
                new HomePage();
                break;
            case 'login':
                new Login();
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