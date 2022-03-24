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
      .col-md-12
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 <b>Figura 1.</b> Bloques del lienzo Canvas
      .col-md-10.py-4.px-4.iconos-intro
        .row.justify-content-between
          .col-md-2.col-6.mb-4
            h4.text-center.mb-3 Segmentos de mercado
            img(src='@/assets/curso/intro-ico1.svg', alt='Segmentos de mercado', style="width: 130px; margin: 0 auto")
          .col-md-2.col-6.mb-4
            h4.text-center.mb-3 Propuesta de valor
            img(src='@/assets/curso/intro-ico2.svg', alt='Propuesta de valor', style="width: 130px; margin: 0 auto")  
          .col-md-2.col-6.mb-4
            h4.text-center.mb-3 Canales
            img(src='@/assets/curso/intro-ico3.svg', alt='Canales', style="width: 130px; margin: 0 auto")
          .col-md-2.col-6.mb-4
            h4.text-center.mb-3 Relaciones con los clientes
            img(src='@/assets/curso/intro-ico4.svg', alt='Relaciones con los clientes', style="width: 130px; margin: 0 auto")
          .col-md-2.col-6.mb-4
            h4.text-center.mb-3 Fuentes de ingresos
            img(src='@/assets/curso/intro-ico5.svg', alt='Fuentes de ingresos', style="width: 130px; margin: 0 auto")      
        .row.justify-content-around
          .col-md-1
          .col-md-2.col-6.mb-4
            h4.text-center.mb-3 Recursos claves
            img(src='@/assets/curso/intro-ico6.svg', alt='Recursos claves', style="width: 130px; margin: 0 auto")
          .col-md-2.col-6.mb-4
            h4.text-center.mb-3 Actividades claves
            img(src='@/assets/curso/intro-ico7.svg', alt='Actividades claves', style="width: 130px; margin: 0 auto")  
          .col-md-2.col-6.mb-4
            h4.text-center.mb-3 Asociaciones clave
            img(src='@/assets/curso/intro-ico8.svg', alt='Asociaciones clave', style="width: 130px; margin: 0 auto")
          .col-md-2.col-6.mb-4
            h4.text-center.mb-3 Estructura de costos
            img(src='@/assets/curso/intro-ico9.svg', alt='Estructura de costos', style="width: 130px; margin: 0 auto")  
          .col-md-1
          
    p.mb-4(data-aos="fade") Sabiendo ya esto, en el siguiente video se explica brevemente la importancia de estructurar un modelo de negocio:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/YpYcWbCGtBI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.justify-content-center(data-aos="fade-down")
      .col-md-10.tarjeta.color-secundario
        .row.justify-content-center.align-items-center.py-3
          .col-2
            img(src='@/assets/curso/intro-icono.svg', alt='Estructura de costos', style="width: 70px; margin: 0 auto")  
          .col-9
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
