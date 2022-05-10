export default class NotFound {
    constructor() {
        this.loadPage();
    }

    async loadPage() {
        await fetch('/pages/structures/404.html')
            .then((response) => response.text()
                .then((response) => {
                    document.querySelector('#slot').innerHTML = response;
                }))
    }
}