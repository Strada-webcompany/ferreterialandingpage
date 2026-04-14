# Proyecto Landing Page Ferretería

Landing page moderna y orientada a la conversión, optimizada para dirigir el tráfico a WhatsApp. Este proyecto no utiliza dependencias ni frameworks y está compuesto únicamente por HTML, CSS y JS, lo que significa que el despliegue es inmediato y nativo.

## 🚀 Cómo Desplegar en Vercel gratis en 3 pasos

Dado que este proyecto está compuesto 100% de archivos estáticos (HTML/CSS/JS), el proceso de despliegue no requiere configurar ningún `build command` ni seleccionar frameworks.

### Paso 1: Sube el proyecto a GitHub
1. Entra a tu cuenta de [GitHub](https://github.com/).
2. Crea un nuevo repositorio (ej. `ferreteria-landing`).
3. Sube el contenido de esta carpeta (`index.html`, `styles.css`, `script.js` y el `README.md`) al repositorio. Puedes hacerlo arrastrando los archivos desde la web o usando los siguientes comandos en tu terminal si usas Git:

```bash
git init
git add .
git commit -m "Initial commit - Landing Page Ferretería"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/ferreteria-landing.git
git push -u origin main
```

### Paso 2: Conéctalo a Vercel
1. Entra a [Vercel](https://vercel.com/) e inicia sesión con tu cuenta de GitHub.
2. Haz clic en **"Add New..."** y selecciona **"Project"**.
3. En la lista desplegable de repositorios de GitHub, busca tu nuevo repositorio (`ferreteria-landing`) y haz clic en **"Import"**.

### Paso 3: Configuración y Deploy
1. Vercel detectará que es un proyecto de HTML Estático.
2. **Framework Preset:** Déjalo en `Other` (se configura solo).
3. **Build Command:** Déjalo vacío.
4. **Output Directory:** Déjalo vacío.
5. Haz clic en el botón azul **"Deploy"**.

¡Listo! En menos de 30 segundos, Vercel generará una URL pública y en vivo (tipo `tu-proyecto.vercel.app`), que luego puedes reemplazar por un dominio personalizado en las opciones del proyecto en Vercel.

## 🛠 Cambios Rápidos

* **Número de WhatsApp:** Para cambiar el número receptor o mensaje, busca en el `index.html` los enlaces de tipo `<a href="https://wa.me/524420000000...">` y reemplaza el `524420000000` con el número del negocio (incluyendo el código de país, en este caso `52` para México).
* **Mensaje Automático:** En el mimo enlace `wa.me`, el texto después de `?text=` es el mensaje inicial del cliente. Puedes modificarlo usando `%20` en lugar de espacios.
