import {Dispatch, MiddlewareAPI} from "redux";
import {ApplicationState} from "types/store";
import {API} from "api";
import {ActionType, ReduxAction} from "../action";

export const passUserMiddleware = (stateAPI: MiddlewareAPI<any, ApplicationState>, dispatch: Dispatch, action: ReduxAction) => {
  if (action.type === ActionType.SetUserReadyStatus) {
    const boardId = stateAPI.getState().board.data!.id;

    API.setUserReadyStatus(boardId, action.ready);
  }
};
