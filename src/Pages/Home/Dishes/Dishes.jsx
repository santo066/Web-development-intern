
import img1 from "../../../assets/img/10011.png"
import img2 from "../../../assets/img/10010.png"
import img3 from "../../../assets/img/10009.png"
import img4 from "../../../assets/img/Illustrations.png"
import img5 from "../../../assets/img/Vector (1).png"
import img6 from "../../../assets/img/10013.png"
import img7 from "../../../assets/img/10014.png"
import img8 from "../../../assets/img/10015.png"


export default function Dishes() {
    return (
        <div className="md:mt-[200px] mt-[100px]">
            <div className="md:w-[622px] text-center mx-auto ">
                <h3 className="md:text-4xl text-3xl font-semibold">MORE THAN <span className="text-[#FF5331]">10,000</span> DISHES <br />TO ORDER!</h3>
                <p>Welcome to The Biggest Network of Food Ordering & Delivery</p>
            </div>

            {/* anopther part */}
            <div className="md:flex justify-end gap-8 mt-[45px]">

                <div className="md:w-[568px] w-full  gap-10 place-items-center  grid grid-cols-3 md:gap-8 md:flex md:h-[232px]">

                    {/* card1 */}
                    <div className="md:w-[168px] grid  place-content-center md:h-[232px] bg-[#f7f5f5] rounded-md">
                        <div className="md:w-[108px] w-[60px] h-[60px] grid  place-content-center md:h-[108px] rounded-full bg-white shadow-">
                            <img src={img1} className="md:w-[54px] w-[35px] h-[35px] md:h-[54px]" alt="" />
                        </div>
                        <p className="text-center mt-3 md:mt-8">Pizza</p>
                    </div>
                    {/* card2 */}
                    <div className="md:w-[168px] grid  place-content-center md:h-[232px] bg-[#f7f5f5] rounded-md">
                        <div className="md:w-[108px] w-[60px] h-[60px] grid  place-content-center md:h-[108px] rounded-full bg-white">
                            <img src={img2} className="md:w-[54px] w-[35px] h-[35px] md:h-[54px]" alt="" />
                        </div>
                        <p className="text-center mt-3 md:mt-8">Burger</p>
                    </div>
                    {/* card3 */}
                    <div className="md:w-[168px] grid  place-content-center md:h-[232px] bg-[#f7f5f5] rounded-md">
                        <div className="md:w-[108px] w-[60px] h-[60px] grid  place-content-center md:h-[108px] rounded-full bg-white">
                            <img src={img3} className="md:w-[54px] w-[35px] h-[35px] md:h-[54px]" alt="" />
                        </div>
                        <p className="text-center mt-3 md:mt-8">Sushi</p>
                    </div>

                </div>

                <div className="md:w-[568px] mt-6 md:mt-0 grid md:h-[232px] bg-[#f7f5f5] rounded-2xl">
                    <h4 className="ml-7 mt-7 md:text-[25px] text-[17px] font-medium">Find <span className="text-[#FF5331]">deals</span>, <span className="text-[#009B00]">free delivery</span>, and more <br /> from our restaurant partners.</h4>
                    <div className="md:w-[192px] w-[100px] h-[70px] justify-self-end  mr-[27px] md:h-[116px]">
                        <img src={img4} alt="" />
                    </div>
                </div>
            </div>

            {/* part 2 */}

            <div className="md:flex  gap-8 mt-[45px]">

                <div className="md:w-[568px]  grid md:h-[232px]">
                    <img src={img5} alt="" />
                    <p>“Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.”</p>
                    
                </div>


                <div className="md:w-[568px] mt-6 md:mt-0 w-full  gap-10 place-items-center  grid grid-cols-3 md:gap-8 md:flex md:h-[232px]">

                    {/* card1 */}
                    <div className="md:w-[168px] grid  place-content-center md:h-[232px] bg-[#f7f5f5] rounded-md">
                        <div className="md:w-[108px] w-[60px] h-[60px] grid  place-content-center md:h-[108px] rounded-full bg-white shadow-">
                            <img src={img6} className="md:w-[54px] w-[35px] h-[35px] md:h-[54px]" alt="" />
                        </div>
                        <p className="text-center mt-3 md:mt-8">Pizza</p>
                    </div>
                    {/* card2 */}
                    <div className="md:w-[168px] grid  place-content-center md:h-[232px] bg-[#f7f5f5] rounded-md">
                        <div className="md:w-[108px] w-[60px] h-[60px] grid  place-content-center md:h-[108px] rounded-full bg-white">
                            <img src={img7} className="md:w-[54px] w-[35px] h-[35px] md:h-[54px]" alt="" />
                        </div>
                        <p className="text-center mt-3 md:mt-8">Burger</p>
                    </div>
                    {/* card3 */}
                    <div className="md:w-[168px] grid  place-content-center md:h-[232px] bg-[#f7f5f5] rounded-md">
                        <div className="md:w-[108px] w-[60px] h-[60px] grid  place-content-center md:h-[108px] rounded-full bg-white">
                            <img src={img8} className="md:w-[54px] w-[35px] h-[35px] md:h-[54px]" alt="" />
                        </div>
                        <p className="text-center mt-3 md:mt-8">Sushi</p>
                    </div>

                </div>


            </div>

        </div>
    )
}