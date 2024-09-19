import clsx from "clsx";
import css from "./Profile.module.css";

function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={clsx(css.profileItem)}>
      <div className={clsx(css.profileInfo)}>
        <img className={clsx(css.profileImg)} src={image} alt="User avatar" />
        <p className={clsx(css.profileName)}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
