export default {
  global: {
    componenteFormativo: 'Desempeño ambiental',
    descripcionCurso:
      'El desempeño ambiental es un proceso que permite realizar las actividades de los programas para el mejoramiento de las condiciones ambientales de una organización, y el desarrollo y ejecución de los objetivos y actividades para evaluar las variables de impacto ambiental.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Programas ambientales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Objetivo del desarrollo sostenible',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Responsabilidad social',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Sistemas de gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Aplicación',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Técnicas de medición',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Indicadores ambientales',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Plan de acción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Gestión documental',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Aguirre, M. (s. f.). <i>Los sistemas de indicadores ambientales y su papel en la información e integración del medio ambiente.</i> I Congreso de Ingeniería Civil, Territorio y Medio Ambiente.',
      link:
        'http://www.ingenieroambiental.com/2060/sistemas%20de%20indicadores%20ambientales.pdf',
    },
    {
      referencia:
        'ICONTEC. (2015). <i>Sistemas de Gestión Ambiental. Requisitos con orientación para su uso</i> (Norma ISO 14001:2015).',
      link: 'https://www.nueva-iso-14001.com/pdfs/FDIS-14001.pdf',
    },
    {
      referencia:
        'Massolo, L. (2015). <i>Introducción a las herramientas de gestión ambiental.</i> Editorial de la Universidad de La Plata.',
      link:
        'http://sedici.unlp.edu.ar/bitstream/handle/10915/46750/Documento_completo__.pdf?sequence=1',
    },
    {
      referencia:
        'Naciones Unidas. (1992). <i>Declaración de Río sobre el Medio Ambiente y el Desarrollo.</i>',
      link:
        'https://www.un.org/spanish/esa/sustdev/agenda21/riodeclaration.htm',
    },
    {
      referencia:
        'Santana, C. y Aguilera, R. (2017). Fundamentos de la Gestión Ambiental. Universidad ECOTEC.',
      link:
        'https://www.academia.edu/40800127/FUNDAMENTOS_DE_LA_GESTI%C3%93N_AMBIENTAL._AUTORES',
    },
  ],
  glosario: [
    {
      termino: 'Desarrollo sostenible',
      significado:
        'consumo equilibrado de los recursos naturales, que su explotación no compromete los recursos de las generaciones futuras.',
    },
    {
      termino: 'Gestión documental',
      significado:
        'conjunto de normas que guardan los documentos de la información de la empresa, con todo lo referente al funcionamiento.',
    },
    {
      termino: 'Impactos ambientales',
      significado:
        'son las amenazas o cambios que sufre en su calidad el ambiente por malas acciones en el proceso de ejecución.',
    },
    {
      termino: 'Objetivo del desarrollo sostenible',
      significado:
        'su principal objetivo es cambiar las desigualdades en el mundo, erradicando la pobreza y mejorando las condiciones de vida de los seres humanos.',
    },
    {
      termino: 'Programas ambientales:',
      significado:
        'son las acciones que se desarrollan para mitigar, prevenir y controlar los diferentes impactos ambientales causados por actividades negativas en un proyecto, obra o actividad de una organización. ',
    },
    {
      termino: 'Procedimiento:',
      significado:
        'es el conjunto de acciones que buscan un mismo resultado en el desarrollo de sus actividades.',
    },
    {
      termino: 'Plan de acción',
      significado:
        'es un instrumento de carácter voluntario, dirigido a empresas u organizaciones que quieren alcanzar un alto rendimiento y nivel de protección del medio ambiente, en el marco del desarrollo sostenible.',
    },
    {
      termino: 'Sistemas de gestión ambiental',
      significado:
        'se refiere a la capacidad de satisfacer las necesidades presentes sin comprometer las necesidades de las futuras generaciones, garantizando el equilibrio entre el crecimiento económico, el cuidado del ambiente y el bienestar social.',
    },
  ],
  complementario: [
    {
      texto:
        'Programas ambientales: Universidad popular de Cesar. (s. f.). <i>Sistema Integrado de Gestión Institucional - SIGI.</i> ',
      tipo: 'Documento',
      link:
        'https://sites.google.com/site/sigiunicesar/home/siga/programas-ambientales',
    },
    {
      texto:
        'Objetivo del desarrollo sostenible: Naciones Unidas. (s. f.). Objetivos de desarrollo sostenible',
      tipo: 'Artículo',
      linnk:
        'https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
