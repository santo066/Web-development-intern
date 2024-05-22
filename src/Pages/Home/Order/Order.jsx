import img6 from "../../../assets/img/10008.png"
import img7 from "../../../assets/img/10007.png"
import img8 from "../../../assets/img/10010.png"
import img9 from "../../../assets/img/10016.png"


export default function Order() {
    return (
        <div className="md:mt-[195px] mt-24">
            <div className="text-center">
                <h1 className="md:text-5xl text-2xl font-medium md:font-semibold">How To Order?</h1>
            </div>


            <div className=" mt-6 md:mt-14 w-full  place-content-around gap-5  grid-cols-2 grid md:grid-cols-3 md:gap-8 md:flex md:h-[300px]">
                {/* card1 */}
                <div className="">
                    <h1 className="md:text-5xl text-sm font-bold text-[#FF5331] ">01</h1>
                    <div className="md:w-[214px] grid  place-content-center md:h-[267px] bg-[#f7f5f5] rounded-md">
                        <div className="md:w-[108px] ml-4 md:ml-0 w-[60px] h-[60px] grid  place-content-center md:h-[108px] rounded-full bg-white shadow-">
                            <img src={img6} className="md:w-[54px] w-[35px] h-[35px] md:h-[54px]" alt="" />
                        </div>
                        <p className="text-center mt-3 md:mt-8 font-medium">Choose your <br /> location</p>
                    </div>
                </div>
                {/* card2 */}
                <div className="">
                    <h1 className="md:text-5xl text-sm font-bold text-[#FF5331] ">02</h1>
                    <div className="md:w-[214px] grid  place-content-center md:h-[267px] bg-[#f7f5f5] rounded-md">

                        <div className="md:w-[108px] ml-4 md:ml-0 w-[60px] h-[60px] grid  place-content-center md:h-[108px] rounded-full bg-white shadow-">
                            <img src={img7} className="md:w-[54px] w-[35px] h-[35px] md:h-[54px]" alt="" />
                        </div>
                        <p className="text-center mt-3 md:mt-8 font-medium">Choose what <br />to eat</p>
                    </div>
                </div>
                {/* card3 */}
                <div className="">
                    <h1 className="md:text-5xl text-sm font-bold text-[#FF5331] ">03</h1>
                    <div className="md:w-[214px] grid  place-content-center md:h-[267px] bg-[#f7f5f5] rounded-md">

                        <div className="md:w-[108px] ml-4 md:ml-0 w-[60px] h-[60px] grid  place-content-center md:h-[108px] rounded-full bg-white shadow-">
                            <img src={img8} className="md:w-[54px] w-[35px] h-[35px] md:h-[54px]" alt="" />
                        </div>
                        <p className="text-center mt-3 md:mt-8 font-medium">May your first <br /> order</p>
                    </div>
                </div>
                {/* card3 */}
                <div className="">
                    <h1 className="md:text-5xl text-sm font-bold text-[#FF5331] ">04</h1>
                    <div className="md:w-[214px] grid  place-content-center md:h-[267px] bg-[#f7f5f5] rounded-md">

                        <div className="md:w-[108px] ml-4 md:ml-0 w-[60px] h-[60px] grid  place-content-center md:h-[108px] rounded-full bg-white shadow-">
                            <img src={img9} className="md:w-[54px] w-[35px] h-[35px] md:h-[54px]" alt="" />
                        </div>
                        <p className="text-center mt-3 md:mt-8 font-medium">Now! Your <br /> food in way</p>
                    </div>
                </div>

            </div>
        </div>
    )
}