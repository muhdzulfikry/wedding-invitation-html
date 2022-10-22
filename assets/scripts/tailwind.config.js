tailwind.config = {
  theme: {
      fontFamily: {
          poppins: 'Poppins, sans-serif',
          charlotte: 'Charlotte Southern, sans-serif'
      },
      extend: {
          colors: {
              "motif": '#A59071',
              "argent": '#898989',
              "digital": '#636363',
              "bleached-silk": '#F2F2F2',
              "tiki-hut": '#876D46',
          },
          backgroundImage: {
            'flower': "url('assets/images/bg-bottom-cover.png')",
            'pause': "url('assets/icons/pause-button.svg')",
          },
          screens: {
            'tablet': '640px',
            'laptop': '1024px',
          },
      },
  },
}