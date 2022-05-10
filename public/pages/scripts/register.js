class Register {

    constructor() {
        this.loadPage();
    }

    async loadPage() {
        await fetch('../structures/register.html')
            .then((response) => response.text()
                .then((response) => {
                    document.querySelector('#slot').innerHTML = response;
                }))
        this.preparePage();
    }

    preparePage() {
        document.title = 'Resgister | JS-Router'
        document.getElementById('register').addEventListener('click', () => {
            console.log('REGISTER');
            console.log(document.querySelector('#un').value);
            console.log(document.querySelector('#pw').value);
            console.log(document.querySelector('#email').value);
        })
    }
}