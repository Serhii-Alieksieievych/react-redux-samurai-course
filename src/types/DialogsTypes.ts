export type DialogType = {
    hasNewMessages: boolean,
    id: number,
    lastDialogActivityDate: string,
    lastUserActivityDate: string,
    newMessagesCount: number,
    photos?: {
        small?: string,
        large?: string,
    },
    userName: string,
}

export type MessageType = {
    id: string,
    body: string,
    translatedBody:	null|string,
    addedAt: string,
    senderId: number,
    senderName: string,
    recipientId: number,
    viewed: boolean,
}

export interface IMessageFromFilterByDateType extends MessageType{
    deletedByRecipient: boolean
    deletedBySender: boolean
    distributionId: null
    isSpam: boolean
    recipientName: string
}

export type MessagesType = { items: Array<MessageType>, totalCount: number, error: Array<any> | null }
