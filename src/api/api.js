import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '2684d674-512e-42f2-86c1-036ed91abbce'
    }
})

export const getUsers = (currentPage = 1, pageSize = 12) => instance.get(
    `users?page=${currentPage}&count=${pageSize}`,
).then(response => response.data);

export const followAxios = (trashcat) => instance.post(
    `follow/${trashcat.id}`,
    {},
).then(response => response.data);

export const unfollowAxios = (trashcat) => instance.delete(
    `follow/${trashcat.id}`,
).then(response => response.data);

export const getProfileData = (userId) => (
    instance.get(`/profile/${userId}`).then(resp => resp.data)
)