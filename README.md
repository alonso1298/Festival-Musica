# Festival de Música

Este proyecto es un sitio web para un festival de música, diseñado con un enfoque en rendimiento y experiencia de usuario. Utiliza una combinación de Node.js, npm, Gulp, SASS, y varias técnicas modernas para asegurar un diseño responsivo y optimizado.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **npm**: Administrador de paquetes para JavaScript.
- **Gulp**: Herramienta de automatización de tareas.
- **SASS**: Preprocesador de CSS que permite el uso de variables, anidamiento y mixins.
- **Normalize.css**: Asegura una apariencia consistente entre navegadores.
- **JavaScript**: Para la funcionalidad del sitio, incluyendo mixins y modales.
- **Diseño Responsivo**: Diseño adaptado a múltiples dispositivos y tamaños de pantalla.
- **Optimización de Rendimiento**:
  - **Lazy Loading**: Carga diferida de imágenes y recursos.
  - **Imágenes en formato WebP y AVIF**: Imágenes optimizadas para reducir el tamaño de archivo y mejorar la velocidad de carga.
  - **Minificación**: Reducción del tamaño de archivos CSS y JavaScript.

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/alonso1298/Festival-Musica.git
    cd Festival-Musica
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

## Uso

### Desarrollo

Para iniciar el entorno de desarrollo y ver los cambios en tiempo real:
```bash
gulp dev
```
# Estructura del proyecto 

- **src/**: Carpeta principal del código fuente.
    - **scss/**: Archivos SASS.
    - **js/**: Archivos JavaScript.
    - **images/**: Imágenes y recursos multimedia.
- **dist/**: Carpeta donde se generarán los archivos optimizados y listos para producción.

## Características
### SASS y Normalize.css
El proyecto utiliza SASS para facilitar el manejo de estilos y Normalize.css para asegurar la consistencia entre navegadores. Los mixins SASS permiten reutilizar código de manera eficiente.

### JavaScript y Modales
La funcionalidad del sitio se implementa con JavaScript, incluyendo la gestión de modales para una mejor experiencia de usuario.

### Diseño Responsivo
El diseño del sitio es completamente responsivo, asegurando que se vea bien en cualquier dispositivo, desde móviles hasta pantallas de escritorio.

### Optimización de Rendimiento 
El proyecto incluye varias técnicas para mejorar el rendimiento del sitio:

- **Lazy Loading**:  Implementado para imágenes y otros recursos, mejorando el tiempo de carga inicial.
- **Imágenes WebP y AVIF**: Formatos de imagen modernos y eficientes.
**Minificación de CSS y JS**: Los archivos se minifican para reducir su tamaño y mejorar los tiempos de carga.

 ## Contribución 
 Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request.

 ## Licencia
 
Este README proporciona una visión general del proyecto, las tecnologías utilizadas, instrucciones de instalación y uso, y detalles sobre las características y optimizaciones implementadas.




