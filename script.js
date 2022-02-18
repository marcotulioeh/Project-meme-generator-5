// Crie uma caixa de texto com a qual quem usa pode interagir para inserir texto em cima da imagem escolhida.
function isertPhrase() {
  const item = document.getElementById('text-input').value;
  const itemList = document.getElementById('meme-text');
  itemList.innerHTML = item;
  // eslint-disable-next-line sonarjs/no-duplicate-string
  document.getElementById('meme-image-container').appendChild(itemList);
  const input = document.getElementById('meme-image-container');
  input.value = '';
}

document.getElementById('text-input').addEventListener('keyup', isertPhrase);

// O site deve permitir que quem usa faça upload de uma imagem de seu computador.
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
