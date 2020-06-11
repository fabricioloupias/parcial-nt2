import { extend } from "vee-validate";

extend("positive", (value) => {
  if (value >= 0) {
    return true;
  }

  return "This field must be a positive number";
});

extend("negative", (value) => {
  if (value.length < 3) {
    return "This field must be 3";
  }
  return false;
});
