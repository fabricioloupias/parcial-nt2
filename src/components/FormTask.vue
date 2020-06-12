<template>
  <div class="form-taks">
    <b-card title="Nueva tarea" style="max-width: 30rem;" class="mx-auto shadow text-left">
      <ValidationObserver v-slot="{ invalid }">
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group id="input-group-1" label="Descripcion" label-for="input-1">
            <validation-provider
              rules="minmax:10,50|required"
              :bails="false"
              v-slot="{ errors }"
              name="descripcion"
            >
              <b-form-input
                id="input-1"
                v-model="task.description"
                type="text"
                required
                placeholder="Ingresa una descripcion"
              ></b-form-input>
              <error-message-input v-for="error in errors" :key="error" :message="error" />
            </validation-provider>
          </b-form-group>
          <b-form-group id="input-group-1" label="Email" label-for="input-1">
            <validation-provider rules="email|required" name="email" :bails="false" v-slot="{ errors }">
              <b-form-input
                id="input-1"
                v-model="task.email"
                type="email"
                required
                placeholder="Ingresar email a quien va dirigido"
              ></b-form-input>
              <error-message-input v-for="error in errors" :key="error" :message="error" />
            </validation-provider>
          </b-form-group>
          <b-form-group id="input-group-1" label="Nombre" label-for="input-1">
            <validation-provider rules="required" :bails="false" v-slot="{ errors }">
              <b-form-input
                id="input-1"
                v-model="task.name"
                type="text"
                required
                placeholder="Ingresar nombre"
              ></b-form-input>
              <error-message-input v-for="error in errors" :key="error" :message="error" />
            </validation-provider>
          </b-form-group>

          <b-button type="submit" :disabled="invalid" variant="primary"
            >Guardar</b-button
          >
          <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
        </b-form>
      </ValidationObserver>
    </b-card>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import "@/services/tasks/taskRules";
import ErrorMessageInput from "./ErrorMessageInput.vue";

export default {
  name: "form-task",
  components: {
    ValidationProvider,
    ErrorMessageInput,
    ValidationObserver
  },
  data() {
    return {
      task: {
        email: "",
        name: "",
        description: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$store.dispatch("tasksModule/saveTask", this.task);
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.task.email = "";
      this.task.name = "";
      this.task.description = null;
      // Trick to reset/clear native browser form validation state
    }
  }
};
</script>
