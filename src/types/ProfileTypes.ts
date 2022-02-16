export interface IProfileInfoRequest {
    "aboutMe": undefined | string,
    "contacts": {
        facebook: undefined | string,
        github: undefined | string,
        instagram: undefined | string,
        mainLink: undefined | string,
        twitter: undefined | string,
        vk: undefined | string,
        website: undefined | string,
        youtube: undefined | string,
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string,
    "fullName": string
}

export interface IProfileInfoResponse extends IProfileInfoRequest { 
    userId: number,
}

export interface IProfileInfo extends IProfileInfoResponse {
    photos: {
        small: string,
        large: string
    }
}