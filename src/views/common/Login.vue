<template>
  <div class="app cover flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <h1>Login</h1>
                <p class="text-muted">Sign In to your account</p>
                <b-input-group class="mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="icon-user"></i>
                    </span>
                  </div>
                  <input type="text" class="form-control" placeholder="Username" v-model="username">
                </b-input-group>
                <b-input-group class="mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="icon-lock"></i>
                    </span>
                  </div>
                  <input type="password" class="form-control" placeholder="Password" v-model="password">
                </b-input-group>
                <b-row>
                  <b-col cols="6">
                    <b-button v-on:click="signIn" variant="primary" class="px-4">Login</b-button>
                  </b-col>
                  <b-col cols="6" class="text-right">
                    <b-button variant="link" class="px-0">Forgot password?</b-button>
                  </b-col>
                </b-row>
              </b-card-body>
            </b-card>
            <b-card no-body class="text-white bg-primary py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <!-- <b-button variant="primary" class="active mt-3">Register Now!</b-button> -->
                  <router-link to="/register" tag="b-button" variant="primary" class="active mt-3">Register</router-link>
                </div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>

import firebase from 'firebase'
import { loginForm } from "../../config";

export default {
  name: 'Login',
  data: function () {
    return {
      username: loginForm ? loginForm.email : '',
      password: loginForm ? loginForm.password : ''
    }
  },
  methods: {
    signIn: function () {
      console.log(this.username, this.password)
      firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(
        (user) => {
          // select main dashboard depending role!
          this.$router.replace('candidate/dashboard')
        },
        (err) => {
          console.log('login error', err)
        }
      )
    },
    gotoRegister: function () {
      this.$router.push('register')
    }
  }
}
</script>

