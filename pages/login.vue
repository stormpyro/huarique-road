<template>
  <v-row class="d-flex justify-center align-center">
    <v-col cols="8">
      <v-card>
        <v-card-title class="headline secondary"> Iniciar Sesión </v-card-title>
        <v-text-field v-model="email" label="Email" outlined></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          outlined
          type="password"
        ></v-text-field>
        <v-btn @click="login" large color="success">Login</v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    email: "",
    password: null,
  }),
  methods: {
    login: async function () {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      })
        .then((data) => {
          return data.json();
        })
        .catch((err) => {
          return err;
        });

      console.log(res);
    },
  },
};
</script>