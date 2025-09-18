import mongoose, { Types } from "mongoose";
export interface ContentType {
    _id: Types.ObjectId;
    title: string;
    link: string;
    type: string;
    tags: Types.ObjectId;
    userId: Types.ObjectId;
}
export declare const ContentModel: mongoose.Model<ContentType, {}, {}, {}, mongoose.Document<unknown, {}, ContentType, {}, {}> & ContentType & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=contentmode.d.ts.map