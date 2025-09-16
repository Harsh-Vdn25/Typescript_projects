import mongoose from "mongoose";
export declare const connectDB: () => Promise<void>;
export declare const ItemModel: mongoose.Model<{
    name: string;
    cost?: number | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    cost?: number | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    name: string;
    cost?: number | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    cost?: number | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    cost?: number | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    name: string;
    cost?: number | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=items.d.ts.map