import React from 'react';
import { GitHub, Envelope, YouTube, Twitter, LinkedIn } from './Graphic';

class Social extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='social-container'>
        <ul>
          <li>
            <a href='mailto:me@bryantcobo.com'>
              <Envelope width='15' height='15' />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/TheBryantCobo/'
              target='_blank'
              rel='noreferrer'
            >
              <GitHub width='15' height='15' />
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/c/edtechcafe'
              target='_blank'
              rel='noreferrer'
            >
              <YouTube width='15' height='15' />
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/bryantcobo'
              target='_blank'
              rel='noreferrer'
            >
              <Twitter width='15' height='15' />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/bryantcobarrubias/'
              target='_blank'
              rel='noreferrer'
            >
              <LinkedIn width='15' height='15' />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Social;
