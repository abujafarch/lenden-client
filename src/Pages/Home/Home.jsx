import { Link } from "react-router-dom";
import FilterSection from "./FilterSection/FilterSection";
import { IoSearch } from "react-icons/io5";
import ProductSection from "./ProductSection/ProductSection";
import { useState } from "react";


const Home = () => {

    const [filterOpen, setFilterOpen] = useState(false)



    return (
        <div className="max-w-[1320px] text-[#E8788C] mx-auto px-3 mt-4 sm:mt-6 md:mt-8 lg:mt-10  overflow-x-hidden">

            <div className="border-2 border-[#E8788C] pl-3 max-w-[500px] mx-auto rounded-sm flex items-center justify-center mb-5 sm:mb-12">
                <input className="outline-none py-1 w-full text-lg text-[#797878]" placeholder="Search Product" type="text" />
                <button className="text-2xl bg-[#E8788C] py-2 px-3 text-white"><IoSearch /></button>
            </div>

            <div className="flex gap-5">
                <FilterSection setFilterOpen={setFilterOpen} filterOpen={filterOpen} />
                <ProductSection setFilterOpen={setFilterOpen} filterOpen={filterOpen} />
            </div>
        </div>
    );
};

export default Home;