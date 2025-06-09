
function goToDisplayPage() {
  const spotifyLink = document.getElementById('spotifyLink').value;
  const startDate = document.getElementById('startDate').value;
  const message = document.getElementById('loveMessage').value;
  const imageInput = document.getElementById('imageUpload');

  if (!spotifyLink || !startDate || !message || !imageInput.files[0]) {
    alert("Preencha todos os campos e envie uma imagem!");
    return;
  }

  const reader = new FileReader();
  reader.onload = function () {
    sessionStorage.setItem('photo', reader.result);

    const params = new URLSearchParams({
      spotify: spotifyLink,
      date: startDate,
      msg: encodeURIComponent(message),
    });

    window.location.href = `display.html?${params.toString()}`;
  };
  reader.readAsDataURL(imageInput.files[0]);
}

// Preview da imagem
document.getElementById('imageUpload').addEventListener('change', function (e) {
  const reader = new FileReader();
  reader.onload = function () {
    const img = document.createElement('img');
    img.src = reader.result;
    const preview = document.getElementById('imagePreview');
    preview.innerHTML = '';
    preview.appendChild(img);
  };
  reader.readAsDataURL(this.files[0]);
});
