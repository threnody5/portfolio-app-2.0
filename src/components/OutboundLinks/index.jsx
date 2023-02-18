/** @format */

import { Link } from 'react-router-dom';

import './style.scss';

const gitHubLink = 'https://github.com/threnody5';

import EnvelopeShare from '@iconscout/react-unicons';

const OutboundLinks = () => {
  return (
    <div>
      <ul className='link-list'>
        <li>
          <a href={gitHubLink.toString()}>
            <img
              className='github-link-image'
              src={require('../../images/github-mark-white.png')}
            />
          </a>
        </li>
        <li>
          <a href='mailto:williamw15@protonmail.com'>
            <EnvelopeShare />
            {/* <img
              className='email-link-image'
              src={require('../../images/transparent-background-email-logos.png')}
            /> */}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default OutboundLinks;
