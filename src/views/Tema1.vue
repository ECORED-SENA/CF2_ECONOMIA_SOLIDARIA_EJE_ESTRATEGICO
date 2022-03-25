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
      SlyderA.tema-1
        .row.justify-content-center
          .col-md-10.tarjeta.bg-1.pt-5.h-400
            .row.justify-content-center.align-items-end
              .col-md-4.col-6.mb-4.mb-md-0
                img(src='@/assets/curso/tema1-slide1.png', alt='Imagen decorativa')
              .col-md-6.p-5.p-md-0
                h4 Modelo de negocio para organizaciones de economía solidaria
                p El entorno en donde se desarrollará la empresa no solo implica el entorno económico sino también social, político, cultural, medioambiental y tecnológico, que el emprendedor debe vigilar; esta vigilancia mezcla el comportamiento de la oferta y demanda de los productos y servicios, la infraestructura tecnológica utilizadas por las empresas, los cambios o transformaciones sociales como gustos, deseos y necesidades que el ser humano cada vez las concibe como ilimitadas porque “queremos más y más”. 

        .row.justify-content-center
          .col-md-10.tarjeta.bg-1.pt-5.h-400
            .row.justify-content-center.align-items-center
              .col-md-5.mb-4.mb-md-0.p-5.p-md-0
                p En el entorno cultural esta vigilancia se enfoca en saber cuál es la actuación o conducta de las personas frente a determinadas propuestas de valor y en el entorno medioambiental, implica el uso de tecnologías amigables y de conservación del ecosistema en los procesos productivos que se podrían incorporar en la futura empresa.
              .col-md-5.col-10.mb-4.mb-md-0
                img(src='@/assets/curso/tema1-slide2.png', alt='Imagen decorativa')
              
        .row.justify-content-center
          .col-md-10.tarjeta.bg-1.pt-5.h-400
            .row.justify-content-center.align-items-end
              .col-md-5.col-11.mb-4.mb-md-0
                img(src='@/assets/curso/tema1-slide3.png', alt='Imagen decorativa')
              .col-md-5.p-5.p-md-0
                p De acuerdo con Osterwalder & Pigneur (2010), la manera más acertada de describir un modelo de negocio es hacer la distribución desde los nueve módulos básicos que reflejen el método al que atiende una empresa para obtener sus ingresos. 


    p.mb-4(data-aos="fade") 

    .row.justify-content-center.mb-5
      .col-md-10(data-aos="fade-down")
        .row.align-items-center.tarjeta.bg-naranja.p-3.px-md-4
            .col.mb-3.mb-sm-0
              p.text-white.mb-0 Los nueve módulos o bloques nombrados en la introducción de este componente, atienden a cuatro áreas principales de un negocio, clientes, oferta, infraestructura y viabilidad económica. A continuación, se presenta la descripción de estos módulos:  
            .col-sm-auto
              a.boton.color-primario(:href="obtenerLink('/downloads/Presentacion_interactiva.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download


    p.mb-4(data-aos="fade") En este sentido, se hace claridad del objetivo y la finalidad de cada bloque que compone el Lienzo CANVAS. A continuación, se presenta la estructura completa del Lienzo: 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido.mb-2
        p.mb-0 <b>Tabla 1.</b> Lienzo CANVAS
      figure.mb-2
        img(src='@/assets/curso/tema1-tabla.svg', alt='Lienzo CANVAS')  
      p.mb-0 Nota. Adaptado de Osterwalder & Pigneur (2010)

    .row.tema1-rectangulo.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-md-9.py-5.py-md-2
        .row.justify-content-end
         .col-md-11
            h4.text-white.px-md-3 Lienzo CANVAS de COOPMUJERES
            p.mb-0.text-white.px-md-3 Como material complementario encontrarán el lienzo CANVAS o modelo de negocio de la Cooperativa de Mujeres emprendedoras de Cúcuta, COOPMUJERES. Un emprendimiento social apoyado por la Cámara de Comercio de Cúcuta y enfocado a fortalecer las mujeres emprendedoras de la ciudad; este modelo les ayudará como referencia para que a partir del caso propuesto, analicen y construyan el modelo de negocio, teniendo en cuenta los elementos claves para cada módulo y las preguntas orientadoras. 
      .col-md-3.contenedor-imagenes.col-5.mb-3.mb-md-0
        img(src='@/assets/curso/tema1-icono.svg' alt='Imagen decorativa' style="width: 230px")

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
        .col-md-3.col-6
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
        .col-md-3.col-6
          figure
            img(src='@/assets/curso/tema1-1-acord2.png', alt='Propuesta de valor')
      .row.justify-content-center(titulo="Canales")
        .col-md-7.mb-4.mb-md-0
          p Las preguntas orientadoras para la formulación del bloque: 
          p.mb-0 ¿Qué canales prefieren nuestros segmentos de mercado?
          p.mb-0 ¿Cómo establecemos actualmente el contacto con los clientes?
          p.mb-0 ¿Cuáles tienen mejores resultados? ¿Cuáles son más rentables?
          p.mb-0 ¿Cómo se integran en las actividades diarias de los clientes?
        .col-md-4.col-6
          figure
            img(src='@/assets/curso/tema1-1-acord3.png', alt='Canales')
      .row.justify-content-center(titulo="Relaciones con los clientes")
        .col-md-8.mb-4.mb-md-0
          p Hay preguntas orientadoras que ayudarán a marcar la guía para las estrategias que se definirán en el bloque, así: 
          p.mb-0 ¿Qué tipo de relación esperan los diferentes segmentos de mercado? 
          p.mb-0 ¿Cuál es su costo?
          p.mb-0 ¿Cómo se integran en nuestro modelo de negocio?
        .col-md-3.col-6
          figure
            img(src='@/assets/curso/tema1-1-acord4.png', alt='Relaciones con los clientes')
      .row.justify-content-center(titulo="Fuente de ingresos")
        .col-md-7.mb-4.mb-md-0
          p Las siguientes preguntas orientadoras, ayudarán en la descripción de este componente:
          p.mb-0 ¿Por qué valor están dispuestos a pagar nuestros clientes?
          p.mb-0 ¿Cómo les gustaría pagar?
        .col-md-4.col-6
          figure
            img(src='@/assets/curso/tema1-1-acord5.png', alt='Fuente de ingresos')      
      .row.justify-content-center(titulo="Recursos claves")
        .col-md-7.mb-4.mb-md-0
          p Estas preguntas orientadoras, permitirán al emprendedor reconocer cuáles son sus recursos claves, teniendo en cuenta la propuesta de valor definida, el segmento y relación con sus clientes y sus canales para la comercialización del producto o servicio.
          p.mb-0 ¿Qué recursos clave requiere la propuesta de valor, los canales de distribución, relaciones con clientes y fuentes de ingresos?
        .col-md-4.col-6
          figure
            img(src='@/assets/curso/tema1-1-acord6.png', alt='Recursos claves') 
      .row.justify-content-center(titulo="Actividades claves")
        .col-md-7.mb-4.mb-md-0
          p Las preguntas orientadoras, marcarán la pauta para la descripción del bloque:
          p ¿Qué actividades clave requieren nuestras propuestas de valor, canales de distribución, relaciones con clientes y fuentes de ingresos?
          p.mb-0 Para la identificación de las actividades claves es fundamental reconocer el proceso productivo requerido para el o los productos que se ofertarán o en caso, de ofrecer servicios, entonces las actividades necesarias para la prestación del servicio; otra orientación importante para las actividades claves es no perder de vista los recursos claves definidos en el componente anterior. 
        .col-md-4.col-6
          figure
            img(src='@/assets/curso/tema1-1-acord7.png', alt='Actividades claves')  
      .row.justify-content-center(titulo="Asociaciones claves")
        .col-md-7.mb-4.mb-md-0
          p Las siguientes preguntas orientadoras, ayudarán a dar respuesta a este componente:
          p.mb-0 ¿Quiénes son nuestros socios clave?
          p.mb-0 ¿Quiénes son nuestros proveedores clave?
          p.mb-0 ¿Qué recursos clave adquirimos a nuestros socios?
          p.mb-0 ¿Qué actividades clave realizan los socios?
        .col-md-4.col-6
          figure
            img(src='@/assets/curso/tema1-1-acord8.png', alt='Asociaciones claves') 
      .row.justify-content-center(titulo="Estructuras de costos")
        .col-md-7.mb-4.mb-md-0
          p Las siguientes preguntas orientadoras ayudarán a dar respuesta a este componente:
          p.mb-0 ¿Cuáles son los costos más importantes inherentes a nuestro modelo de negocio? 
          p.mb-0 ¿Cuáles son los recursos clave más caros? 
          p.mb-0 ¿Cuáles son las actividades clave más caras?
        .col-md-4.col-6
          figure
            img(src='@/assets/curso/tema1-1-acord9.png', alt='Estructuras de costos') 

    Separador


    #t_1_2
    .titulo-segundo.color-primario
      h2 1.2. Formas jurídicas

    p(data-aos="fade") La forma jurídica es reconocida como el documento de identificación legal que tiene una empresa ante el Estado, los clientes, los proveedores, los competidores, las entidades bancarias, las demás empresas y la sociedad en general; esta forma jurídica está regida por la ley y dictamina sus responsabilidades y obligaciones comerciales, tributarias y laborales para ejercer su actividad económica. 

    p.mb-5(data-aos="fade") Las organizaciones de economía solidaria son consideradas empresas sin ánimo de lucro, tal y como lo define la Unidad Administrativa Especial de Organizaciones Solidarias (s.f.), presentada en la siguiente figura.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-12
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 <b>Figura 2.</b> Definición de las organizaciones de economía solidaria
      .col-md-10
        figure
          img(src='@/assets/curso/tema1-2-fig.svg', alt='Formas jurídicas')

    p.mb-4(data-aos="fade") Ahora bien, es bueno conocer su clasificación: 

    TabsB.color-primario.mb-5
      .py-4.py-md-5(titulo="Cooperativas y su división" :icono="require('@/assets/curso/tema1-2-tab-ico1.svg')")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Cooperativas
            p Es una empresa asociativa, sin ánimo de lucro, en la cual los asociados, según el caso, son simultáneamente los aportantes y los gestores de la empresa, creada con el objeto de producir o distribuir conjunta y eficientemente bienes o servicios para satisfacer las necesidades de sus asociados y de la comunidad en general. 
          .col-md-3.col-5
            img(src='@/assets/curso/tema1-2-tab1.png', alt='Fondo de empleados')
      .py-4.py-md-5(titulo="Fondo de empleados" :icono="require('@/assets/curso/tema1-2-tab-ico2.svg')")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Fondo de empleados
            p Los fondos de empleados son organizaciones pertenecientes al sector de la economía solidaria, de derecho privado, sin ánimo de lucro, constituidas por trabajadores dependientes, trabajadores asociados o por servidores públicos que ofrecen servicios. 
          .col-md-3.col-5
            img(src='@/assets/curso/tema1-2-tab2.png', alt='Fondo de empleados')
      .py-4.py-md-5(titulo="Asociaciones mutuales" :icono="require('@/assets/curso/tema1-2-tab-ico3.svg')")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Asociaciones mutuales
            p Son organizaciones privadas sin ánimo de lucro que están constituidas por personas naturales para fomentar la ayuda recíproca entre sus miembros, satisfaciendo sus necesidades mediante la prestación de servicios que contribuyan al mejoramiento de su calidad de vida.
          .col-md-3.col-5
            img(src='@/assets/curso/tema1-2-tab3.png', alt='Asociaciones mutuales')
      .py-4.py-md-5(titulo="Entidades auxiliares de la economía solidaria" :icono="require('@/assets/curso/tema1-2-tab-ico4.svg')")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Entidades auxiliares de la economía solidaria
            p Son organizaciones que tienen como finalidad realizar actividades para fortalecer al sector solidario. Están constituidas bien sea por organizaciones de la economía solidaria o por personas naturales para realizar actividades orientadas al desarrollo del sector solidario.
          .col-md-4.col-5
            img(src='@/assets/curso/tema1-2-tab4.png', alt='Entidades auxiliares de la economía solidaria')      
    

    p.mb-5(data-aos="fade") Y por último, saber que las cooperativas se dividen en razón al desarrollo de sus actividades, tal como se evidencia en la siguiente figura:

    .titulo-sexto.color-acento-contenido.mb-4
      p.mb-0 <b>Figura 3.</b> División de las cooperativas
          
    .row.tema1-2-tarjetas-hover.justify-content-around.mb-4
      .col.mb-3
        .hovers
          .decoracion.mb-2
            img(src='@/assets/curso/tema1-2-tarjeta-ico1.svg', alt='Icono decorativo') 
          .linea-1
          .linea-2
          .texto
            p.mb-0 Atienden a una necesidad específica, correspondiente a una clase de actividad económica, social y cultural. 
      .col.mb-3
        .hovers
          .decoracion.mb-2
            img(src='@/assets/curso/tema1-2-tarjeta-ico2.svg', alt='Icono decorativo') 
          .linea-1
          .linea-2
          .texto
            p.mb-0 Aquellas que, en el desarrollo de su objeto social, realizan dos o más actividades complementarias entre sí, en la generación de un bien o servicio.
      .col.mb-3
        .hovers.hover-columna(@mouseover="mostrarIndicador = false")
          .indicador--click(v-if="mostrarIndicador")
          .decoracion.mb-2
            img(src='@/assets/curso/tema1-2-tarjeta-ico3.svg', alt='Icono decorativo') 
          .linea-1
          .linea-2
          .texto  
            p.mb-0 Atienden varias necesidades mediante la concurrencia de servicios en una sola entidad.
      .col.mb-3
        .hovers
          .decoracion.mb-2
            img(src='@/assets/curso/tema1-2-tarjeta-ico4.svg', alt='Icono decorativo') 
          .linea-1
          .linea-2
          .texto  
            p.mb-0 Se organizan para realizar actividades permitidas a las cooperativas y, que por carecer de capacidad económica, o educativa, o administrativa, no están en posibilidad de organizarse como cooperativas. 
      .col.mb-3
        .hovers
          .decoracion.mb-2
            img(src='@/assets/curso/tema1-2-tarjeta-ico5.svg', alt='Icono decorativo') 
          .linea-1
          .linea-2
          .texto  
            p.mb-0 Asocian personas naturales que simultáneamente son gestoras y aportantes directos de su capacidad de trabajo, con el fin de producir en común para satisfacer sus necesidades, el vínculo de asociación se determina por el saber hacer intelectual o material de sus asociados.     
    



    p.mb-5(data-aos="fade") Ahora bien, de acuerdo con toda esta clasificación, se hace necesario conocer su marco normativo más relevante para el impulso del emprendimiento y de las organizaciones de economía solidaria, lo cual se explica en la siguiente tabla: 

    .titulo-sexto.color-acento-contenido.mb-4
        p.mb-0 <b>Tabla 2.</b> Marco normativo de acuerdo a la forma jurídica
    .tabla-b.tema1-2-tabla1.color-acento-botones.mb-5(data-aos="fade-down")
      table
        thead.tabla-b__header
          tr
            th.col-1
              h4.mb-0.text-white Temáticas
            th 
              h4.mb-0.text-white Régimen normativo
        tbody
          tr.bg-gris3
            th.col-1
              h4.mb-0 Emprendimiento
            td Ley 2069 de 2021, por medio del cual se impulsa el emprendimiento en Colombia.
          tr.bg-blanco
            th 
              h4.mb-0 Economía solidaria
            td Decreto 1340 de 2020, por el cual se crea y regula la Comisión Intersectorial del Sector de la Economía Solidaria.
              br 
              br
              | Ley 454 de 1998, por la cual se determina el marco conceptual que regula la economía solidaria, se transforma el Departamento Administrativo Nacional de Cooperativas en el Departamento Nacional de la Economía Solidaria, se crea la Superintendencia de la Economía Solidaria, se crea el Fondo de Garantías para las Cooperativas Financieras y de Ahorro y Crédito, se dictan normas sobre la actividad financiera de las entidades de naturaleza cooperativa y se expiden otras disposiciones.  
          tr.bg-gris3
            th 
              h4.mb-0 Cooperativas
            td Ley 2069 de 2021, por medio del cual se impulsa el emprendimiento en Colombia, artículo 22.
              br 
              br
              | Ley 79 de 1988, por la cual se actualiza la Legislación Cooperativa.
          tr.bg-blanco
            th 
              h4.mb-0 Asociaciones mutuales
            td Ley 2143 de 2021, por la cual se dota a las asociaciones mutualistas de identidad, autonomía y vinculación a la economía del país como empresas solidarias y se establecen otras disposiciones.
              br 
              br
              | Ley 2069 de 2021, por medio del cual se impulsa el emprendimiento en Colombia, artículo 7. 
          tr.bg-gris3
            th 
              h4.mb-0 Fondo de empleados
            td Decreto 1481 de 1989, por el cual se determinan la naturaleza, características, constitución, regímenes internos de responsabilidad y sanciones, y se dictan medidas para el fomento de los fondos de empleados.
              br 
              br
              | Ley 1391 de 2010, por medio de la cual se modifica el Decreto  
              br 
              br
              | Ley 1481 de 1989 y se dictan otras disposiciones. 
          tr.bg-blanco
            th 
              h4.mb-0 Precooperativas
            td Decreto 1333 de 1989, por el cual se establece el régimen de constitución, reconocimiento y funcionamiento de las precooperativas.
          tr.bg-gris3
            th 
              h4.mb-0 Trabajo asociado
            td Decreto 4588 de 2006, por el cual se reglamenta la organización y funcionamiento de las Cooperativas y Precooperativas de Trabajo Asociado.  

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-md-10.bg-acento-botones2.tarjeta.p-4
        p.mb-0 La legislación vigente para estas formas asociativas las pueden consultar en el material complementario; así mismo, es de gran relevancia para un emprendimiento social, tal y como se conocen este tipo de iniciativas, basadas en los principios de la solidaridad y el desarrollo integral de sus asociados, que los emprendedores elaboren su modelo de negocio para que posteriormente identifiquen la forma jurídica asociativa más favorable y apropiada a los intereses y objetivos estratégicos de los asociados.

    p.mb-5(data-aos="fade") En la siguiente tabla comparativa, encontrará las características más relevantes establecidas por la legislación vigente para las organizaciones de economía solidaria: 

    .titulo-sexto.color-acento-contenido.mb-4
        p.mb-0 <b>Tabla 3.</b> Características jurídicas
    .tabla-b.tema1-2-tabla2.color-acento-botones.mb-5(data-aos="fade-down")
      table
        thead.tabla-b__header
          tr
            th(rowspan="2").col-1
              h4.mb-0.text-white Forma jurídica
            th(colspan="3") 
              h4.mb-0.text-white Características
          tr.bg-gris
            th.bg-gris Número de asociados
            th.bg-gris Documento de constitución
            th.bg-gris Naturaleza   
        tbody
          tr
            th.col-1
              h4.mb-0 Cooperativas
            td El número mínimo de fundadores será de tres, salvo las excepciones consagradas en normas especiales. (Ley 2069 de 2021). 
            td Para su inscripción en el registro público sólo se requerirá la solicitud firmada por el representante legal, acompañada del acta de constitución y copia de los estatutos. (Ley 2069 de 2021).
            td Toda actividad económica, social o cultural puede organizarse con base en el acuerdo cooperativo. (Ley 79 de 1988)
          tr
            th.col-1
              h4.mb-0 Asociaciones mutuales
            td Las Asociaciones Mutuales se constituirán con un mínimo de diez (10) personas naturales. (Ley 2069 de 2021).
            td Documento privado que se hará constar en acta firmada por todos los asociados fundadores, con anotación de sus nombres, documentos de identificación y domicilios. (Ley 2069 de 2021).
            td Son personas jurídicas de derecho privado, sin ánimo de lucro, constituidas libre y democráticamente por personas naturales, inspiradas en la solidaridad, con el objeto de brindarse ayuda recíproca frente a riesgos eventuales y satisfacer sus necesidades mediante la prestación de servicios de seguridad social, seguridad alimentaria y producción, transformación y comercialización de la Economía Campesina Familiar y Comunitaria -ECFC. (Ley 2069 de 2021).
          tr
            th.col-1
              h4.mb-0 Fondos de empleados
            td Los Fondos de Empleados podrán ser constituidos por trabajadores dependientes, trabajadores asociados o por servidores públicos. (Ley 1391 de 2010).
              br
              br
              | Se constituirán con un mínimo de diez (10) trabajadores. (Decreto 1481 de 1989).
            td En acto privado que se hará constar en acta firmada por todos los asociados fundadores, con anotación de sus nombres, documentos de identificación y domicilio. (Decreto 1481 de 1989).
            td Son empresas asociativas, de derecho privado, sin ánimo de lucro, constituidas por trabajadores dependientes y subordinados. (Decreto 1481 de 1989).
          tr
            th.col-1
              h4.mb-0 Precooperativas
            td La constitución de toda precooperativa se hará por un mínimo de cinco (5) asociados fundadores. (Decreto 1333 de 1989).
            td En reunión en la cual se aprobarán los estatutos que hayan de regirla, se evaluarán los aportes en trabajo o en especie si fuere el caso, y se levantará y firmará por los constituyentes el acta de fundación especificando sus nombres, documentos de identificación y el monto del aporte inicial de cada uno, sea en dinero, en trabajo o en especie. (Decreto 1333 de 1989). 
            td Su característica de transitoriedad como empresas asociativas sin ánimo de lucro de duración limitada. (Decreto 1333 de 1989).   
          tr
            th.col-1
              h4.mb-0 Trabajo asociado
            td Trabajo asociado	Son organizaciones sin ánimo de lucro pertenecientes al sector solidario de la economía, que asocian personas naturales que simultáneamente son gestoras.
              br
              br
              | Las Cooperativas de Trabajo Asociado se constituirán con un mínimo de diez (10) asociados. (Decreto 4588 de 2006). 
            td El reconocimiento de personería jurídica se hará con base en los siguientes requisitos:
              br
              br
              | 1. Solicitud escrita de reconocimiento de personería jurídica.
              br
              | 2. Acta de la asamblea de constitución.
              br
              | 3. Texto completo de los estatutos. (Decreto 4588 de 2006).
            td Desarrollo de actividades económicas, profesionales o intelectuales, con el fin de producir en común bienes, ejecutar obras o prestar servicios para satisfacer las necesidades de sus asociados y de la comunidad en general. (Decreto 4588 de 2006).        

    .row.tema1-2-rectangulo.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-md-9.py-5.py-md-2
        .row.justify-content-end
         .col-md-11
            h5.text-white.px-md-3.mb-0 Para profundizar en las características de estas formas jurídicas asociativas, se puede consultar la normativa en el material complementario. 
      .col-md-3.col-5.contenedor-imagenes.mb-3.mb-md-0
        img(src='@/assets/curso/tema1-icono.svg' alt='Imagen decorativa' style="width: 230px")

    p.mb-4(data-aos="fade")  Por lo tanto, como se mencionaba, el equipo emprendedor después de modelar su idea de emprendimiento social, continúa con reconocer las características más relevantes de la forma jurídica para que de manera conjunta seleccionen la forma jurídica más apropiada y pertinente para los objetivos estratégicos y la naturaleza y el sentir de los asociados. 

    p(data-aos="fade")  En consecuencia, una de las formas jurídicas más utilizadas para las organizaciones de economía solidaria son las cooperativas en cualquiera de sus clases; ya que estas a partir de su naturaleza o su razón de ser, ejerce toda actividad económica, social o cultural, es decir, que ofrece un abanico de oportunidades para modelos de negocios para el emprendimiento social. 

    Separador


    #t_1_3
    .titulo-segundo.color-primario
      h2 1.3. Modelo estatutario

    p.mb-5(data-aos="fade")  La Unidad Administrativa Especial de Organizaciones Solidarias (s.f.), define los estatutos como el conjunto de normas que los asociados acuerdan y se comprometen sobre:   

    .row.align-items-center.mb-5
      .col-md-6.mb-4.mb-md-0(data-aos="fade-right")
        img.px-4(src='@/assets/curso/tema1-3-img.png', alt='Imagen decorativa')
      .col-md-6(data-aos="fade-left")
        .row.align-items-center.align-items-center.mb-3
          .col-2
            h3.mb-0 1.
          .col-10.bg-gris.bordes-curvos.py-4.px-4
            h5.mb-0 Las relaciones dentro de la organización.
        .row.align-items-center.align-items-center.mb-3
          .col-2
            h3.mb-0 2.
          .col-10.bg-gris.bordes-curvos.py-4.px-4
            h5.mb-0 Sus relaciones con el entorno.
        .row.align-items-center.align-items-center.mb-3
          .col-2
            h3.mb-0 3.
          .col-10.bg-gris.bordes-curvos.py-4.px-4
            h5.mb-0 Sus derechos y obligaciones.
        .row.align-items-center.align-items-center.mb-3
          .col-2
            h3.mb-0 4.
          .col-10.bg-gris.bordes-curvos.py-4.px-4
            h5.mb-0 Los órganos de administración y control, sus atribuciones y facultades.
        .row.align-items-center.align-items-center.mb-3
          .col-2
            h3.mb-0 5.
          .col-10.bg-gris.bordes-curvos.py-4.px-4
            h5.mb-0 El régimen económico de la organización.      
    
    p.mb-5(data-aos="fade") Para una correcta elaboración de los estatutos, es importante que se haga una creación colectiva de los mismos, donde cada asociado, responda las siguientes preguntas orientadoras que les ayudarán a su elaboración:

    .row.justify-content-center.tema1-3-preguntas.mb-5
      .col-md-12  
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 <b>Figura 4.</b> Preguntas orientadoras
      .col-md-5
        .mb-3.bg-gris.bordes-curvos.bordes-azul.py-4.px-4
          h5.mb-0 ¿Cuál será el nombre o razón social?
        .mb-3.bg-gris.bordes-curvos.bordes-azul.py-4.px-4
          h5.mb-0 ¿Dónde funcionará?
        .mb-3.bg-gris.bordes-curvos.bordes-azul.py-4.px-4
          h5.mb-0 ¿Cuáles serán las condiciones para su administración, retiro y exclusión y sanciones de asociados?
        .mb-3.bg-gris.bordes-curvos.bordes-azul.py-4.px-4
          h5.mb-0 ¿Cuándo se convocará a reuniones o asambleas?
        .mb-3.bg-gris.bordes-curvos.bordes-azul.py-4.px-4
          h5.mb-0 ¿Cuáles son los aportes sociales para cada asociado?
        .mb-3.bg-gris.bordes-curvos.bordes-azul.py-4.px-4
          h5.mb-0 ¿Cuáles son las causales para la disolución y liquidación?
      .col-md-5
        .mb-3.bg-gris.bordes-curvos.bordes-azul.py-4.px-4
          h5.mb-0 ¿Cuál es el fin del acuerdo cooperativo, basado en fines de interés social y sin ánimo de lucro?
        .mb-3.bg-gris.bordes-curvos.bordes-azul.py-4.px-4
          h5.mb-0 ¿Cuáles deberes y derechos tendrán los asociados?
        .mb-3.bg-gris.bordes-curvos.bordes-azul.py-4.px-4
          h5.mb-0 ¿Cuáles procedimientos se implementarán para la solución de conflictos?
        .mb-3.bg-gris.bordes-curvos.bordes-azul.py-4.px-4
          h5.mb-0 ¿Quién será el representante legal, sus funciones y responsabilidades?
        .mb-3.bg-gris.bordes-curvos.bordes-azul.py-4.px-4
          h5.mb-0 ¿Cuál es el procedimiento para la distribución de los excedentes económicos?
        .mb-3.bg-gris.bordes-curvos.bordes-azul.py-4.px-4
          h5.mb-0 ¿Cuál es el conducto regular para hacer reformas?

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10.tarjeta.bg-1
        .row.justify-content-center.align-items-center.py-3  
          .col-10
            p.mb-0 <b style="font-size: 18px;">La Ley 79 de 1988</b>, en el artículo 19, contiene los elementos para tener en cuenta en la elaboración de los estatutos de la futura cooperativa; las preguntas orientadoras ayudarán a los asociados a estructurar los estatutos cumpliendo los lineamientos de la normativa. 

    p.mb-5(data-aos="fade") Es importante que, la futura cooperativa cuente con el acompañamiento profesional jurídico, con el fin de que se cumplan los parámetros de la legislación y que no existan novedades u observaciones para su constitución que se realizan ante las Cámaras de Comercio del lugar de domicilio de la cooperativa. 

    .row.tema1-3-rectangulo.justify-content-center(data-aos="fade-down")
      .col-md-9.py-5.py-md-2
        .row.justify-content-end
         .col-md-11
            h4.text-white.px-md-3.mt-3 Estatutos 
            h5.text-white.px-md-3 En el material complementario se encuentra un ejemplo de los estatutos de la cooperativa multiactiva – “ACTIVACOOP”, cooperativa de aporte y crédito, que comenzó como el fondo de empleados del hospital universitario Clínica San Rafael, y oficialmente se constituyó en 1999 el 28 de diciembre con la firma de 26 asociados. 
            h5.text-white.px-md-3 También se encuentra un documento guía de la Cámara de Comercio de Bogotá del acta de constitución y los estatutos básicos de la cooperativa, el cual sirve de apoyo y facilita la comprensión de los elementos claves a tener en cuenta para la elaboración del acta de constitución y los estatutos de la cooperativa, siendo estos, dos requisitos fundamentales solicitados por las Cámaras de Comercio para su constitución jurídica. 
      .col-md-3.col-5.contenedor-imagenes.mb-3.mb-md-0
        img(src='@/assets/curso/tema1-icono.svg' alt='Imagen decorativa', style="width:220px")


    Separador


    #t_1_4
    .titulo-segundo.color-primario
      h2 1.4. Deberes y derechos del asociado

    p.mb-4(data-aos="fade") El capítulo III de la Ley 79 de 1988 puntualiza, en el artículo 21, que podrán ser asociados de las cooperativas las siguientes personas:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-10
        figure
          img(src='@/assets/curso/tema1-4-infografia.svg', alt='Asociados de las cooperativas')

    p.mb-4(data-aos="fade") Con el impulso dado por la Ley 2069 de 2020, ley que impulsa el emprendimiento en Colombia, acerca mucho más las MiPymes al sector solidario y fortalece la economía solidaria productiva del país con formas jurídicas poco utilizadas en el mundo de los negocios pero que sin duda constituye una alternativa legal sostenible donde prevalece el desarrollo integral de sus asociados y el bien común. 

    p.mb-5(data-aos="fade") Igualmente, el artículo 22 de la misma ley, establece la calidad de asociado de una cooperativa que se adquiere:

    ol.lista-ol.px-md-5.px-2.mb-5
      li.mb-0
        span 1. 
        | Para los fundadores, a partir de la fecha de la asamblea de constitución, y
      li 
        span 2. 
        | Para los que ingresen posteriormente, a partir de la fecha que sean aceptados por el órgano competente.

    p.mb-4(data-aos="fade") Con la calidad de asociados de los integrantes de la cooperativa, privilegia sus derechos y así mismo otorga deberes, que se constituyen en piezas claves para el éxito en la gestión empresarial durante el desarrollo de sus actividades económicas. 

    p.mb-5(data-aos="fade") El artículo 23 de la Ley 79 de 1988, establece lo siguiente: 

    .row.justify-content-center.mb-5
      .col-md-10 
        .row.justify-content-center.mb-4.tema1-4-fondo1
          .tarjeta.py-5.py-md-0.px-md-4.px-lg-5.px-3
            h4.text-center Derechos del asociado
            ol.lista-ol.mb-0.mb-md-3
              li.mb-0
                span.text-bold 1. 
                | Utilizar los servicios de la cooperativa y realizar con ella las operaciones propias de su objetivo social.
              li.mb-0
                span.text-bold 2. 
                | Participar en las actividades de la cooperativa y en su administración mediante el desempeño de cargos sociales.
              li.mb-0 
                span.text-bold 3. 
                | Ser informado de la gestión de la cooperativa de acuerdo con las prescripciones estatutarias.
              li.mb-0 
                span.text-bold 4. 
                | Ejercer actos de decisión y elección en las asambleas generales.
              li.mb-0 
                span.text-bold 5. 
                | Fiscalizar la gestión de la cooperativa.
              li.mb-0
                span.text-bold 6. 
                | Retirarse voluntariamente de la cooperativa.
        .wrap-player
          audio(controls='')(style= "width: 100%")
            source(src='../../public/downloads/Derechos_del_asociado.mp3' type='audio/mp3')
            |  Your browser does not support the audio tag   

    p.mb-4(data-aos="fade") El ejercicio de los derechos estará condicionado al cumplimiento de los deberes. El artículo 24 de la Ley 79 de 1988, establece:

    .row.justify-content-center.mb-1
      .col-md-11.col-xxl-10
        .row.justify-content-center.mb-4.tema1-4-fondo2
          .col-lg-6.col-10.col-md-10.tarjeta.py-5.py-md-0.px-md-3.px-lg-4.px-3
            ol.lista-ol.mb-0.mb-md-3
              li.mb-0
                span.text-bold 1. 
                | Adquirir conocimiento sobre los principios básicos del cooperativismo, características del acuerdo cooperativo y estatutos que rigen la entidad.
              li.mb-0
                span.text-bold 2. 
                | Cumplir las obligaciones derivadas del acuerdo cooperativo.
                | Aceptar y cumplir las decisiones de los órganos de administración y vigilancia.
              li.mb-0 
                span.text-bold 3. 
                | Comportarse solidariamente en sus relaciones con la cooperativa y con los asociados de las misma.
              li.mb-0 
                span.text-bold 4. 
                | Abstenerse de efectuar actos o de incurrir en omisiones que afecten la estabilidad económica o el prestigio social de la cooperativa.

    .row.justify-content-center.tema1-4.mb-4
      .col-md-10 
        .tarjeta-ultima.mb-4.px-md-4.px-3.py-3
          p.mb-0 Tanto los deberes y derechos del asociado a las cooperativas van de la mano y buscan promover los principios de adhesión voluntaria, responsable y abierta y de autonomía, autodeterminación y autogobierno, donde cada asociado de una manera consciente y voluntaria no solamente exige sus derechos sino primero cumple con sus deberes, personificando el sentir del sector solidario coherentes con los principios que se profesan. 
        .wrap-player
          audio(controls='')(style= "width: 100%")
            source(src='../../public/downloads/Deberes.mp3' type='audio/mp3')
            |  Your browser does not support the audio tag

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
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
