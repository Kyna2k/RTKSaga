

export type AuthType = {
    user : Partial<User>
    token: String,
    refreshToken : String,
}

export type User = {
        id : String,
        email : String,
        role : {
            id: String,
            name : String,
        },
        name : String,
        phone: String,
}
export type LoginPayload = {
    email: String,
}