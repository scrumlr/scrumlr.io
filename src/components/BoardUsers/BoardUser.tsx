import "./BoardUser.scss";
import {getInitials} from "constants/Name";
import {ReactComponent as ReadyIcon} from "assets/icon-ready.svg";

export interface UserAvatarProps {
  id: string;
  name: string;
  ready: boolean;
  avatar?: string;
}

const UserAvatar = ({name, avatar, ready}: UserAvatarProps) => (
  <li className="user-avatar">
    {avatar ? (
      <img src={avatar} alt={name} />
    ) : (
      <div className="user__initials" title={name}>
        {getInitials(name)}
      </div>
    )}
    {ready && (
      <div className="user-avatar__ready-icon-wrapper">
        <ReadyIcon className="user-avatar__ready-icon" />
      </div>
    )}
  </li>
);

export default UserAvatar;
