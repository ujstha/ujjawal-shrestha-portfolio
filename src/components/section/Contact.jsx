"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { FaLocationArrow } from "react-icons/fa6"
import emailjs from "@emailjs/browser"

import EarthCanvas from "@canvas/Earth"
import SectionWrapper from "@/hoc/SectionWrapper"
import { slideIn } from "@utils/motion"
import { styles } from "@/styles"
import { MagicButton } from "@ui/MagicButton"

const Label = ({ text }) => (
  <span className="block text-white font-medium mb-2">{text}</span>
)

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: process.env.NEXT_PUBLIC_RECIPIENT_NAME,
          from_email: form.email,
          to_email: process.env.NEXT_PUBLIC_RECIPIENT_EMAIL,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false)
          alert("Thank you. I will get back to you as soon as possible.")

          setForm({
            name: "",
            email: "",
            message: "",
          })
        },
        (error) => {
          setLoading(false)
          console.error(error)

          alert("Ahh, something went wrong. Please try again.")
        }
      )
  }

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-transparent p-8 rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <Label text="Your name" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-input py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none"
            />
          </label>
          <label className="flex flex-col">
            <Label text="Your email" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-input py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none"
            />
          </label>
          <label className="flex flex-col">
            <Label text="Your message" />
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-input py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none"
            />
          </label>

          <MagicButton
            type="submit"
            title={loading ? "Sending..." : "Send the message"}
            icon={<FaLocationArrow />}
            position="right"
          />
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
