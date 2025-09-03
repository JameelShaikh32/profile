import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { serviceData } from '../../assets/assets'

const Services = () => {
    return (
        <motion.div id='services' className='w-full px-[12%] py-10 scroll-mt-40'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h4 className='text-center mb-2 text-lg font-ovo'
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >What I Offer</motion.h4>

            <motion.h2 className='text-center text-5xl font-ovo leading-snug'
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >My Services</motion.h2>

            <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
            >As a Full Stack Web Developer, I specialize in creating comprehensive web solutions that span both the front-end and back-end of your projects.

            </motion.p>

            <motion.div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
            >
                {serviceData.map((service, index) => (
                    <motion.div key={index}
                        className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black hover:-translate-y-1 transition-all duration-300 cursor-pointer hover:bg-lightHover dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover group'
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className='w-10 h-10 flex items-center justify-center rounded-md bg-rose-500 dark:bg-[#c799eb]'>{service.icon}</div>
                        <h3 className='my-4 text-lg text-gray-700 dark:text-white'>{service.title}</h3>
                        <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{service.description}</p>
                        <a href={service.link} className='flex items-center gap-2 text-sm mt-5 hover:text-rose-500 dark:hover:text-[#c799eb]'>Learn More <ArrowRight className='w-4' /></a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Services
