# 🚀 Guía de Despliegue en GitHub Pages

## Pasos para subir el proyecto a GitHub

### 1. Inicializar repositorio Git
```bash
cd wonderwoll-gallery
git init
git add .
git commit -m "✨ Wonderwoll Gallery - Initial commit"
```

### 2. Crear repositorio en GitHub
- Ve a https://github.com/new
- Nombre del repositorio: `wonderwoll-gallery`
- Descripción: "Galerie Parisienne - Ecommerce con estética de galería de arte"
- Visibility: Público
- NO inicializar con README (ya tenemos uno)

### 3. Conectar y subir
```bash
git branch -M main
git remote add origin https://github.com/TU-USUARIO/wonderwoll-gallery.git
git push -u origin main
```

### 4. Configurar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main** / **/root**
5. Click en **Save**

### 5. Esperar el despliegue
- GitHub Pages tardará 1-2 minutos en desplegar
- La URL será: `https://TU-USUARIO.github.io/wonderwoll-gallery/`

## Comandos Útiles

### Desarrollo local
```bash
npm run dev
```

### Build de producción
```bash
npm run build
```

### Previsualizar build
```bash
npm run preview
```

## Notas Importantes

✅ El `vite.config.js` ya está configurado con:
```javascript
base: '/wonderwoll-gallery/'
```

✅ Los productos se cargan desde `./productos.json` (ruta relativa)

✅ El proyecto incluye 20 productos distribuidos en 4 categorías

✅ El carrito guarda en localStorage

✅ Diseño responsive para móviles

## Solución de Problemas

### Error 404 en GitHub Pages
- Verificar que el nombre del repositorio coincida con el `base` en `vite.config.js`
- Esperar 2-3 minutos después del push
- Forzar recarga (Ctrl+F5) en el navegador

### Los productos no cargan
- Verificar que `productos.json` esté en la carpeta `/public`
- El build debe incluir el JSON en `/dist/productos.json`

### Estilos no se aplican
- Ejecutar `npm run build` nuevamente
- Limpiar caché del navegador

## Entrega de la Actividad

Para la **Actividad Formativa N°2 — Opción 6**, compartir:
1. Link del repositorio en GitHub
2. Link de GitHub Pages con el sitio funcionando

---

**¡Bon courage! 🇫🇷✨**