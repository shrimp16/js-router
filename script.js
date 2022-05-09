class IndexView {

    routes = {
        'login': () => {
            alert('I wonder if this works');
        },
        'register': () => {
            alert('Does it?');
        },
        '404': this.notFound()
    }

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
        const contentUri = `/pages/${uri}.html`;
        await fetch(contentUri)
        .then((response) => {
            if(response.status === 404){
                alert("xd");
                this.routes['404'];
                return;
            }else {
                this.routes[uri]();
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
        await fetch('/pages/404.html')
            .then((response) => {
                response.text()
                    .then((response) => {
                        this.updateSlot(response);
                    }) 
            })
    }
}

new IndexView();