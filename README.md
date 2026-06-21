# Wonderwoll Gallery - Galerie Parisienne

Una tienda online con estética de galería de arte parisina, protagonizada por **Monsieur Chat**, un elegante gato vintage que da la bienvenida a los visitantes.

## 🎨 Características

- **Diseño Maximalista Parisino**: Colores profundos (borgoña, dorado, verde oscuro, crema), tipografías elegantes y ornamentos decorativos
- **Monsieur Chat**: Mascota oficial que recibe a los usuarios con un popup de bienvenida
- **4 Secciones**:
  - 🎭 Mode Classique (Moda Clásica)
  - 📚 Bibliothèque (Biblioteca)
  - 🎵 Musique (Música)
  - ☕ Cafétéria (Cafetería)
- **Carrito de Compras**: Funcionalidad completa con almacenamiento local
- **20 Productos**: Distribuidos en las 4 categorías
- **Animaciones Suaves**: Transiciones elegantes y elementos decorativos flotantes
- **Responsive Design**: Adaptable a dispositivos móviles

## 🛠️ Stack Tecnológico

- **React** con JSX
- **Vite** como bundler
- **CSS** estándar (sin librerías de componentes)
- **Fetch API** nativo para cargar datos
- **localStorage** para persistencia del carrito

## 📁 Estructura del Proyecto

```
wonderwoll-gallery/
├── public/
│   ├── productos.json       # Datos de los productos
│   └── favicon.svg          # Icono del sitio
├── src/
│   ├── components/
│   │   ├── WelcomeModal.jsx     # Popup de bienvenida con Monsieur Chat
│   │   ├── WelcomeModal.css
│   │   ├── Navigation.jsx       # Barra de navegación
│   │   ├── Navigation.css
│   │   ├── Hero.jsx             # Sección de bienvenida
│   │   ├── Hero.css
│   │   ├── About.jsx            # Sección "Sobre Nosotros"
│   │   ├── About.css
│   │   ├── Gallery.jsx          # Galería de productos
│   │   ├── Gallery.css
│   │   ├── ProductCard.jsx      # Tarjeta de producto individual
│   │   ├── ProductCard.css
│   │   ├── CartModal.jsx        # Modal del carrito
│   │   ├── Toast.jsx            # Notificaciones toast
│   │   ├── Toast.css
│   │   └── Footer.jsx           # Pie de página
│   ├── App.jsx              # Componente principal
│   ├── App.css
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos globales
├── index.html
├── vite.config.js
└── package.json
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (v18 o superior)
- npm

### Pasos de Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/wonderwoll-gallery.git
cd wonderwoll-gallery
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar en modo desarrollo:
```bash
npm run dev
```

4. Construir para producción:
```bash
npm run build
```

5. Previsualizar build de producción:
```bash
npm run preview
```

## 📦 Datos de los Productos

Los productos se cargan desde `public/productos.json`. Cada producto tiene la siguiente estructura:

```json
{
  "id": 10001,
  "nombre": "Vestido Gala Nocturne",
  "categoria": "Moda Clásica",
  "precio": 285.99,
  "stock": 12,
  "material": "Seda italiana, encaje francés",
  "descripcion": "Elegante vestido de noche...",
  "calificacion": 5,
  "resenas": [...]
}
```

## 🎯 Funcionalidades

### Carrito de Compras
- Agregar productos
- Modificar cantidades
- Eliminar productos
- Cálculo automático del total
- Persistencia en localStorage

### Navegación
- Scroll suave entre secciones
- Indicador de sección activa
- Icono del carrito con contador

### Notificaciones
- Toast notifications al agregar productos
- Animaciones de entrada/salida

## 🌐 Despliegue en GitHub Pages

El proyecto está configurado para desplegarse en GitHub Pages:

1. El archivo `vite.config.js` incluye:
```javascript
base: '/wonderwoll-gallery/'
```

2. Desplegar:
```bash
npm run build
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/wonderwoll-gallery.git
git push -u origin main
```

3. En GitHub, ir a Settings > Pages y seleccionar la rama `main` y la carpeta `/root`

## 👨‍💻 Autor

Proyecto desarrollado para la **Actividad Formativa N°2 — Opción 6 (Tema Libre)**

## 📝 Licencia

Proyecto educativo - Todos los derechos reservados © 2024 Wonderwoll Gallery