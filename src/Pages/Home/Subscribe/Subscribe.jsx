export default function Subscribe() {
    return (
        <div className="h-[320px] mt-[170px] w-full bg-[#FFEFEC] content-center grid">
            <div className=" md:grid-cols-2 md:grid mx-5 md:mx-10 ">
                <div>
                    <h1 className="md:text-5xl text-xl font-semibold mb-4">Subscribe our newsletter</h1>
                    <p>Browse local restaurants and businesses for delivery by entering your address blow.</p>
                </div>
                <div className="md:justify-self-end">
                    <div className="input grid grid-cols-2 place-content-center rounded-3xl input-bordered mt-[32px] h-[64px] bg-[#F6F6F6] w-full md:max-w-[464px]">
                        <input type="text" placeholder="Enter your email address..." className=" " />
                        <a className="btn float-end md:w-[134px] rounded-3xl text-white hover:bg-[#a84742] bg-[#E94339] justify-self-end" >Sign Up </a>
                    </div>
                </div>
            </div>
        </div>
    )
}