import {callAPI} from "./index";

export const UserAPI = {
    /**
     * sets the ready users of the board with the specified id.
     *
     * @param boardId the board id
     * @param ready the ready/unready status
     *
     * @returns `true` if the operation succeeded or throws an error otherwise
     */
    setUserReadyStatus: (boardId: string, ready: boolean) => {
        return callAPI<{ boardId: string, ready: boolean }, boolean>('setUserReadyStatus', { boardId, ready });
    }
}