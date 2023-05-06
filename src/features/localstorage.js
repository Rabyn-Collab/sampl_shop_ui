export const setUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
}

export const cartCrud = (carts) => {
  localStorage.setItem('carts', JSON.stringify(carts));
}
export const clearAll = () => {
  localStorage.clear();
}
export const clearCart = () => {
  localStorage.removeItem('carts');
}
export const getCart = () => {
  const data = localStorage.getItem('carts');
  return data === null ? [] : JSON.parse(data);
}

export const getUser = () => {
  const data = localStorage.getItem('user');
  return data === null ? null : JSON.parse(data);
}