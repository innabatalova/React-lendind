import { HTMLAttributes } from "react"

export interface IMessageDateProps extends HTMLAttributes<HTMLSpanElement> {
    text: string
}

export interface IMessageProps extends HTMLAttributes<HTMLElement> {
    src: string
    name: string
    date: string
    text: string
    classText?: string
    teg?: string
    special?: string
    srcImg?: string
}

export interface IMacRoundProps extends HTMLAttributes<HTMLDivElement> {
    classRound: string
}

export interface INavAppsProps extends HTMLAttributes<HTMLImageElement> {
    src?: string;
    classNavItem?: string;
}

export interface IChannelItemProps extends HTMLAttributes<HTMLDivElement> {
    value: string;
    clicked?: () => void
}

export interface IFriendItemProps extends HTMLAttributes<HTMLDivElement> {
    classFriend?: string;
    src: string;
    name: string;
}

export interface IVisibleProps extends HTMLAttributes<HTMLDivElement> {
    classVisible?: string;
    clicked?: () => void
}

export interface IChatFooterProps extends HTMLAttributes<HTMLDivElement> {
    channelPlaceholder: string;
}

export interface IStateProps {
    name: string | null,
    avatar: string | null
}