'use client'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Invest1, Invest2, Invest3 } from "@/Images"
import { useRouter } from "next/navigation"
import { use } from 'react'

// Mock Data for demonstration (replace with actual data source or API call)
const cardData = [
    {
        id: '1',
        title: "MISSION",
        content: "Our mission is to redefine how creativity is valued and supported in the modern world.",
        detailedContent: "Our mission at Creative Catalyst (CREA) is to provide the resources, guidance, and financial backing needed to bring visionary ideas to life, transforming creativity into reality.",
        image: Invest2,
    },
    {
        id: '2',
        title: "CREA",
        content: "At Creative Catalyst, our vision is to redefine the way creativity is nurtured.",
        detailedContent: "CREA bridges the gap between traditional industries and the modern digital landscape, offering support to creatives by utilizing blockchain and cryptocurrency investments.",
        image: Invest1,
    },
    {
        id: '3',
        title: "TOKEN",
        content: "The CREA token is used to invest in creative projects.",
        detailedContent: "The CREA token allows supporters to directly fund innovative projects, fostering growth within the creative community and empowering creators globally.",
        image: Invest3,
    },
]

const CardDetailPage = ({ params: paramsPromise }: { params: Promise<{ id: string }> }) => {
    const router = useRouter()
    const params = use(paramsPromise)

    // Find the card data based on the id in the URL
    const card = cardData.find((card) => card.id === params.id)

    // If card not found, return an error message
    if (!card) return (
        <div className='h-screen content-center text-white text-center'>
            <p className="font-bold">
                404 - Card not found
            </p>
            <Button onClick={() => router.back()} className="mt-6 bg-pink-700 hover:bg-pink-800 text-white rounded-full px-6 py-3">
                Go Back
            </Button>
        </div>
    )

    return (
        <section className="max-w-screen-lg mx-auto p-6 text-white">
            <div className="flex flex-col items-center gap-8">
                <Image src={card.image} alt={card.title} className="rounded-lg" />
                <h1 className="text-[2.5rem] md:text-[3rem] font-bold text-center">{card.title}</h1>
                <p className="text-lg md:text-xl text-center">{card.detailedContent}</p>
                <Button onClick={() => router.push('/invest')} className="mt-6 bg-pink-700 hover:bg-pink-800 text-white rounded-full px-6 py-3">
                    Go Back
                </Button>
            </div>
        </section>
    )
}

export default CardDetailPage
