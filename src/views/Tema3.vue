<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Responsabilidad social
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5  A continuación, se relacionan algunos métodos de evaluación para las metodologías: 
    .row.justify-content-center.mb-5
      .col-lg-10
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/t3-info1.svg', alt='componente interactivo representando metodos de evaluación')
          .tarjeta.color-acento-botones.shadow-box.p-3(x="6%" y="76%")
            .h5.mb-2 Heteroevaluación
            p Realizada por el jefe que conoce al empleado, su rendimiento y las funciones a realizar.    
          .tarjeta.color-acento-botones.shadow-box.p-3(x="14%" y="45%")
            .h5.mb-2 Autoevaluación
            p El mismo empleado evalúa su desempeño y propone nueva forma para mejorar.
          .tarjeta.color-acento-botones.shadow-box.p-3(x="27%" y="24%")
            .h5.mb-2 Coevaluación
            p Entre compañeros con el mismo cargo, los mismos empleados evalúan su desempeño.
          .tarjeta.color-acento-botones.shadow-box.p-3(x="49%" y="3%")
            .h5.mb-2 Evaluación por medio de los empleados
            p Es el empleado quien evalúa a su superior.
          .tarjeta.color-acento-botones.shadow-box.p-3(x="72%" y="24%")
            .h5.mb-2 Evaluación por parte del cliente
            p El cliente evalúa el trabajo del empleado con el que tiene contacto.
          .tarjeta.color-acento-botones.shadow-box.p-3(x="85%" y="45%")
            .h5.mb-2 Evaluación 360
            p Incluye los cinco métodos que se acaban de mencionar. Como esta es un poco más compleja, requiere un análisis detallado.  
          .tarjeta.color-acento-botones.shadow-box.p-3(x="92%" y="76%")
            .h5.mb-2 Evaluación sistematizada
            p Evalúa al trabajador mediante el uso de un <i>software</i>. Esto es un poco intrusivo, por ello se debe contar con la autorización del trabajador.            

    .row.mb-5
      .col-lg-7
        p.mb-3.text-bold(data-aos="fade-up") Es la rectitud en la actuación ética responsable la que permite el desarrollo social en el lugar que se realiza gestión de los grupos de interés.
        p.mb-4(data-aos="fade-up")  Al evaluar el desempeño de las empresas, se aumenta la productividad y la predisposición de los empleados, además se pueden implementar políticas de compensación. Por último, la evaluación de desempeño mitiga agentes externos (en caso de que venga un nuevo miembro de la familia, se ofrecen bonificaciones para esta).
        .cajon.color-acento-botones.p-4(data-aos="flip-up")
          p.mb-0  En sí, la estructura de la responsabilidad social permite conocer los ítems anteriormente descritos, que conllevan a la conservación del desarrollo de la sociedad sostenible y propenden por el éxito responsable de todos los grupos que integran una organización.

      .col-lg-5
        figure(data-aos="flip-up")
          img(src='@/assets/curso/t3-i1.jpg', alt='grupo de jovenes voluntarios recolectando basura')





































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
