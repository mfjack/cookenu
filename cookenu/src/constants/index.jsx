export const BASE_URL = 'https://api-cookenu.onrender.com';

export const validateEmail = (email) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(email);
export const validatePassword = (password) => /^.{8,}$/.test(password);
export const validateName = (name) => /^.{3,}.*$/.test(name);
