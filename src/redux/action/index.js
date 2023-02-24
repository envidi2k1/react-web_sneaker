// For adding item to the Cart
export const addCart = (product) => {
    return {
      type: "ADDITEM",
      payload: product,
    };
  };
  
  // For deleting item from the Cart
  export const delCart = (product) => {
    return {
      type: "DELITEM",
      payload: product,
    };
  };
  
  export const clearCart = (product) => {
    return {
      type: "DELPRODUCT",
      payload: product,
    };
  }

  export const updateCart = (product) => {
    return {
      type: "UPDATECART",
      payload: product,
    };
  };