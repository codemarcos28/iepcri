# iepcri
Sitio web funcional para Iglesia Evangélica
-> Sitio SPA
Creacion de paginas
ng g c paginas/nuestra-iglesia
ng g c paginas/Multimedia
ng g c paginas/Congregaciones
ng g c paginas/Contacto
ng g c paginas/Recursos
ng g c componentes/menu
ng g c componentes/footer
ng g c componentes/home
ng g c componentes/about
ng g c componentes/contact
ng g c componentes/services
ng g c componentes/gallery

Routing 
ng g m paginas/nuestra-iglesia --routing
ng g m paginas/multimedia --routing
ng g m paginas/congregaciones --routing
ng g m paginas/contacto --routing
ng g m paginas/recursos --routing

Servicios
ng g s servicios/ServicioChurch
ng g s servicios/ServicioMultimedia
ng g s servicios/ServicioCongregaciones
ng g s servicios/ServicioContacto
ng g s servicios/ServicioRecursos