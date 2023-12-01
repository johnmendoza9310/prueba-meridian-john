# JohnMendoza

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.5.

# Aspectos técnicos operacionales

Este proyecto utiliza boostrap para algunos de sus elementos HTML, este ya se encuentra importado en el archivo index.html, no es necesario utilizar instalción mediante npm

# Solución dudas planteadas en puntos 6 y 7

punto 6: no aplica
punto 7: \* Cambios en la maqueta: Un buen cambio o elemento para agregar seria un navbar, con el fin de tener una forma de navegar entre los futuros componentes, en los seleccionables debería mostrarse una opción por defecto o placeholder, tal cuál se muestra en la resolución más baja, se deben tener en cuenta más resoluciones teniendo en cuenta los label, el elemento select del año, visualmente debería tener el mismo tamaño d elos demás elementos pares.

# paso a paso para la ejecución del proyecto en ambiente local

Para correr este proyecto de manera local, es recomendable tener version de Angular 17 y versión de node 21.

# Recomendaciones para una siguiente versión

agregar un loader bloqueante en la pantalla o en el boton cotizar, mejorar el diseño d ela resolución más pequeña (320px hacia abajo)

# Mejoras

- Se anexó una resolución más (839px) en los media query en el componente quote.component.css, ya que en esta resolución, el label de modelo de auto se mostraba en 2 renglones, mostrando una desproporción en la ubicación.

- La aplicación se carga por medio de lazy loading y las subscripciones se cancelan al destruir el componente con el fin de tener un mejor performance de la aplicación

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
