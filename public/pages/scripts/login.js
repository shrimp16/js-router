export default class Login {

    constructor() {
        this.loadPage();
    }

    async loadPage() {
        await fetch('/pages/structures/login.html')
            .then((response) => response.text()
                .then((response) => {
                    document.querySelector('#slot').innerHTML = response;
                }))
        this.preparePage();
    }

    preparePage() {
        document.title = 'Login | JS-Router'
        document.getElementById('submit').addEventListener('click', () => {
            console.log(document.querySelector('#un').value);
            console.log(document.querySelector('#pw').value);
        })
    }
}