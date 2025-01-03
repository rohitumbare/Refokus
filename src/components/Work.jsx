import { useScroll } from "motion/react";
import { useState } from "react";

const Work = () => {
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "55%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "60%",
      left: "45%",
      isActive: false,
    },

    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "50%",
      left: "55%",
      isActive: false,
    },

    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "55%",
      left: "50%",
      isActive: false,
    },

    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "65%",
      left: "55%",
      isActive: false,
    },

    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "70%",
      left: "40%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (scrollVal) => {
    function showImage(arr) {
      setImages((prev) =>
        prev.map(
          (item, index) =>
            arr[index] === index
              ? { ...item, isActive: true }
              : { ...item, isActive: false }

          //     ? { ...item, isActive: false }
        )
      );
    }

    switch (Math.floor(scrollVal * 100)) {
      case 0:
        showImage([]);
        break;
      case 1:
        showImage([0]);
        break;
      case 4:
        showImage([0, 1]);
        break;
      case 5:
        showImage([0, 1, 2]);
        break;
      case 6:
        showImage([0, 1, 2, 3]);
        break;
      case 8:
        showImage([0, 1, 2, 3, 4]);
        break;
      case 10:
        showImage([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto relative pt-10">
        <h1 className="text-[10rem] md:text-[18rem] xl:text-[31rem] leading-[1.4] tracking-tight font-medium text-center">
          work
        </h1>

        <div className="w-full h-full absolute top-0">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <div
                  key={index}
                  className="w-60 aspect-square absolute -translate-x-1/2 -translate-y-1/2 rounded-lg overflow-hidden"
                  style={{ top: elem.top, left: elem.left }}
                >
                  <img
                    className="w-full h-full object-cover"
                    src={elem.url}
                    alt="work"
                  />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
