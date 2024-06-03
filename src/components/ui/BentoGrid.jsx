import { InfiniteMovingCards } from "./InfiniteCards"
import { styles } from "@/styles"

import { cn } from "@utils/cn"
import { skills } from "@/constants"

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
        "row-span-1 col-span-full relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 text-lg",
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
          <img src={bgImg} className="object-cover h-full w-full" />
        </div>
      )}
      <div
        className={`group-hover/bento:translate-x-2 transition duration-200 ${styles.paddingX} ${styles.paddingY}`}
      >
        {icon}
        {img && (
          <div
            className={`h-full text-secondary flex items-center justify-center`}
          >
            <img
              src={img}
              className="object-cover size-44 md:size-36 lg:size-44 object-left border border-white/[0.1] bg-black-100 rounded-full"
            />
          </div>
        )}

        {description && (
          <div
            className={`h-full relative text-secondary flex flex-col justify-center`}
          >
            {description}
            {id === 7 && (
              <InfiniteMovingCards
                items={skills}
                direction="left"
                speed="slow"
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
}
