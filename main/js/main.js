const NOTAS = [];

const aniadirNota = () => {
  let texto = document.getElementById('noteinput').value;
  let coincide = 0;

  if (hayTexto(texto)) {
    if (NOTAS.length > 0) {
      for (let index = 0; index < NOTAS.length; index++) {
        if (NOTAS[index] == texto) {
          coincide++;
        }
      }
      if (coincide > 0) {
        alertaError('This note already exists');
      } else {
        crearNota(texto);
      }
    } else {
      crearNota(texto);
    }
  } else {
    alertaError('Add some text to the note');
  }
  document.getElementById('noteinput').value = '';
}

const crearNota = (texto) => {
  // Resto de código
  var divContainer = document.createElement('div');
  divContainer.classList.add('newnote');
  divContainer.id = NOTAS.length;

  var divText = document.createElement('div');
  divText.classList.add('text');

  var paragraph = document.createElement('p');
  paragraph.textContent = texto;

  divText.appendChild(paragraph);

  var button = document.createElement('button');
  button.textContent = 'Delete';
  button.onclick = function() {
    eliminarNota(divContainer.id);
  };

  divContainer.appendChild(divText);
  divContainer.appendChild(button);

  // Agregar la nueva nota al contenedor de notas en el HTML
  var notesContainer = document.querySelector('.notes');
  notesContainer.appendChild(divContainer);

  NOTAS.push(texto);
}

const hayTexto = (texto) => {
  if (texto == "" || texto == null) {
    return false;
  } else {
    return true;
  }
}

const alertaError = (texto) => {
  var alertaDiv = document.getElementById("alertaDiv");
  var tiempo = 5000;

  alertaDiv.style.display = "block";
  alertaDiv.innerHTML = texto;

  setTimeout(function() {
    alertaDiv.style.display = "none";
  }, tiempo);
}

const eliminarNota = (id) => {
  var nota = document.getElementById(id);
  nota.remove();

  delete NOTAS[id];
}