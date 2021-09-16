<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-5.justify-content-center
      .col-lg-8
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5.slideInUp
          .row.m-0.align-items-center.justify-content-between
            .col-lg-2.mb-4.mb-lg-0
              figure
                img.nW(src='@/assets/curso/t0-i1.svg' alt='Icono decorativo')
            .col-lg-10
              .bloque-texto-a__texto.p-4
                p.mb-0  El componente abordará el desempeño básico de los programas ambientales, sistemas de gestión y manejo de la comunicación. En el siguiente recurso, se podrá conocer más información. 

  
    
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.p-4
      .col-lg-10
        .cajon.color-secundario.p-4(data-aos="flip-up")
          .row
            .col-lg-1
              figure
                img.nW(src='@/assets/curso/t0-i2.svg' alt='Icono decorativo')
            .col-lg-11
              p.mb-0  Para la elaboración de este componente, se abordaron varios autores conocidos en <b>desempeño ambiental</b>, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de <b>la promotoría y el manejo ambiental.</b>



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
