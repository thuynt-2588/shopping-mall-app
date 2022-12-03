const emailRegex = /\S+@\S+\.\S+/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const isValidEmail = (email: string) => {
  return emailRegex.test(email);
};

export const isValidPassword = (password: string) => {
  return passwordRegex.test(password);
};

export const isValidFirstName = (firstName: string) => {
  return firstName.length < 3 || firstName.length > 50;
};

export const formatPrice = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
