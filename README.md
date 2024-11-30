# Lucas Borondo Cañizares (@LuBoCaDev) - Desarrollo Web Full Stack XVII
## Práctica 3. Modelado de datos y SQL

 No he podido hacer los requisitos opcionales porque he ido muy justo de tiempo y con dificultades técnicas, que me han tenido liado hasta el último día. De igual forma, he estilado lo justo y necesario. Aun así he revisado los requisitos obligatorios y creo haber cumplido con todo lo necesario que se pide.

---
---

### Checklist de cumplimiento ed requisitos pedidos en la práctica


- Requisito 1:
1- Mostrar los detalles del anuncio: Se implementa correctamente en ads-view.js con la función buildAd(), que construye la vista del anuncio, incluyendo la imagen, nombre, descripción, precio y tipo (compra/venta). También se gestiona el enlace para acceder al detalle del anuncio.

2- Gestionar los estados de la interfaz: En ads-controller.js, se gestionan todos los estados de interfaz necesarios .

3- Redirección a la pantalla de detalle del anuncio: Se maneja correctamente con el enlace en cada anuncio generado

4- Botón para crear un anuncio si el usuario está logueado: Implementado en session-controller.js y se visualiza correctamente en index.js. Si el usuario está autenticado se muestra un enlace para crear un anuncio; si no está autenticado se muestran los enlaces de login y signup.


- Requisito 2:

1- Mostrar los detalles del anuncio (foto, nombre, descripción, precio, compra/venta): implementado en ad-detail-view.js (muestra todos los detalles del anuncio: nombre, descripción, precio y tipo de compra/venta).

2- Gestionar los estados de la interfaz: En ad-detail-controller.js (gestiona los estados de vacío, error, carga y éxito al cargar la información del anuncio).

3- Mostrar el botón de eliminación si el usuario está autenticado y el anuncio le pertenece: Lo gestiono en ad-detail-controller.js (verifica si el usuario autenticado es el propietario del anuncio y muestra el botón de eliminación).

Confirmación de eliminación del anuncio: También en ad-detail-controller.js (antes de eliminar, pregunta al usuario si está seguro de querer borrar el anuncio y luego lo elimina si la respuesta es afirmativa).



- Requisito 3:
1- Formulario con los campos requeridos: En create-ad.html se piden lo scampos indicados (Foto, Nombre, Descripción, Precio, Compra/Venta).

2- Envío del formulario: Los datos del formulario se envían al backend mediante create-ad-controller.js y create-ad-model.js.

3 - Gestión de estados: Se gestionan los estados de error, carga y éxito correctamente a través de create-ad-controller.js.

4- Acceso restringido: Si el usuario no está autenticado, se le redirige a la página de listado de anuncios. Se gestiona con create-ad.js, session-controller.js y session-view.js.


- Requisiot 4:

1- Formulario de login con los campos requeridos (email y contraseña): se ncuentra en login.html

2- Autenticación contra el backend y obtención del token JWT: Se implementa en login-controller.js y login-model.js.

3- Gestión de estados (carga, error, éxito): A través de login-controller.js y notification-controller.js.

4- Redirección tras login exitoso: Lo hago en login-controller.js.



- Requisito 5:
1 Formulario de registro: signup.html contiene el formulario con los campos necesarios para el registro del usuario, incluyendo el email, la contraseña y la confirmación de la contraseña.


2- Registro del usuario en el backend: signup-controller.js gestiona el evento de envío del formulario, validando los datos y luego llama a la función de registro del backend. Si los datos son correctos, se procede a registrar al usuario. Además signup-model.js realiza la solicitud POST al backend para registrar al usuario, enviando los datos.

3- Gestión de estados de interfaz (carga, error, éxito): En este caso signup-controller.js lo valida mostrando mensajes de error si el email no es válido o las contraseñas no coinciden. notification-controller.js gestiona las notificaciones de error o éxito en la interfaz, y signup.js inicializa el controlador de registro y muestra las notificaciones generadas por el controlador.

4- Redirección tras registro exitoso: signup-controller.js, después de un registro con exito, redirige al usuario a la página principal.
