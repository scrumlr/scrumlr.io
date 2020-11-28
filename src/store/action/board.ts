/** This object lists board object specific internal Redux Action types. */
import {BoardClientModel} from "../../types/board";

export const BoardActionType = {
    /*
     * ATTENTION:
     * Don't forget the `as` casting for each field, because the type inference
     * won't work otherwise (e.g. in reducers).
     */
    LeaveBoard: '@@SCRUMLR/leaveBoard' as '@@SCRUMLR/leaveBoard',
    JoinBoard: '@@SCRUMLR/joinBoard' as '@@SCRUMLR/joinBoard',
    InitializeBoard: '@@SCRUMLR/initBoard' as '@@SCRUMLR/initBoard',
    UpdateBoard: '@@SCRUMLR/updateBoard' as '@@SCRUMLR/updateBoard',
    DeleteBoard: '@@SCRUMLR/deleteBoard' as '@@SCRUMLR/deleteBoard',
    PermittedBoardAccess: '@@SCRUMLR/permittedBoardAccess' as '@@SCRUMLR/permittedBoardAccess',
    RejectedBoardAccess: '@@SCRUMLR/rejectedBoardAccess' as '@@SCRUMLR/rejectedBoardAccess',
    PendingBoardAccessConfirmation: '@@SCRUMLR/pendingBoardAccessConfirmation' as '@@SCRUMLR/pendingBoardAccessConfirmation'
}

/** Factory or creator class of internal Redux board object specific actions. */
export const BoardActionFactory = {
    /*
     * ATTENTION:
     * Each action creator should be also listed in the type `BoardReduxAction`, because
     * the type inference won't work otherwise (e.g. in reducers).
     */
    leaveBoard: () => ({
        type: BoardActionType.LeaveBoard
    }),
    joinBoard: (boardId: string) => ({
        type: BoardActionType.JoinBoard,
        boardId: boardId
    }),
    initializeBoard: (board: BoardClientModel) => ({
        type:  BoardActionType.InitializeBoard,
        board
    }),
    updateBoard: (board: BoardClientModel) => ({
        type: BoardActionType.UpdateBoard,
        board
    }),
    deleteBoard: () => ({
        type: BoardActionType.DeleteBoard
    }),
    permittedBoardAccess: (boardId: string) => ({
        type: BoardActionType.PermittedBoardAccess,
        boardId
    }),
    rejectedBoardAccess: () => ({
        type: BoardActionType.RejectedBoardAccess
    }),
    pendingBoardAccessConfirmation: (requestReference: string) => ({
        type: BoardActionType.PendingBoardAccessConfirmation,
        requestReference
    })
}

export type BoardReduxAction =
    | ReturnType<typeof BoardActionFactory.leaveBoard>
    | ReturnType<typeof BoardActionFactory.joinBoard>
    | ReturnType<typeof BoardActionFactory.initializeBoard>
    | ReturnType<typeof BoardActionFactory.updateBoard>
    | ReturnType<typeof BoardActionFactory.deleteBoard>
    | ReturnType<typeof BoardActionFactory.permittedBoardAccess>
    | ReturnType<typeof BoardActionFactory.rejectedBoardAccess>
    | ReturnType<typeof BoardActionFactory.pendingBoardAccessConfirmation>


