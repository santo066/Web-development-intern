import apple from "../../../assets/img/Logo (1).png"
import google from "../../../assets/img/Google Play logo.png"
import man from "../../../assets/img/10001.png"
export default function Delivery() {
    return (
        <div className="md:flex mt-[30px] md:gap-28 text-center md:text-left md:mt-[103px]">
            <div className="md:w-1/2 ">
                <h1 className="text-[40px] md:text-[61px] md:leading-[65px] leading-[45px] font-bold">Your Favorite Food Delivery Partner</h1>
                <p className="font-normal text-[18px] mt-[16px]">The food at your doorstep. Why starve when you have us. You <br /> hunger partner. Straight out of the oven to your doorstep. </p>

                <div className="input grid grid-cols-2 place-content-center rounded-3xl input-bordered mt-[32px] h-[64px] bg-[#F6F6F6] w-full md:max-w-[464px]">
                    <input type="text" placeholder="Enter your delivery location" className=" " />
                    <a className="btn float-end md:w-[134px] rounded-3xl text-white bg-[#E94339] justify-self-end hover:bg-[#a84742]" >Sign Up </a>
                </div>
                {/* button  */}
                <div className="md:flex grid justify-items-center gap-3 md:gap-8 mt-[35px]">
                    <a href="">
                        <div className="flex  gap-3 pl-2 rounded-xl items-center w-[186px] h-[68px] bg-[#F4F4F4]">
                            <img src={apple} className="w-[30px] h-[35px]" alt="" />
                            <div className="leading-[20px]">
                                <p className="font-medium text-sm">Download on the</p>
                                <h1 className="text-[27px] font-bold">App Store</h1>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="flex  gap-3 pl-2 rounded-xl items-center w-[186px] h-[68px] bg-[#F4F4F4]">
                            <img src={google} className="w-[30px] h-[35px]" alt="" />
                            <div className="leading-[20px]">
                                <p className="font-medium text-sm">GET IT ON</p>
                                <h1 className="text-[22px] font-bold">Google Play</h1>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            {/* part 2 */}
            <div className="md:w-1/2 mt-5 md:mt-0">
                <div className="md:w-[570] md:h-[478px] rounded-3xl bg-[#F2EBDA]">
                    <div className="md:w-[500px] md:pt-[144px] md:h-[452px] mx-auto ">
                        <img src={man} className="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}