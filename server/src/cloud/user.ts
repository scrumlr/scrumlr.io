import {requireValidBoardMember} from "./permission";
import {api} from "./util";

interface setUserReadyStatusRequest {
  boardId: string;
  ready: string;
}

export const initializeUserFunctions = () => {
  api<setUserReadyStatusRequest, boolean>("setUserReadyStatus", async (user, request) => {
    await requireValidBoardMember(user, request.boardId);

    const boardQuery = new Parse.Query<Parse.Object>("Board");
    const board = await boardQuery.get(request.boardId, {
      useMasterKey: true,
    });

    if (!board) {
      throw new Error(`Board '${request.boardId}' not found`);
    }

    if (request.ready) {
      board.addUnique("readyUsers", user.id);
    } else {
      board.remove("readyUsers", user.id);
    }

    await board.save(null, {useMasterKey: true});

    return true;
  });
};
