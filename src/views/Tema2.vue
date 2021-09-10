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

    .row.mb-5.justify-content-center
      .col-lg-6
        figure(data-aos="flip-up")
          img(src='@/assets/curso/t5-i2.svg', alt='tabla de objetivos estratégicos')
    //-- ROW GOALS 1
    .row.mb-5
      .col-lg-2
        .objBox
          a(@click="modal1 = true")
            figure(data-aos="flip-up")
            img(src='@/assets/curso/t2-ob1.svg', alt='icono decorativo')
          //--.indicador--click(v-if="mostrarIndicador")    
        ModalA(:abrir-modal.sync="modal1")
          .row.align-items-center
            .col-lg-12
              figure
                img(src='@/assets/curso/o1.svg', alt='icono decorativo')
      .col-lg-2
        .objBox
          a(@click="modal2 = true")
            figure(data-aos="flip-up")
            img(src='@/assets/curso/t2-ob2.svg', alt='icono decorativo')
            //--indicador--click(v-if="mostrarIndicador")
        ModalA(:abrir-modal.sync="modal2")
          .row.align-items-center
            .col-lg-12
              figure
                img(src='@/assets/curso/o2.svg', alt='icono decorativo')                

      .col-lg-2
        .objBox
          a(@click="modal3 = true")
            figure(data-aos="flip-up")
            img(src='@/assets/curso/t2-ob3.svg', alt='icono decorativo')
            //--indicador--click(v-if="mostrarIndicador")
        ModalA(:abrir-modal.sync="modal3")
          .row.align-items-center
            .col-lg-12
              figure
                img(src='@/assets/curso/o3.svg', alt='icono decorativo')                
      .col-lg-2
        .objBox
          a(@click="modal4 = true")
            figure(data-aos="flip-up")
            img(src='@/assets/curso/t2-ob4.svg', alt='icono decorativo')
            //--indicador--click(v-if="mostrarIndicador")
        ModalA(:abrir-modal.sync="modal4")
          .row.align-items-center
            .col-lg-12
              figure
                img(src='@/assets/curso/o4.svg', alt='icono decorativo')        
      .col-lg-2
        .objBox
          a(@click="modal5 = true")
            figure(data-aos="flip-up")
            img(src='@/assets/curso/t2-ob5.svg', alt='icono decorativo')
            //--indicador--click(v-if="mostrarIndicador")
        ModalA(:abrir-modal.sync="modal5")
          .row.align-items-center
            .col-lg-12
              figure
                img(src='@/assets/curso/o5.svg', alt='icono decorativo')        
                
      .col-lg-2
        .objBox
          a(@click="modal6 = true")
            figure(data-aos="flip-up")
            img(src='@/assets/curso/t2-ob6.svg', alt='icono decorativo')
            //--indicador--click(v-if="mostrarIndicador")
        ModalA(:abrir-modal.sync="modal6")
          .row.align-items-center
            .col-lg-12
              figure
                img(src='@/assets/curso/o6.svg', alt='icono decorativo')        
                
    //-- ROW GOALS 2
    .row.mb-5
      .col-lg-2
        .objBox
          a(@click="modal7 = true")
            figure(data-aos="flip-up")
            img(src='@/assets/curso/t2-ob7.svg', alt='icono decorativo')
          //--.indicador--click(v-if="mostrarIndicador")    
        ModalA(:abrir-modal.sync="modal7")
          .row.align-items-center
            .col-lg-12
              figure
                img(src='@/assets/curso/o7.svg', alt='icono decorativo')
      .col-lg-2
        .objBox
          a(@click="modal8 = true")
            figure(data-aos="flip-up")
            img(src='@/assets/curso/t2-ob8.svg', alt='icono decorativo')
            //--indicador--click(v-if="mostrarIndicador")
        ModalA(:abrir-modal.sync="modal8")
          .row.align-items-center
            .col-lg-12
              figure
                img(src='@/assets/curso/o8.svg', alt='icono decorativo')                

      .col-lg-2
        .objBox
          a(@click="modal9 = true")
            figure(data-aos="flip-up")
            img(src='@/assets/curso/t2-ob9.svg', alt='icono decorativo')
            //--indicador--click(v-if="mostrarIndicador")
        ModalA(:abrir-modal.sync="modal9")
          .row.align-items-center
            .col-lg-12
              figure
                img(src='@/assets/curso/o9.svg', alt='icono decorativo')                
      .col-lg-2
        .objBox
          a(@click="modal10 = true")
            figure(data-aos="flip-up")
            img(src='@/assets/curso/t2-ob10.svg', alt='icono decorativo')
            //--indicador--click(v-if="mostrarIndicador")
        ModalA(:abrir-modal.sync="modal10")
          .row.align-items-center
            .col-lg-12
              figure
                img(src='@/assets/curso/o10.svg', alt='icono decorativo')        
      .col-lg-2
        .objBox
          a(@click="modal11 = true")
            figure(data-aos="flip-up")
            img(src='@/assets/curso/t2-ob11.svg', alt='icono decorativo')
            //--indicador--click(v-if="mostrarIndicador")
        ModalA(:abrir-modal.sync="modal11")
          .row.align-items-center
            .col-lg-12
              figure
                img(src='@/assets/curso/o11.svg', alt='icono decorativo')        
                
      .col-lg-2
        .objBox
          a(@click="modal12 = true")
            figure(data-aos="flip-up")
            img(src='@/assets/curso/t2-ob12.svg', alt='icono decorativo')
            //--indicador--click(v-if="mostrarIndicador")
        ModalA(:abrir-modal.sync="modal12")
          .row.align-items-center
            .col-lg-12
              figure
                img(src='@/assets/curso/o12.svg', alt='icono decorativo')        

    //-- ROW GOALS 3
    .row.mb-5.justify-content-center
      .col-lg-2
        .objBox
          a(@click="modal13 = true")
            figure(data-aos="flip-up")
            img(src='@/assets/curso/t2-ob13.svg', alt='icono decorativo')
          //--.indicador--click(v-if="mostrarIndicador")    
        ModalA(:abrir-modal.sync="modal13")
          .row.align-items-center
            .col-lg-12
              figure
                img(src='@/assets/curso/o13.svg', alt='icono decorativo')
      .col-lg-2
        .objBox
          a(@click="modal14 = true")
            figure(data-aos="flip-up")
            img(src='@/assets/curso/t2-ob14.svg', alt='icono decorativo')
            //--indicador--click(v-if="mostrarIndicador")
        ModalA(:abrir-modal.sync="modal14")
          .row.align-items-center
            .col-lg-12
              figure
                img(src='@/assets/curso/o14.svg', alt='icono decorativo')                

      .col-lg-2
        .objBox
          a(@click="modal15 = true")
            figure(data-aos="flip-up")
            img(src='@/assets/curso/t2-ob15.svg', alt='icono decorativo')
            //--indicador--click(v-if="mostrarIndicador")
        ModalA(:abrir-modal.sync="modal15")
          .row.align-items-center
            .col-lg-12
              figure
                img(src='@/assets/curso/o15.svg', alt='icono decorativo')                
      .col-lg-2
        .objBox
          a(@click="modal16 = true")
            figure(data-aos="flip-up")
            img(src='@/assets/curso/t2-ob16.svg', alt='icono decorativo')
            //--indicador--click(v-if="mostrarIndicador")
        ModalA(:abrir-modal.sync="modal16")
          .row.align-items-center
            .col-lg-12
              figure
                img(src='@/assets/curso/o16.svg', alt='icono decorativo')        
      .col-lg-2
        .objBox
          a(@click="modal17 = true")
            figure(data-aos="flip-up")
            img(src='@/assets/curso/t2-ob17.svg', alt='icono decorativo')
            //--indicador--click(v-if="mostrarIndicador")
        ModalA(:abrir-modal.sync="modal17")
          .row.align-items-center
            .col-lg-12
              figure
                img(src='@/assets/curso/o17.svg', alt='icono decorativo')        
                



















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
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    modal8: false,
    modal9: false,
    modal10: false,
    modal11: false,
    modal12: false,
    modal13: false,
    modal14: false,
    modal15: false,
    modal16: false,
    modal17: false,
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
