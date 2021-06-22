import { IncorretValue, RequiredField } from "../constants/message";

const IsValidInputUpdate = ({ id, nombre }) => {
  const errors = {};

  if (!id) {
    errors.id = RequiredField;
  }

  if (nombre.length < 5 || nombre.length > 50) {
    errors.nombre = IncorretValue;
  }

  return errors;
};

export default IsValidInputUpdate;
