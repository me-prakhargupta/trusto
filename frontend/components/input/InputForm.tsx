// "use client";
// import { useState } from "react";

export default function Form() {
    // const[selected, setSelected] = useState(true);

    // const handleSelect = (e: any) => {
    //     e.preventDefault();
    //     setSelected(false);
    // };

    return(
            <form>
                <input className="mt-7 flex item-center w-150 h-12 outline-none p-7 border-2 rounded-4xl border-[#028174] mx-auto" type="text" placeholder="What do you need help with today?"/>

                {/* <div className="w-150 mt-7 rounded-2xl border-2 border-[#028174] mx-auto transition duration-500">
                    <input className="flex items-center w-150 h-12 outline-none p-7" type="text" placeholder="What do you need help with today?"/>
                    <hr className="w-135 text-gray-400 mx-auto"/>
                    <div className="flex items-center px-7 gap-4 py-4">
                        <button className="border px-2 py-1 rounded-lg text-gray-500 text-sm hover:scale-[1.01]">Utility</button>
                        <button className="border px-2 py-1 rounded-lg text-gray-500 text-sm hover:scale-[1.01]">Property</button>
                        <button className="border px-2 py-1 rounded-lg text-gray-500 text-sm hover:scale-[1.01]">Document</button>
                        <button className="border px-2 py-1 rounded-lg text-gray-500 text-sm hover:scale-[1.01]">Electricity</button>
                        <button className="border px-2 py-1 rounded-lg text-gray-500 text-sm hover:scale-[1.01]">Appications</button>
                        <button className="border px-2 py-1 rounded-lg text-gray-500 text-sm hover:scale-[1.01]">Paperwork</button>
                    </div>
                </div> */}
            </form>
    );
};