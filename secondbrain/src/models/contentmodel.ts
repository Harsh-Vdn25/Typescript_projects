import mongoose,{model,Schema,Types} from "mongoose";

export interface ContentType{
    _id:Types.ObjectId;
    link:string;
    type:string;
    tags:Types.ObjectId|null;
    userId:Types.ObjectId
};

const ContentSchema=new Schema<ContentType>({
    link:String,
    type:String,
    tags:{type:Schema.Types.ObjectId,ref:'Tag',required:false},
    userId:{type:Schema.Types.ObjectId,ref:'User',required:true}
})

export const ContentModel=mongoose.model<ContentType>("Content",ContentSchema);