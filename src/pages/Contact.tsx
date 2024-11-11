import { CopyIcon, MailIcon } from '@/assets';
import { ContactForm } from '@/components/ContactForm';
import { styles } from '@/styles'
import { useState } from 'react';


const Contact = () => {
    const myemail = "jatinyadav.dev@gmail.com";
    const [isBouncing, setIsBouncing] = useState(false);

    const copyText = () => {
        navigator.clipboard.writeText(myemail)
            .then(() => {
                // alert("Mail copied to clipboard!");
                setIsBouncing(true);
                setTimeout(() => setIsBouncing(false), 300);
            })
            .catch((err) => {
                console.error("Could not copy mail: ", err);
            });
    };


    return (
        <section id="contact" className="pt-12 bg-background-1">
            <div className={`${styles.paddingX} ${styles.paddingY} flex flex-col items-center text-content`}>
                <h1 className="text-4xl tracking-wide font-bold">Get In Touch</h1>
                <p className="py-4 text-center font-semibold">
                    What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
                </p>
                <div>
                    <h1 className="flex items-end lg:text-3xl text-lg font-bold">
                        <span className='px-4'>
                            <MailIcon />
                        </span>
                        <span className={`underline underline-offset-8 ${isBouncing ? 'animate-bounce' : ''}`}>
                            {myemail}
                        </span>
                        <span className='px-4' onClick={copyText}>
                            <CopyIcon />
                        </span>
                    </h1>
                </div>
                <div className="w-full my-8">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default Contact;