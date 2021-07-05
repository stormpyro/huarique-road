<template>
  <v-container class="overflow-hidden" style="height: 100px">
    <v-app-bar absolute color="secondary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/login">
            <v-list-item-title>Iniciar Sesión</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Registrate</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template #append>
        <div class="pa-2">
          <v-btn block> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>