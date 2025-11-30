export default function HomeHowitWorks() {
    return(
        <div className="mt-25 px-45 py-10 max-w mx-auto bg-[#FFE3B3]">
            <p className="w-120 mx-auto text-center text-base text-gray-700">A simple and reliable process designed for your convenience.</p>
            <div className="relative container mx-auto py-5 flex justify-end">
                <main className="bg-[url('https://images.ctfassets.net/vwt5n1ljn95x/68OY5vAHQdG6blVvXM1WT7/5f45c9eda06d29820a9836a11232ef16/how_it_works_pic_updated.jpg?w=1920&q=75&fm=webp')] w-230 bg-cover flex items-end bg-center h-135 py-7 px-4 rounded-lg"></main>
                <div className="absolute top-8 left-0.5 w-120 bg-white border border-gray-200 rounded-xl border rounded-xl p-10">
                        <h3 className="text-3xl font-extrabold text-[#028174] mt mb-7">How it Works</h3>
                        <div className="flex items-center py-5">
                            <p className="text-black text-2xl bg-[#FFE3B3] px-4 py-2 rounded-full">1.</p>
                            <p className="text-gray-600 text-2xl px-5">Choose you task</p>
                        </div>
                        <div className="flex items-center py-5">
                            <p className="text-black text-2xl bg-[#FFE3B3] px-4 py-2 rounded-full">2.</p>
                            <p className="text-gray-600 text-2xl px-5">Schedule your task as early as today</p>
                        </div>
                        <div className="flex items-center py-5">
                            <p className="text-black text-2xl bg-[#FFE3B3] px-4 py-2 rounded-full">3.</p>
                            <p className="text-gray-600 text-2xl px-5">Get a Trusted Professional</p>
                        </div>
                        <div className="flex items-center py-5">
                            <p className="text-black text-2xl bg-[#FFE3B3] px-4 py-2 rounded-full">4.</p>
                            <p className="text-gray-600 text-2xl px-5">Relax, and track your task</p>
                        </div>
                    </div>
            </div>
        </div>
    );
};