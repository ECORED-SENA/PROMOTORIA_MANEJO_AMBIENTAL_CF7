<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Objetivo del desarrollo sostenible
    
    .row.mb-5.slideInUp
      .col-lg-7
        p.mb-3 Los objetivos del desarrollo sostenible de la agenda 2030 en Colombia fueron creados para erradicar la pobreza y sostener el planeta, garantizando la sostenibilidad y el equilibrio entre hombre y naturaleza, para explotar los recursos de tal forma que se deje algo a las generaciones futuras. Cada objetivo cuenta con metas propuestas para ser alcanzables en 15 años. 
        p.mb-3.text-bold  Su principal objetivo es cambiar las desigualdades en el mundo, erradicando la pobreza y mejorando las condiciones de vida de los seres humanos. Los objetivos para cumplir son los siguientes:
      .col-lg-5
        figure(data-aos="flip-left")
          img(src='@/assets/curso/t5-i1.jpg', alt='operario de construccion revisando una tablet pc')

    .row.mb-3.justify-content-center
      .col-lg-6
        figure(data-aos="flip-up")
          img(src='@/assets/curso/t5-i2.svg', alt='operario de construccion revisando una tablet pc')

    .row.mb-5
      .col-lg-2
        //-- Aqui vienen los objetivos estratégicos

    .row.mb-5.justify-content-center
      .col-lg-10
        .tarjeta.color-acento-botones.p-4
          .row
            .col-lg-1
              figure(data-aos="flip-up")
                img.nW(src='@/assets/curso/t5-ico1.svg', alt='icono decorativo')
            .col-lg-11
              p.mb-0  La implementación de los objetivos del desarrollo sostenible permitirá el mejoramiento de la calidad de vida del planeta y el equilibrio en la utilización de los recursos, dejándole a las generaciones futuras un ambiente sano, mediante alianzas y transformaciones sociales. 































</template>

<script>
export default {
  name: 'Tema2',
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
