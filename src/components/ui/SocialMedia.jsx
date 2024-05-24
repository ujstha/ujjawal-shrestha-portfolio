import { socialMedia } from "@/constants"

export const SocialMedia = () => {
  return socialMedia.map((item) => (
    <a
      key={item.id}
      href={item.site_link}
      target="_blank"
      className="relative overflow-hidden z-40 w-10 h-10 cursor-pointer inline-flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transition-colors duration-150 hover:border-[#d3b5f8]"
    >
      <img
        src={item.img}
        alt="icons"
        width={20}
        height={20}
        className="z-50 relative"
      />
    </a>
  ))
}
