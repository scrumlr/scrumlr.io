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
      {ready && <ReadyIcon className="user-avatar__ready-icon icon1" />}
    </li>
  );

export default UserAvatar;
