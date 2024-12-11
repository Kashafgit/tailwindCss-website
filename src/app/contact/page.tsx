import Image from "next/image"
export default function Contact() {
    return (

        <div className="contact-sec px-5 py-10 bg-gray-50">
            <h1 className="text-3xl md:text-4xl font-bold text-center pb-5">Contact us</h1>
            <br />

            <p className="text-center text-sm md:text-base lg:text-lg mb-10 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero facere ad maiores illum obcaecati reiciendis cum. Eos natus eveniet quaerat voluptatum aspernatur!
            </p>
            {/* left section */}
            <div className="flex flex-col md:flex-row justify-center items-start md:space-x-10 space-y-10 md:space-y-0">
                <div className="space-y-8 w-full md:w-1/2">
                    <div className="flex space-x-5 items-center">
                        <div className="w-14 h-14 shadow-md bg-white rounded-full flex items-center justify-center">
                            <Image src="/home.png" alt="home-icon" width={40} height={40} />
                        </div>
                        <div> <h2 className="text-orange-400 font-bold text-lg">Address</h2>
                            <p className="text-sm md:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div><br />
                    <div className="flex space-x-5">
                        <div className="w-14 h-14 shadow-md bg-white rounded-full flex items-center justify-center">
                            <Image src="/phone.png" alt="home-icon" width={40} height={40} />
                        </div>
                        <div> <h2 className="text-orange-400 font-bold text-[20px]">Phone</h2>
                            <p className="text-sm md:text-base">92312345678</p>
                        </div>
                    </div><br />
                    <div className="flex space-x-5">
                        <div className="w-14 h-14 shadow-md bg-white rounded-full flex items-center justify-center">
                            <Image src="/mail.png" alt="home-icon" width={40} height={40} />
                        </div>
                        <div> <h2 className="text-orange-400 font-bold text-[20px]">Email</h2>
                            <p className="text-sm md:text-base">Kashafakram493@gmail.com</p>
                        </div>
                    </div><br /></div>
                {/* right sec */}
                <div className="w-full md:w-1/2 bg-white p-5 shadow-md rounded-lg">
                    <h3 className="text-2xl mb-5 font-bold">Send Messages</h3>
                    <br />
                    <form className="space-y-3">
                        <label htmlFor="name" className="block text-sm font-bold">Full Name</label><br />
                        <input type="text" id="name" className="border-0 border-b-2 border-orange-400  mb-8 w-full focus:outline-none focus:border-orange-500" />
                        <br />
                        <label htmlFor="email:"  className="block text-sm font-bold">Email</label>
                        <input type="email" id="email" className="border-0 border-b-2 border-orange-400  mb-8 w-full focus:outline-none focus:border-orange-500" />
                        <br />
                        <label htmlFor="phone" className="block text-sm font-bold">Phone</label>
                        <input type="tel" name="phone" id="phone" className="border-0 border-b-2 border-orange-400  mb-8 w-full focus:outline-none focus:border-orange-500" />
                        <br />
                        <label htmlFor="message" className="block text-sm font-bold">Type Your Message</label>
                        <textarea name="message" id="message" rows={4} className="border-0 border-b-2 border-orange-400  mb-8 w-full focus:outline-none focus:border-orange-500 resi"></textarea>

                        <button type="submit" className="bg-orange-400 text-white hover:bg-orange-500 text-lg rounded-md w-full py-3 text-[20px]  font-bold text-opacity-100">Send</button>
                    </form>
                </div>
            </div>
        </div>



    )
}