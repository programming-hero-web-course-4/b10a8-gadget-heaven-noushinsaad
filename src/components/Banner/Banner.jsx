import bannerImg from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='relative'>
            <div className="mx-3">
                <div className="text-center bg-purple-600 rounded-b-xl h-[480px] pt-4">
                    <div className="text-white">
                        <h1 className="md:w-3/4 mx-auto text-3xl md:text-4xl  lg:text-6xl font-bold">
                            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                        </h1>
                        <p className="py-6 md:w-1/2 mx-auto">
                            Explore the latest gadgets that will take your experience to the next level.
                            From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button className="btn btn-md bg-white rounded-full text-purple-600">Shop Now</button>
                    </div>
                </div>
            </div>
            <div className='w-3/4 mx-auto border-2 p-2 bg-opacity-75 rounded-xl relative -top-24 md:-top-44'>
                <img className='rounded-xl' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;