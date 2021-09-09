<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Gestión documental

    .row.mb-5.slideInUp
      .col-lg-7
        p.mb-3.text-bold Es el desarrollo organizado de la gestión y supervisión, que se lleva a cabo en una empresa para verificar que se cumplan sus objetivos y alcances de manera correcta, optimizando los recursos empleados. 
        p.mb-3  Son el conjunto de normas que guardan los documentos de la información de la empresa, con todo lo referente al funcionamiento, con una correcta planeación y organización durante la existencia de ella. La estructura de la gestión documental es la forma como se organiza y planifica la información de una empresa, para conservar su información durante su vida útil y así poder llevar a cabo todas sus actividades de manera correcta, con la finalidad de cumplir su objetivo. 
      .col-lg-5
        figure
          img(src='@/assets/curso/t6-i1.jpg', alt='hombre sentado leyendo documentos')

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5.slideInUp
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t6-i2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En la gestión documental, es muy importante el almacenamiento de la información, porque permite tener un control de la información de manera protegida, para que los documentos conserven su estado de forma correcta, con el propósito de tener acceso en el momento que se necesite.

    .row.mb-5
      .col-lg-9
        p.mb-3.text-bold  Además de almacenar la información, es importante contar con un proceso y procedimiento para la gestión documental. 
        p.mb-0  Para ello, se establecen los principios y estrategias, a fin de garantizar fácil acceso y conservación a largo plazo de toda la documentación interna, según el orden de importancia. Dichos pasos tienen como objetivo principal brindar un crecimiento exponencial a las empresas y poder implementar compendios en pro de la economía interna. El proceso de gestión y almacenamiento de documentos consta de ocho (8) pasos que ayudan a fomentar las bases de una óptima gestión.

      .col-lg-3
        figure
          img(src='@/assets/curso/t6-i3.svg', alt='imagen decorativa')
    .row.mb-5.justify-content-center
      .col-lg-10
        PasosA.color-acento-botones.mb-5(tipo="n")
          .row
            .col-md-2
              figure
                img.nW(src='@/assets/curso/t6-ic1.svg', alt='icono decorativo')
            .col-md-8.mb-4.mb-md-0
              h3 Planeación
              p Se encuentran actividades de administración que permiten revisar y valorar la información, teniendo en cuenta contextos legales, técnicos o funcionales, para llevar a cabo un análisis e interpretación de todas las necesidades y objetivos internos que tenga la compañía.


          .row(data-aos="slide-left")
            .col-md-10
              h3 Producción
              p Se inicia la implementación de una estructura propia, personalización y creación de soportes, donde resida la información contenida, así como la integración de las tecnologías y estrategias adecuadas que cumplan con una reducción de recursos, en la medida de lo posible.

            .col-md-2.mb-4.mb-md-0
              figure
                img.nW(src='@/assets/curso/t6-ic2.svg', alt='icono decorativo')

          .row(data-aos="slide-right")
            .col-md-2
              figure
                img.nW(src='@/assets/curso/t6-ic3.svg', alt='icono decorativo')
            .col-md-8.mb-4.mb-md-0
              h3 Gestión y trámite
              p Se analiza la documentación de manera integral, para iniciar con los trámites de la gestión del documento, así como su nivel de relevancia y utilidad constante, para cuidar la calidad y facilidad de acceso.


          .row(data-aos="slide-left")
            .col-md-10
              h3 Organización
              p Se realizan todas las operaciones técnicas, se establece su categoría, se crean series documentales y se asignan, se realizan valoraciones, tiempo que estarán almacenados, tipo de archivo y departamento al que pertenece cada documento, a fin de establecer con exactitud su ordenación y tiempo de vida en los soportes de almacenamiento.

            .col-md-2.mb-4.mb-md-0
              figure
                img.nW(src='@/assets/curso/t6-ic4.svg', alt='icono decorativo')

          .row(data-aos="slide-right")
            .col-md-2
              figure
                img.nW(src='@/assets/curso/t6-ic5.svg', alt='icono decorativo')
            .col-md-8.mb-4.mb-md-0
              h3 Transferencia
              p Permite establecer los términos y políticas para la transferencia de los documentos, tomando en cuenta el tipo de formato, estructura, migración, conversión y conservación, según los valores que la compañía haya implementado.

          .row(data-aos="slide-left")
            .col-md-10
              h3 Disposición de documentos
              p Siguiendo las bases impuestas por la valoración documental previamente asignada, se debe determinar el tiempo de vida de todos los archivos documentales, en distintas temporalidades, lo cual permitirá mejorar el rendimiento de los motores de búsqueda, facilitar el tráfico de información útil y establecer pautas eficientes.

            .col-md-2.mb-4.mb-md-0
              figure
                img.nW(src='@/assets/curso/t6-ic6.svg', alt='icono decorativo')


          .row(data-aos="slide-right")
            .col-md-2
              figure
                img.nW(src='@/assets/curso/t6-ic7.svg', alt='icono decorativo')
            .col-md-8.mb-4.mb-md-0
              h3 Preservación a largo plazo
              p Son las técnicas y procedimientos que buscan la conservación de documentos de utilidad a largo plazo dentro del proceso de gestión documental. Se trata de implementar formas y canales de respaldo en documentos de alta importancia para la compañía.

          .row(data-aos="slide-left")
            .col-md-10
              h3 Valoración
              p Se determinan los valores primarios y secundarios que establecerán la relevancia de cada documento para su conservación temporal o permanente.

            .col-md-2.mb-4.mb-md-0
              figure
                img.nW(src='@/assets/curso/t6-ic8.svg', alt='icono decorativo')

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4(data-aos="flip-up")
          p.mb-0  La gestión documental en las empresas es muy importante porque ayuda a llevar a cabo estrategias que facilitan el mantenimiento de la documentación de una forma ordenada y, con ello, permite lograr  los objetivos propuestos con un mayor control de la información.























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
