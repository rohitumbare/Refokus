import { motion } from "motion/react";
import Product from "./Product";
import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([
    {
      heading: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      caseStudy: true,
      bgimg: "#040470",
      vid: "https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm",
      img: "arqitel",
    },
    {
      heading: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      caseStudy: false,
      bgimg: "#ACBDCB",
      vid: "https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4",
      img: "cula",
    },
    {
      heading: "Layout",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      caseStudy: false,
      bgimg: "#1625F0",
      vid: "https://cdn.refokus.com/refokus-promo/webflow-education-promo.mp4",
      img: "layout",
    },
    {
      heading: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      caseStudy: false,
      bgimg: "#2C206A",
      vid: "https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm",
      img: "ttr",
    },
    {
      heading: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      caseStudy: false,
      bgimg: "#2CCA75",
      vid: "https://cdn.refokus.com/website/Maniv-Compressed.mp4",
      img: "maniv",
    },
    {
      heading: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      caseStudy: false,
      bgimg: "#8E52ED",
      vid: "https://cdn.refokus.com/website/YIR%20website%202022%204_3_VP9.webm",
      img: "yir",
    },
    {
      heading: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      caseStudy: true,
      bgimg: "#5A5AFF",
      vid: "https://cdn.refokus.com/website/2022/videos/yahoo.webm",
      img: "yahoo",
    },
  ]);
  const [pos, setPos] = useState(0);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(0);
  const [moveX, setMoveX] = useState(-50);
  const [moveY, setMoveY] = useState(0);
  const getPos = (index) => {
    setPos(19 * index);
    setHoveredCardIndex(index);
  };

  const showBtn2 = (index) => {
    setProducts((prev) =>
      prev.map((elem, i) =>
        index === i
          ? { ...elem, caseStudy: true }
          : { ...elem, caseStudy: false }
      )
    );
  };

  const handleMouseMove = (moveX, moveY) => {
    setMoveX(moveX);
    setMoveY(moveY);
  };

  return (
    <div className="my-28 md:my-32 lg:my-40 relative flex flex-col gap-4 lg:gap-0 px-3 lg:px-0">
      {products.map((elem, index) => (
        <Product
          key={index}
          val={elem}
          getPos={getPos}
          showBtn2={showBtn2}
          index={index}
          handleMouseMove={handleMouseMove}
        />
      ))}

      <div className="w-full h-[103%] absolute top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
        <motion.div
          initial={{
            x: "-50%",
            y: pos,
          }}
          animate={{
            x: moveX + "%",
            y: `${pos}rem`,
          }}
          transition={{
            x: { duration: 0.1, ease: [0.19, 1, 0.22, 1] },
            y: { duration: 0.3 },
          }}
          style={{ top: `${moveY}%` }}
          className="window w-[32rem] h-[22.8rem] absolute left-[43.5%]"
        >
          {products.map((elem, index) => (
            <motion.div
              key={index}
              transition={{
                duration: 0.3,
              }}
              className={`w-full h-full rounded-xl overflow-hidden ${
                hoveredCardIndex === index ? "block" : "hidden"
              }`}
            >
              <video autoPlay muted loop src={elem.vid}></video>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
