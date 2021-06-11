import {UsersState} from "types/store";
import {UserClientModel} from "types/user";
import {ActionType, ReduxAction} from "../action";

export const usersReducer = (state: UsersState = {admins: [], basic: [], all: [], readyUsers: []}, action: ReduxAction): UsersState => {
  switch (action.type) {
    // ready property mitnehmen done ?
    case ActionType.SetUsers: {
      const newState = {
        admins: state.admins,
        basic: state.basic,
        all: [] as UserClientModel[],
        readyUsers: state.readyUsers,
      };

      if (action.admin) {
        newState.admins = action.users;
      } else {
        newState.basic = action.users;
      }

      newState.all = [...newState.admins];
      newState.basic.forEach((member) => {
        if (!newState.admins.find((admin) => admin.id === member.id)) {
          newState.all.push(member);
        }
      });

      // TODO set ready state for basic/admin/all users + except ME as in scrumlr v1?
      const listOfReadyUsers = state.readyUsers;

      newState.admins = newState.admins.map((user) => ({...user, ready: listOfReadyUsers.includes(user.id)}));
      newState.basic = newState.basic.map((user) => ({...user, ready: listOfReadyUsers.includes(user.id)}));
      newState.all = newState.all.map((user) => ({...user, ready: listOfReadyUsers.includes(user.id)}));

      return newState;
    }
    case ActionType.SetUserStatus: {
      const newState = {
        admins: state.admins,
        basic: state.basic,
        all: state.all,
        readyUsers: state.readyUsers,
      };

      const user = newState.all.find((member) => member.id === action.userId);
      if (user) {
        user.online = action.status;
      }

      return newState;
    }
    case ActionType.InitializeBoard:
    case ActionType.UpdatedBoard: {
      const listOfReadyUsers = action.board.readyUsers;

      const newState = {
        admins: state.admins.map((user) => ({...user, ready: listOfReadyUsers.includes(user.id)})),
        basic: state.basic.map((user) => ({...user, ready: listOfReadyUsers.includes(user.id)})),
        all: state.all.map((user) => ({...user, ready: listOfReadyUsers.includes(user.id)})),
        readyUsers: listOfReadyUsers,
      };

      return newState;
    }
  }
  return state;
};
