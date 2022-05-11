import Router from './pages/router.js';

document.body.onload = () => {
    new Router();
}

document.getElementById('go-to-login').addEventListener('click', () => {
    window.location.href = '/#login';
})

document.getElementById('go-to-register').addEventListener('click', () => {
    window.location.href = '/#register';
})