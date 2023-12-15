const format = [
  {
    Tamaño: {
      id: '%3AErY',
      type: 'rich_text',
      rich_text: [],
    },
    Debe: {
      id: '%3B%3CAn',
      type: 'checkbox',
      checkbox: false,
    },
    'Nombre Prenda': {
      id: '%3DKGM',
      type: 'rich_text',
      rich_text: [],
    },
    'Talla o Tamaño': {
      id: 'BFN%60',
      type: 'multi_select',
      multi_select: [
        {
          id: 'nwrL',
          name: 'M',
          color: 'default',
        },
        {
          id: '88628a91-3a13-4c41-ac72-353fa95d7803',
          name: 'L',
          color: 'orange',
        },
      ],
    },
    Ingreso: {
      id: 'EsqQ',
      type: 'date',
      date: {
        start: '2023-05-28',
        end: null,
        time_zone: null,
      },
    },
    'No menor a ': {
      id: 'FcZI',
      type: 'formula',
      formula: {
        type: 'number',
        number: 3600,
      },
    },
    Bolsillos: {
      id: 'G~%7D%3D',
      type: 'multi_select',
      multi_select: [],
    },
    Pecho: {
      id: 'H%3FsE',
      type: 'rich_text',
      rich_text: [
        {
          type: 'text',
          text: {
            content: '110',
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
          },
          plain_text: '110',
          href: null,
        },
      ],
    },
    'Tamaño o Talla / Formula': {
      id: 'KC%60d',
      type: 'formula',
      formula: {
        type: 'string',
        string: 'Talla (M, L) ',
      },
    },
    Tiro: {
      id: 'LRxy',
      type: 'rich_text',
      rich_text: [],
    },
    Code: {
      id: 'LSHA',
      type: 'formula',
      formula: {
        type: 'string',
        string: '864af8',
      },
    },
    Proceso: {
      id: 'Mfww',
      type: 'status',
      status: {
        id: '6ea96bde-65a5-4b20-b762-6953ac890b1e',
        name: 'Reservado',
        color: 'blue',
      },
    },
    Precio: {
      id: 'NF_V',
      type: 'number',
      number: 20000,
    },
    Detalles: {
      id: 'NKEL',
      type: 'rich_text',
      rich_text: [
        {
          type: 'text',
          text: {
            content: 'Desgaste leve por uso',
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
          },
          plain_text: 'Desgaste leve por uso',
          href: null,
        },
      ],
    },
    'Textos Para Publicaciones': {
      id: 'OkE%7B',
      type: 'formula',
      formula: {
        type: 'string',
        string:
          'Blusa trópico purpura   ✨Marca (Nara.Mague) Material (Algodón, Lana) Color (Purpura, Oliva, Naranja, Negro) Patrón (Tropical, Floral, Jirafa) Estado (9/10) Desgaste leve por uso Precio ($20000) Talla (M, L) Medidas: Hombro a Hombro (30cm) Largo (55cm) Pecho (110cm) ⚡Si deseas comprar esta prenda porfis dejanos un comentario de 3 palabras y me comunicaré contigo⚡ ⏳Tienes 20mn para confirmar la compra o reserva. ',
      },
    },
    Patrón: {
      id: 'RA%3CS',
      type: 'multi_select',
      multi_select: [
        {
          id: '98595567-d486-481f-894e-38e8362f6e4e',
          name: 'Tropical',
          color: 'default',
        },
        {
          id: 'a645a333-3862-49a3-a4a1-85818dd54ac0',
          name: 'Floral',
          color: 'blue',
        },
        {
          id: '7ffd6f0b-c4dc-43e3-8ad3-f3aca26ad158',
          name: 'Jirafa',
          color: 'blue',
        },
      ],
    },
    'País de Origen': {
      id: 'T_%3BY',
      type: 'multi_select',
      multi_select: [
        {
          id: 'b490ec4a-f51d-4f2f-b26e-d9031634e5eb',
          name: 'Italia',
          color: 'pink',
        },
      ],
    },
    Color: {
      id: 'Un%5EA',
      type: 'multi_select',
      multi_select: [
        {
          id: '5454d3ba-4dde-4b25-98ad-dd8ff24df6fb',
          name: 'Purpura',
          color: 'brown',
        },
        {
          id: '3e62bfe9-554b-4b2b-905d-57176709c7af',
          name: 'Oliva',
          color: 'brown',
        },
        {
          id: 'aef48374-8f08-40f5-a332-cb5f1136f6ce',
          name: 'Naranja',
          color: 'default',
        },
        {
          id: 'c29c0552-7088-4b25-921e-ed2712209f63',
          name: 'Negro',
          color: 'gray',
        },
      ],
    },
    'Coleccion Actual': {
      id: 'UoyM',
      type: 'checkbox',
      checkbox: true,
    },
    Marca: {
      id: 'UrYX',
      type: 'multi_select',
      multi_select: [
        {
          id: 'd46aa098-4bed-45a6-8400-c018c00fe791',
          name: 'Nara.Mague',
          color: 'blue',
        },
      ],
    },
    'Suela externa': {
      id: 'WRNr',
      type: 'rich_text',
      rich_text: [],
    },
    'Fecha de Pago': {
      id: 'X%3Fea',
      type: 'date',
      date: null,
    },
    'Ancho ': {
      id: 'XE%3E%3B',
      type: 'rich_text',
      rich_text: [],
    },
    Material: {
      id: 'XKJQ',
      type: 'multi_select',
      multi_select: [
        {
          id: '0b71df80-944c-4bb4-8b06-72136ad76f29',
          name: 'Algodón',
          color: 'green',
        },
        {
          id: '9f485853-5fde-4b3e-a1ad-c05ca18aba99',
          name: 'Lana',
          color: 'gray',
        },
      ],
    },
    Abono: {
      id: 'XNyO',
      type: 'number',
      number: null,
    },
    Cintura: {
      id: 'X%5Cix',
      type: 'rich_text',
      rich_text: [],
    },
    Descripcion: {
      id: 'YGlZ',
      type: 'rich_text',
      rich_text: [],
    },
    Cadera: {
      id: 'YhkN',
      type: 'rich_text',
      rich_text: [],
    },
    Orden: {
      id: 'Zv%3CW',
      type: 'relation',
      relation: [],
      has_more: false,
    },
    Holding: {
      id: '%5BnyY',
      type: 'checkbox',
      checkbox: false,
    },
    'Fecha a cobrar': {
      id: '%5C%3EmO',
      type: 'date',
      date: null,
    },
    Pierna: {
      id: '%5C%60I_',
      type: 'rich_text',
      rich_text: [],
    },
    'Notas de Reparacion': {
      id: '%5D%3En%3C',
      type: 'rich_text',
      rich_text: [],
    },
    'Monto a Cobrar': {
      id: '%5DElG',
      type: 'formula',
      formula: {
        type: 'number',
        number: 20000,
      },
    },
    Manga: {
      id: '%5D%7DyW',
      type: 'rich_text',
      rich_text: [],
    },
    'Suma de Costes': {
      id: 'cS%7Bx',
      type: 'rollup',
      rollup: {
        type: 'number',
        number: 4250,
        function: 'sum',
      },
    },
    'Precio de compra': {
      id: 'c%7DZ%7B',
      type: 'number',
      number: 2000,
    },
    'Tiempo promedio': {
      id: 'gN%3C%60',
      type: 'multi_select',
      multi_select: [],
    },
    Estados: {
      id: 'id%3D_',
      type: 'number',
      number: 9,
    },
    RN: {
      id: 'jI%3C%3A',
      type: 'rich_text',
      rich_text: [],
    },
    'Fecha de coleccion': {
      id: 'k_mc',
      type: 'date',
      date: {
        start: '2023-09-29',
        end: null,
        time_zone: null,
      },
    },
    Circunferencia: {
      id: 'mHUK',
      type: 'rich_text',
      rich_text: [],
    },
    'Plantilla interna ': {
      id: 'okpc',
      type: 'rich_text',
      rich_text: [],
    },
    'Hombro a Hombro': {
      id: 'o%7Dya',
      type: 'rich_text',
      rich_text: [
        {
          type: 'text',
          text: {
            content: '30',
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
          },
          plain_text: '30',
          href: null,
        },
      ],
    },
    Baul: {
      id: 'pyy%5C',
      type: 'checkbox',
      checkbox: false,
    },
    'Prenda destacada': {
      id: 'sB~z',
      type: 'checkbox',
      checkbox: false,
    },
    'Precio Minimo ': {
      id: 'tGh%3C',
      type: 'formula',
      formula: {
        type: 'number',
        number: 9375,
      },
    },
    'proceso de envio': {
      id: 't~%5Dx',
      type: 'checkbox',
      checkbox: false,
    },
    Largo: {
      id: 'u%3DF%3D',
      type: 'rich_text',
      rich_text: [
        {
          type: 'text',
          text: {
            content: '55',
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
          },
          plain_text: '55',
          href: null,
        },
      ],
    },
    'Primera Vista': {
      id: 'wlBD',
      type: 'files',
      files: [],
    },
    'Largo Total': {
      id: 'xBHD',
      type: 'rich_text',
      rich_text: [],
    },
    'Precio de Envios': {
      id: 'xKpy',
      type: 'rollup',
      rollup: {
        type: 'array',
        array: [],
        function: 'show_original',
      },
    },
    'Envio pago': {
      id: 'yU%7Dz',
      type: 'checkbox',
      checkbox: false,
    },
    'tipología de prenda ': {
      id: '%7BqTk',
      type: 'multi_select',
      multi_select: [
        {
          id: 'gBhU',
          name: 'Blusa',
          color: 'orange',
        },
        {
          id: '4381c704-5648-4ee5-9008-4cc5514142a8',
          name: 'Cuello T',
          color: 'orange',
        },
      ],
    },
    N: {
      id: '~%3Bjl',
      type: 'number',
      number: 5,
    },
    Prenda: {
      id: 'title',
      type: 'title',
      title: [
        {
          type: 'text',
          text: {
            content: 'Blusa trópico purpura  ',
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: 'default',
          },
          plain_text: 'Blusa trópico purpura  ',
          href: null,
        },
      ],
    },
  },
];

