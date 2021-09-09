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
