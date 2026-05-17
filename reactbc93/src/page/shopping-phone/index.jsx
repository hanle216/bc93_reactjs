import { useState } from "react";
import Phone from "./Phone";
import Detail from "./Detail";
import ListPhone from "./ListPhone";
import data from "./data.json";
import Cart from "./Cart";

const ShoppingPhone = () => {
  const [listPhone, setListPhone] = useState(data);
  const [selectedPhone, setSelectdPhone] = useState(listPhone[0]);
  const [carts, setCarts] = useState([]);
  console.log("data", data);
  /* Nhận dữ liệu từ ListPhone <= Phone */
  const handleDetail = (phone) => {
    setSelectdPhone(phone);
  };
  // Kiểm tra cartItem đã tồn tai trong newCarts chưa
  // findIndex trả về index -1 nếu ko tìm thấy, khác -1 thì tìm thấy
  const findIndexCartItem = (maSP) => {
    return carts.findIndex((item) => item.maSP === maSP);
  };
  /* Nhận dữ liệu từ ListPhone <= Phone */
  const handleAddToCart = (phone) => {
    // Tao 1 object cartItem mới
    const cartItem = {
      maSP: phone.maSP,
      tenSP: phone.tenSP,
      hinhAnh: phone.hinhAnh,
      giaBan: phone.giaBan,
      soLuong: 1,
    };
    // Clone mảng carts từ state => tạo thành mảng carts mới
    const newCarts = [...carts]; // spread operators (ES6)

    const index = findIndexCartItem(cartItem.maSP);
    if (index !== -1) {
      // Nếu cartItem đã tồn tại trong newCarts => tăng số lượng lên 1
      newCarts[index].soLuong += 1;
    } else {
      // Thêm cartItem vào mảng newCarts
      newCarts.push(cartItem);
    }

    // Cập nhật lại state carts
    setCarts(newCarts);
  };
  /* Nhận dữ liệu từ Cart */
  const handleDeleteCartItem = (maSP) => {
    const index = findIndexCartItem(maSP);
    if (index !== -1) {
      // Clone mảng carts từ state
      const newCarts = [...carts];
      // delete, splice(vị trí của item, số lượng muốn xoá)
      newCarts.splice(index, 1);
      // Cập nhật lại state
      setCarts(newCarts);
    }
  };
  /* Nhận dữ liệu từ Cart */
  const handleUpdateCartItem = (maSP, status) => {
    const index = findIndexCartItem(maSP);
    if (index !== -1) {
      const newCarts = [...carts];
      if (status) {
        newCarts[index].soLuong += 1;
      } else {
        // kiểm tra số lượng > 1 -> giảm số lượng, ngược lại xoá item ra khỏi cart
        if (newCarts[index].soLuong > 1) {
          newCarts[index].soLuong -= 1;
        } else {
          newCarts.splice(index, 1);
        }
      }
      setCarts(newCarts);
    }
  };
  return (
    <div>
      <h1>Shopping Phone</h1>
      <Cart
        carts={carts}
        onDeleteCart={handleDeleteCartItem}
        updateCart={handleUpdateCartItem}
      />
      <ListPhone
        listPhone={listPhone}
        onDetail={handleDetail}
        onAddToCart={handleAddToCart}
      />
      <Detail selectedPhone={selectedPhone} />
    </div>
  );
};

export default ShoppingPhone;
