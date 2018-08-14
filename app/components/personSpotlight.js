import Link from 'next/link';
import Router from 'next/router';
import { styles, mediaQueries } from '../constants';

const style = (
  <style jsx>
    {`
      .speaker-info-box {
        width: auto;
        position: relative;
        overflow: hidden;
        display: block;
        height: auto;
      }
      .speaker-info-box img {
        width: 100%;
        height: 100%;
        filter: grayscale(100%);
        display: block;
      }
      .speaker-hover {
        height: 100%;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        top: 0;
        transition: 0.5s ease-out;
        width: 100%;
        background: rgba(0, 152, 255, 0.8) none repeat scroll 0 0 !important;
        z-index: 1;
      }
      .speaker-info-box.active .speaker-hover {
        opacity: 1;
      }
      .speaker-info-box.active .speaker-details {
        transform: translateY(-50%);
        opacity: 1;
      }
      .speaker-details h5 {
        font-size: 24px;
        color: ${styles.mainColor3};
        margin: 10px 0;
      }
      .speaker-details h6 {
        font-size: 16px;
        color: ${styles.mainColor3};
        margin: 10px 0;
      }
      .speaker-details {
        position: absolute;
        top: 50%;
        transform: translateY(100px);
        transition: 0.2s ease-out;
        opacity: 0;
        width: 100%;
        z-index: 2;
        text-align: center;
      }

      @media (min-width: ${mediaQueries.XS}) {
        .speaker-info-box:hover .speaker-hover,
        .speaker-info-box:focus .speaker-hover {
          opacity: 1;
        }
        .speaker-info-box:hover .speaker-details,
        .speaker-info-box:focus .speaker-details {
          transform: translateY(-50%);
          opacity: 1;
        }
      }
    `}
  </style>
);

const PersonSpotlight = ({ speaker, baseUrl, activeLink = false }) => {
  const personInfo = (
    <a
      className="speaker-info-box"
      onMouseEnter={() => {
        Router.prefetch(`/speakers?name=${speaker.permalink}`);
      }}
    >
      <img src={`${baseUrl}${speaker.img}`} alt={speaker.name} />
      <div className="speaker-hover" />
      <div className="speaker-details">
        <h5>{speaker.fullName}</h5>
        {speaker.position ? <h6>{speaker.position}</h6> : null}
        {speaker.company ? <h6>{speaker.company}</h6> : null}
      </div>
      {style}
    </a>
  );
  return (
    <div>
      {activeLink && (
        <Link href={`/speakers?name=${speaker.permalink}`} as={`/speakers/${speaker.permalink}`}>
          {personInfo}
        </Link>
      )}
      {!activeLink && (
        <div tabIndex="0" role="button" className="speaker-info-box">
          {personInfo}
        </div>
      )}
    </div>
  );
};

export default PersonSpotlight;
