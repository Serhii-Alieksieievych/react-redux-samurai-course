import axios from 'axios';
import {
    IFollowUnfollow,
    IGetAuthStatusResponse,
    IGetCaptchaResponse,
    IGetProfileDataRequest,
    IGetProfileDataResponse,
    IGetStatusRequest,
    IGetStatusResponse,
    IGetUsersRequest,
    IGetUsersResponse,
    ISetProfileDataResponse,
    ISetStatusResponse,
    ILoginResponse,
    ILogoutResponse,
    IGetDialogsResponse,
    IGetMessagesResponse,
    IStartChattngWithUserResponse,
    ISendMessageResponse,
    ICheckIsMessageViewedResponse,
    ISetMessageToSpamResponse,
    IDeleteMessageResponse,
    IGetCountNewMessagesResponse,
    IGetMessagesNewestThanResponse,
    IRestoreMessageResponse,
    ISetPhotoResponse,
} from '../types/ApiTypes';
import { AuthFormDataType } from '../types/AuthTypes';
import { ProfileInfoType } from '../types/ProfileTypes';

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '2684d674-512e-42f2-86c1-036ed91abbce'
    }
})

export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 12) {
        return instance.get<IGetUsersRequest,IGetUsersResponse>(
            `users?page=${currentPage}&count=${pageSize}`,
        ).then(response => {
            return response.data
        })
    },
}

export const FollowAPI = {
    followAxios(id: number) {
        return instance.post<IFollowUnfollow>(
            `follow/${id}`,
            {},
        ).then(response => response.data)
    },

    unfollowAxios(id: number) {
        return instance.delete<IFollowUnfollow>(
            `follow/${id}`,
        ).then(response => response.data)
    }
}

export const ProfileAPI = {
    getProfileData(userId: number) {
        return (
            instance.get<IGetProfileDataRequest, IGetProfileDataResponse>(`/profile/${userId}`).then(resp => {
                return resp.data
            })
        )
    },
    setProfileData(data: ProfileInfoType) {
        return (
            instance.put<ISetProfileDataResponse>(`/profile/`, data).then(resp => resp.data)
        )
    },
    getStatus(userId: number) {
        return (
            instance.get<IGetStatusRequest, IGetStatusResponse>(`/profile/status/${userId}`).then(resp => resp.data)
        )
    },
    updateStatus(status: string) {
        return (
            instance.put<ISetStatusResponse>(`/profile/status`, {
                status: status,
            }).then(resp => resp.data)
        )
    },
    sendPhoto(photo: File) {
        let formData = new FormData;
        formData.append("image", photo);
        return(
            instance.put<ISetPhotoResponse>(`/profile/photo`, formData).then(resp => {
                return resp.data
            })
        )
    }
}

export const securityAPI = {
    getCaptchaUrl(){
        return(
            instance.get<void, IGetCaptchaResponse>('/security/get-captcha-url').then(resp => resp.data)
        )
    }
}

export const AuthAPI = {
    login({ input, password, rememberMe, captcha = null}: AuthFormDataType) {
        return instance.post<ILoginResponse>(
            `/auth/login`,
            {
                email: input,
                password,
                rememberMe,
                captcha,
            },
        ).then(resp=> resp.data)
    },

    logout() {
        return instance.delete<ILogoutResponse>(
            `/auth/login`,
        ).then(response => response.data)
    },

    getAuthStatus() {
        return (
            axios.get<void, IGetAuthStatusResponse>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            }).then(resp => {
                return resp.data
            })
        )
    }
}
 export const dialogsApi = {
    getDialogs: () => instance.get<void, IGetDialogsResponse>('/dialogs').then(resp => {
        return resp.data
    }),

    getMessages(id: number){
        return instance.get<{id:number}, IGetMessagesResponse>(`dialogs/${id}/messages`).then(resp => {
            return resp.data
        })
    },
    startChattngWithUser(id: number) {
        return instance.put<IStartChattngWithUserResponse>(`dialogs/${id}`,{userId: id}).then(resp=>{
            return resp.data
        })
    },
    sendMessage(id: number, message: string){
        return instance.post<ISendMessageResponse>(`dialogs/${id}/messages`,{body: message})
            .then(resp => {
                return resp.data
            })
    },
    checkIsMessageViewed(messageId: number){
        return instance.get<{messageId:number}, ICheckIsMessageViewedResponse>(`dialogs/messages/${messageId}/viewed`).then(resp => {
            return resp.data
        })
    },
    setMessageToSpam( messageId: number ){
        return instance.post<ISetMessageToSpamResponse>(`dialogs/messages/${messageId}/spam`, { body: messageId }).then(resp => {
            return resp.data
        })
    },
    deleteMessage( messageId: number ){
        return instance.delete<IDeleteMessageResponse>(
            `dialogs/messages/${messageId}`,
        ).then(resp => {
            return resp.data
        })
    },
    restoreMessage( messageId: number ){
        return instance.put<IRestoreMessageResponse>(
            `dialogs/messages/${messageId}/restore`,
            { messageId }
        ).then(resp => {
            console.log(resp.data)
            return resp.data
        })
    },
    getMessagesNewestThan( userId:number, date: string ){
        return instance.get<{ userId: number, date: string }, IGetMessagesNewestThanResponse>(`dialogs/${userId}/messages/new?newerThen=${date}`).then(resp => {
            return resp.data
        })
    },
    getCountNewMessages(){
        return instance.get<void, IGetCountNewMessagesResponse>(`dialogs/messages/new/count`).then(resp => {
            return resp.data
        })
    }

 }
