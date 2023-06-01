export const inputTypeByName = (name) => {
  if (name === "password" || name === "email") return name;
  if (name === "confirmPassword") return "password";

  return "text";
};
