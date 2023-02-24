const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      // Check if Product already exists
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // Increase the quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

      case "DELITEM":
        // Tìm sản phẩm cần xóa trong giỏ hàng
        const existingItem = state.find((item) => item.id === product.id);
      
        // Nếu sản phẩm tồn tại trong giỏ hàng
        if (existingItem) {
          // Nếu sản phẩm có số lượng trong giỏ hàng lớn hơn 1, giảm số lượng đi 1
          if (existingItem.qty > 1) {
            return state.map((item) =>
              item.id === product.id ? { ...item, qty: item.qty - 1 } : item
            );
          } else {
            // Nếu sản phẩm chỉ còn 1 thì xóa nó khỏi giỏ hàng
            return state.filter((item) => item.id !== product.id);
          }
        }
        // Nếu sản phẩm không tồn tại trong giỏ hàng thì trả về state hiện tại
        return state;
      
      case "DELPRODUCT":
        const updatedCart = [...state];
        const index = updatedCart.findIndex((x) => x.id === product.id);
        if (index >= 0) {
          updatedCart.splice(index, 1);
        }
        return updatedCart;
    default:
      return state;
      break;
  }
};

export default handleCart;
