# 🌐 JX-Inixidables

Sitio web oficial de **JX-Inixidables**, desarrollado para presentar la marca, sus servicios y facilitar el contacto con clientes y visitantes.

El proyecto está orientado a ofrecer una experiencia web moderna, clara, responsive y preparada para evolucionar según las necesidades del negocio.

---

## 📋 Descripción

**JX-Inixidables** es un proyecto web enfocado en la presencia digital de la empresa.

La página permite centralizar la información de la marca y ofrecer a los visitantes una navegación sencilla desde computadores, tablets y dispositivos móviles.

### Objetivos principales

* 🌐 Crear presencia digital para JX-Inixidables.
* 🏢 Presentar información de la empresa.
* 🛠️ Mostrar los servicios ofrecidos.
* 📞 Facilitar el contacto con clientes.
* 📱 Garantizar diseño responsive.
* ⚡ Ofrecer una experiencia de navegación rápida y sencilla.
* 🔧 Mantener una estructura preparada para futuras funcionalidades.

---

## 🛠️ Tecnologías

Las tecnologías utilizadas en el proyecto dependerán de la implementación actual.

Ejemplo de stack:

| Tecnología | Uso                                  |
| ---------- | ------------------------------------ |
| HTML5      | Estructura del sitio                 |
| CSS3       | Estilos y diseño                     |
| JavaScript | Interactividad                       |
| Git        | Control de versiones                 |
| GitHub     | Repositorio                          |
| Node.js    | Herramientas y entorno de desarrollo |

> Actualizar esta sección cuando se defina el stack definitivo del proyecto.

---

## 📁 Estructura del proyecto

La estructura propuesta es:

```text
jx-inixidables/
│
├── public/
│   ├── images/
│   ├── icons/
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── main.*
│
├── .gitignore
├── .env.example
├── package.json
├── package-lock.json
└── README.md
```

La estructura definitiva puede cambiar dependiendo del framework utilizado.

---

## 🎨 Diseño

El sitio debe mantener una identidad visual consistente con la marca **JX-Inixidables**.

### Principios de diseño

* Diseño limpio y profesional.
* Navegación intuitiva.
* Diseño responsive.
* Buena jerarquía visual.
* Tipografía legible.
* Imágenes optimizadas.
* Accesibilidad básica.
* Compatibilidad con dispositivos móviles.

---

## 📱 Responsive Design

La página debe adaptarse correctamente a diferentes tamaños de pantalla:

```text
Desktop
   │
   ├── Laptop
   │
   └── Monitor

Tablet
   │
   └── Orientación vertical/horizontal

Mobile
   │
   ├── Android
   └── iOS
```

Los componentes deben utilizar diseños flexibles para evitar desplazamientos horizontales y problemas de visualización.

---

## 🧩 Secciones del sitio

La página puede organizarse inicialmente en las siguientes secciones:

### 🏠 Inicio

Presentación principal de JX-Inixidables.

Debe incluir:

* Identidad de la marca.
* Mensaje principal.
* Llamado a la acción.
* Imagen o elemento visual representativo.

### ℹ️ Nosotros

Información relacionada con la empresa, su propósito y propuesta de valor.

### 🛠️ Servicios

Presentación de los principales servicios ofrecidos.

Cada servicio puede incluir:

```text
Servicio
├── Nombre
├── Descripción
├── Imagen/Icono
└── Llamado a la acción
```

### 🖼️ Galería / Proyectos

Espacio destinado a mostrar trabajos, productos, proyectos o contenido visual de la empresa.

### 📞 Contacto

Sección destinada a facilitar la comunicación con clientes.

Puede incluir:

* Teléfono.
* WhatsApp.
* Correo electrónico.
* Redes sociales.
* Formulario de contacto.
* Ubicación, si aplica.

---

## 🚀 Instalación

Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Entrar al proyecto:

```bash
cd jx-inixidables
```

Instalar las dependencias:

```bash
npm install
```

---

## ⚙️ Variables de entorno

Si el proyecto utiliza variables de entorno, crear:

```text
.env
```

Tomando como referencia:

```text
.env.example
```

Ejemplo:

```env
VITE_API_URL=
VITE_WHATSAPP_NUMBER=
```

Las variables reales no deben almacenarse directamente en el repositorio.

---

## ▶️ Ejecución

Modo desarrollo:

```bash
npm run dev
```

Construcción para producción:

```bash
npm run build
```

Vista previa de la construcción:

```bash
npm run preview
```

Los comandos definitivos dependen del framework utilizado.

---

## 🧪 Pruebas

Las pruebas se incorporarán progresivamente para validar:

* Componentes.
* Navegación.
* Formularios.
* Responsive design.
* Integraciones.
* Funcionalidades principales.

Ejemplo:

```bash
npm test
```

---

## 🔍 SEO

El proyecto debe considerar buenas prácticas de posicionamiento:

* Títulos descriptivos.
* Meta descriptions.
* URLs amigables.
* Etiquetas semánticas HTML.
* Texto alternativo para imágenes.
* Open Graph.
* Favicon.
* Sitemap.
* `robots.txt`.

---

## ⚡ Optimización

Se deben aplicar buenas prácticas para mejorar el rendimiento:

* Optimización de imágenes.
* Compresión de recursos.
* Lazy loading cuando corresponda.
* Minimización de JavaScript y CSS en producción.
* Evitar dependencias innecesarias.
* Optimización de fuentes.

---

## 🔐 Seguridad

El proyecto debe evitar almacenar información sensible directamente en el código fuente.

Se recomienda:

* Utilizar variables de entorno.
* No subir archivos `.env`.
* Validar formularios.
* Sanitizar datos provenientes de usuarios.
* Mantener dependencias actualizadas.
* Utilizar HTTPS en producción.

---

## 🌿 Estrategia de ramas

Se recomienda trabajar utilizando ramas:

```text
main
 │
 └── develop
       │
       ├── feature/home
       ├── feature/services
       ├── feature/contact
       ├── feature/gallery
       └── feature/seo
```

Las funcionalidades nuevas deben desarrollarse en ramas independientes.

---

## 📝 Convenciones de commits

Se recomienda utilizar Conventional Commits:

```text
feat: agregar sección de servicios
feat: agregar formulario de contacto
feat: agregar galería
fix: corregir diseño responsive
fix: corregir navegación móvil
style: actualizar estilos de inicio
refactor: reorganizar componentes
perf: optimizar imágenes
docs: actualizar README
```

---

## 📌 Estado del proyecto

🚧 **En desarrollo**

### Funcionalidades

* [ ] Estructura inicial.
* [ ] Diseño de página principal.
* [ ] Sección Nosotros.
* [ ] Sección Servicios.
* [ ] Galería / Proyectos.
* [ ] Sección Contacto.
* [ ] Integración con WhatsApp.
* [ ] Diseño responsive.
* [ ] SEO.
* [ ] Optimización de imágenes.
* [ ] Pruebas.
* [ ] Despliegue a producción.

---

## 🚀 Próximas mejoras

Algunas funcionalidades que pueden incorporarse posteriormente:

* Panel administrativo.
* Gestión de contenido.
* Blog.
* Integración con redes sociales.
* Analytics.
* Formulario conectado a backend.
* Sistema de gestión de clientes.
* Integración con WhatsApp Business.
* Optimización avanzada de SEO.
* PWA.

---

## 👨‍💻 Autor

**Diego Ardila**

Proyecto web desarrollado para **JX-Inixidables**.

---

## 📄 Licencia

Este proyecto se encuentra actualmente en desarrollo.

La licencia y condiciones de uso podrán definirse posteriormente.
