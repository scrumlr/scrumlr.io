import {UsersState} from "types/store";
import {UserClientModel} from "types/user";
import {ActionType, ReduxAction} from "../action";

export const usersReducer = (state: UsersState = {admins: [], basic: [], all: [], readyUsers: []}, action: ReduxAction): UsersState => {
  switch (action.type) {
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
        action.users.forEach((user) => {
          if (!state.admins.find((admin) => admin.id === user.id) && state.admins.length !== 0) {
            newState.basic.push(user);
          }
        });
      }

      newState.all = [...newState.admins];
      newState.basic.forEach((member) => {
        if (!newState.admins.find((admin) => admin.id === member.id)) {
          newState.all.push(member);
        }
      });

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
    case ActionType.SetUserReadyStatus: {
      const newState = {
        admins: state.admins,
        basic: state.basic,
        all: state.all,
        // admins: state.admins.map((user) => ({...user, ready: user.id === action.userId && true})),
        // basic: state.basic.map((user) => ({...user, ready: user.id === action.userId && true})),
        // all: state.all.map((user) => ({...user, ready: user.id === action.userId && true})),
        readyUsers: state.readyUsers,
      };

      // TODO cleanup
      const userAdmin = newState.admins.find((user) => user.id == action.userId);
      const userBasic = newState.basic.find((user) => user.id == action.userId);
      const userAll = newState.all.find((user) => user.id == action.userId);

      if (userAdmin) userAdmin.ready = action.ready;
      if (userBasic) userBasic.ready = action.ready;
      if (userAll) userAll.ready = action.ready;
      //

      if (action.ready) {
        if (!newState.readyUsers.includes(action.userId)) newState.readyUsers.push(action.userId);
      } else {
        newState.readyUsers = newState.readyUsers.filter((user) => user !== action.userId);
      }

      return newState;
    }
  }
  return state;
};
