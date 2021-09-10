<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Sistemas de gestión
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5.slideInUp
          .row.m-0.align-items-center.justify-content-between
            .col-lg-2.mb-4.mb-lg-0
              figure
                img.nW(src='@/assets/curso/t4-ic1.svg' alt='Icono decorativo')
            .col-lg-10
              .bloque-texto-a__texto.p-4
                p.mb-0  Son utilizados para mejorar las condiciones sostenibles, debido a que, a lo largo del crecimiento poblacional, se han causado grandes estragos en el ambiente con su explotación indebida, lo que conlleva una toma de conciencia que permita realizar adecuadas operaciones para erradicar el cambio climático. <b>A continuación, se conocerán las aplicaciones, características, técnicas de medición e indicadores de los sistemas de gestión.</b>



    #t_4_1.titulo-segundo
      h2 4.1. Aplicación
    .row.mb-5
      .col-lg-3
        figure(data-aos="flip-left")
          img.nW(src='@/assets/curso/t4-ic2.svg' alt='Icono decorativo')
      .col-lg-9
        p.mb-3.text-bold(data-aos="slide-left") La aplicación del sistema de gestión ambiental se debe trabajar de manera unida, formando un enlace entre el sistema y los trabajadores.  
        p.mb-3(data-aos="slide-left")  Para lograr mayores resultados y rentabilidad, se deberá tener un software que contenga la información exacta de la organización, sin márgenes de error, con los mejores niveles de calidad y cantidad, que respondan a la solución de las necesidades de un sistema de gestión con la información siempre a la mano.


    Separador
    br
    br

    #t_4_2.titulo-segundo
      h2 4.2. Técnicas de medición
    p.mb-5  Las técnicas de medición permiten determinar el tiempo que debería tardar un colaborador al interior de una empresa para realizar cualquier trabajo bajo condiciones normales. Para medir el impacto ambiental, se utilizan cuatro técnicas:
    .row.mb-2.justify-content-center
      .col-lg-4
        .nav-holder.align-items-center
          img(src="@/assets/curso/t4-i1.jpg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Programas de monitoreo ambiental
              p Definen las condiciones ambientales que contaminan y permiten tomar medidas de mitigación para solucionar daños en los seres vivos.

      .col-lg-4
        .nav-holder.align-items-center
          img(src="@/assets/curso/t4-i2.jpg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Análisis de riesgos
              p Identifica las causas que representan los daños causados por los impactos negativos a la salud y al medio ambiente.

    .row.mb-5.justify-content-center
      .col-lg-4
        .nav-holder.align-items-center
          img(src="@/assets/curso/t4-i3.jpg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Planes de mitigación, compensación y recomposición
              p Identifican desde un comienzo los riesgos del proyecto en los lugares afectados, disminuyen su capacidad de productividad en los componentes ambientales y hacen parte de la planeación y de las soluciones en los puntos afectados.

      .col-lg-4
        .nav-holder.align-items-center
          img(src="@/assets/curso/t4-i4.jpg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Planes de contingencia
              p Sirven de apoyo a los análisis de riesgo, ayudan a mejorar las situaciones en caso de una urgencia ambiental, y así mejorar el daño en el momento en que se presente.







    Separador
    br
    br
    #t_4_3.titulo-segundo
      h2 4.3. Indicadores ambientales
    .row.mb-5
      .col-lg-8
        p.mb-5.text-bold  Muestran los resultados de medición de manera reducida y reducen los impactos ambientales que se generan, de acuerdo con las condiciones ambientales presentes. Estos pueden ser de dos clases:
        ul.lista-ul.mb-5
          li
            i.fas.fa-check
            | Simple, que permite evaluar las concentraciones de sólidos en suspensión.
          li
            i.fas.fa-check
            | Compuesta, que muestra la calidad de los agentes que contaminan.
        .cajon.color-acento-contenido.p-4(data-aos="flip-up")
          p.mb-0  Los indicadores ambientales son de gran importancia, debido a que permiten evaluar condiciones ambientales y sus actividades en la organización.      
      
      .col-lg-4
        figure(data-aos="flip-left")
          img.nW(src='@/assets/curso/t4-i5.jpg' alt='operario supervisando con su tablet una planta de produccion de hidrocarburos')
































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
