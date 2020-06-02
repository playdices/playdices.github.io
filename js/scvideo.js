
if(!location.hash.replace('#', '').length) {
location.href = location.href.split('#')[0] + '#' + (Math.floor(Math.random() * 9999) + 1000).toString().replace('.', '');
location.reload();
}

document.createElement('article');
document.createElement('footer');