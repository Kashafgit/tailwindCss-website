import Image from "next/image"
export default function About() {
    return (
        <>
            <h3 className="text-3xl md:text-4xl font-bold text-center py-5">About Us</h3>
            <br />
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10 space-y-5 md:space-y-0 px-5">

               <div className="flex justify-center">
               <Image src="/girls.jpg" alt="about-img" width={400} height={400} className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object cover rounded-lg shadow-lg"/>
               </div>
               <div className="max-w-md md:max-w-lg lg:max-w-xl text-center md:text-left">
               <p className="text-sm sm:text-base lg:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam neque molestias voluptas sunt sapiente culpa nostrum debitis perferendis eveniet nulla aperiam fugiat blanditiis ad magnam ea id numquam sit magni modi, optio laborum quaerat eligendi illum. Commodi ipsa tempore dolorum qui architecto, culpa labore doloremque voluptatum quas repellat suscipit eius.</p>
              <br />
              <h2 className="font-extrabold text-lg sm:text-xl lg-text-2xl ">Name Surname</h2> 
              <p className="font-bold text-sm sm:text-base">Paris ABC Company</p>
               </div>
              
            </div>


        </>
    )
}