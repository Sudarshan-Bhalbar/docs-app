import { BsFileEarmarkText } from "react-icons/bs";
import { HiOutlineDownload } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"


function card({ data , reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}}  className="relative flex-shrink-0 w-56 h-60 rounded-[40px] py-6 px-4 overflow-hidden bg-slate-100 dark:bg-zinc-900">
      <BsFileEarmarkText
        className="text-[#778DA9] text-lg"
        size="1.8rem"
        fontWeight="bold"
      />
      <p className=" footer-text leading-none tracking-normal font-medium mt-5 text-sm  dark:text-[#b4b6b1] text-[#1B263B]">
        {data.desc}
      </p>
      <div className=" footer absolute left-0 bottom-0 w-full flex flex-col gap-2">
        <div
          className={`w-full flex justify-between items-center mt-4 px-5 ${
            !data.tag.isOpen && "py-6"
          }`}
        >
          <h2 className="text-[#c1c3ba] footer-text font-bold dark:text-[#aeaeae] text-xs">
            {data.fileSize}
          </h2>
          <div
            className={`bg-[#778DA9] rounded-full p-1 dark:bg-slate-50  ${
              data.close ? "hover:bg-red-400" : "hover:bg-green-500"
            }`}
          >
            {data.close ? (
              <IoClose
                size="1.2rem"
                className="dark:text-[#1B263B] text-[#E0E1DD]"
              />
            ) : (
              <HiOutlineDownload
                size="1.2rem"
                className="dark:text-[#1B263B] text-[#E0E1DD]"
              />
            )}
          </div>
        </div>
        {data.tag.isOpen && (
          <div className={`w-full ${data.tag.tagColor} py-2`}>
            <h1 className="text-[#ffffff] footer-text font-bold text-center dark:text-[#ffffff] text-m w-full">
              {data.tag.isOpen ? data.tag.tagTitle : " "}
            </h1>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default card;
