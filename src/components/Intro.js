import React from 'react';
const Intro = () => {
  return (
    <section className='intro'>
      <div className='anchor' id='top'></div>
      <div className='container'>
        <div className='content'>
          <div className='lgray-text garet-heavy greeting'>
            Hello, my name is
          </div>
          <h1>
            <span className='dgreen-text garet-heavy'>Bryant </span>
            <span className='lgreen-text garet-heavy'>Cobarrubias</span>
          </h1>
          <div className='dgreen-text subtext'>
            I solve problems by writing software.
          </div>
          <p>
            I'm a full-stack software engineer. Presently, I'm the lead
            developer and CTO for{' '}
            <a href='https://scansearch.com' target='_blank' rel='noreferrer'>
              ScanSearch
            </a>
            . I'm available for freelancing opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
