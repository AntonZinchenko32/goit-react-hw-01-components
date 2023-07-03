import css from './Profile.module.css'


const Profile = ({ name, tag, location, avatarUrl, followers, views, likes }) => (

    <div className={css.profile}>
        <div className="description">
            <img
            src={avatarUrl}
            alt="User avatar"
            className={css.avatar}
            />
            <p className="name">{name}</p>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul className="stats">
        <li>
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
        </li>
        <li>
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
        </li>
        <li>
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
        </li>
        </ul>
    </div>
);

export default Profile;