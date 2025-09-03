import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { assets, workData } from '../../assets/assets'

const Work = ({ isDarkMode }) => {
    return (
        <motion.div id='work' className='w-full px-[12%] py-10 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h4 className='text-center mb-2 text-lg font-ovo'
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >My Portfolio</motion.h4>
            <motion.h2
                className='text-center text-5xl font-ovo leading-snug'
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >My Latest Work</motion.h2>

            <motion.p
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
            >Here are some of my latest projects.</motion.p>

            <motion.div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                {workData.map((work, index) => (
                    <motion.div key={index} style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${work.bgImage?.src || work.bgImage}')` }} className='aspect-square bg-cover bg-center bg-no-repeat rounded-lg relative cursor-pointer group'
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className='bg-white w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between transition-all duration-300 group-hover:bottom-7'>
                            <div>
                                <h2 className='font-semibold dark:text-black'>{work.title}</h2>
                                <p className='text-sm text-gray-700' title={work.description.length > 20 ? work.description : ''}>
                                    {work.description.length > 20 ? work.description.substring(0, 20) + '...' : work.description}
                                </p>
                            </div>
                            <a href={work.link} target='_blank' rel='noopener noreferrer' className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition-all duration-300'>
                                <Image src={assets.send_icon} alt={work.title} className='w-5' />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-rose-500 hover:border-rose-500 hover:text-white transition-all duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover dark:hover:border-white'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                Show more
                <ArrowRight className='w-4' />
            </motion.a>
        </motion.div>
    )
}

export default Work