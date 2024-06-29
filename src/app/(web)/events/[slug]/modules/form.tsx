"use client";
import Link from "next/link";
import { IoMdShare } from "react-icons/io";
import { useState } from "react";

export default function SelectTickets() {
  const [tickets, setTickets] = useState([
    { id: 1, name: "Regular", price: 800, qty: 0 },
    { id: 2, name: "Front Fox", price: 800, qty: 0 },
    { id: 3, name: "Late Buddy", price: 800, qty: 0 },
    { id: 4, name: "Back Seater", price: 800, qty: 0 },
  ]);

  const handleIncrease = (id: number) => {
    setTickets(
      tickets.map((ticket) =>
        ticket.id === id ? { ...ticket, qty: ticket.qty + 1 } : ticket
      )
    );
  };

  const handleDecrease = (id: number) => {
    setTickets(
      tickets.map((ticket) =>
        ticket.id === id && ticket.qty > 0
          ? { ...ticket, qty: ticket.qty - 1 }
          : ticket
      )
    );
  };

  const totalCost = tickets.reduce(
    (total, ticket) => total + ticket.qty * ticket.price,
    0
  );

  const isCheckoutDisabled = tickets.every((ticket) => ticket.qty === 0);

  return (
    <div className="w-full md:w-1/2 h-full sticky top-20">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-center justify-between bg-slate-50 rounded-xl p-6">
          <div>
            <h2 className="font-bold text-xl mb-2">TTNT Five, Nairobi</h2>
            <div className="flex flex-row gap-2 items-center text-slate-500 text-sm">
              <div className="flex flex-col text-center text-xs bg-slate-200 px-2 py-1 rounded">
                <h3 className="text-slate-700">3 Jan</h3>
                <p>10:00am</p>
              </div>
              <p>Kenya Cinema, Nairobi</p>
            </div>
          </div>
          <div>
            <Link
              href="/events/demo"
              className="p-2 block bg-slate-100 text-slate-500 rounded-full"
            >
              <IoMdShare size={24} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col bg-slate-50 rounded-xl p-6">
          <div>
            <h3 className="font-bold text-lg">Select Tickets</h3>
          </div>
          <div className="flex flex-row justify-between items-center border-b border-slate-200 py-3">
            <div>
              <h4>Early Bird</h4>
              <p className="text-slate-500 text-sm">Ksh 800</p>
            </div>
            <div className="bg-red-600 text-slate-50 rounded-full px-4 py-1 text-sm">
              Sold out
            </div>
          </div>
          {tickets?.map((ticket) => (
            <div
              key={ticket?.id}
              className="flex flex-row justify-between items-center border-b border-slate-200 py-3"
            >
              <div>
                <h4>{ticket?.name}</h4>
                <p className="text-slate-500 text-sm">Ksh {ticket?.price}</p>
              </div>
              <div className="flex flex-row items-center bg-slate-200/[.4] rounded-full">
                <button
                  className="bg-slate-200 px-4 py-2 rounded-s-full"
                  onClick={() => handleDecrease(ticket.id)}
                >
                  -
                </button>
                <span className="px-4 flex items-center justify-center text-sm">
                  {ticket?.qty}
                </span>
                <button
                  className="bg-slate-200 px-4 py-2 rounded-e-full"
                  onClick={() => handleIncrease(ticket.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between bg-slate-50 rounded-xl p-6">
          <div>
            <p className="text-sm text-slate-500">Total</p>
            <h4 className="font-extrabold text-2xl text-slate-800">
              Ksh {totalCost}
            </h4>
          </div>
          <div>
            <button
              className={` text-slate-50 px-12 py-3 font-medium rounded-lg ${
                isCheckoutDisabled
                  ? "bg-slate-300 cursor-not-allowed"
                  : "bg-slate-800"
              }`}
              disabled={isCheckoutDisabled}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
