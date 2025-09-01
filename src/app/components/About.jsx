import { motion } from "motion/react"
import Image from "next/image"
import { assets, infoList } from "../../assets/assets"

const About = ({ isDarkMode }) => {
    return (
        <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.h4 className='text-center mb-2 text-lg font-ovo'
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >Introduction</motion.h4>
            <motion.h2 className='text-center text-5xl font-ovo'
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >About Me</motion.h2>

            <motion.div className="w-full flex flex-col lg:flex-row items-center gap-20 my-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div className="w-64 sm:w-80 rounded-3xl max-w-none"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <Image src={assets.user_image} alt="profile image" className='rounded-3xl w-full' />
                </motion.div>

                <motion.div className="flex-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <p className="mb-10 max-w-2xl font-ovo">
                        I&apos;m a Full Stack Developer with 3+ years of experience, highly skilled in building responsive websites and web applications using modern technologies. I also leverage AI tools to increase productivity and enhance project quality through intelligent code assistance and optimization.
                    </p>

                    <motion.ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        {infoList.map((item, index) => (
                            <motion.li key={index}
                                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 transition-all duration-300 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                                whileHover={{ scale: 1.05 }}
                            >
                                {item.icon}
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{item.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-white/80 leading-5">{item.description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About