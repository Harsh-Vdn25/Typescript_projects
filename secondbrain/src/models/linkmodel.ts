import mongoose,{Schema,Types,model} from "mongoose"

interface LinkType{
    hash:string;
    userId:Types.ObjectId;
}

const LinkSchema=new Schema<LinkType>({
    hash:{type:String,required:true},
    userId:{type:Schema.Types.ObjectId,ref:'user',required:true,unique:true},
})

export const LinkModel=mongoose.model<LinkType>('Link',LinkSchema);