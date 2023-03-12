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
}

export interface IFriendItemProps extends HTMLAttributes<HTMLDivElement> {
    classFriend?: string;
    src: string;
    name: string;
}