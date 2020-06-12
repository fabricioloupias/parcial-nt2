<template>
  <div class="form-sign-in mt-5 pt-5">
    <b-card title="Iniciar sesion" style="max-width: 30rem;" class="mx-auto shadow text-left">
      <ValidationObserver v-slot="{ invalid }">
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group id="input-group-1" label="Username" label-for="input-1">
            <validation-provider
              rules="required"
              name="username"
              :bails="false"
              v-slot="{ errors }"
            >
              <b-form-input
                v-model="user.username"
                type="text"
                required
                placeholder="Ingresar nombre de usuario"
              ></b-form-input>
              <error-message-input v-for="error in errors" :key="error" :message="error" />
            </validation-provider>
          </b-form-group>
          <b-form-group id="input-group-1" label="Contraseña" label-for="input-1">
            <validation-provider rules="required" :bails="false" v-slot="{ errors }">
              <b-form-input
                v-model="user.password"
                type="password"
                required
                placeholder="Ingresar contraseña"
              ></b-form-input>
              <error-message-input v-for="error in errors" :key="error" :message="error" />
            </validation-provider>
          </b-form-group>

          <b-button type="submit" :disabled="invalid" variant="primary">Ingresar</b-button>
          <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
        </b-form>
      </ValidationObserver>
    </b-card>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import "@/services/users/userRules";
import ErrorMessageInput from "./ErrorMessageInput.vue";

export default {
  name: "form-user",
  components: {
    ValidationProvider,
    ErrorMessageInput,
    ValidationObserver
  },
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$store.dispatch("usersModule/signIn", this.user);
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.user.username = "";
      this.user.password = "";
      // Trick to reset/clear native browser form validation state
    }
  }
};
</script>
