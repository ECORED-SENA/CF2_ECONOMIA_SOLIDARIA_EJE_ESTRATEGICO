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

    .row.justify-content-center.mb-5
      .col-md-10(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido
          p.mb-0 <b>Tabla 1.</b> Lienzo CANVAS
        figure.mb-3
          img(src='@/assets/curso/tema1-tabla.svg', alt='Lienzo CANVAS')  
        p.mb-0 Nota. Adaptado de Osterwalder & Pigneur (2010)

    .row.tema1-rectangulo.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-md-9.py-2
        h4.text-white.px-md-3 Lienzo CANVAS de COOPMUJERES
        p.mb-0.text-white.px-md-3 Como material complementario encontrarán el lienzo CANVAS o modelo de negocio de la Cooperativa de Mujeres emprendedoras de Cúcuta, COOPMUJERES. Un emprendimiento social apoyado por la Cámara de Comercio de Cúcuta y enfocado a fortalecer las mujeres emprendedoras de la ciudad; este modelo les ayudará como referencia para que a partir del caso propuesto, analicen y construyan el modelo de negocio, teniendo en cuenta los elementos claves para cada módulo y las preguntas orientadoras. 
      .col-md-3.contenedor-imagenes
        img(src='@/assets/curso/tema1-icono.svg' alt='Imagen decorativa')

    Separador


    #t_1_1
    .titulo-segundo.color-primario
      h2 1.1. Formulación de modelo de negocio
    
    p.mb-4(data-aos="fade") Para una correcta formulación, escritura o elaboración del modelo de negocio, utilizando la técnica del lienzo CANVAS, exige al emprendedor que su redacción sea clara, concreta y contundente; es decir, que el texto sea tan explícito, que se eviten interpretaciones subjetivas de la persona que realiza la lectura. 

    .row.justify-content-center.mb-5
      .col-md-10(data-aos="fade-down")
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1-1-img.png')})`}")
          .bloque-texto-g__texto.p-4
            p.mb-0 El claro que el entendimiento del lienzo CANVAS permitirá no solo a los emprendedores sino a los potenciales inversionistas o financiadores del proyecto comprender cuál es la razón de ser de la futura empresa, su valor diferenciador, ¿a quién le va a vender?, ¿cómo va a vender?, ¿por cuáles medios hará la entrega de su producto?, ¿cuál es su costo? y ¿cuáles son sus fuentes de ingresos?, entre otros elementos claves. 

    p.mb-4(data-aos="fade") Para lograr el éxito en la formulación, es indispensable que cada bloque se escriba dando respuesta a las preguntas claves atendiendo a Osterwalder & Pigneur (2010), las cuales guían el paso a paso la construcción del modelo de negocio. Estas se relacionan a continuación, por cada uno de los bloques:

    AcordionA.tema1-1-acord(tipo="b" clase-tarjeta="acord")(data-aos="fade-down")
      .row.justify-content-center(titulo="Segmentación de Clientes")
        .col-md-8.mb-4.mb-md-0
          p En la segmentación de clientes, no necesariamente debe seleccionar un solo segmento; de tal forma, que se pueden identificar uno, dos o más segmentos de clientes, esto obedece a la propuesta de valor y los productos/servicios que se pretendan ofertar. 
          p Atendiendo a Osterwalder & Pigneur (2010) se puede hacer dos preguntas orientadoras para la descripción del segmento clientes:
          p.text-center.mb-0 ¿Para quién creamos valor?
          p.text-center.mb-0 ¿Cuáles son nuestros clientes más importantes?
        .col-md-3
          figure
            img(src='@/assets/curso/tema1-1-acord1.png', alt='Segmentación de Clientes')
      .row.justify-content-center(titulo="Propuesta de valor")
        .col-md-8.mb-4.mb-md-0
          p.mb-0 Los elementos recomendados para tener en cuenta en la estructuración de la propuesta de valor son: 
          .row.mb-4
            .col-md-6
              p.mb-0 - Novedad 
              p.mb-0 - Personalización   
              p.mb-0 - Marca/estatus
              p.mb-0 - Reducción de costos
              p.mb-0 - Accesibilidad  
            .col-md-6
              p.mb-0 - Mejora del rendimiento
              p.mb-0 - Diseño
              p.mb-0 - Precio
              p.mb-0 - Reducción de riesgos
              p.mb-0 - Comodidad / utilidad
          p.mb-0 Las siguientes preguntas orientadoras ayudarán a formular la propuesta de valor: 
          p.mb-0 ¿Qué valor proporcionamos a nuestros clientes?
          p.mb-0 ¿Qué problema de nuestros clientes ayudamos a solucionar?
          p.mb-0 ¿Qué necesidades de los clientes satisfacemos?
          p.mb-0 ¿Qué paquetes de productos o servicios ofrecemos a cada segmento de mercado?
        .col-md-3
          figure
            img(src='@/assets/curso/tema1-1-acord2.png', alt='Propuesta de valor')
      .row.justify-content-center(titulo="Canales")
        .col-md-7.mb-4.mb-md-0
          p Las preguntas orientadoras para la formulación del bloque: 
          p.mb-0 ¿Qué canales prefieren nuestros segmentos de mercado?
          p.mb-0 ¿Cómo establecemos actualmente el contacto con los clientes?
          p.mb-0 ¿Cuáles tienen mejores resultados? ¿Cuáles son más rentables?
          p.mb-0 ¿Cómo se integran en las actividades diarias de los clientes?
        .col-md-4
          figure
            img(src='@/assets/curso/tema1-1-acord3.png', alt='Canales')
      .row.justify-content-center(titulo="Relaciones con los clientes")
        .col-md-8.mb-4.mb-md-0
          p Hay preguntas orientadoras que ayudarán a marcar la guía para las estrategias que se definirán en el bloque, así: 
          p.mb-0 ¿Qué tipo de relación esperan los diferentes segmentos de mercado? 
          p.mb-0 ¿Cuál es su costo?
          p.mb-0 ¿Cómo se integran en nuestro modelo de negocio?
        .col-md-3
          figure
            img(src='@/assets/curso/tema1-1-acord4.png', alt='Relaciones con los clientes')
      .row.justify-content-center(titulo="Fuente de ingresos")
        .col-md-7.mb-4.mb-md-0
          p Las siguientes preguntas orientadoras, ayudarán en la descripción de este componente:
          p.mb-0 ¿Por qué valor están dispuestos a pagar nuestros clientes?
          p.mb-0 ¿Cómo les gustaría pagar?
        .col-md-4
          figure
            img(src='@/assets/curso/tema1-1-acord5.png', alt='Fuente de ingresos')      
      .row.justify-content-center(titulo="Recursos claves")
        .col-md-7.mb-4.mb-md-0
          p Estas preguntas orientadoras, permitirán al emprendedor reconocer cuáles son sus recursos claves, teniendo en cuenta la propuesta de valor definida, el segmento y relación con sus clientes y sus canales para la comercialización del producto o servicio.
          p.mb-0 ¿Qué recursos clave requiere la propuesta de valor, los canales de distribución, relaciones con clientes y fuentes de ingresos?
        .col-md-4
          figure
            img(src='@/assets/curso/tema1-1-acord6.png', alt='Recursos claves') 
      .row.justify-content-center(titulo="Actividades claves")
        .col-md-7.mb-4.mb-md-0
          p Las preguntas orientadoras, marcarán la pauta para la descripción del bloque:
          p ¿Qué actividades clave requieren nuestras propuestas de valor, canales de distribución, relaciones con clientes y fuentes de ingresos?
          p.mb-0 Para la identificación de las actividades claves es fundamental reconocer el proceso productivo requerido para el o los productos que se ofertarán o en caso, de ofrecer servicios, entonces las actividades necesarias para la prestación del servicio; otra orientación importante para las actividades claves es no perder de vista los recursos claves definidos en el componente anterior. 
        .col-md-4
          figure
            img(src='@/assets/curso/tema1-1-acord7.png', alt='Actividades claves')  
      .row.justify-content-center(titulo="Asociaciones clavess")
        .col-md-7.mb-4.mb-md-0
          p Las siguientes preguntas orientadoras, ayudarán a dar respuesta a este componente:
          p.mb-0 ¿Quiénes son nuestros socios clave?
          p.mb-0 ¿Quiénes son nuestros proveedores clave?
          p.mb-0 ¿Qué recursos clave adquirimos a nuestros socios?
          p.mb-0 ¿Qué actividades clave realizan los socios?
        .col-md-4
          figure
            img(src='@/assets/curso/tema1-1-acord8.png', alt='Asociaciones claves') 
      .row.justify-content-center(titulo="Estructuras de costos")
        .col-md-7.mb-4.mb-md-0
          p Las siguientes preguntas orientadoras ayudarán a dar respuesta a este componente:
          p.mb-0 ¿Cuáles son los costos más importantes inherentes a nuestro modelo de negocio? 
          p.mb-0 ¿Cuáles son los recursos clave más caros? 
          p.mb-0 ¿Cuáles son las actividades clave más caras?
        .col-md-4
          figure
            img(src='@/assets/curso/tema1-1-acord9.png', alt='Estructuras de costos') 

    Separador


    #t_1_2
    .titulo-segundo.color-primario
      h2 1.2. Formas jurídicas

    p(data-aos="fade") La forma jurídica es reconocida como el documento de identificación legal que tiene una empresa ante el Estado, los clientes, los proveedores, los competidores, las entidades bancarias, las demás empresas y la sociedad en general; esta forma jurídica está regida por la ley y dictamina sus responsabilidades y obligaciones comerciales, tributarias y laborales para ejercer su actividad económica. 

    p.mb-5(data-aos="fade") Las organizaciones de economía solidaria son consideradas empresas sin ánimo de lucro, tal y como lo define la Unidad Administrativa Especial de Organizaciones Solidarias (s.f.), presentada en la siguiente figura.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10
        figure
          img(src='@/assets/curso/tema1-2-fig.svg', alt='Formas jurídicas')

    p.mb-4(data-aos="fade") Ahora bien, es bueno conocer su clasificación: 




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
