// -----------------------------------------
//
// -----------------------------------------
export type UserDat = {
    id?: string;
    email: string;
    user_id: string;
    password: string;
    //
    enabled: boolean;
    mayRef: boolean;
    //
    matchPassword?: (pw: string) => boolean;
};
//
//
export enum Input {
    PW = "password",
    TXT = "text",
    NUM = "number",
}
// -----------------------------------------
//
// -----------------------------------------
export type ServerEmits = {};
export type ClientEmits = {};
