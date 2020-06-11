import { extend } from "vee-validate";

extend("minmax", {
  validate(value, { min, max }) {
    const length = value.length;

    if (length < min && length > 0) {
      return "La descripcion es muy corta";
    }

    if (length > max) {
      return "La descripcion es muy larga";
    }

    return true;
  },
  params: ["min", "max"]
});

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

extend("email", {
  validate(value) {
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
  },
  message: "Email invalido"
});
