import {ReactComponent as CloseIcon} from "assets/icon-close.svg";
import classNames from "classnames";
import "./MenuItem.scss";
import store from "store";
import {ActionFactory} from "store/action";
import {ApplicationState} from "types/store";
import {useSelector} from "react-redux";
import Parse from "parse";

type MenuToggleProps = {
  direction: "left" | "right";
  onToggle: (active: boolean) => void; // delete?
  toggleStartLabel: string;
  toggleStopLabel: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

function MenuToggle(props: MenuToggleProps) {
  // LOOK: The IconChange shows up with delay...

  // local states deleted

  const currentUser = Parse.User.current();
  const users = useSelector((state: ApplicationState) => state.users.all);
  const me = users.find((user) => user.id === currentUser!.id);

  const Icon = props.icon;

  const onClickReady = () => store.dispatch(ActionFactory.setUserReadyStatus(!me?.ready)); // Completely to Redux Connected ?

  // isActive changed to me?.ready
  return (
    <button
      className={classNames("menu-item", {"menu-item--active": me?.ready, "menu-item--disabled": !me?.ready}, `menu-item--${props.direction}`)}
      onClick={() => {
        onClickReady();
      }}
    >
      <div className="menu-item__tooltip">
        <span className="tooltip__text">{me?.ready ? props.toggleStopLabel : props.toggleStartLabel}</span>
      </div>
      <Icon className="menu-item__icon menu-item__icon--start" />
      <CloseIcon className="menu-item__icon menu-item__icon--end" />
    </button>
  );
}

export default MenuToggle;
