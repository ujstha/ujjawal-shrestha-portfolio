import { SocialMedia } from "@ui/SocialMedia"

import { styles } from "@/styles"

const Footer = () => {
  return (
    <footer className={`w-full ${styles.paddingX} py-8`}>
      <div className="flex md:flex-row flex-col justify-between items-center gap-6">
        <div className="flex items-center md:gap-3 gap-4 md:order-2">
          <SocialMedia />
        </div>
        <p className="inline-flex md:order-1">
          Copyright © 2024. Ujjawal Shrestha
        </p>
      </div>
    </footer>
  )
}

export default Footer
