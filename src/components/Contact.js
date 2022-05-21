import React from 'react';
import { Envelope } from './Graphic';
const Contact = () => {
  return (
    <section className='contact'>
      <div className='anchor' id='contact'></div>
      <div className='container'>
        <div className='content'>
          <h2>Contact</h2>
          <div className='contact--hello white-text'>Say Hello</div>

          <div className='contact--message lgray-text'>
            I am not currently looking for full-time opportunities. But, I am
            open to freelancing projects. My inbox is always open.
          </div>

          <div className='project--link'>
            <a href='mailto:me@bryantcobo.com' className='contact--button'>
              <span className='contact--button-icon'>
                <Envelope width='15' height='15' />
              </span>
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
