<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Plan de acción

    .row.mb-5.slideInUp
      .col-lg-7
        p.mb-3.text-bold Es el desarrollo organizado de la gestión y supervisión, que se lleva a cabo en una empresa para verificar que se cumplan sus objetivos y alcances de manera correcta, optimizando los recursos empleados. 
        p.mb-3  Para la realización de un plan de acción, se deben desarrollar unos pasos que garanticen el reconocimiento de las herramientas que permitan el éxito en el procedimiento utilizado. El plan de acción es muy útil y todos los profesionales se apoyan en él porque les permite potenciar su rendimiento, lo cual garantiza el éxito en la organización en todo lo relacionado con el desempeño de sus actividades personales. Para lograr su objetivo, debe estar bien ajustado a la realidad de sus necesidades.
      .col-lg-5
        figure(data-aos="flip-left")
          img(src='@/assets/curso/t5-i1.jpg', alt='operario de construccion revisando una tablet pc')

    figure.mb-5(data-aos="fade-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.mb-5
      .col-lg-2
        figure(data-aos="flip-left")
          img(src='@/assets/curso/t5-ic1.svg', alt='icono decorativo')
      .col-lg-10
        p.mb-0  Como se ha visto hasta el momento, el plan de acción es una herramienta muy utilizada y, por lo tanto, existen diversas aplicaciones y sistemas que permiten conocer la trazabilidad de los procesos y desarrollar así los principios de la organización y tener una responsabilidad compartida. A continuación, se podrán conocer algunos de ellos:


































</template>

<script>
export default {
  name: 'Tema3',
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

<style lang="sass" scoped></style>
