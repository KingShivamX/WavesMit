import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const events = [
    {
        key: "hcverma",
        title: "HC Verma Sir Talk Event",
        images: [
            {
                src: "/images/HCVerma/IMG_3327.webp",
                alt: "HC Verma Event Image 1",
            },
            {
                src: "/images/HCVerma/IMG_3338.webp",
                alt: "HC Verma Event Image 2",
            },
            {
                src: "/images/HCVerma/IMG_3345.webp",
                alt: "HC Verma Event Image 3",
            },
            {
                src: "/images/HCVerma/IMG_3389.webp",
                alt: "HC Verma Event Image 4",
            },
            {
                src: "/images/HCVerma/IMG_3419.webp",
                alt: "HC Verma Event Image 5",
            },
            {
                src: "/images/HCVerma/IMG_3468.webp",
                alt: "HC Verma Event Image 6",
            },
            {
                src: "/images/HCVerma/IMG_3503.webp",
                alt: "HC Verma Event Image 7",
            },
            {
                src: "/images/HCVerma/IMG_3504.webp",
                alt: "HC Verma Event Image 8",
            },
            {
                src: "/images/HCVerma/IMG_3506.webp",
                alt: "HC Verma Event Image 9",
            },
        ],
    },
    {
        key: "scicon23",
        title: "SCICON 2023",
        images: [
            {
                src: "/images/Scicon23/DSC_0027.webp",
                alt: "SCICON 2023 Image 1",
            },
            {
                src: "/images/Scicon23/DSC_0032.webp",
                alt: "SCICON 2023 Image 2",
            },
            {
                src: "/images/Scicon23/DSC_0110.webp",
                alt: "SCICON 2023 Image 3",
            },
            {
                src: "/images/Scicon23/DSC_0562.webp",
                alt: "SCICON 2023 Image 4",
            },
            {
                src: "/images/Scicon23/DSC_0654.webp",
                alt: "SCICON 2023 Image 5",
            },
            {
                src: "/images/Scicon23/DSC_0730.webp",
                alt: "SCICON 2023 Image 6",
            },
            {
                src: "/images/Scicon23/IMG_3790.webp",
                alt: "SCICON 2023 Image 7",
            },
            {
                src: "/images/Scicon23/IMG_3857.webp",
                alt: "SCICON 2023 Image 8",
            },
            {
                src: "/images/Scicon23/IMG_3899.webp",
                alt: "SCICON 2023 Image 9",
            },
            {
                src: "/images/Scicon23/IMG_3928.webp",
                alt: "SCICON 2023 Image 10",
            },
            {
                src: "/images/Scicon23/IMG_3930.webp",
                alt: "SCICON 2023 Image 11",
            },
            {
                src: "/images/Scicon23/IMG_3943.webp",
                alt: "SCICON 2023 Image 12",
            },
            {
                src: "/images/Scicon23/IMG_3946.webp",
                alt: "SCICON 2023 Image 13",
            },
            {
                src: "/images/Scicon23/IMG_3973.webp",
                alt: "SCICON 2023 Image 14",
            },
            {
                src: "/images/Scicon23/IMG_3997.webp",
                alt: "SCICON 2023 Image 15",
            },
        ],
    },
    {
        key: "scicon24",
        title: "SCICON 2024",
        images: [
            {
                src: "/images/Scicon24/IMG_1867.webp",
                alt: "SCICON 2024 Image 1",
            },
            {
                src: "/images/Scicon24/IMG_1871.webp",
                alt: "SCICON 2024 Image 2",
            },
            {
                src: "/images/Scicon24/IMG_1878.webp",
                alt: "SCICON 2024 Image 3",
            },
            {
                src: "/images/Scicon24/IMG_2044.webp",
                alt: "SCICON 2024 Image 4",
            },
            {
                src: "/images/Scicon24/IMG_2047.webp",
                alt: "SCICON 2024 Image 5",
            },
            {
                src: "/images/Scicon24/IMG_2050.webp",
                alt: "SCICON 2024 Image 6",
            },
            {
                src: "/images/Scicon24/IMG_2053.webp",
                alt: "SCICON 2024 Image 7",
            },
            {
                src: "/images/Scicon24/IMG_2054.webp",
                alt: "SCICON 2024 Image 8",
            },
            {
                src: "/images/Scicon24/IMG_2061.webp",
                alt: "SCICON 2024 Image 9",
            },
            {
                src: "/images/Scicon24/IMG_2076.webp",
                alt: "SCICON 2024 Image 10",
            },
            {
                src: "/images/Scicon24/IMG_2103.webp",
                alt: "SCICON 2024 Image 11",
            },
            {
                src: "/images/Scicon24/IMG_2113.webp",
                alt: "SCICON 2024 Image 12",
            },
        ],
    },
    {
        key: "telescope",
        title: "Telescope Making Workshop",
        images: [
            {
                src: "/images/Telescope/IMG_9472.webp",
                alt: "Telescope Workshop Image 1",
            },
            {
                src: "/images/Telescope/IMG_9478.webp",
                alt: "Telescope Workshop Image 2",
            },
            {
                src: "/images/Telescope/IMG_9485.webp",
                alt: "Telescope Workshop Image 3",
            },
            {
                src: "/images/Telescope/IMG_9487.webp",
                alt: "Telescope Workshop Image 4",
            },
            {
                src: "/images/Telescope/IMG_9489.webp",
                alt: "Telescope Workshop Image 5",
            },
            {
                src: "/images/Telescope/IMG_9490.webp",
                alt: "Telescope Workshop Image 6",
            },
            {
                src: "/images/Telescope/IMG_9495.webp",
                alt: "Telescope Workshop Image 7",
            },
        ],
    },
    {
        key: "jagruti",
        title: "Jagruti Blind School Visit",
        images: [
            {
                src: "/images/JagrutiBlindSchool/IMG-20240116-WA0004.webp",
                alt: "Jagruti Blind School Event 1",
            },
            {
                src: "/images/JagrutiBlindSchool/IMG-20240202-WA0064.webp",
                alt: "Jagruti Blind School Event 2",
            },
            {
                src: "/images/JagrutiBlindSchool/IMG-20240202-WA0068.webp",
                alt: "Jagruti Blind School Event 3",
            },
            {
                src: "/images/JagrutiBlindSchool/IMG-20240116-WA0006.webp",
                alt: "Jagruti Blind School Event 4",
            },
            {
                src: "/images/JagrutiBlindSchool/IMG-20240202-WA0011.webp",
                alt: "Jagruti Blind School Event 5",
            },
            {
                src: "/images/JagrutiBlindSchool/IMG-20240202-WA0076.webp",
                alt: "Jagruti Blind School Event 6",
            },
        ],
    },
]

