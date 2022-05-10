export default class HomePage {
    constructor() {
        this.loadPage();
    }

    async loadPage() {
        await fetch('/pages/structures/home.html')
            .then((response) => response.text()
                .then((response) => {
                    document.title = 'Home | JS-Router'
                    document.querySelector('#slot').innerHTML = response;
                }))
    }
}