const memeContainer = document.getElementById('meme-image-container');

function isertPhrase() {
  const item = document.getElementById('text-input').value;
  const itemList = document.getElementById('meme-text');
  itemList.innerHTML = item;
  memeContainer.appendChild(itemList);
  memeContainer.value = '';
}

document.getElementById('text-input').addEventListener('keyup', isertPhrase);

// Função de preview de arquivo aprendida no artifgo https://www.horadecodar.com.br/2020/05/20/javascript-preview-de-imagem-carregada-em-input-file/
function readImage() {
  if (this.files && this.files[0]) {
    const file = new FileReader();
    // eslint-disable-next-line func-names
    file.onload = function test(e) {
      document.getElementById('meme-image').src = e.target.result;
    };
    file.readAsDataURL(this.files[0]);
  }
}

document.getElementById('meme-insert').addEventListener('change', readImage, false);

function fire() {
  memeContainer.style.border = '3px dashed red';
}

const inputFire = document.getElementById('fire');
inputFire.addEventListener('click', fire);

function water() {
  memeContainer.style.border = '5px double blue';
}

const inputWater = document.getElementById('water');
inputWater.addEventListener('click', water);

function earth() {
  memeContainer.style.border = '6px groove green';
}

const inputEarth = document.getElementById('earth');
inputEarth.addEventListener('click', earth);

function fileImg(event) {
  const divMeme = document.getElementById('meme-image');
  const prev = event.target;
  divMeme.src = prev.src;
}

const memePreview = document.querySelectorAll('.preview-meme');
for (let i = 0; i < memePreview.length; i += 1) {
  memePreview[i].addEventListener('click', fileImg);
}
