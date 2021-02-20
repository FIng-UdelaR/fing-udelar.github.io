(function ($) {
  $(function () {
    $(".sidenav").sidenav();
    $(".parallax").parallax();
    document.getElementById("date").innerHTML =
      "FIng-UdelaR - " + new Date().getFullYear();
  });
})(jQuery);

$(document).ready(function () {
  $(".collapsible").collapsible();
});

$(document).ready(function () {
  $(".modal").modal();
});

function inviteGenerator() {
  let url = "https://github.com/FIng-UdelaR/Herramientas";
  let body = `<ul>
        <li><b>Descripción: </b>La herramienta "Generador de invitaciones" 
        para FIng-UdelaR permite invitar usuarios de Github a unirse a la 
        organización FIng-UdelaR, pudiendo incluso seleccionar un listado 
        de equipos donde agregar al nuevo miembro. <br>Verifica, además, 
        la existencia de la organización, la existencia del usuario y la 
        pertenencia del usuario en la organización (o la existencia de una 
          invitación previa pendiente de aceptación). <br> El invitado 
          recibirá un correo electrónico con un enlace para aceptar la 
          invitación. Adicionalmente, la herramienta permite copiar el 
          enlace de invitación a la organización por si el invitado no 
          tiene acceso al email.</li>
        <li><b>Versión actual: </b>1.0</li>
        <li><b>Edición: </b>portable</li>
        <li><b>Sistemas operativos: </b>Windows</li>
        <li><b>Requerimientos: </b>requiere conexión a Internet</li>
    </ul><hr>
<a href="${url}" target="_blank">Acceder a la herramienta</a>`;

  expandImage(
    "Generador de invitaciones",
    "resources/invitation-tool.png",
    body
  );
}

function renameRepository() {
  let url = "https://github.com/FIng-UdelaR/Herramientas";
  let body = `<p>Para renombrar un repositorio debes dirigirte a la pestaña
  "Settings" del repositorio y escribir un nuevo nombre, tal y como muestra 
  esta imagen.</p>`;

  expandImage("Renombrar repositorio", "resources/rename-repository.png", body);
}

function shareRepositoryWithOrg() {
  let url = "https://github.com/FIng-UdelaR/Herramientas";
  let body = `<p>Para compartir un repositorio con FIng-UdelaR, debes hacer 
  clic en el botón de transferir repositorio, que se encuentra dentro de las
  Settings del mismo. Github desplegará un modal donde deberás escribir 
  "FIng-UdelaR" en el input de nombre de organización, tal y como muestra 
  esta imagen.</p>
  <p>Finalmente, para que Github permita enviarle este repositorio a FIng-UdelaR,
  solicitará que escribas manualmente el nombre del repositorio que estás 
  intantando enviar.</p>
  <p>¡Listo! Ahora el repositorio será compartido con los miembros de 
  FIng-UdelaR</p>`;

  expandImage(
    "Compartir repositorio con FIng-UdelaR",
    "resources/share-repository.png",
    body
  );
}

function expandImage(title, source, body) {
  document.getElementById("imageTitle").innerHTML = title;
  document.getElementById("imageSource").src = source;
  document.getElementById("imageCardBody").innerHTML = body;
  modalImage = document.getElementById("modalImage");
  let instance = M.Modal.getInstance(modalImage);
  instance.open();
}
