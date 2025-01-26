import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Gallery = () => {
    const [currentHCVermaIndex, setCurrentHCVermaIndex] = useState(0)
    const [currentScicon23Index, setCurrentScicon23Index] = useState(0)
    const [currentScicon24Index, setCurrentScicon24Index] = useState(0)
    const [currentTelescopeIndex, setCurrentTelescopeIndex] = useState(0)
    const [currentJagrutiIndex, setCurrentJagrutiIndex] = useState(0)

    // Array of HC Verma event images
    const hcVermaImages = [
        {
            src: "/images/HCVerma/IMG_3327.JPG",
            alt: "HC Verma Event Image 1",
        },
        {
            src: "/images/HCVerma/IMG_3338.JPG",
            alt: "HC Verma Event Image 2",
        },
        {
            src: "/images/HCVerma/IMG_3345.JPG",
            alt: "HC Verma Event Image 3",
        },
        {
            src: "/images/HCVerma/IMG_3389.JPG",
            alt: "HC Verma Event Image 4",
        },
        {
            src: "/images/HCVerma/IMG_3419.JPG",
            alt: "HC Verma Event Image 5",
        },
        {
            src: "/images/HCVerma/IMG_3468.JPG",
            alt: "HC Verma Event Image 6",
        },
        {
            src: "/images/HCVerma/IMG_3503.JPG",
            alt: "HC Verma Event Image 7",
        },
        {
            src: "/images/HCVerma/IMG_3504.JPG",
            alt: "HC Verma Event Image 8",
        },
        {
            src: "/images/HCVerma/IMG_3506.JPG",
            alt: "HC Verma Event Image 9",
        },
    ]

    // Array of SCICON 2023 images
    const sciconImages = [
        {
            src: "images/Scicon23/DSC_0027.JPG",
            alt: "SCICON 2023 Image 1",
        },
        {
            src: "images/Scicon23/DSC_0032.JPG",
            alt: "SCICON 2023 Image 2",
        },
        {
            src: "images/Scicon23/DSC_0110.JPG",
            alt: "SCICON 2023 Image 3",
        },
        {
            src: "images/Scicon23/DSC_0562.JPG",
            alt: "SCICON 2023 Image 4",
        },
        {
            src: "images/Scicon23/DSC_0654.JPG",
            alt: "SCICON 2023 Image 5",
        },
        {
            src: "images/Scicon23/DSC_0730.JPG",
            alt: "SCICON 2023 Image 6",
        },
        {
            src: "images/Scicon23/IMG_3790.JPG",
            alt: "SCICON 2023 Image 7",
        },
        {
            src: "images/Scicon23/IMG_3857.JPG",
            alt: "SCICON 2023 Image 8",
        },
        {
            src: "images/Scicon23/IMG_3899.JPG",
            alt: "SCICON 2023 Image 9",
        },
        {
            src: "images/Scicon23/IMG_3928.JPG",
            alt: "SCICON 2023 Image 10",
        },
        {
            src: "images/Scicon23/IMG_3930.JPG",
            alt: "SCICON 2023 Image 11",
        },
        {
            src: "images/Scicon23/IMG_3943.JPG",
            alt: "SCICON 2023 Image 12",
        },
        {
            src: "images/Scicon23/IMG_3946.JPG",
            alt: "SCICON 2023 Image 13",
        },
        {
            src: "images/Scicon23/IMG_3973.JPG",
            alt: "SCICON 2023 Image 14",
        },
        {
            src: "images/Scicon23/IMG_3997.JPG",
            alt: "SCICON 2023 Image 15",
        },
    ]

    // Array of SCICON 2024 images
    const scicon24Images = [
        {
            src: "/images/Scicon24/IMG_1867.JPG",
            alt: "SCICON 2024 Image 1",
        },
        {
            src: "/images/Scicon24/IMG_1871.JPG",
            alt: "SCICON 2024 Image 2",
        },
        {
            src: "/images/Scicon24/IMG_1878.JPG",
            alt: "SCICON 2024 Image 3",
        },
        {
            src: "/images/Scicon24/IMG_2044.JPG",
            alt: "SCICON 2024 Image 4",
        },
        {
            src: "/images/Scicon24/IMG_2047.JPG",
            alt: "SCICON 2024 Image 5",
        },
        {
            src: "/images/Scicon24/IMG_2050.JPG",
            alt: "SCICON 2024 Image 6",
        },
        {
            src: "/images/Scicon24/IMG_2053.JPG",
            alt: "SCICON 2024 Image 7",
        },
        {
            src: "/images/Scicon24/IMG_2054.JPG",
            alt: "SCICON 2024 Image 8",
        },
        {
            src: "/images/Scicon24/IMG_2061.JPG",
            alt: "SCICON 2024 Image 9",
        },
        {
            src: "/images/Scicon24/IMG_2076.JPG",
            alt: "SCICON 2024 Image 10",
        },
        {
            src: "/images/Scicon24/IMG_2103.JPG",
            alt: "SCICON 2024 Image 11",
        },
        {
            src: "/images/Scicon24/IMG_2113.JPG",
            alt: "SCICON 2024 Image 12",
        },
    ]

    // Add telescope images array
    const telescopeImages = [
        {
            src: "/images/Telescope/IMG_9472.JPG",
            alt: "Telescope Workshop Image 1",
        },
        {
            src: "/images/Telescope/IMG_9478.JPG",
            alt: "Telescope Workshop Image 2",
        },
        {
            src: "/images/Telescope/IMG_9485.JPG",
            alt: "Telescope Workshop Image 3",
        },
        {
            src: "/images/Telescope/IMG_9487.JPG",
            alt: "Telescope Workshop Image 4",
        },
        {
            src: "/images/Telescope/IMG_9489.JPG",
            alt: "Telescope Workshop Image 5",
        },
        {
            src: "/images/Telescope/IMG_9490.JPG",
            alt: "Telescope Workshop Image 6",
        },
        {
            src: "/images/Telescope/IMG_9495.JPG",
            alt: "Telescope Workshop Image 7",
        },
    ]

    // Add Jagruti School images array
    const jagrutiImages = [
        {
            src: "/images/JagrutiBlindSchool/IMG-20240116-WA0004.jpg",
            alt: "Jagruti Blind School Event 1",
        },
        {
            src: "/images/JagrutiBlindSchool/IMG-20240202-WA0064.jpg",
            alt: "Jagruti Blind School Event 2",
        },
        {
            src: "/images/JagrutiBlindSchool/IMG-20240202-WA0068.jpg",
            alt: "Jagruti Blind School Event 3",
        },
        {
            src: "/images/JagrutiBlindSchool/IMG-20240116-WA0006.jpg",
            alt: "Jagruti Blind School Event 4",
        },
        {
            src: "/images/JagrutiBlindSchool/IMG-20240202-WA0011.jpg",
            alt: "Jagruti Blind School Event 5",
        },
        {
            src: "/images/JagrutiBlindSchool/IMG-20240202-WA0076.jpg",
            alt: "Jagruti Blind School Event 6",
        },
    ]

    // Auto-slide timers
    useEffect(() => {
        const hcVermaTimer = setInterval(() => {
            setCurrentHCVermaIndex((prevIndex) =>
                prevIndex === hcVermaImages.length - 1 ? 0 : prevIndex + 1
            )
        }, 5000)

        const scicon23Timer = setInterval(() => {
            setCurrentScicon23Index((prevIndex) =>
                prevIndex === sciconImages.length - 1 ? 0 : prevIndex + 1
            )
        }, 5000)

        const scicon24Timer = setInterval(() => {
            setCurrentScicon24Index((prevIndex) =>
                prevIndex === scicon24Images.length - 1 ? 0 : prevIndex + 1
            )
        }, 5000)

        const telescopeTimer = setInterval(() => {
            setCurrentTelescopeIndex((prevIndex) =>
                prevIndex === telescopeImages.length - 1 ? 0 : prevIndex + 1
            )
        }, 5000)

        const jagrutiTimer = setInterval(() => {
            setCurrentJagrutiIndex((prevIndex) =>
                prevIndex === jagrutiImages.length - 1 ? 0 : prevIndex + 1
            )
        }, 5000)

        return () => {
            clearInterval(hcVermaTimer)
            clearInterval(scicon23Timer)
            clearInterval(scicon24Timer)
            clearInterval(telescopeTimer)
            clearInterval(jagrutiTimer)
        }
    }, [])

    // Touch and drag handlers
    const handleTouchStart = (e, setIndex, imagesArray) => {
        const touch = e.touches[0]
        const startX = touch.clientX

        const handleTouchMove = (e) => {
            const touch = e.touches[0]
            const diff = startX - touch.clientX

            if (Math.abs(diff) > 50) {
                // threshold for swipe
                if (diff > 0) {
                    // Swipe left - next image
                    setIndex((prev) =>
                        prev === imagesArray.length - 1 ? 0 : prev + 1
                    )
                } else {
                    // Swipe right - previous image
                    setIndex((prev) =>
                        prev === 0 ? imagesArray.length - 1 : prev - 1
                    )
                }
            }
        }

        const handleTouchEnd = () => {
            document.removeEventListener("touchmove", handleTouchMove)
            document.removeEventListener("touchend", handleTouchEnd)
        }

        document.addEventListener("touchmove", handleTouchMove)
        document.addEventListener("touchend", handleTouchEnd)
    }

    const handleMouseDown = (e, setIndex, imagesArray) => {
        e.preventDefault()
        const startX = e.pageX

        const handleMouseMove = (e) => {
            const diff = startX - e.pageX

            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    // Drag left - next image
                    setIndex((prev) =>
                        prev === imagesArray.length - 1 ? 0 : prev + 1
                    )
                } else {
                    // Drag right - previous image
                    setIndex((prev) =>
                        prev === 0 ? imagesArray.length - 1 : prev - 1
                    )
                }
            }
        }

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseup", handleMouseUp)
        }

        document.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseup", handleMouseUp)
    }

    // Improved gallery section component
    const GallerySection = ({ title, images, currentIndex, setIndex }) => (
        <div className="mb-16 md:mb-24">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-purple-300">
                {title}
            </h2>

            <div className="relative w-full h-[250px] sm:h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg">
                <div
                    className="w-full h-full cursor-grab active:cursor-grabbing"
                    onTouchStart={(e) => handleTouchStart(e, setIndex, images)}
                    onMouseDown={(e) => handleMouseDown(e, setIndex, images)}
                >
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex].src}
                            alt={images[currentIndex].alt}
                            className="w-full h-full object-cover"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            draggable="false"
                        />
                    </AnimatePresence>
                </div>

                {/* Navigation buttons - now with better mobile styling */}
                <button
                    onClick={() =>
                        setIndex((prev) =>
                            prev === 0 ? images.length - 1 : prev - 1
                        )
                    }
                    className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white w-8 h-8 md:w-10 md:h-10 rounded-full hover:bg-black/75 transition-all flex items-center justify-center"
                    aria-label="Previous image"
                >
                    ←
                </button>
                <button
                    onClick={() =>
                        setIndex((prev) =>
                            prev === images.length - 1 ? 0 : prev + 1
                        )
                    }
                    className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white w-8 h-8 md:w-10 md:h-10 rounded-full hover:bg-black/75 transition-all flex items-center justify-center"
                    aria-label="Next image"
                >
                    →
                </button>

                {/* Image counter with improved visibility */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm md:text-base">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>

            {/* Improved thumbnail strip */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-purple-200">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={`Thumbnail ${index + 1}`}
                        className={`h-16 w-16 md:h-20 md:w-20 object-cover cursor-pointer rounded-lg transition-all
                            ${
                                currentIndex === index
                                    ? "ring-2 ring-purple-500 opacity-100"
                                    : "opacity-60 hover:opacity-80"
                            }`}
                        onClick={() => setIndex(index)}
                    />
                ))}
            </div>
        </div>
    )

    return (
        <div className="relative flex flex-col w-full min-h-screen bg-[#040015] pt-[90px] z-10">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16 text-white relative z-10">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-12 md:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                    Picture Gallery
                </h1>

                <GallerySection
                    title="HC Verma Talk Event"
                    images={hcVermaImages}
                    currentIndex={currentHCVermaIndex}
                    setIndex={setCurrentHCVermaIndex}
                />

                <GallerySection
                    title="SCICON 2023"
                    images={sciconImages}
                    currentIndex={currentScicon23Index}
                    setIndex={setCurrentScicon23Index}
                />

                <GallerySection
                    title="SCICON 2024"
                    images={scicon24Images}
                    currentIndex={currentScicon24Index}
                    setIndex={setCurrentScicon24Index}
                />

                <GallerySection
                    title="Telescope Making Workshop"
                    images={telescopeImages}
                    currentIndex={currentTelescopeIndex}
                    setIndex={setCurrentTelescopeIndex}
                />

                <GallerySection
                    title="Jagruti Blind School Visit"
                    images={jagrutiImages}
                    currentIndex={currentJagrutiIndex}
                    setIndex={setCurrentJagrutiIndex}
                />
            </div>
        </div>
    )
}

export default Gallery
