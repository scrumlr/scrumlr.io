import UserAvatar from "./BoardUser";
import "./BoardUsers.scss";
import Parse from "parse";
import {useSelector} from "react-redux";
import {ApplicationState} from "types/store";
import {ReactComponent as ReadyIcon} from "assets/icon-ready.svg";

// it might be a good idea to set this number dynamically (e.g., according to the device: desktop vs. mobile)
const NUM_OF_DISPLAYED_USERS = 4; // changed for testing -> TODO revert to 4?

const BoardUsers = () => {
  const users = useSelector((state: ApplicationState) => state.users.all);
  const currentUser = Parse.User.current();

  const me = users.find((user) => user.id === currentUser!.id);
  const them = users.filter((user) => user.id !== currentUser!.id && user.online);

  const usersToShow = them.splice(0, them.length > NUM_OF_DISPLAYED_USERS ? NUM_OF_DISPLAYED_USERS - 1 : NUM_OF_DISPLAYED_USERS); // removes showed ones from "them"

  const readyThems = them.filter((user) => user.ready).length;

  return (
    <ul className="board-users">
      {them.length > 0 && (
        <li className="rest-users">
          <div className="rest-users__count">{them.length}</div>
          <div className="rest-users__ready-wrapper">
            <div className="rest-users__ready-count">{readyThems}</div>
            <div className="rest-users__ready-icon-wrapper">
              <ReadyIcon className="rest-users__ready-icon" />
            </div>
          </div>
        </li>
      )}
      {usersToShow.map((user) => (
        <UserAvatar key={user.id} id={user.id} name={user.displayName} ready={user.ready} />
      ))}
      {!!me && <UserAvatar id={me.id} name={me.displayName} ready={me.ready} />}
    </ul>
  );
};

export default BoardUsers;