const AUTO_ADVANCE_MS = 3400

const Gallery = () => {
    // Each event gets its own image index state
    const [indices, setIndices] = useState(events.map(() => 0))
    // Track which event is currently in view
    const [activeEventIdx, setActiveEventIdx] = useState(0)
    // Refs for each event section
    const eventRefs = useRef([])
    // Timer refs for resetting auto-advance
    const timerRef = useRef()

    // Drag-to-scroll logic for preview bar
    const previewBarRefs = useRef([])
    // Helper for drag-to-scroll
    useEffect(() => {
        previewBarRefs.current.forEach((bar) => {
            if (!bar) return
            let isDown = false
            let startX
            let scrollLeft

            // Mouse events
            const handleMouseDown = (e) => {
                isDown = true
                bar.classList.add("dragging")
                startX = e.pageX - bar.offsetLeft
                scrollLeft = bar.scrollLeft
            }
            const handleMouseLeave = () => {
                isDown = false
                bar.classList.remove("dragging")
            }
            const handleMouseUp = () => {
                isDown = false
                bar.classList.remove("dragging")
            }
            const handleMouseMove = (e) => {
                if (!isDown) return
                e.preventDefault()
                const x = e.pageX - bar.offsetLeft
                const walk = (x - startX) * 1.5 // scroll-fast
                bar.scrollLeft = scrollLeft - walk
            }
            // Touch events
            let touchStartX
            let touchScrollLeft
            const handleTouchStart = (e) => {
                isDown = true
                touchStartX = e.touches[0].pageX - bar.offsetLeft
                touchScrollLeft = bar.scrollLeft
            }
            const handleTouchEnd = () => {
                isDown = false
            }
            const handleTouchMove = (e) => {
                if (!isDown) return
                const x = e.touches[0].pageX - bar.offsetLeft
                const walk = (x - touchStartX) * 1.5
                bar.scrollLeft = touchScrollLeft - walk
            }
            // Add listeners
            bar.addEventListener("mousedown", handleMouseDown)
            bar.addEventListener("mouseleave", handleMouseLeave)
            bar.addEventListener("mouseup", handleMouseUp)
            bar.addEventListener("mousemove", handleMouseMove)
            bar.addEventListener("touchstart", handleTouchStart)
            bar.addEventListener("touchend", handleTouchEnd)
            bar.addEventListener("touchmove", handleTouchMove)
            // Cleanup
            return () => {
                bar.removeEventListener("mousedown", handleMouseDown)
                bar.removeEventListener("mouseleave", handleMouseLeave)
                bar.removeEventListener("mouseup", handleMouseUp)
                bar.removeEventListener("mousemove", handleMouseMove)
                bar.removeEventListener("touchstart", handleTouchStart)
                bar.removeEventListener("touchend", handleTouchEnd)
                bar.removeEventListener("touchmove", handleTouchMove)
            }
        })
    }, [events.length])

    // Helper to find the event whose center is closest to viewport center
    const updateActiveEventIdx = () => {
        const viewportCenter = window.innerHeight / 2
        let minDistance = Infinity
        let closestIdx = 0
        eventRefs.current.forEach((ref, idx) => {
            if (ref) {
                const rect = ref.getBoundingClientRect()
                const eventCenter = (rect.top + rect.bottom) / 2
                const distance = Math.abs(eventCenter - viewportCenter)
                if (distance < minDistance) {
                    minDistance = distance
                    closestIdx = idx
                }
            }
        })
        setActiveEventIdx(closestIdx)
    }

    // Listen to scroll and resize events
    useEffect(() => {
        updateActiveEventIdx()
        window.addEventListener("scroll", updateActiveEventIdx)
        window.addEventListener("resize", updateActiveEventIdx)
        return () => {
            window.removeEventListener("scroll", updateActiveEventIdx)
            window.removeEventListener("resize", updateActiveEventIdx)
        }
    }, [])

    // Auto-advance only the active event's carousel, and allow timer reset
    useEffect(() => {
        if (timerRef.current) clearTimeout(timerRef.current)
        timerRef.current = setTimeout(() => {
            setIndices((prev) => {
                const updated = [...prev]
                const event = events[activeEventIdx]
                updated[activeEventIdx] =
                    prev[activeEventIdx] === event.images.length - 1
                        ? 0
                        : prev[activeEventIdx] + 1
                return updated
            })
        }, AUTO_ADVANCE_MS)
        return () => clearTimeout(timerRef.current)
    }, [activeEventIdx, indices[activeEventIdx]])

    // Handlers for each event's carousel
    const setIndex = (eventIdx, newIdx) => {
        setIndices((prev) => {
            const updated = [...prev]
            updated[eventIdx] = newIdx
            return updated
        })
        // Reset timer if this is the active event
        if (eventIdx === activeEventIdx) {
            if (timerRef.current) clearTimeout(timerRef.current)
            timerRef.current = setTimeout(() => {
                setIndices((prev) => {
                    const updated = [...prev]
                    const event = events[activeEventIdx]
                    updated[activeEventIdx] =
                        prev[activeEventIdx] === event.images.length - 1
                            ? 0
                            : prev[activeEventIdx] + 1
                    return updated
                })
            }, AUTO_ADVANCE_MS)
        }
    }

    return (
        <div className="w-full min-h-screen bg-[#040015] pt-[90px] z-10 px-2 md:px-4">
            <div className="max-w-4xl mx-auto py-8 md:py-12">
                <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-10">
                    Picture Gallery
                </h1>
                <div className="flex flex-col gap-8 md:gap-12">
                    {events.map((event, eventIdx) => (
                        <div
                            key={event.key}
                            className="mb-6 bg-[#181828]/80 rounded-2xl shadow-lg p-3 md:p-6"
                            ref={(el) => (eventRefs.current[eventIdx] = el)}
                        >
                            <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-4 md:mb-6">
                                {event.title}
                            </h2>
                            <div className="relative w-full h-[200px] sm:h-[320px] md:h-[480px] rounded-2xl overflow-hidden shadow-lg mb-3 md:mb-4">
                                <div className="w-full h-full cursor-grab active:cursor-grabbing">
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={indices[eventIdx]}
                                            src={
                                                event.images[indices[eventIdx]]
                                                    .src
                                            }
                                            alt={
                                                event.images[indices[eventIdx]]
                                                    .alt
                                            }
                                            className="w-full h-full object-cover"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            draggable="false"
                                        />
                                    </AnimatePresence>
                                </div>
                                {/* Navigation buttons */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        setIndex(
                                            eventIdx,
                                            indices[eventIdx] === 0
                                                ? event.images.length - 1
                                                : indices[eventIdx] - 1
                                        )
                                    }
                                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white text-black w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center z-30 text-base md:text-lg opacity-90"
                                    aria-label="Previous image"
                                    style={{ userSelect: "none" }}
                                >
                                    &#8592;
                                </button>
                                <button
                                    type="button"
                                    onClick={() =>
                                        setIndex(
                                            eventIdx,
                                            indices[eventIdx] ===
                                                event.images.length - 1
                                                ? 0
                                                : indices[eventIdx] + 1
                                        )
                                    }
                                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white text-black w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center z-30 text-base md:text-lg opacity-90"
                                    aria-label="Next image"
                                    style={{ userSelect: "none" }}
                                >
                                    &#8594;
                                </button>
                                {/* Image counter */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-xs md:text-sm">
                                    {indices[eventIdx] + 1} /{" "}
                                    {event.images.length}
                                </div>
                            </div>
                            {/* Thumbnails */}
                            <div className="w-full max-w-full">
                                <div
                                    ref={(el) =>
                                        (previewBarRefs.current[eventIdx] = el)
                                    }
                                    className="flex gap-1 md:gap-2 mt-2 md:mt-4 overflow-x-auto pb-2 md:pb-4 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-purple-200 justify-center max-w-full bg-black/40 rounded-lg px-1 cursor-grab active:cursor-grabbing select-none"
                                    style={{
                                        minHeight: "28px",
                                        maxWidth: "100%",
                                        WebkitOverflowScrolling: "touch",
                                        scrollBehavior: "smooth",
                                    }}
                                >
                                    {event.images.map((image, imgIdx) => (
                                        <img
                                            key={imgIdx}
                                            src={image.src}
                                            alt={`Thumbnail ${imgIdx + 1}`}
                                            className={`w-8 h-8 md:w-10 md:h-10 object-cover cursor-pointer rounded-md transition-all border-2
                                                ${
                                                    indices[eventIdx] === imgIdx
                                                        ? "ring-2 ring-purple-500 border-purple-500 opacity-100"
                                                        : "border-transparent opacity-60 hover:opacity-90"
                                                }`}
                                            style={{
                                                aspectRatio: "1/1",
                                                minWidth: "2rem",
                                                minHeight: "2rem",
                                                maxWidth: "2.5rem",
                                                maxHeight: "2.5rem",
                                            }}
                                            onClick={() =>
                                                setIndex(eventIdx, imgIdx)
                                            }
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gallery
