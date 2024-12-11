

export default function Products(){
    return(
        <>
        <h1 className="text-3xl md:text-4xl my-5 font-bold text-center">Our Popular Product</h1>
        <br />
        <p className="text-center" >Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <br />
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7  justify-items-center">
            <div className="bg-[url('/pic2.png')] bg-cover bg-center bg-no-repeat w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mb-5">
            </div>
            <div className="bg-[url('/pic3.png')] bg-cover bg-center bg-no-repeat w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-72 mb-5"></div>
            <div className="bg-[url('/pic-3.jpg')] bg-cover bg-center bg-no-repeat w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-72 relative -top-4 mb-5"></div>
            <div className="bg-[url('/pic4.jpg')] bg-cover bg-center bg-no-repeat w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 relative -top-12 sm:mt-5"></div>
       
        </div>
        
        
           
       

        



        </>
    )
}