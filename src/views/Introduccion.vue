<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-primario
      .titulo-principal__numero.text-white
        span
          i.fas.fa-info
      h1 Introducción

    p(data-aos="fade") El auge de las organizaciones de economía solidaria implica no solo que sus asociados sientan como propios los valores y principios de la organización, sino también que se apropien de herramientas empresariales que permitan a estas organizaciones su sostenibilidad financiera.

    p.mb-4(data-aos="fade") El lienzo CANVAS o modelo de negocio, tal como lo describe Osterwalder & Pigneur (2010), se distribuye en nueve bloques, cada uno de estos tiene un enfoque claro en las áreas funcionales para la gestión del negocio, facilitando la comprensión y aplicación de lo que se pretende lograr con el emprendimiento en el mediano plazo. Veámos
  
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10.bg-gris.py-4.tarjeta.px-4
        .row
          .col-md-2.px-md-3
            h4.text-center.mb-3.mt-4 Segmentos de mercado
            img(src='@/assets/curso/intro-ico1.svg', alt='Segmentos de mercado')
          .col-md-2.px-md-3
            img.mb-3(src='@/assets/curso/intro-ico2.svg', alt='Propuesta de valor')  
            h4.text-center.mb-5 Propuesta de valor
            img.mb-3(src='@/assets/curso/intro-ico3.svg', alt='Actividades claves')  
            h4.text-center.mb-5 Actividades claves
          .col-md-2.px-md-3
            h4.text-center.mb-3.mt-4 Canales
            img.mb-5(src='@/assets/curso/intro-ico4.svg', alt='Canales')
            h4.text-center.mb-3 Asociaciones clave
            img(src='@/assets/curso/intro-ico5.svg', alt='Asociaciones clave')
          .col-md-2.px-md-3
            img.mb-3(src='@/assets/curso/intro-ico6.svg', alt='Relaciones con los clientes')  
            h4.text-center.mb-5 Relaciones con los clientes
            img.mb-3(src='@/assets/curso/intro-ico7.svg', alt='Estructura de costos')  
            h4.text-center.mb-5 Estructura de costos
          .col-md-2.px-md-3
            h4.text-center.mb-3.mt-4 Fuentes de ingresos
            img.mb-5(src='@/assets/curso/intro-ico8.svg', alt='Fuentes de ingresos')
          .col-md-2.px-md-3
            img.mb-3(src='@/assets/curso/intro-ico9.svg', alt='Recursos claves')  
            h4.text-center Recursos claves

    p.mb-4(data-aos="fade") Sabiendo ya esto, en el siguiente video se explica brevemente la importancia de estructurar un modelo de negocio:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.justify-content-center(data-aos="fade-down")
      .col-md-10.tarjeta.color-secundario
        .row.justify-content-center
          .col-md-10.py-3.text-center
            p.mb-0 El modelo de negocio, entonces, se constituye en una herramienta gerencial flexible, dinámica y en constante evolución, permitiendo que la empresa escale gradualmente su participación en el mercado. 
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
