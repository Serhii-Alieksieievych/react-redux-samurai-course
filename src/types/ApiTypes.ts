import { strictEqual } from "assert";
import { DialogType, IMessageFromFilterByDateType, MessagesType, MessageType } from "./DialogsTypes";
import { ProfileInfoType } from "./ProfileTypes";
import { UserType } from "./UsersTypes"

export enum ResultCodeEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}

export interface ICommonResponse{}

export interface ICommonResponseWithResultCode {
    resultCode: ResultCodeEnum,
    messages: Array<string | undefined>,
}

// GetUsersAPI

export interface IGetUsersResponse extends ICommonResponse {
    data: {
        items: Array<UserType>
        totalCount: number
    }
}

export interface IGetUsersRequest {
    count?: number,
    page?: number,
    term?: string,
}

//FollowAPI

export interface IFollowUnfollow extends ICommonResponseWithResultCode {
    data: {}
}

//ProfileAPI
export interface IGetProfileDataRequest {
    userId: number,
}

export interface IGetProfileDataResponse extends ICommonResponse {
    data: ProfileInfoType
}

export interface ISetProfileDataResponse extends ICommonResponse {
    data: {}
}

export interface IGetStatusRequest {
    userId: number;
}

export interface IGetStatusResponse extends ICommonResponse {
    data: string
}

export interface ISetStatusResponse extends ICommonResponseWithResultCode {
    data: {}
}

export interface ISetPhotoResponse extends ICommonResponseWithResultCode {
    data: {photos: { small: string, large: string }}
}

//SecurityAPI

export interface IGetCaptchaResponse extends ICommonResponse {
    data: {url: string}
}

//AuthAPI

export interface ILoginResponse {
    resultCode: ResultCodeEnum| ResultCodeForCaptchaEnum,
    messages: Array <string>,
    fieldsErrors: Array <string>,
    data: {
        userId: number
    }
}
export interface ILogoutResponse extends ICommonResponseWithResultCode {
    data: {}
}

export interface IGetAuthStatusResponse {
    data: {
        resultCode: ResultCodeEnum,
        messages: Array<string | undefined>,
        fieldsErrors: Array<string | undefined>,
        data: {
            id: number
            email: string
            login: string
        }
    }
}

//DialogsAPI

export interface IGetDialogsResponse extends ICommonResponse{
    data: Array<DialogType>
}

export interface IGetMessagesResponse extends ICommonResponse{
    data: MessagesType
} 

export interface IStartChattngWithUserResponse extends ICommonResponseWithResultCode{
    data: {}
}

export interface ISendMessageResponse extends ICommonResponseWithResultCode{
    data: {
        message: MessageType,
        fieldsErrors: Array<string>,
    }
}

export interface ICheckIsMessageViewedResponse extends ICommonResponse{
    data: boolean;
}

export interface ISetMessageToSpamResponse extends ICommonResponseWithResultCode{
    data: {}
}

export interface IDeleteMessageResponse extends ICommonResponseWithResultCode{
    data: {}
}

export interface IRestoreMessageResponse extends ICommonResponseWithResultCode{
    data: {}
}

export interface IGetMessagesNewestThanResponse extends ICommonResponse{
    data: Array<IMessageFromFilterByDateType>
}

export interface IGetCountNewMessagesResponse extends ICommonResponse{
    data: number,
}