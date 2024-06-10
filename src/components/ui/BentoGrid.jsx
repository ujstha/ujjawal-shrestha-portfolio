import { BackgroundGradientAnimation } from "./GradientBackground"

import { styles } from "@/styles"
import { cn } from "@utils/cn"
import { skills } from "@/constants"
import { Meteors } from "./Meteors"

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-6 lg:grid-cols-5 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  id,
  className,
  img,
  bgImg,
  description,
  icon,
}) => {
  return (
    <div
      className={cn(
        `row-span-1 col-span-full relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 md:text-lg ${styles.paddingX} py-6 sm:py-10`,
        className
      )}
      style={{
        background: "rgba(4,7,29,0.8)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {bgImg && (
        <div className={`h-full absolute inset-0`}>
          <img
            src={bgImg}
            className="object-cover object-center opacity-80 h-full w-full"
            height={`100%`}
            width={`100%`}
            alt={bgImg}
          />
        </div>
      )}
      {id === 2 && <Meteors number={16} />}
      {id === 5 && (
        <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
        </BackgroundGradientAnimation>
      )}
      <div className={`h-full relative transition duration-200`}>
        {icon}
        {img && (
          <div className={`h-full flex items-center justify-center`}>
            <img
              src={img}
              alt={`${img}-${id}`}
              className="object-cover size-44 md:size-36 lg:size-44 object-left border border-white/[0.1] bg-black-100 rounded-full"
            />
          </div>
        )}
        {description && (
          <div className={`h-full flex flex-col justify-center`}>
            {description}

            {id === 5 && (
              <div className="mt-10 flex justify-center items-center flex-wrap gap-6">
                {skills.map((skill, index) => (
                  <img
                    key={`${skill}-${index}`}
                    src={`/assets/tech/${skill}.svg`}
                    alt={skill}
                    className="size-12 md:size-16 object-contain cursor-pointer hover:scale-110 transition-transform duration-300"
                    title={skill}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
