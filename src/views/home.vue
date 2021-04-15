<template>
  <v-app :style="{background:$vuetify.theme.themes.dark.background}">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="3">
        <v-card class="mb-2 pa-1 borderleft" color ='#4FC694' elevation="20">
          <v-toolbar color="#4FC694"  elevation="10" dark flat>
            <v-tabs align-with-title>
             
              <v-app-bar-nav-icon @click = 'drawer = !drawer' class="ml-5 mt-1"/>
              <v-tab>
                <v-btn dark icon>
                  <v-icon>mdi-home</v-icon>
                </v-btn>
              </v-tab>
            </v-tabs>
            <v-img max-height="77" max-width="100" class="mb-2" src="../assets/logo.png"></v-img>
          </v-toolbar>
        </v-card>
        <v-card  elevation="10" class="rounded-xl">
          <template v-for="item in items">
              <v-list-item :key="item.header">
                <v-list-item-avatar  color="#EFF4F1" size="78" rounded>
                   <img :src='item.avatar'/>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title v-html="item.title"/>
                    <v-list-item-subtitles>{{item.subtitle}}</v-list-item-subtitles>
                </v-list-item-content>
              </v-list-item>
          </template>
        </v-card>
        </v-col>
        <v-col 
        cols="12"
        sm="6"
        >
          <v-text-field label= pesquisar prepend-inner-icon="mdi-home-search-outline" filled rounded color="#4FC694"/>

          <v-card class="rounded-xl mt-2" elevation="20">
            
            <v-row align="center">
              <v-col cols="12" sm="4" >
                <v-avatar class="ml-7" size="300" tile>
                  <v-img   src="../assets/plant.png"></v-img>
                </v-avatar>
               
              </v-col>
              <v-col cols="12" sm="8" class="px-10">
                <v-app-bar flat color="rgba(0,0,0,0)">
                  <v-spacer></v-spacer>
                  <v-icon color="gray lighten-1">mdi-heart </v-icon>
                  <v-icon class="ml-5" >mdi-share-variant</v-icon>
                </v-app-bar>
                <h3 class="grey--text">cactus</h3>
                <p class="grey--text">Lorem ipsum    at dui tempus cursus. Sed ac te ongue faucibus felis. Aenean feugiat, diam ac consectetur  c lacus.</p>
                <h5 class="grey--text">Overview</h5>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-app-bar flat color="rgba(0,0,0,0)">
                    <v-avatar color="#FDD3E9" size="30" class="mr-1">
                      <v-icon small color="grey darken-1">mdi-calendar-month</v-icon>
                    </v-avatar>
                     30 days
                    </v-app-bar>
                     <v-app-bar flat color="rgba(0,0,0,0)">
                    <v-avatar color="#FDD3E9" size="30" class="mr-1">
                      <v-icon small color="grey darken-1">mdi-water-alert-outline</v-icon>
                    </v-avatar>
                     3,0 humidity 
                    </v-app-bar>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-app-bar flat color="rgba(0,0,0,0)">
                    <v-avatar color="#FDD3E9" size="30" class="mr-1">
                      <v-icon small color="grey darken-1">mdi-check</v-icon>
                    </v-avatar>
                     verify 
                    </v-app-bar>
                    <v-app-bar flat color="rgba(0,0,0,0)">
                    <v-avatar color="#FDD3E9" size="30" class="mr-1">
                      <v-icon small color="grey darken-1">mdi-protocol</v-icon>
                    </v-avatar>
                      protocol
                    </v-app-bar>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col
        cols="12"
        sm="3"
        >
        <v-card class="mb-2 pa-1 borderight" color="#4FC694" elevation="20">
          <v-toolbar color="#4FC694">
            <v-avatar class="ml-14 mr-2 border" size="35">
              <img src="https://cdn.vuetifyjs.com/images/lists/2.jpg">
            </v-avatar>
            <v-toolbar-title class="title white--text p1-0 mr-3">Marcos Silva 😄</v-toolbar-title>
          </v-toolbar>
          
        </v-card>
        <v-card  elevation="10" class="rounded-xl mx-auto">
           
            <v-list-group :value="false">
          <template  v-slot:activator>
            <v-list-item-title>Chat</v-list-item-title>
          </template>
             
           <v-card-items class="ml-6">
        <v-card-avatar v-for="item in files" :key="item.title">
            <v-avatar size="50">
              <img :src="item.avatar">
            </v-avatar>
        </v-card-avatar>
        </v-card-items>
        +50
             
           <v-list  class="mt-m4 rounded-xl">
            <v-list-item-group>
              <template v-for="item in files">
                <v-list-item :key="item.title">
                  <v-list-item-avatar rounded>
                    <img :src='item.avatar'/>
                  </v-list-item-avatar>
                  <template>
   
                    <v-list-item-content>
                      <v-list-item-title  v-html="item.title">  </v-list-item-title>
                      <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>
                  </template>
                  <v-list-item-icon>
                    <v-icon  :color= "item.active ? '#4FC694' : 'grey'">
                      mdi-message-outline
                    </v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </template>
            </v-list-item-group>
          </v-list>
         
            
           </v-list-group>
          
       
        </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {

  data(){
    return{
      hide:true,
      dialog:false,


      items:[
        {
          avatar: 'https://cdn.pixabay.com/photo/2016/11/20/08/03/cactus-1842095_960_720.jpg',
          title: `<strong>Cactus</strong>`,
          subtitle: 'Lorem  ',
             
        },
       
       {
          avatar: 'https://cdn.pixabay.com/photo/2017/08/07/20/30/still-2607531_960_720.jpg',
          title: `<strong>Kalanchoe</strong>`,
          subtitle: 'Lorem  ',
            
        },
         {
          avatar: 'https://cdn.pixabay.com/photo/2017/08/07/22/36/still-2608673_960_720.jpg',
          title: `<strong>Madagascar Jewel</strong>`,
          subtitle: 'Lorem  ',
           
        },
         {
          avatar: 'https://cdn.pixabay.com/photo/2017/08/01/18/30/green-2567165_960_720.jpg',
          title: `<strong>Succulent</strong>`,
          subtitle: 'Lorem ',
            
        },
         {
          avatar: 'https://cdn.pixabay.com/photo/2017/08/07/23/50/still-2609317_960_720.jpg',
          title: `<strong>Cactus mini</strong>`,
          subtitle: 'Lorem    ',
            
        },
         {
          avatar: 'https://cdn.pixabay.com/photo/2017/08/01/18/30/green-2567167_960_720.jpg',
          title: `<strong>Maivestus</strong>`,
          subtitle: 'Lorem    ',
           
        },
      ],
      files :[
        {
          active:true,
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          action: '15 min',
          headline: 'Brunch this weekend?',
          subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          title: `<strong>Ali Connors (13)</strong>`,
        },
        {
           active:true,
           avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          action: '2 hr',
          headline: 'Summer BBQ',
          subtitle: `Wish I could come, but I'm out of town this weekend.`,
          title: `<strong>me, Scrott, Jennifer (19)</strong>`,
        },
        {
           active:true,
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          action: '6 hr',
          headline: 'Oui oui',
          subtitle: 'Do you have Paris recommendations? Have you ever been?',
          title: `<strong>Sandra Adams (7)</strong>`,
        },
        {
           avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          action: '12 hr',
          headline: 'Birthday gift',
          subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
          title: `<strong>Trevor Hansen (12)</strong>`,
        },
        {
           avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          action: '18hr',
          headline: 'Recipe to try',
          subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
          title: `<strong>Britta Holt (8)</strong>`,
        },
      ],
    }
  }
}
</script>

<style scoped>
 .borderleft{
   border-radius: 50px 0px 50px 0px  !important;
 }
 .borderight{
   border-radius: 0px 50px 0px 50px !important;
 }
</style>