import Image from 'next/image'
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaVk } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import Link from 'next/link'

function Footer() {
    return (
        <footer className="bg-white">
            <div className='mx-auto max-w-screen-2xl p-6'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-5 items-center'>
                        <div>
                            <Image src="/logo.svg" alt="logo" width={100} height={100} />
                        </div>
                        <div className='border border-1 py-4 border-black' />
                        <div>
                            <h1>CREATIVE CATALYST</h1>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <FaDiscord size={48} />
                        <div className='h-10 w-10 bg-black text-white flex justify-center items-center rounded-md'>
                            <FaTelegramPlane size={30} />
                        </div>
                        <FaVk size={48} />
                        <IoLogoLinkedin size={48} />
                        <FaSquareInstagram size={48} />
                        <div className='h-10 w-10 bg-black text-white flex justify-center items-center rounded-md'>
                            <BsTwitterX size={30} />
                        </div>
                    </div>
                </div>
                <div className='border border-1 my-4 border-black' />
                <div className='flex gap-10'>
                    <p>Copyright © 2024 . All rights reserved</p>
                    <div className='flex gap-5'>
                        <Link href='/privacy-policy'>
                            <span>
                                Privacy Policy
                            </span>
                        </Link>
                        <Link href='/terms-of-use'>
                            <span>
                                Terms of Use
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer