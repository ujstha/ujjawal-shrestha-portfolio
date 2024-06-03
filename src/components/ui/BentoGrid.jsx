import { cn } from "@utils/cn"
import { styles } from "../../styles"

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-5 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({ className, img, description, icon }) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgba(4,7,29,0.8)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div
        className={`group-hover/bento:translate-x-2 transition duration-200 ${styles.paddingX} ${styles.paddingY}`}
      >
        {icon}
        <div
          className={`h-full text-secondary text-lg flex items-center${
            img ? " justify-center" : ""
          }`}
        >
          {img && (
            <img
              src={img}
              className="object-cover w-44 h-44 object-left border border-white/[0.1] bg-black-100 rounded-full"
            />
          )}
          {description && <div>{description}</div>}
        </div>
      </div>
    </div>
  )
}
