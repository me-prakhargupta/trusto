import Image from "next/image";

// interface HeaderProps {
//     activeTab: string,
//     setActiveTab: (value : string) => void;
// }

export default function Header() {
    return(
        <div>
            <header className="px-10 py-4 flex justify-between align-items-center border rounded w-[calc(90vw-180px)] mb-5 ml-5 bg-white border-white shadow rounded">
                <div>
                    <input className="flex item-center w-100 h-14 outline-none px-8 rounded-4xl bg-gray-100 mx-auto" type="text" placeholder="What do you need help with today?"/>
                </div>
                <div className="flex justify-end gap-7">
                    <span  className="flex items-center justify-center h-14 w-14 rounded-4xl bg-gray-100  hover:cursor-pointer">
                        <i className="fa-regular fa-envelope text-gray-700 hover:text-[#028714] text-xl"></i>
                    </span>
                    <span className="flex items-center justify-center h-14 w-14 rounded-4xl bg-gray-100 hover:cursor-pointer">
                        <i className="fa-regular fa-bell text-gray-700 hover:text-[#028714] text-xl"></i>
                    </span>
                    <span className="flex gap">
                        <span className="flex items-center justify-center h-14 w-14 rounded-4xl bg-gray-100 hover:cursor-pointer">
                            <Image className="rounded-4xl" src={"/user.jpg"} width={50} height={50} alt="Prakhar Gupta"/>
                        </span>
                        <span className="flex items-center justify-center h-14 w-40 hover:cursor-pointer">
                            <span>
                                <p className="font-bold text-lg">Testing User</p>
                                <p className="text-base text-gray-500">testing@gmail.com</p>
                            </span>
                        </span>
                    </span>
                </div>
            </header>
        </div>
    );
};