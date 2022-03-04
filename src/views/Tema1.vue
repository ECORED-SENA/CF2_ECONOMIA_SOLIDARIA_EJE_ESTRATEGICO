<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-primario
      .titulo-principal__numero.text-white
        span 1
      h1 Modelo de negocio para organizaciones de economía solidaria

    p.mb-5(data-aos="fade") <b style="font-size: 18px;">Los modelos de negocio</b> se diseñan y aplican en entornos específicos. Un conocimiento profundo del entorno de la empresa ayudará a concebir modelos de negocio más fuertes y competitivos (Osterwalder & Pigneur, 2010) de tal manera que una de las principales tareas por realizar es la observación, interpretación y análisis del comportamiento del sector y actividades económicas en donde se insertará la futura empresa; es decir, esos entornos específicos que menciona el autor. Veamos lo que representa este modelo:

    .row.mb-5
      h4.text-center.mb-4 Modelo de negocio para organizaciones de economía solidaria
      SlyderA.tema-1
        .row.justify-content-center
          .col-md-10.tarjeta.bg-1.pt-5.h-425
            .row.justify-content-center.align-items-end
              .col-md-6.mb-4.mb-md-0
                img(src='@/assets/curso/tema1-slide1.png', alt='Imagen decorativa')
              .col-md-4
                p El entorno en donde se desarrollará la empresa no solo implica el entorno económico sino también social, político, cultural, medioambiental y tecnológico, que el emprendedor debe vigilar; esta vigilancia mezcla el comportamiento de la oferta y demanda de los productos y servicios, la infraestructura tecnológica utilizadas por las empresas, los cambios o transformaciones sociales como gustos, deseos y necesidades que el ser humano cada vez las concibe como ilimitadas porque “queremos más y más”. 

        .row.justify-content-center
          .col-md-10.tarjeta.bg-1.pt-5.h-425
            .row.justify-content-center.align-items-center
              .col-md-4.mb-4.mb-md-0
                p En el entorno cultural esta vigilancia se enfoca en saber cuál es la actuación o conducta de las personas frente a determinadas propuestas de valor y en el entorno medioambiental, implica el uso de tecnologías amigables y de conservación del ecosistema en los procesos productivos que se podrían incorporar en la futura empresa.
              .col-md-6
                img(src='@/assets/curso/tema1-slide2.png', alt='Imagen decorativa')
              
        .row.justify-content-center
          .col-md-10.tarjeta.bg-1.pt-5.h-425
            .row.justify-content-center.align-items-end
              .col-md-6.mb-4.mb-md-0
                img(src='@/assets/curso/tema1-slide3.png', alt='Imagen decorativa')
              .col-md-4
                p De acuerdo con Osterwalder & Pigneur (2010), la manera más acertada de describir un modelo de negocio es hacer la distribución desde los nueve módulos básicos que reflejen el método al que atiende una empresa para obtener sus ingresos. 


    p.mb-4(data-aos="fade") Los nueve módulos o bloques nombrados en la introducción de este componente, atienden a cuatro áreas principales de un negocio, clientes, oferta, infraestructura y viabilidad económica. A continuación, se presenta la descripción de estos módulos: 




    p.mb-4(data-aos="fade") En este sentido, se hace claridad del objetivo y la finalidad de cada bloque que compone el Lienzo CANVAS. A continuación, se presenta la estructura completa del Lienzo: 

    .row.justify-content-center
      .col-md-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 <b>Tabla 1.</b> Lienzo CANVAS
        figure.mb-3
          img(src='@/assets/curso/tema1-tabla.svg', alt='Lienzo CANVAS')  
        p.mb-0 Nota. Adaptado de Osterwalder & Pigneur (2010)



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
