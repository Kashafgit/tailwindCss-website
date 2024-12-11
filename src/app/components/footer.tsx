import Image from "next/image";
import Link from "next/link";
export default function Footer() {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-center px-5 py-8 bg-gray-50 space-y-5 md:space-y-0">
                <div className="text-orange-500 font-bold text-[20px] ">
                
                    DewShape
                </div>
                <ul className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-7">
                <li className="space-x-5">
                    <Link href="/" className="text-orange-500 text-[15px] font-bold hover:underline">Home</Link>
                    <Link href="/products" className="text-orange-500 text-[15px] font-bold hover:underline">Products</Link>
                    <Link href="/about" className="text-orange-500 text-[15px] font-bold hover:underline">About</Link>
                    <Link href="/contact" className="text-orange-500 text-[15px] font-bold hover:underline">Contact</Link>
                </li>
            </ul>
            {/* social-media icons */}
           <div className="flex justify-center items-center space-x-5">
           <Link href="https://www.facebook.com/profile.php?id=61553826722345 " target="_blank"><Image src="/facebk.png" width={30} height={30} alt="facebook icon" className="hover:scale-110 transition-transform duration-200"/></Link>
            <Link href="https://github.com/Kashafgit" target="_blank"><Image src="/github-icon.png" width={30} height={30} alt="facebook icon" className="text-orange-500 text-[15px] font-bold hover:underline"/></Link>
            <Link href="https://www.instagram.com/kashafakram9?igsh=YzljYTk1ODg3zg==" target="_blank"><Image src="/instagram.jpg" width={30} height={30} alt="facebook icon" className="text-orange-500 text-[15px] font-bold hover:underline"/></Link>
            <Link href="https://www.linkedin.com/in/kashaf-akram-b26b61277" target="_blank"><Image src="/linked.jpg" width={30} height={30} alt="facebook icon" className="text-orange-500 text-[15px] font-bold hover:underline"/></Link>
           </div>
            </div>
           <hr className="border-t border-orange-400"/>
           <br />
           <p className="text-center py-5 text-sm md:text-base text-orange-400 font-bold">&copy;2024 All Right Reserved. Design by Kashaf Akram</p>

        </>
    )
}