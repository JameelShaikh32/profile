import { motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';
import { assets } from '../../assets/assets';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "ed3ef2c9-61d7-4c28-9458-0f8e7d260803");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Sent Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <motion.div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-center bg-no-repeat bg-[length:90%_auto] dark:bg-none'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
        >
            <motion.h4 className='text-center mb-2 text-lg font-ovo'
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >Connect with me</motion.h4>

            <motion.h2 className='text-center text-5xl font-ovo'
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >Get in touch</motion.h2>

            <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
            >
                I'd love to hear from you! Feel free to reach out to me using the contact form below.
            </motion.p>

            <motion.form className="max-w-2xl mx-auto" onSubmit={onSubmit}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 mb-8">
                    <motion.input
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        type="text" name='name' placeholder='Enter your name' className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90" required />

                    <motion.input
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        type="email" name='email' placeholder='Enter your email' className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90" required />
                </div>

                <motion.textarea rows="6" name='message' placeholder='Enter your message' className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90" required
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                ></motion.textarea>

                <motion.button type='submit' className="py-3 px-8 w-max flex items-center justify-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black transition-all duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    {!result ? <>
                        Send Message <Image src={assets.right_arrow_white} alt="arrow icon" className='w-4' />
                    </> : result}
                </motion.button>
            </motion.form>
        </motion.div>
    )
}

export default Contact