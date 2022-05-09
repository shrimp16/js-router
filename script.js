

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
        await fetch(contentUri)
        .then((response) => {
            console.log(response);
            if(response.status === 404){
                this.notFound();
                return;
            }else {
                response.text()
                .then((content) => {
                    this.updateSlot(content);
                })
            }
        })
    }

    updateSlot(content) {
        this.slot.innerHTML = content;
    }

    async notFound() {
        await fetch('404.html')
            .then((response) => {
                response.text()
                    .then((response) => {
                        this.updateSlot(response);
                    }) 
            })
    }
}

new IndexView();