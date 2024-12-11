import { Menu } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import {
    Sheet,
    SheetContent,

    SheetTrigger,
} from "@/components/ui/sheet"


export default function Header() {
    return (
        <>
            <header className="flex justify-between  py-3 px-4  items-center max-w-screen-2xl mx-auto">


                <div className=" flex items-center space-x-2 ">
                    <Image src="/logo bottle.png" alt="logo" width={80} height={80} className="w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20" />
                     <span className="text-orange-400 font-bold text-xl md:text-2xl lg:text-3xl">DewShape</span>
                </div>
                <ul className=" hidden md:block">
                    <li className="text-orange-400 flex justify-between space-x-7 text-[20px] font-bold">
                        <Link href="/">Home</Link>
                        <Link href="/products">Products</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
                <Sheet>
                    <SheetTrigger className="md:hidden">
                        <Menu className="border border-orange-500 "/>
                    </SheetTrigger>
                    <SheetContent>
                    <ul className="md:block">
                    <li className="text-orange-400 flex flex-col space-y-5 font-bold">
                        <Link href="/">Home</Link>
                        <Link href="/products">Products</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
                    </SheetContent>
                </Sheet>

            </header>




        </>
    )
}