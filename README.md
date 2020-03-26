# Platzi Course Time

Este proyecto te ayuda a saber cuánto tiempo dura cualquier curso de Platzi, esto te puede ser de utilizar para ajustar tu tiempo de estudio de una forma más eficiente.

## Instalación

Clona el proyecto, entra al directorio y ejecuta el comando `npm install`
- **Solo para usuarios de WSL (Windows subsystem for Linux)**
Si eres usuario de WSL abre el proyecto en el editor de tu preferencia, ve a la carpeta **src/** y en el archivo **handleRequest.js** descomenta la linea 12, esta linea agrega el path por defecto de Google Chrome en Windows para ser ejecutado por puppeter, si tu ruta de Google Chrome es diferente solo modifica la linea reemplazando la ruta de tu Google Chrome:
`executablePath:'/mnt/c/tu_ruta_de_chrome_en_windows'`
**Esta es una solución temporal para los usuarios de WSL**
## Uso

1. Copiar la URL del curso que quieres saber el tiempo de duración, a continuación se muestran dos ejemplos:
   ![Ejemplo de URL uno](https://i.imgur.com/BUnp1h3.png)
   ![Ejemplo de URL dos](https://i.imgur.com/BBaxzXJ.png)

2. En la terminal ejecutar el comando `npm run start`
3. El programa te pedirá la URL del curso, solo tienes que pegarla como se muestra en la imagen inferior.
   ![Imgur](https://i.imgur.com/dvh9Djm.png)
   Esperas un poco y listo tendrás la duración del curso
   ![Imgur](https://i.imgur.com/9lAwtgm.png)

## Cómo contribuir

Cualquier mejora es bienvenida, solo manda tu PR y especifica cual es la mejora que deseas implementar, espero que este proyecto te ayude.

## Problemas conocidos

Se han identificado algunos cursos con los cuales no funciona este método, es el caso de algunos cursos de ingles, ya se esta trabajando para que funcione con la mayor cantidad de cursos posible.
Si identificas algún curso con el cual no funcione por favor agrega un issue a este repositorio para solucionarlo.

## Contacto
Si necesitas ayuda para utilizar este proyecto mi twitter es [@jcmexdev](https://twitter.com/jcmexdev), contactame y te puedo ayudar.