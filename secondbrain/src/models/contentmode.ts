import mongoose,{model,Schema,Types} from "mongoose";

export interface ContentType{
    _id:Types.ObjectId;
    title:string;
    link:string;
    type:string;
    tags:Types.ObjectId;
    userId:Types.ObjectId
};

const ContentSchema=new Schema<ContentType>({
    title:{type:String,required:true},
    link:String,
    type:String,
    tags:{type:Schema.Types.ObjectId,ref:'Tag'},
    userId:{type:Schema.Types.ObjectId,ref:'User'}
})

const ContentModel=mongoose.model<ContentType>("Content",ContentSchema);