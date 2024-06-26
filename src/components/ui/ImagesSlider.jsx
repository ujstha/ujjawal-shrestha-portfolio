"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Icon } from "@iconify/react"

import { cn, urlFor } from "@/utils"
import { ARROW_LEFT_ICON, ARROW_RIGHT_ICON } from "@/constants"

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  const [loadedImages, setLoadedImages] = useState([])

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    )
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    loadImages()
  }, [])

  const loadImages = () => {
    setLoading(true)
    const loadPromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = urlFor(image)
        img.onload = () => resolve(image)
        img.onerror = reject
      })
    })

    Promise.all(loadPromises)
      .then((loadedImages) => {
        setLoadedImages(loadedImages)
        setLoading(false)
      })
      .catch((error) => error)
  }
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleNext()
      } else if (event.key === "ArrowLeft") {
        handlePrevious()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    // autoplay
    let interval
    if (autoplay) {
      interval = setInterval(() => {
        handleNext()
      }, 5000)
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      clearInterval(interval)
    }
  }, [])

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: {
        duration: 1,
      },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: 1,
      },
    },
  }

  const areImagesLoaded = loadedImages.length > 0

  return (
    <div className={cn("w-full h-full px-8 my-8 sm:my-0", className)}>
      <div className={cn("relative h-full w-full", className)}>
        {images?.length > 1 && (
          <>
            <button
              onClick={() => handleNext()}
              className="absolute -right-8 top-1/2 -translate-y-1/2 z-50 rounded-full border border-white/60 p-1 hover:border-accent hover:text-accent"
            >
              <Icon icon={ARROW_RIGHT_ICON} />
            </button>
            <button
              onClick={() => handlePrevious()}
              className="absolute -left-8 top-1/2 -translate-y-1/2 z-50 rounded-full border border-white/60 p-1 hover:border-accent hover:text-accent"
            >
              <Icon icon={ARROW_LEFT_ICON} />
            </button>
          </>
        )}
        <div
          className={cn(
            "overflow-hidden h-full w-full relative flex items-center justify-center",
            className
          )}
          style={{
            perspective: "1000px",
          }}
        >
          {areImagesLoaded && children}
          {areImagesLoaded && overlay && (
            <div
              className={cn(
                "absolute inset-0 bg-black/5 z-40",
                overlayClassName
              )}
            />
          )}
          {areImagesLoaded && (
            <AnimatePresence>
              <motion.img
                key={currentIndex}
                src={urlFor(loadedImages[currentIndex])}
                initial="initial"
                animate="visible"
                exit={direction === "up" ? "upExit" : "downExit"}
                variants={slideVariants}
                className="image h-full w-full absolute inset-0 object-contain object-center"
              />
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  )
}
