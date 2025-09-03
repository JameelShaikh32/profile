import { Mail } from 'lucide-react'

const Footer = () => {
    return (
        <div className="mt-20">
            <div className="text-center">
                <h1 className='text-3xl text-gray-800 font-semibold tracking-wide dark:text-white'>
                    Jameel
                    <span className='text-rose-500'>.</span>
                </h1>

                <div className="w-max flex items-center gap-2 mx-auto">
                    <Mail className='w-6 text-gray-700 dark:text-white' />
                    <a href="mailto:shaikhjameel17@gmail.com">shaikhjameel17@gmail.com</a>
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 py-6 mt-12 mx-[10%] dark:border-white/50'>
                <p>&copy; {new Date().getFullYear()} Jameel Shaikh. All rights reserved.</p>
                <ul className='flex items-center gap-8 justify-center mt-4 sm:mt-0'>
                    <li className='hover:text-blue-600 dark:hover:text-blue-500 hover:-translate-y-[1.2px] transition-all duration-300'><a href="https://www.linkedin.com/in/dev-jameel/" target='_blank'>LinkedIn</a></li>
                    <li className='hover:-translate-y-[1.2px] transition-all duration-300'><a href="https://github.com/JameelShaikh32" target='_blank'>Github</a></li>
                    <li className='hover:text-rose-700 dark:hover:text-rose-500 hover:-translate-y-[1.2px] transition-all duration-300'><a href="https://www.instagram.com/_jameel_shaikh/" target='_blank'>Instagram</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer