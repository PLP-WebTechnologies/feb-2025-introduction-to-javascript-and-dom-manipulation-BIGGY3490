function changeContent() {
  const text = document.getElementById('intro-text');
  text.textContent = '🎉 The text has been changed dynamically!';
  text.style.color = 'blue';
  text.style.fontWeight = 'bold';
}

function addElement() {
  const newPara = document.createElement('p');
  newPara.id = 'new-paragraph';
  newPara.textContent = '🆕 This paragraph was added with JavaScript!';
  newPara.style.color = 'green';
  document.getElementById('container').appendChild(newPara);
}

function removeElement() {
  const para = document.getElementById('new-paragraph');
  if (para) {
    para.remove();
  }
}
