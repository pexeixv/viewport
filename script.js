
function injectValues() {
    vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    document.querySelector('.viewport_dimensions').innerHTML = `
                <span class=size>${vw}</span>
                <span>&times;</span>
                <span class=size>${vh}</span>
                `;
}

injectValues();
document.querySelector('.viewport_dimensions').classList.add('ifNotBlocked');


window.addEventListener('resize', injectValues)