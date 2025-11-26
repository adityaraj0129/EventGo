import React, { useState } from "react";
import { ShoppingCart, X } from "lucide-react"; 
import PaymentsBill from "./Payments/PaymentsBill";

const PopupBox = ({ event, onClose }) => {
  const [openPayment, setOpenPayment] = useState(null);
  return (
    <div className="fixed top-10 right-10 w-[650px] h-130 bg-purple-100 border border-purple-300 shadow-xl rounded-xl p-6 animate-slide-up z-50 mt-10">

      {/* Close Button */}
      <button onClick={onClose} className="absolute top-3 right-3 bg-purple-600 text-white w-8 h-8 flex items-center justify-center rounded-full"><X size={18}/></button>

      <div className="flex gap-5">
        <img
          src={event.image}
          alt=""
          className="w-28 h-28 object-cover rounded-lg border"
        />

        <div className="flex flex-col justify-center">
          <h2 className="font-bold text-xl text-purple-900">{event.title}</h2>
          <p className="text-gray-700 mt-1">Organizer: {event.organiser}</p>
          <p className="text-gray-600 mt-2 text-sm">
            Price: ₹{event.price} | Rating: ⭐{event.rating}
          </p>
        </div>
      </div>

      <p className="text-right text-xs text-gray-500 mt-2">ads via Carbon</p>

      <div className="flex justify-end" >
        <button onClick={() => setOpenPayment(event)} className="border border-black-100 flex justify-center items-center w-100 h-10 rounded-xl bg-blue-00 m-2 hover:shadow-xl/50 bg-blue-600">Book Event</button>

        <button className="border border-black-100 flex justify-center items-center w-20 h-10 rounded-xl bg-blue-300 m-2"> <ShoppingCart /></button>

         {openPayment && (
        <PaymentsBill event={openPayment} onClose={()=>setOpenPayment(null)}/> 
      )}
      </div>
    </div>
  );
};

export default PopupBox;
