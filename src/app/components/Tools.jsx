import { motion } from 'motion/react'
import Image from 'next/image'
import { toolsData } from '../../assets/assets'

const Tools = ({ isDarkMode }) => {
    return (
        <motion.div className='w-full px-[12%] py-10 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h4 className='text-center mb-2 text-lg font-ovo'
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >Tech Stack</motion.h4>

            <motion.h2 className='text-center text-5xl font-ovo leading-snug'
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >Tools I Work With</motion.h2>

            <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
            >Here are some of the tools and technologies I've worked with.
            </motion.p>

            <motion.ul className="flex flex-wrap justify-center gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                {toolsData.map((tool, index) => (
                    <motion.li key={index}
                        className="rounded-xl p-4 cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover hover:-translate-y-1 transition-all duration-300 hover:shadow-[2px_2px_0_#000] dark:hover:shadow-[2px_2px_0_#fff] border border-gray-400 dark:border-white/50 flex items-center gap-2"
                        whileHover={{ scale: 1.1 }}
                    >
                        <Image src={isDarkMode
                            ? (tool.title.includes('Github') || tool.title.includes('AWS')
                                ? tool.iconDark : tool.icon)
                            : tool.icon} alt={tool.title}
                            className={`${tool.title.includes('Cursor AI IDE') ? 'dark:invert' : ''} w-5 sm:w-7`}
                        />
                        <p className="text-sm text-gray-600 dark:text-white/80 leading-5">{tool.title}</p>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
    )
}

export default Tools