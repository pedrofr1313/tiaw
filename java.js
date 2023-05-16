








   



const inputname = document.getElementById('inputname');
const inputtext = document.getElementById('inputtext');
const form = document.getElementById('tamojanto');
const commentpost = document.getElementById('commentpost');
 

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let p = document.createElement('p');
  p.classList = 'flex-wrap text-wrap d-flex p-2';
  p.innerHTML = `<strong>${inputname.value}: </strong>${inputtext.value}`;
  commentpost.appendChild(p);
  inputname.value = '';
  inputtext.value = '';
  inputname.focus();

 });