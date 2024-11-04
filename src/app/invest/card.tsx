import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import Image from "next/image"
import { Invest1 } from "@/Images";

function card() {
    return (
        <div>
            <Card className="bg-[#1c1c1c] text-white border-none rounded-3xl">
                <div className="flex p-4">
                    <Image src={Invest1} alt="Invest" />
                    <div>
                        <CardHeader>
                            <CardTitle>CREA</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>At Creative Catalyst, our vision is to redefine the way creativity is nurtured and funded, bridging the gap between traditional industries and the modern digital landscape</p>
                        </CardContent>
                        <CardFooter>
                            <Button variant={'outline'} className="bg-transparent text-white rounded-full">
                                READ MORE
                            </Button>
                        </CardFooter>
                    </div>
                </div>
            </Card>
        </div>
    )
}
export default card