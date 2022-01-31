import {SET_CURRENT_PAGE, TOGGLE_FOLLOWING_STATUS} from "../Redux/users-reducer"

export type UserType = {
    id: number,
    name: string,
    status: string,
    photos: {
        small: string | null,
        large: string | null,
    },
    followed: boolean,
}

export type SetCurrentPageType = { type: typeof SET_CURRENT_PAGE, currentPage: number }

export type ToggleFollowingStatusType = { type: typeof TOGGLE_FOLLOWING_STATUS, id: number }