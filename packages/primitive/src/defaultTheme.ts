const defaultTheme = {
  borders: ['5px'],
  borderStyles: ['solid', 'dashed'],
  borderWidths: [1, 4],
  colors: {
    text: '#ffffff',
    background: '#282a36',
    primary: '##ff57b6',
    primaryHighlight: '#ff57b6',
    secondary: '#8be9fd',
    muted: '#8394ca',
    highlight: '#50fa7b',
    gray: '#808080',
    accent: '#F1F8FF',
    darken: '#323442',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    '0.75rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2.125rem',
    '3rem',
    '3.5rem',
    '6rem',
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lettingSpacings: {},
  lineHeights: {
    heading: 1,
    body: 1.5,
  },
  radii: [],
  shadows: [
    '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  ],
  sizes: {
    container: 1140,
  },
  space: [0, 4, 8, 16, 24, 32],
  zIndices: [],
  breakpoints: [],
  styles: {
    root: {
      fontSize: 1,
      fontFamily: 'body',
      lineHeight: 'body',
    },
    p: {
      color: 'text',
      lineHeight: 'body',
      code: {
        backgroundColor: 'darken',
        color: 'highlight',
        padding: 1,
      },
    },
    small: {
      fontSize: 0,
    },
    a: {
      color: 'primary',
    },
    h1: {
      color: 'primary',
      fontSize: 7,
      fontWeight: 'heading',
      lineHeight: 'heading',
      marginTop: 0,
      marginBottom: 5,
      a: {
        color: 'inherit',
      },
    },
    h2: {
      color: 'text',
      fontSize: 6,
      fontWeight: 'heading',
      lineHeight: 'heading',
      marginTop: 0,
      marginBottom: 4,
      a: {
        color: 'inherit',
      },
    },
    h3: {
      color: 'text',
      fontSize: 5,
      fontWeight: 'heading',
      lineHeight: 'heading',
      marginTop: 0,
      marginBottom: 3,
      a: {
        color: 'inherit',
      },
    },
    h4: {
      color: 'text',
      fontSize: 4,
      fontWeight: 'heading',
      lineHeight: 'heading',
      marginTop: 0,
      marginBottom: 3,
      a: {
        color: 'inherit',
      },
    },
    h5: {
      color: 'text',
      fontSize: 3,
      fontWeight: 'heading',
      lineHeight: 'heading',
      marginTop: 0,
      marginBottom: 3,
      a: {
        color: 'inherit',
      },
    },
    h6: {
      color: 'text',
      fontSize: 2,
      fontWeight: 'heading',
      lineHeight: 'heading',
      marginTop: 0,
      marginBottom: 3,
    },
    img: {},
    pre: {
      borderColor: 'gray',
      borderStyle: 1,
      borderWidth: 0,
      backgroundColor: 'darken',
      color: 'text',
      lineHeight: 'body',
      overflow: 'auto',
      padding: 3,
      code: {
        backgroundColor: 'darken',
        color: 'text',
        lineHeight: 'body',
      },
    },
    ol: {
      color: 'text',
    },
    ul: {
      color: 'text',
    },
    li: {
      color: 'text',
      lineHeight: 'body',
    },
    blockquote: {
      borderLeftColor: 'highlight',
      borderLeftStyle: 0,
      borderLeftWidth: 1,
      padding: 2,
      backgroundColor: 'darken',
      p: {
        margin: 0,
      },
    },
    hr: {
      border: 0,
      borderStyle: 0,
      color: 'muted',
      marginTop: 5,
      marginBottom: 5,
    },
    em: {},
    table: {
      color: 'text',
      border: 0,
      borderStyle: 0,
      borderColor: 'gray',
      borderCollapse: 'collapse',
      mb: 3,
    },
    tr: {},
    th: {
      backgroundColor: 'darken',
      border: 0,
      borderStyle: 0,
      borderColor: 'gray',
      padding: 2,
    },
    td: {
      border: 0,
      borderStyle: 0,
      borderColor: 'gray',
      padding: 2,
    },
    strong: {},
    del: {},
    b: {},
    i: {},
    progress: {
      backgroundColor: 'darken',
      color: 'primary',
      secondary: {
        backgroundColor: 'darken',
        color: 'secondary',
      },
    },
    donut: {
      primary: {
        color: 'primary',
      },
      secondary: {
        color: 'secondary',
      },
    },
    spinner: {
      primary: {
        color: 'primary',
      },
      secondary: {
        color: 'secondary',
      },
    },
  },
  box: {},
  flex: {},
  grids: {},
  buttons: {
    backgroundColor: 'primary',
    primary: {
      variant: 'buttons.default',
      color: 'white',
      backgroundColor: 'primary',
      '&:hover': {
        backgroundColor: 'primaryHighlight',
      },
    },
    secondary: {
      color: 'background',
      backgroundColor: 'secondary',
      textTransform: 'uppercase',
      ':hover': {
        color: 'background',
      },
    },
    close: {},
    icon: {},
    menu: {},
  },
  text: {
    text: {},
    heading: {},
  },
  links: {
    nav: {
      color: 'primary',
    },
  },
  images: {
    avatar: {},
  },
  cards: {
    primary: {
      boxShadow: 0,
      backgroundColor: 'darken',
    },
  },
  layout: {
    container: {},
  },
  forms: {
    label: {
      alignItems: 'center',
      fontWeight: 'bold',
      marginBottom: 2,
    },
    input: {},
    select: {
      color: 'text',
    },
    textarea: {},
    slider: {
      color: 'primary',
      backgroundColor: 'darken',
    },
    radio: {},
    checkbox: {},
  },
  badges: {
    primary: {
      backgroundColor: 'primary',
    },
    secondary: {
      backgroundColor: 'secondary',
      color: 'background',
    },
  },
  alerts: {
    primary: {
      backgroundColor: 'primary',
    },
    secondary: {
      backgroundColor: 'secondary',
      color: 'background',
    },
  },
  messages: {
    primary: {
      backgroundColor: 'darken',
      borderLeftColor: 'primary',
    },
    secondary: {
      backgroundColor: 'darken',
      borderLeftColor: 'secondary',
    },
  },
};

export { defaultTheme };
