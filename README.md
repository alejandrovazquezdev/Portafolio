# Portafolio - Alejandro Isaac Vazquez Lopez

Portafolio personal profesional construido con React + Vite.

## 🚀 Tecnologías

- **React 18** - Biblioteca de JavaScript para interfaces de usuario
- **Vite** - Build tool ultra rápido
- **CSS3** - Estilos modernos y responsivos

## ✨ Características

- ✅ Diseño responsive y profesional
- ✅ Datos dinámicos desde archivo de configuración
- ✅ Navegación suave entre secciones
- ✅ Proyectos destacados de GitHub
- ✅ Sistema de filtrado de proyectos por lenguaje
- ✅ Información de contacto integrada
- ✅ Optimizado para SEO

## 📂 Estructura del Proyecto

```
portafolio/
├── src/
│   ├── components/        # Componentes React
│   │   ├── Header.jsx     # Navegación principal
│   │   ├── Hero.jsx       # Sección hero con presentación
│   │   ├── Skills.jsx     # Habilidades técnicas
│   │   ├── Projects.jsx   # Proyectos destacados
│   │   ├── Contact.jsx    # Información de contacto
│   │   └── Footer.jsx     # Pie de página
│   ├── data/
│   │   └── portfolio.js   # Datos del portafolio (configurable)
│   ├── App.jsx            # Componente principal
│   ├── App.css            # Estilos principales
│   ├── index.css          # Estilos globales
│   └── main.jsx           # Punto de entrada
├── public/                # Archivos estáticos
├── package.json
└── README.md
```

## 🛠️ Instalación y Uso

### Requisitos previos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/alejandrovazquezdev/Portafolio.git
cd Portafolio
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

4. Abrir en el navegador: `http://localhost:5173`

### Comandos disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Genera la build de producción
npm run preview  # Previsualiza la build de producción
```

## 🎨 Personalización

Para personalizar el portafolio con tu información:

1. Edita el archivo `src/data/portfolio.js`
2. Actualiza:
   - `personalInfo` - Información personal y enlaces
   - `skills` - Habilidades técnicas y herramientas
   - `featuredProjects` - Proyectos destacados
   - `education` - Formación académica
   - `experience` - Experiencia laboral

## 🌐 Despliegue

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Arrastra la carpeta 'dist' a Netlify
```

### GitHub Pages
1. Instala `gh-pages`:
```bash
npm install --save-dev gh-pages
```

2. Agrega a `package.json`:
```json
{
  "homepage": "https://alejandrovazquezdev.github.io/Portafolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Despliega:
```bash
npm run deploy
```

## 📧 Contacto

- **Email**: alejandroisaacvazquezlopez@gmail.com
- **LinkedIn**: [www.linkedin.com/in/alejandro-vazquez-dev](https://www.linkedin.com/in/alejandro-vazquez-dev)
- **GitHub**: [@alejandrovazquezdev](https://github.com/alejandrovazquezdev)

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

---

**Nota para Gemini 3 Pro**: 
El diseño actual es funcional y profesional pero básico. Se recomienda mejorar:
- Paleta de colores más impactante
- Animaciones y transiciones avanzadas
- Efectos visuales modernos (glassmorphism, gradientes)
- Micro-interacciones
- Modo oscuro/claro
- Optimización de rendimiento adicional
