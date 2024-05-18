import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const Card = ({ cards, handleRemove }) => {
  return (
    <>
      {cards.map((item, index) => {
        return (
          <div
            key={index}
            className="w-fit grid place-content-center bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-4 rounded-xl"
          >
            <TiltCard item={item} index={index} handleRemove={handleRemove} />
          </div>
        );
      })}
    </>
  );
};

const ROTATION_RANGE = 30;
const HALF_ROTATION_RANGE = 30 / 2;

const TiltCard = ({ item, index, handleRemove }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid rounded-xl bg-white shadow-lg overflow-hidden"
      >
        <img className="h-full w-full object-cover" src={item.image} />
        <div className="absolute bottom-0 left-1/2 -translate-x-[50%] -translate-y-[30%] text-center">
          <p
            style={{
              transform: "translateZ(50px)",
            }}
            className="capitalize text-center text-4xl font-bold cursor-default"
          >
            {item.title}
          </p>
          <button
            onClick={() => handleRemove(index)}
            className="bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-2 rounded-xl mt-2 shadow-lg font-semibold"
          >
            Remove Me !
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
