import Link from '../common/link';
import { styles, mediaQueries } from '../../constants';

const Organizer = ({ role, image, name, twitter }) => (
  <div>
    <div className="organizer-info-box" tabIndex="0" role="button">
      <img src={`static/img/organizers/${image}`} alt={name} />
      <div className="organizer-hover" />
      <div className="organizer-details">
        <div className="organizer-name" aria-hidden="true">
          {name}
        </div>
        <div className="organizer-role">{role}</div>
        {twitter && (
          <div className="organizer-link">
            <Link href={`https://twitter.com/${twitter}`} theme={Link.THEME_LIGHT_CONTRAST}>
              @{twitter}
            </Link>
          </div>
        )}
      </div>
    </div>

    <style jsx>
      {`
        .organizer-info-box {
          width: auto;
          position: relative;
          overflow: hidden;
          height: auto;
        }
        a {
          color: ${styles.mainColor3};
        }
        img {
          width: 100%;
          height: 100%;
          filter: grayscale(100%);
          display: block;
        }
        .organizer-hover {
          height: 100%;
          left: 0;
          opacity: 0;
          position: absolute;
          right: 0;
          top: 0;
          transition: 0.5s ease-out;
          width: 100%;
          background: ${styles.mainColor6} none repeat scroll 0 0 !important;
          z-index: 1;
        }
        .organizer-info-box.active .organizer-hover {
          opacity: 0.8;
        }
        .organizer-info-box.active .organizer-details {
          transform: translateY(-50%);
          opacity: 0.8;
        }

        @media (prefers-reduced-motion: reduce) {
          .organizer-details {
            transition: none;
          }

          .organizer-hover {
            transition: none;
          }
        }

        .organizer-name {
          font-size: 24px;
          color: ${styles.mainColor3};
          margin: 10px 0;
          font-weight: bold;
        }
        .organizer-role,
        .organizer-link {
          font-size: 16px;
          color: ${styles.mainColor3};
          margin: 10px 0;
          font-weight: bold;
        }
        .organizer-details {
          position: absolute;
          top: 50%;
          transform: translateY(100px);
          transition: 0.2s ease-out;
          opacity: 0;
          width: 100%;
          z-index: 2;
          text-align: center;
          cursor: pointer;
        }
        @media (min-width: ${mediaQueries.XS}) {
          .organizer-info-box:hover .organizer-hover,
          .organizer-info-box:focus .organizer-hover {
            opacity: 0.8;
          }
          .organizer-info-box:hover .organizer-details,
          .organizer-info-box:focus .organizer-details {
            transform: translateY(-50%);
            opacity: 0.8;
          }
        }
      `}
    </style>
  </div>
);

export default Organizer;
