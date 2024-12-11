import Image from "next/image"
import Products from "./products/page"
import About from "./about/page";
import Contact from "./contact/page";
export default function Home() {
  return (

    <>
      <hr className="border-1 border-orange-400"/>
      <main className="flex flex-col md:flex-row md:space-x-10 justify-center items-center p-5 ">
        <div className="flex justify-center">
          <Image src="/pic1.jpg" alt="pic 1" width={800} height={800} className="rounded-lg w-full h-auto max-w-sm md:max-w-md"/>
        </div>
        <div className="text-center md:text-left md:max-w-lg">
          <h1 className=" my-5 text-4xl md:text-5xl leading-tight font-bold">Get All Your Favorite <br />Cosmetic Products</h1>
          <br />
          <p className="max-w-96 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae perspiciatis, sit asperiores, eos vel expedita, et eaque dolorem aut animi modi voluptatibus. Quidem, ratione dolorum, mollitia dolores laudantium facilis, incidunt dignissimos optio nisi molestiae expedita!</p>
          <br />
          <div className="flex flex-col sm:flex-row sm:space-x-4 mt-5">
            <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">Shop Now</button>
            <button className="border border-black px-6 py-3 rounded hover:bg-gray-200 mt-3 sm:mt-0">Read More</button>
          </div>
        </div>
      </main>
      <Products />
      {/* sec last section */}
      <div className="new-products p-5 max-w-screen-2xl mx-auto ">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Short heading goes here</h2>
        <br />
        <p className="text-center text-gray-600 my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi rem unde voluptates?</p>
        <div className="grid grid-col-1 sm:grid-cols-2  gap-10 mt-8">
          <div className="flex flex-col items-center text-center ">
            <Image src="/pic6.jpg" alt="img-6" width={300} height={200} className="rounded-lg w-full h-auto max-w-xs"/>
            <br />
            <h3 className=" font-bold text-lg mt-4">Glow like a pro with our NEW Glow Time pro BB cream</h3>
            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nihil placeat facere quo.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/pic8.jpg" alt="img-6" width={300} height={200} className="rounded-lg w-full h-auto max-w-xs"/>
            <br />
            <h3 className="font-bold text-lg mt-4 md:p-3">How to apply Lipstick Color (By the Numbers)</h3>
            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nihil placeat facere quo.</p>
          </div>
          <div className="flex flex-col items-center text-center ">
            <Image src="/pic 9.jpg" alt="img-6" width={300} height={200} className="rounded-lg w-full h-auto max-w-xs "/>
            <br />
            <h3 className="font-bold text-lg mt-4">Say Goodbye to dry. The ultimate Guids to Glowing Winter skin</h3>
            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nihil placeat facere quo.</p>
          </div>
          <div className="flex flex-col items-center text-center ">
            <Image src="/blush.jpg" alt="img-6" width={300} height={200} className="rounded-lg w-full h-auto max-w-xs "/>
            <br />
            <h3 className="font-bold text-lg mt-4">Start off by applying a small amount of products</h3>
            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nihil placeat facere quo.</p>
          </div>

        </div>

      </div>

      <About />
      <Contact/>

    </>
  )
}