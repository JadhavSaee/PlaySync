const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  
  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };
  
  const isValidUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/; 
    return usernameRegex.test(username);
  };
  
  const doPasswordsMatch = (password, confirmPassword) => {
    return password === confirmPassword;
  };
  
  const isFieldEmpty = (field) => {
    return field.trim() === '';
  };
  
  const isNumberInRange = (number, min, max) => {
    return number >= min && number <= max;
  };
  
  export default {
    isValidEmail,
    isValidPassword,
    isValidUsername,
    doPasswordsMatch,
    isFieldEmpty,
    isNumberInRange,
  };
  
