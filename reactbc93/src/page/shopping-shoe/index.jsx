import { useState } from "react";
import Shoe from "./Shoe";
import Detail from "./Detail";
import ListShoe from "./ListShoe";
import data from "./data.json";
import Cart from "./Cart";

const ShoppingShoe = () => {
  const [listShoe, setListShoe] = useState(data);
  const [selectedShoe, setSelectedShoe] = useState(listShoe[0]);
  const [carts, setCart] = useState([]);
  // console.log("data shoe", listShoe);

  /* Nhận dữ liệu từ listShoe <= Shoe 
    function này như 1 cái rổ
    */
  const handleDetail = (shoe) => {
    /* vì shoe là dữ liệu cục bộ bên trong của rổ thôi, 
    làm sao chuyển data qua cho Detail được ?
    -> sẽ tạo biến global: selectedShoe
     */
    //   console.log("Detail - dữ liệu nhận được từ cháu shoe", shoe);
    // Cập nhật lại state selectedShoe
    setSelectedShoe(shoe);
  };
  const handleAddToCart = (shoe) => {
    //  console.log("Cart - dữ liệu nhận được từ cháu shoe", shoe);
    // Tạo 1 object mới
    const cartItem = {
      id: shoe.id,
      name: shoe.name,
      image: shoe.image,
      price: shoe.price,
      quantity: 1,
    };
    // Clone mảng carts từ state
    const newCart = [...carts];
    // Kiem tra xem cartItem đã tồn tại trong newCart chưa
    const index = findIndexCartItem(cartItem.id);
    if (index !== -1) {
      newCart[index].quantity += 1;
    } else {
      newCart.push(cartItem);
    }
    // Cập nhận carts từ state
    setCart(newCart);
  };
  // console.log("cart", carts);
  const findIndexCartItem = (id) => {
    return carts.findIndex((item) => item.id === id);
  };
  const handleRemoveCartItem = (id) => {
    // console.log("id", id);
    const index = findIndexCartItem(id);

    if (index !== -1) {
      const newCart = [...carts];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };
  const handleUpdateCartItem = (id, status) => {
    const index = findIndexCartItem(id);
    if (index !== -1) {
      const newCart = [...carts];
      if (status === true) {
        newCart[index].quantity += 1;
      } else {
        if (newCart[index].quantity > 1) {
          newCart[index].quantity -= 1;
        } else {
          newCart.splice(index, 1);
        }
      }
      setCart(newCart);
    }
  };
  return (
    <div>
      <div className="container">
        <h2 className="py-4 text-center text-uppercase">Shopping Shoes</h2>
        <Cart
          onCarts={carts}
          onRemove={handleRemoveCartItem}
          onUpdate={handleUpdateCartItem}
        />
        <ListShoe
          listShoe={listShoe}
          onDetail={handleDetail}
          onAddToCart={handleAddToCart}
        />
        {/* truyền cái rổ có function cho listShoe */}
        <Detail onSelected={selectedShoe} />
      </div>
    </div>
  );
};

export default ShoppingShoe;
