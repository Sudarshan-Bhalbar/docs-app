import { useRef } from "react";
import Card from "./card";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      fileSize: "4 MB",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "bg-green-500",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      fileSize: "4 MB",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "bg-green-500",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      fileSize: "4 MB",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "bg-blue-500",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      fileSize: "4 MB",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "bg-green-500",
      },
    },
  ];
  return (
    <>
      <div ref={ref} className="fixed top-0 left-0 z-[3] flex gap-6 py-3 px-4 w-full h-full flex-wrap">
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default Foreground;
