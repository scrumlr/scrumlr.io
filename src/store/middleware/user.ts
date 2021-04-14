import {Dispatch, MiddlewareAPI} from "redux";
import {ApplicationState} from "types/store";
import {ActionType, ReduxAction} from "../action";
import {API} from "api";


export const passUserMiddleware = (stateAPI: MiddlewareAPI<any, ApplicationState>, dispatch: Dispatch, action: ReduxAction) => {
    if (action.type === ActionType.SetUserReadyStatus) {
        const boardId = stateAPI.getState().board.data!.id;

        API.setUserReadyStatus(boardId, action.ready);
    }
}