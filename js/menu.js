document.querySelector("body > header > div > div > div.w-full > div > div.seek-end > button")
.addEventListener('click', () => {
    const state = document.getElementById('menu').dataset['state'];
    document.getElementById('menu').dataset['state'] = state === 'shown' ? 'hidden' : 'shown';
    document.getElementsByTagName('body')[0].style.overflowY = state === 'shown' ? 'auto' : 'hidden';
});