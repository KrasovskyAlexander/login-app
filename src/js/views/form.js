function inputErrorTemplate(msg){
    return `
    <div class="invalid-feedback">
        ${msg}
    </div>
    `;
}

export function showInpurError(el){
    const parent = el.parentElement;
    const msg = el.dataset.invalidMessage || 'invalid';
    const template = inputErrorTemplate(msg);
    el.classList.add('is-invalid');
    parent.insertAdjacentHTML('beforeEnd',template);
}

export function removeInputMessage(el){
    const parent = el.parentElement;
    const msg = parent.querySelector('.invalid-feedback');
    if(!msg) return;
    el.classList.remove('is-invalid');
    parent.removeChild(msg);
}