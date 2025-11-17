import React from 'react';
  import { ToastContainer, toast, Bounce } from "react-toastify";

const Booking = () => {

    const book = (e) =>{
        e.preventDefault();
        e.target.reset();

        toast.success("Booking Confirmed!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
    }
    return (
      <div className="w-11/12 mx-auto flex items-center justify-center my-10">
        <div className="border border-gray-200 rounded-2xl shadow-sm p-4 w-full md:w-1/2">
          <h1 className="text-2xl font-bold mt-5 text-center">
            Book a Consultation
          </h1>
          <p className="text-gray-500 mt-3 text-center">
            Get expert advice on caring for your plant
          </p>
          <form onSubmit={(e)=>book(e)} className="mt-4 px-10">
            <div className="flex flex-col">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input outline-none"
              />
            </div>

            <div className="my-4 flex flex-col">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                className="input outline-none"
              />
            </div>

            <button type='submit' className="btn bg-green-500 text-white w-fit">
              Book Now
            </button>
          </form>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </div>
    );
};

export default Booking;