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
                <input className="mt-7 flex item-center w-170 h-12 outline-none p-8 border-2 rounded-4xl border-[#028174] mx-auto" type="text" placeholder="What do you need help with today?"/>
            </form>
    );
};