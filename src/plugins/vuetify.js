import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    options: { customProperties: true },
    themes: {
    dark: {
        primary: '#09ffff',
        secondary: colors.blueGrey.lighten2,
        accent: colors.blueGrey.darken3,
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        filledText: colors.green.accent,
        background: '#383838',
        cardBackground: '#383838'
      },
    },
  },
})