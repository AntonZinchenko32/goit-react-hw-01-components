import css from './Profile.module.css'
import PropTypes from "prop-types";


const Profile = ({ name, tag, location, avatarUrl, stats }) => (

    <div className={css.profile}>
        <div className={css.description}>
            <img
            src={avatarUrl}
            alt="User avatar"
            className={css.avatar}
            />
            <p className="name">{name}</p>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul className={css.stats}>
        <li className={css.statsItem}>
            <span className="label">Followers</span>
            <span className="quantity">{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
            <span className="label">Views</span>
            <span className="quantity">{stats.views}</span>
        </li>
        <li className={css.statsItem}>
            <span className="label">Likes</span>
            <span className="quantity">{stats.likes}</span>
        </li>
        </ul>
    </div>
);

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
    
    stats: PropTypes.exact({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number
    })
};

export default Profile;