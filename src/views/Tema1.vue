<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-primario
      .titulo-principal__numero.text-white
        span 1
      h1 Modelo de negocio para organizaciones de economía solidaria

    p.mb-4(data-aos="fade") <b style="font-size: 18px;">Los modelos de negocio</b> se diseñan y aplican en entornos específicos. Un conocimiento profundo del entorno de la empresa ayudará a concebir modelos de negocio más fuertes y competitivos (Osterwalder & Pigneur, 2010) de tal manera que una de las principales tareas por realizar es la observación, interpretación y análisis del comportamiento del sector y actividades económicas en donde se insertará la futura empresa; es decir, esos entornos específicos que menciona el autor. Veamos lo que representa este modelo:

    .row
      h4.text-center Modelo de negocio para organizaciones de economía solidaria



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
