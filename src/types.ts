export interface IMessageDateProps extends React.HTMLAttributes<HTMLSpanElement> {
    text: string
}

export interface IMessageProps extends React.HTMLAttributes<HTMLElement> {
    src: string
    name: string
    date: string
    text: string
    classText?: string
    teg?: string
    special?: string
    srcImg?: string
}

export interface IMacRoundProps extends React.HTMLAttributes<HTMLDivElement> {
    classRound: string
}

export interface INavAppsProps extends React.HTMLAttributes<HTMLImageElement> {
    src?: string;
    classNavItem?: string;
}

export interface IChannelItemProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
    clicked?: () => void
}

export interface IFriendItemProps extends React.HTMLAttributes<HTMLDivElement> {
    classFriend?: string;
    src: string;
    name: string;
}

export interface IVisibleProps extends React.HTMLAttributes<HTMLDivElement> {
    classVisible?: string;
    clicked?: () => void
}

export interface IChatFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    channelPlaceholder: string;
}

export interface IStateProps {
    role: string | null
    name: string | null,
    avatar: string | null
}

export interface IBioFieldProps {
    title: string | null
    text: string | null
}

export interface IBioSocialProps {
    src: string | undefined
}
