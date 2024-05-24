import { SocialMedia } from "@ui/SocialMedia"

import { styles } from "@/styles"

const Footer = () => {
  return (
    <footer className={`w-full ${styles.paddingX} py-8`}>
      <div className="flex mt-16 md:flex-row justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Ujjawal Shrestha
        </p>
        <div className="flex items-center md:gap-3 gap-4">
          <SocialMedia />
        </div>
      </div>
    </footer>
  )
}

export default Footer
