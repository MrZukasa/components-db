import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const Modal = (modale) => {

    if(!modale.showModal) {
        return null
    }

    return (
            <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-sm">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800 outline-none focus:outline-none text-gray-300">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-300 bg-slate-700 rounded-t">
                      <p className="text-2xl font-semibold">
                        Information
                      </p>                      
                    </div>
                    {/*body*/}
                    <div className="relative p-3 flex-auto">
                      <p className="my-4 text-slate-300 text-lg leading-relaxed text-center pr-10 pl-10">
                        {modale.response}
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-4 border-t border-solid bg-slate-700 border-slate-300 rounded-b">
                      <button className="bottone" type="button" onClick={modale.onClose}>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
    );
}
 
export default Modal;