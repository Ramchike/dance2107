export type User = {
    name: string
    surname: string
    desc: string
    literal: string
    male: boolean
    is_active: boolean
    attachments: string[]
    focus_user: FocusUser
}

export type FocusUser = Omit<User, 'is_active'>