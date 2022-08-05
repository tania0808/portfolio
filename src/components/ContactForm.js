import React, { useRef, useState }  from 'react'
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);


    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_opqsh8r', 'template_sijy9bh', form.current, 'sya1xhnaT5gi9X5Jx')
        .then((result) => {
            e.target.reset();
            setMessageSent(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
        <section id='contact-me' className="rounded-xl shadow-lg grid place-items-center mt-10">
            <h2 className='text-header font-black text-5xl text-center'>Let's talk</h2>
            <form action="" className='w-full max-w-md h-[500px] md:w-3/4' ref={form} onSubmit={sendEmail}>
                <div className='flex flex-col items-center  pt-4 mt-4'>
                    <label htmlFor="from_name" className='place-self-start'>Name *</label>
                    <input name='from_name' className="pt-4 appearance-none border-transparent bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight border-0 border-b-2 focus:outline-none focus:ring-0 border-b focus:border-b-primary border-b-header" type="text" placeholder="Jane Doe" aria-label="Full name" required/>
                </div>
                <div className='flex flex-col items-center pt-4 mt-4'>
                    <label htmlFor="reply_to" className='place-self-start'>Email *</label>
                    <input name='reply_to' className="pt-4 appearance-none border-transparent  bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight  border-0 border-b-2 focus:outline-none focus:ring-0 border-b focus:border-b-primary border-b-header" type="email" placeholder="jane_doe@gmail.com" aria-label="Full name" required/>
                </div>
                <div className='flex flex-col items-center pt-4 mt-4'>
                    <label htmlFor="message" className='place-self-start'>Write your message here</label>
                    <textarea className="pt-4 appearance-none border-transparent bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight  border-0 border-b-2 focus:outline-none focus:ring-0 border-b focus:border-b-primary border-b-header" name="message" id="message" cols="40" rows="1" required></textarea>
                </div>
                { messageSent &&
                <div class="bg-fuchsia-200 border border-fuchsia-300 text-black px-4 py-3 mt-4 rounded relative" role="alert">
                    <span class="block sm:inline">Your message has been sent successfully.</span>
                    <strong class="font-bold">Thank you !</strong>
                    <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg class="fill-current h-6 w-6 text-black" onClick={() => setMessageSent(false)} role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                    </span>
                </div>

                }
                <button className='flex-shrink-0 border-transparent border-4 bg-primary text-white text-sm mt-4 py-1 px-6 rounded bg-primary transition ease-linear hover:scale-110' type="submit" value="Send">Send</button>
            </form>
        </section>
    );
}
