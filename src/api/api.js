import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '2684d674-512e-42f2-86c1-036ed91abbce'
    }
})

export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 12){
        return instance.get(
            `users?page=${currentPage}&count=${pageSize}`,
        ).then(response => response.data)
    },
}

export const FollowAPI = {
    followAxios (trashcat){
        return instance.post(
            `follow/${trashcat.id}`,
            {},
        ).then(response => response.data)
    },

    unfollowAxios(trashcat){
        return instance.delete(
            `follow/${trashcat.id}`,
        ).then(response => response.data)
    }
}

export const ProfileAPI = {
    getProfileData(userId){
        return (
            instance.get(`/profile/${userId}`).then(resp => resp.data)
        )
    }
}

export const AuthAPI = {
    getAuthStatus(){
        return(
            axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            }).then(resp => resp.data)
        )
    }
}
