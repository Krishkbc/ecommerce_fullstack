import OrderDetailHeader from "./OrderDetailHeader";
import OrderState from "./OrderState";
import OrderActivity from "./OrderActivity";
import TotalProduct from "./TotalProduct";
import RatingModal from "../../component/Modal/RatingModal";
import { useState } from "react";
import AddCardModal from "../../component/Modal/AddCardModal";

export default function OrderDetails() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="container mx-auto px-6">
      <OrderDetailHeader setIsOpen={setOpenModal} />
      <OrderState />
      <OrderActivity />
      <TotalProduct />
      {openModal && <RatingModal setIsOpen={setOpenModal} />}
    </div>
  );
}
