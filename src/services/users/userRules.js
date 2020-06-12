import { extend } from "vee-validate";

extend("required", {
  validate(value) {
    return {
      required: true,
      valid: ["", null, undefined].indexOf(value) === -1
    };
  },
  message: "El campo {_field_} es requerido",
  // This rule reports the `required` state of the field.
  computesRequired: true
});

