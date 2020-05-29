const alert = document.getElementById('alert');
const form = document.getElementById('form');
const list = document.getElementById('list');
const item = document.getElementById('item').content;
const textField = document.getElementById('text');

function createItem(word, count) {
  const element = item.cloneNode(true);

  element.querySelector('.word').textContent = word;
  element.querySelector('.badge').textContent = count;

  return element;
}

function addItem(container, item) {
  container.appendChild(item);
}

function save(array) {
  return array.slice().map(el => el.slice());
}

function work(event) {
  event.preventDefault();
  alert.remove();
  list.innerHTML = '';

  const mapped = map(textField.value);
  console.log('Map', save(mapped));

  const sorted = sort(mapped);
  console.log('Sort', save(sorted));

  const reduced = reduce(sorted);
  console.log('Reduce', save(reduced));

  reduced.sort((a, b) => b[1] - a[1]).forEach(([word, count]) => {
    addItem(list, createItem(word, count));
  });
}

form.addEventListener('submit', work);
