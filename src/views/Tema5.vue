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

    .row.mb-5.justify-content-center
      .col-lg-10
        .tarjeta--container.row.mb-5(data-aos="slide-right")
          .col-md.c1.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img.nW(src='@/assets/curso/t5-ic2.svg', alt='icono decorativo')
              
            .h1.text-center Todoist
            p.text-center Es posible registrar equipos y tareas en un calendario que organiza actividades, indica quién es responsable de completarlas y permite la inclusión de archivos adjuntos que son cruciales para la consecución de un plan de acción.

          .col-md.tarjeta.c2.p-5(data-aos="slide-left")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img.nW(src='@/assets/curso/t5-ic3.svg', alt='icono decorativo')
              
            .h1.text-center Trello
            p Permite determinar si cada paso de la actividad se ha completado, crear alarmas sobre el enfoque de una fecha límite, así como diferentes clasificaciones para las tareas. Permite que se puedan crear listas y planes de acción para ser administrado de manera organizada y eficiente.
    
    p.mb-5(data-aos="fade-up")  La planificación de la acción es el primer momento del plan, es determinar todas las acciones requeridas para la ejecución del proyecto. Por lo tanto, si el objetivo es potenciarlo, el requisito básico de la encuesta es enumerar las necesidades, como:

    .row.justify-content-center.mb-5
      .col-lg-3
        figure(data-aos="flip-left")
          img.nW(src='@/assets/curso/t5-i2.jpg', alt='icono decorativo')
      .col-lg-5
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              i.fas.fa-check
            p.mb-0 La formación de equipos.
          li 
            .lista-ol--cuadro__vineta
              i.fas.fa-check
            p.mb-0 El reclutamiento.
          li 
            .lista-ol--cuadro__vineta
              i.fas.fa-check
            p.mb-0 El intercambio de maquinaria.
          li 
            .lista-ol--cuadro__vineta
              i.fas.fa-check
            p.mb-0 Elaborar un buen plan de contenidos para la correcta aplicación.
          li 
            .lista-ol--cuadro__vineta
              i.fas.fa-check
            p.mb-0 La organización de campañas.
          li 
            .lista-ol--cuadro__vineta
              i.fas.fa-check
            p.mb-0 Así como otros cambios involucrados.

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4
          p.mb-0  La estructura de un plan de acción abarca los ítems descritos anteriormente, su aplicación depende de las categorías de la empresa, y lo importante al momento de realizarlo es tener claros los objetivos y ser preciso para lograrlos.























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
