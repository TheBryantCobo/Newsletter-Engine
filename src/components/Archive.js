import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const issues = [{ slug: 'aaaa' }, { slug: 'bbbb' }, { slug: 'cccc' }];

const Archive = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='content'>
          <h2>Issues</h2>
          <ul>
            {issues.map((issue) => (
              <li key={issue.slug}>
                <Link to={`/issues/${issue.slug}`}>{issue.slug}</Link>
              </li>
            ))}
          </ul>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Archive;
