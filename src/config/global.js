export default {
  global: {
    componenteFormativo:
      'Modelo de negocio para organizaciones de economía solidaria',
    descripcionCurso:
      'El modelo de negocio describe las bases sobre las que una empresa crea, proporciona y capta valor (Osterwalder & Pigneur, 2010); estas bases se distribuyen en nueve bloques que conforman lo que se conoce como lienzo CANVAS. El emprendedor junto con su equipo de trabajo trazan la propuesta de valor e identifican puntos claves para cada área, convirtiéndose en una herramienta útil para el éxito y sostenibilidad empresarial.',
    // imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Modelo de negocio para organizaciones de economía solidaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Formulación de modelo de negocio',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Formas jurídicas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Modelo estatutario',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Deberes y derechos del asociado',
            hash: 't_1_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
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
        'Decreto 1333 de 1989. [Presidencia de la República de Colombia]. Por el cual se establece el régimen de constitución, reconocimiento y funcionamiento de las precooperativas. Junio 21 de 1989. DO.N°. 38.867.',
    },
    {
      referencia:
        'Decreto 1481 de 1989. [Presidencia de la República de Colombia]. Por el cual se determinan la naturaleza, características, constitución, regímenes internos de responsabilidad y sanciones, y se dictan medidas para el fomento de los fondos de empleados. Julio 07 de 1989. ',
    },
    {
      referencia:
        'Decreto 4588 de 2006. [Presidencia de la república]. Por el cual se reglamenta la organización y funcionamiento de las Cooperativas y Precooperativas de Trabajo Asociado. Diciembre 27 de 2006.',
    },
    {
      referencia:
        'Ley 79 de 1988. [Congreso de Colombia]. Por la cual se actualiza la Legislación Cooperativa. Diciembre 23 de 1988.',
    },
    {
      referencia:
        'Ley 454 de 1998. [Congreso de Colombia] Por la cual se determina el marco conceptual que regula la economía solidaria, se transforma el Departamento Administrativo Nacional de Cooperativas en el Departamento Nacional de la Economía Solidaria, se crea la Superintendencia de la Economía Solidaria, se crea el Fondo de Garantías para las Cooperativas Financieras y de Ahorro y Crédito, se dictan normas sobre la actividad financiera de las entidades de naturaleza cooperativa y se expiden otras disposiciones. Agosto 4 de 1998',
    },
    {
      referencia:
        'Ley 1391 de 2010. [Congreso de Colombia]. Por medio de la cual se modifica el Decreto Ley 1481 de 1989 y se dictan otras disposiciones. Julio 01 de 2010. DO.N°. 47757.',
    },
    {
      referencia:
        'Ley 2069 de 2020. [Congreso de Colombia]. Por medio del cual se impulsa el emprendimiento en Colombia. Diciembre 31 de 2020.',
    },
    {
      referencia:
        'Osterwalder, A. & Pigneur, Y. (2010). Generación de modelos de negocio. Deusto.',
    },
    {
      referencia:
        'Porter, M. E. (1985). Ventaja competitiva: crear y sostener un desempeño superior. ',
    },
    {
      referencia:
        'Superintendencia de la economía solidaria. (2017). Glosario. ',
      link:
        'http://www.supersolidaria.gov.co/sites/default/files/public/data/glosario_2017_0.pdf',
    },
    {
      referencia:
        'Unidad Administrativa Especial de Organizaciones Solidarias. UAE. (s.f.). organizaciones de economía solidaria. ',
      link: 'https://www.uaeos.gov.co/',
    },
  ],
  glosario: [
    {
      termino: 'Acto cooperativo',
      significado:
        'Son los actos realizados entre sí por las cooperativas, o entre éstas y sus propios asociados, en desarrollo de su objeto social.',
    },
    {
      termino: 'Acuerdo cooperativo',
      significado:
        'Contrato que se celebra por un número determinado de personas, con el objetivo de crear y organizar una persona jurídica de derecho privado denominada cooperativa, cuyas actividades deben cumplirse con fines de interés social y sin ánimo de lucro. Toda actividad económica, social o cultural puede organizarse con base en el acuerdo cooperativo.',
    },
    {
      termino: 'Asamblea General',
      significado:
        'Es el órgano máximo de administración de las cooperativas y sus decisiones son obligatorias para todos los asociados, siempre que se hayan adoptado de conformidad con las normas legales, reglamentarias o estatutarias. La constituye la reunión de los asociados hábiles o de los delegados elegidos por éstos.',
    },
    {
      termino: 'Asociaciones mutuales',
      significado:
        'Son personas jurídicas de derecho privado, sin ánimo de lucro, constituidas libre y democráticamente por personas naturales, inspiradas en la solidaridad, con el objeto de brindarse ayuda recíproca frente a riesgos eventuales y satisfacer sus necesidades mediante la prestación de servicios de seguridad social.',
    },
    {
      termino: 'Consejo de administración',
      significado:
        'Es el órgano permanente de administración en las cooperativas que se encuentra subordinado a las directrices y políticas de la asamblea general.',
    },
    {
      termino: 'Cooperativa',
      significado:
        'Es cooperativa la empresa asociativa sin ánimo de lucro, en la cual los trabajadores o los usuarios, según el caso, son simultáneamente los aportantes y los gestores de la empresa, creada con el objeto de producir o distribuir conjunta y eficientemente bienes o servicios para satisfacer las necesidades de sus asociados y de la comunidad en general.',
    },
    {
      termino: 'Cooperativas financieras',
      significado:
        'Son los organismos cooperativos especializados cuya función principal consiste en adelantar actividad financiera, su naturaleza jurídica se rige por las disposiciones de la Ley 79 de 1988 y se encuentran sometidas al control, inspección y vigilancia de la Superintendencia Financiera. Estas cooperativas se consideran establecimientos de crédito.',
    },
    {
      termino: 'Cooperativas de usuarios o de servicios a los asociados',
      significado:
        'Son empresas asociativas sin ánimo de lucro, compuestas por personas naturales y/o jurídicas, las cuales están constituidas para prestarles servicios a los asociados. El principio o criterio de identidad se da en esta clase de cooperativas en el sentido de que los asociados son los dueños y gestores de la empresa que les presta los servicios y, simultáneamente los usuarios o consumidores de tales servicios.',
    },
    {
      termino: 'Cooperativas especializadas',
      significado:
        'Son las que se organizan para atender una necesidad específica, correspondiente a una sola rama de actividad económica, social, cultural o ambiental. Estas cooperativas podrán ofrecer servicios diferentes a los establecidos en su objeto social, mediante la suscripción de convenios con otras entidades cooperativas.',
    },
    {
      termino: 'Cooperativas integrales',
      significado:
        'Son aquellas que, en desarrollo de su objeto social, realizan dos o más actividades conexas y complementarias entre sí, de producción, distribución, consumo y prestación de servicios.',
    },
    {
      termino: 'Cooperativas multiactivas',
      significado:
        'Son las que se organizan para atender varias necesidades, mediante concurrencia de servicios en una sola entidad jurídica. Los servicios deberán ser organizados en secciones independientes, de acuerdo con las características de cada tipo especializado de cooperativa.',
    },
    {
      termino: 'Cooperativas y precooperativas de trabajo asociado',
      significado:
        'Son organizaciones sin ánimo de lucro pertenecientes al sector solidario de la economía, que asocian personas naturales que simultáneamente son gestoras, contribuyen económicamente a la cooperativa y son aportantes directos de su capacidad de trabajo para el desarrollo de actividades económicas, profesionales o intelectuales, con el fin de producir en común bienes, ejecutar obras o prestar servicios para satisfacer las necesidades de sus asociados y de la comunidad en general.',
    },
    {
      termino: 'Estatutos',
      significado:
        'Normas acordadas por los asociados fundadores de una organización solidaria que regula el funcionamiento de dicha persona jurídica frente a terceros, así como, los derechos y obligaciones de los miembros y las relaciones entre estos.',
    },
  ],
  complementario: [
    {
      texto:
        'Osterwalder, A. & Pigneur, Y. (2010.) Generación de modelos de negocio. Deusto',
      tipo: 'Libro',
      descarga:
        '/downloads/Generacion_modelos_negocio-Alexander_Osterwalder.pdf',
    },
    {
      texto:
        'Cámara de Comercio de Cúcuta. (2021). Modelo de negocio COOPMUJERES.',
      tipo: 'Informe',
      descarga: '/downloads/Modelo_negocio_COOPMUJERES.pdf',
    },
    {
      texto:
        'Ley 454 de 1998. [Congreso de Colombia]. Por la cual se determina el marco conceptual que regula la economía solidaria, se transforma el Departamento Administrativo Nacional de Cooperativas en el Departamento Nacional de la Economía Solidaria, se crea la Superintendencia de la Economía Solidaria, se crea el Fondo de Garantías para las Cooperativas Financieras y de Ahorro y Crédito, se dictan normas sobre la actividad financiera de las entidades de naturaleza cooperativa y se expiden otras disposiciones. Agosto 06 de 1998. DO.N°. 43.357.',
      tipo: 'Ley',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=3433',
    },
    {
      texto:
        'Ley 79 de 1988. [Congreso de Colombia]. Por la cual se actualiza la Legislación Cooperativa. Diciembre 23 de 1988. DO.N°. 38.648.',
      tipo: 'Ley',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=9211',
    },
    {
      texto:
        'Decreto 1480 de 1989. [Presidencia de la República de Colombia]. Por el cual se determinan la naturaleza, características, constitución, regímenes internos, de responsabilidad y sanciones, y se dictan medidas para el fomento de las Asociaciones Mutualistas. Julio 07 de 1989.',
      tipo: 'Decreto',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=3366',
    },
    {
      texto:
        'Ley 2143 de 2021. [Congreso de Colombia]. Por la cual se dota a las asociaciones mutualistas de identidad, autonomía y vinculación a la economía del país como empresas solidarias y se establecen otras disposiciones. Agosto 10 de 2021.',
      tipo: 'Ley',
      link:
        'https://www.incp.org.co/Site/publicaciones/info/archivos/Ley-2143-de-2021-12-08-2021.pdf',
    },
    {
      texto:
        'Decreto 1481 de 1989. [Presidencia de la República de Colombia]. Por el cual se determinan la naturaleza, características, constitución, regímenes internos de responsabilidad y sanciones, y se dictan medidas para el fomento de los fondos de empleados. Julio 07 de 1989.',
      tipo: 'Decreto',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=3365',
    },
    {
      texto:
        'Ley 1391 de 2010. [Congreso de Colombia]. Por medio de la cual se modifica el Decreto Ley 1481 de 1989 y se dictan otras disposiciones. Julio 01 de 2010. DO.N°. 47757.',
      tipo: 'Ley',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=39964',
    },
    {
      texto:
        'Decreto 1333 de 1989. [Presidencia de la República de Colombia]. Por el cual se establece el régimen de constitución, reconocimiento y funcionamiento de las precooperativas. Junio 21 de 1989. DO.N°. 38.867.',
      tipo: 'Decreto',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=5991',
    },
    {
      texto:
        'Decreto 1340 de 2020. Por el cual se crea y regula la Comisión Intersectorial del Sector de la Economía Solidaria. Octubre 08 de 2020. ',
      tipo: 'Decreto',
      link:
        'http://supersolidaria.gov.co/sites/default/files/public/normativa/decreto_1340_del_8_de_octubre_de_2020.pdf',
    },
    {
      texto:
        'Ley 2069 de 2020. Por medio del cual se impulsa el emprendimiento en Colombia. Diciembre 31 de 2020.',
      tipo: 'Ley',
      link:
        'http://supersolidaria.gov.co/sites/default/files/public/normativa/ley_2069_del_2020.pdf',
    },
    {
      texto: 'ActivaCoop. (2021). Estatuto_ActivaCOOP.',
      tipo: 'Informe',
      descarga: '/downloads/Estatuto_ActivaCOOP.pdf',
    },
    {
      texto:
        'Cámara de Comercio de Bogotá. (2021). CCB Acta y Estatutos Básicos Cooperativa.',
      tipo: 'Plantilla',
      descarga: '/downloads/CCB_Acta_y_Estatutos_Basicos_Cooperativa.docx',
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
      {
        nombre: 'Ruby Esther Abril Espitia',
        cargo: 'Experta técnica',
        centro:
          'Centro de la Industria, la Empresa y los Servicios Regional Norte de Santander',
      },
      {
        nombre: 'Miroslava González Hernández',
        cargo: 'Diseñador y evaluador instruccional',
        centro: 'Centro de Gestión Industrial Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Distrito Capital',
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
        nombre: '',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ' ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ' ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
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