const result = () => {
  const obj = format.flatMap((objeto) => Object.values(objeto));

  const id = obj.map((item) => item.id);

  const result2 = format.reduce((acumulador, objeto) => {
    for (const key in objeto) {
      if (Object.hasOwnProperty.call(objeto, key)) {
        acumulador[objeto[key].id] = key;
      }
    }
  });

  const resultado = format.reduce((acumulador, objeto) => {
    for (const key in objeto) {
      if (Object.hasOwnProperty.call(objeto, key)) {
        acumulador[objeto[key].id] = key;
      }
    }
    return acumulador;
  }, {});

  return resultado;

  //return format
  //  .flatMap((objeto) => Object.values(objeto).map((item) => item.id))
  //  .filter(Boolean);
};





notion.pages.create({
  parent: {
    database_id: process.env.NOTION_DATABASE_ID,
  },
  properties: {
    ///---Name---///
    [process.env.NOTION_TITLE_ID]: {
      title: [
        {
          type: "text",
          text: {
            content: title,
          },
        },
      ],
    },
    [process.env.NOTION_DESCRIPTION]: {
      rich_text: [
        {
          type: "text",
          text: {
            content: description,
          },
        },
      ],
    },
    [process.env.NOTION_BAUL]: {
      checkbox: baul,
    },
    [process.env.NOTION_COLECCION_ACTUAL]: {
      checkbox: coleccionActual,
    },
    [process.env.NOTION_PRECIO_DE_COMPRA]: {
      number: precioCompra,
    },

    ///--date--///
    [process.env.NOTION_INGRESO]: {
      type: "date",
      date: {
        start: fechaActual,
        end: null,
      },
    },
    //--Estado--//
    //[process.env.NOTION_ESTADO]: {
    //  type: "status",
    //  status: {
    //    id: estado,
    //  },
    //},
    [process.env.NOTION_PROCESO]: {
      type: "multi_select",
      multi_select: proceso.map((proces) => {
        return { id: proces.id };
    }
    ),

    },
  },
});
