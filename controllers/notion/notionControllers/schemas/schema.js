const parent = (database_id) => ({
  parent: {database_id: database_id,}
});

const title = ({ id, text }) => {
  if (id === undefined) {
    return '';
  }
  const array = {
    [id]: {
      title: [
        {
          type: 'text',
          text: {
            content: text,
          },
        },
      ],
    },
  };
  return array;
};

const text = ({ id, text }) => {
  if (id === undefined) {
    return '';
  }
  const array = {
    [id]: {
      rich_text: [
        {
          type: 'text',
          text: {
            content: text,
          },
        },
      ],
    },
  };
  return array;
};

const checkbox = ({ id, truOrFalse = false }) => {
  if (id === undefined) {
    return '';
  }
  const array = {
    [id]: {
      checkbox: truOrFalse,
    },
  };
  return array;
};

const date = ({ id, dateStart, dateEnd = null }) => {
  if (id === undefined) {
    return '';
  }
  ({
    [id]: {
      type: 'date',
      date: {
        start: dateStart,
        end: dateEnd,
      },
    },
  });
};

const multi_select = ({id,})=> {
  if (id === undefined) {
    return '';
  }
  ({
    [id]: {
      type: 'multi_select',
      multi_select: tags.map((tag) => {
            return { id: tag.id };
          }),
    },
  });
};

module.exports = { parent, title, text, checkbox, date,multi_select };
