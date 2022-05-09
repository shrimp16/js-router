

class IndexView {
    constructor() {
        window.addEventListener("hashchange", (e) => {
            this.onRouteChange(e);
        })
        this.slot = document.querySelector('#slot');
        this.onRouteChange();
    }

    onRouteChange(e) {
        const hashLocation = window.location.hash.substring(1);
        console.log(hashLocation);
        this.loadContent(hashLocation);
    }

    async loadContent(uri) {
        const contentUri = `${uri}.html`;
        await fetch(contentUri).then(response => response.text()).then((content) => {
            console.log(content);
            this.updateSlot(content);
        })
    }

    updateSlot(content) {
        this.slot.innerHTML = content;
    }
}

new IndexView();