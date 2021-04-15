import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
        theme:{
            themes:{
                dark:{
                    background:colors.grey.lighten3,
        },

                light:{
                    background:colors.shades.white
            }
        }
 }
});
