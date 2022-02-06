import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '2684d674-512e-42f2-86c1-036ed91abbce'
    }
})

export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 12) {
        return instance.get(
            `users?page=${currentPage}&count=${pageSize}`,
        ).then(response => response.data)
    },
}

export const FollowAPI = {
    followAxios(user) {
        return instance.post(
            `follow/${user.id}`,
            {},
        ).then(response => response.data)
    },

    unfollowAxios(user) {
        return instance.delete(
            `follow/${user.id}`,
        ).then(response => response.data)
    }
}

export const ProfileAPI = {
    getProfileData(userId) {
        userId = userId ? userId : 2
        return (
            instance.get(`/profile/${userId}`).then(resp => resp.data)
        )
    },
    setProfileData(data) {
        return (
            instance.put(`/profile/`, data).then(resp => resp.data)
        )
    },
    getStatus(userId) {
        return (
            instance.get(`/profile/status/${userId}`).then(resp => resp.data)
        )
    },
    updateStatus(status) {
        return (
            instance.put(`/profile/status`, {
                status: status,
            }).then(resp => resp.data)
        )
    },
    sendPhoto(photo) {
        let formData = new FormData;
        formData.append("image", photo);
        return(
            instance.put(`/profile/photo`, formData).then(resp => resp.data)
        )
    }
}

export const securityAPI = {
    getCaptchaUrl(){
        return(
            instance.get('/security/get-captcha-url').then(resp => resp.data)
        )
    }
}

export const AuthAPI = {
    login({ input, password, rememberMe, captcha }) {
        return instance.post(
            `/auth/login`,
            {
                email: input,
                password,
                rememberMe,
                captcha,
            },
        )
    },

    logoutAxios() {
        return instance.delete(
            `/auth/login`,
        ).then(response => response.data)
    },

    getAuthStatus() {
        return (
            axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            }).then(resp => resp.data)
        )
    }
}
 export const dialogsApi = {
    getDialogs: () => instance.get('/dialogs').then(resp => {
        return resp.data
    }),

    getMessages(id){
        return instance.get(`dialogs/${id}/messages`).then(resp => {
            return resp.data
        })
    },
    startChattngWithUser(id) {
        return instance.put(`dialogs/${id}`,{userId: id}).then(resp=>resp.data)
    },
    sendMessage(id, message){
        return instance.post(`dialogs/${id}/messages`,{body: message}).then(resp => {
            return resp.data
        })
    },
    checkIsMessageViewed(messageId){
        return instance.get(`dialogs/messages/${messageId}/viewed`).then(resp => {
            return resp.data
        })
    },
    setMessageToSpam( messageId ){
        return instance.post(`dialogs/messages/${messageId}/spam`, { body: messageId }).then(resp => {
            return resp.data
        })
    },
    deleteMessage( messageId ){
        return instance.delete(
            `dialogs/messages/${messageId}`,
        ).then(response => response.data)
    },
    restoreMessage( messageId ){
        return instance.put(
            `dialogs/messages/${messageId}/restore`,
            { messageId }
        ).then(resp => resp.data)
    },
    getMessagesNewestThan( userId, date ){
        return instance.get(`dialogs/${userId}/messages/new?newerThen=${date}`).then(resp => {
            return resp.data
        })
    },
    getCountNewMessages(){
        return instance.get(`dialogs/messages/new/count`).then(resp => {
            return resp.data
        })
    }

 }
