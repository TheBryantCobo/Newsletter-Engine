import React from 'react';
import { useParams } from 'react-router-dom';

const Issue = () => {
  let params = useParams();

  return (
    <section className='issue'>
      <div className='container'>
        <div className='content'>
          <h2>Issue {params.slug}</h2>
        </div>
      </div>
    </section>
  );
};

export default Issue;
