import mongoose, { Types } from "mongoose";
export interface UserType {
    _id: Types.ObjectId;
    username: string;
    password?: string;
    firstName?: string;
    lastName?: string;
}
export declare const UserModel: mongoose.Model<UserType, {}, {}, {}, mongoose.Document<unknown, {}, UserType, {}, {}> & UserType & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
export declare const getUserByname: (username: string) => Promise<UserType | null>;
//# sourceMappingURL=usermodel.d.ts.map