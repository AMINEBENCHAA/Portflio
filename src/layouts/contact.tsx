import React, { useState } from 'react';
import axios from 'axios';
import "../App.css"

function Contact(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSent, setIsSent] = useState(false);
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
  
      if (name === 'name') {
        setName(value);
      } else if (name === 'email') {
        setEmail(value);
      } else if (name === 'message') {
        setMessage(value);
      }
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      try {
        await axios.post('/send-email', { name, email, message });
        setIsSent(true);
      } catch (error) {
        console.log(error);
      }
    };
    return (
        <div id="Contact" className='App-Frame '>
        <section className="py-16  ">
      <div className="container mx-auto mt-32">
        <h2 className="text-4xl font-bold mb-8 text-center text-lighttext2 dark:text-white">
          Take a Coffee with Me
        </h2>
        {!isSent ? (
          <form onSubmit={handleSubmit} className='mt-24'>
            <div className="mb-4 px-72">
              
              <input type="text" id="name"
                name="name" value={name}
                onChange={handleInputChange}
                required placeholder="your Name"
                className="input input-ghost w-full"/>
              
            </div>
            <div className="mb-4 px-72">
              
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                required
                placeholder="your Email"
                className="input input-ghost w-full "
              />
            </div>
            <div className="mb-4 px-72">
            
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleInputChange}
                required
                placeholder="your Message"
                className="input input-ghost w-full "
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="btn btn-outline btn-primary">
                Send Message
              </button>
            </div>
          </form>
        ) : (
          <p className="text-lg text-center">
            Thank you! Your email has been sent.
          </p>
        )}
      </div>
    </section>
        </div>
    )
}

export default Contact;