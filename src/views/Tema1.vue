<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Programas ambientales
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5.slideInUp
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t1-i1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Estos programas permiten desarrollar acciones para mitigar, prevenir y controlar los diferentes impactos ambientales causados por actividades negativas en un proyecto, obra o actividad de una organización. Estos programas se centran en un sistema de gestión ambiental y posibilitan su integralidad a partir de lo siguiente:

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Programa de manejo de vertimientos")
        .col-md-4
          figure
            img(src='@/assets/curso/t1-i2.jpg', alt='Hombre recolectando muestras de agua en un rio')

        .col-md-8.mb-4.mb-md-0
          p Consiste en tomar las medidas de protección de los cuerpos de agua de las cargas contaminantes que se generan en el desarrollo de actividades diarias de una empresa. Su principal característica es que garantiza la conservación y sostenibilidad de los cuerpos de agua, de tal forma que no altera su estado natural y previene los daños irreversibles. El manejo de vertimientos se realiza desde la entidad que lo avala, las CAR. Precisamente, después de avalado, se deben cumplir las obligaciones establecidas en el plan de saneamiento y permitir la revisión de seguimiento de la autoridad ambiental.
      
      .row(titulo="Programa de uso eficiente y ahorro de agua")
        .col-md-4
          figure
            img(src='@/assets/curso/t1-i3.jpg', alt='Hombre recolectando muestras de agua en un rio')

        .col-md-8.mb-4.mb-md-0
          p Busca mantener el buen funcionamiento del recurso hídrico en todas las actividades que se dan en el servicio de acueducto y alcantarillado de una organización. Sus principales características son que optimiza el consumo del recurso, permite la sostenibilidad de la cantidad de agua que se va a utilizar en un proyecto, y que el uso sostenible del agua se da mediante el reúso, la recirculación y el uso de aguas lluvias.

      .row(titulo="Programa de uso eficiente y ahorro de energía")
        .col-md-4
          figure
            img(src='@/assets/curso/t1-i4.jpg', alt='Hombre recolectando muestras de agua en un rio')

        .col-md-8.mb-4.mb-md-0
          p Permite reducir la cantidad de energía eléctrica que se utiliza, además mantiene en buen funcionamiento la calidad del servicio prestado, evitando el malgasto y contaminación del ambiente de forma exagerada. Su principal característica consiste en programar las actividades de forma tal que se minimicen y controlen los recursos energéticos y de combustibles. El programa debe estimar las distintas oportunidades del recurso energético que permitan el funcionamiento productivo de la organización. La eficiencia energética se desarrolla como una estrategia ambiental que es alcanzada por medio de programas, elaborados al interior de la organización.

      .row(titulo="Programa para el manejo integral de residuos sólidos")
        .col-md-4
          figure
            img(src='@/assets/curso/t1-i5.jpg', alt='Hombre recolectando muestras de agua en un rio')

        .col-md-8.mb-4.mb-md-0
          p Favorece el mejoramiento del medio ambiente porque minimiza el impacto negativo generado por el uso de los residuos aprovechables y no aprovechables, teniendo en cuenta sus características, costos, tratamiento y disposición final. Sus principales características son que reduce la producción de residuos contaminantes  y, a su vez, maximiza los residuos aprovechables; permite proteger las organizaciones de la utilización inadecuada de residuos contaminantes del  medio ambiente, y ayuda a la sostenibilidad del equilibrio ambiental del planeta con la reutilización de los residuos sólidos.

      .row(titulo="Programa para el almacenamiento adecuado de sustancias químicas")
        .col-md-4
          figure
            img(src='@/assets/curso/t1-i6.jpg', alt='Hombre recolectando muestras de agua en un rio')

        .col-md-8.mb-4.mb-md-0
          p Es un plan que se debe ejecutar en un tiempo prudente, que implica tomar medidas para el uso, la manipulación, el almacenamiento, el transporte y la disposición de residuos peligrosos; igualmente, involucra las consecuencias que se presentan por el manejo inadecuado y la mala manipulación de las sustancias químicas. Sus principales características son que el tiempo de almacenamiento de las sustancias químicas debe ser el menor posible, para evitar la contaminación e impactos negativos sobre el medio ambiente, pues estas pueden ser explosivas, tóxicas, radiactivas, inflamables y no inflamables, perjudiciales para la salud humana. Para transportar los residuos de este tipo  de sustancias, se deben tener en cuenta las normas y medidas de prevención establecidas para controlar estas en casos de emergencia.

      .row(titulo="Programa de educación ambiental")
        .col-md-4
          figure
            img(src='@/assets/curso/t1-i7.jpg', alt='Maestra de primaria con estudiantes a su alrederor')

        .col-md-8.mb-4.mb-md-0
          p Está encaminado a establecer el desarrollo sostenible de los recursos naturales, con la finalidad de potenciar el uso de los recursos, incentivando la toma de conciencia y el cambio de mentalidad, y, a su vez, proteger y salvar el planeta tierra.

      .row.justify-content-center(titulo="Características de los programas ambientales")
        .col-md-10
          figure
            img(src='@/assets/curso/t1-i8.svg', alt='tabla de caracteristicas')




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

<style lang="sass" scoped></style>
