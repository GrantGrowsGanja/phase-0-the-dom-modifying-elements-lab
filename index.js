const main = document.getElementById('main');
main.remove();
const newHeader = document.createElement('h1');
newHeader.setAttribute('id','victory');
newHeader.textContent = 'Grant Ours is the champion';
document.body.append(newHeader);
