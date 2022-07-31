import React, { useRef }  from 'react'
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const form = useRef();



    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_opqsh8r', 'template_sijy9bh', form.current, 'sya1xhnaT5gi9X5Jx')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
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
                <button className='flex-shrink-0 border-transparent border-4 bg-primary text-white text-sm mt-4 py-1 px-6 rounded bg-primary transition ease-linear hover:scale-110' type="submit" value="Send">Send</button>
            </form>
        </section>
    );
}
