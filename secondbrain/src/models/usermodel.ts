import mongoose,{model,Types,Schema} from "mongoose";

export interface UserType{
    _id:Types.ObjectId;
    username:string;
    password:string;
    firstName:string;
    lastName:string;
}

const UserSchema=new Schema<UserType>({
    username:{type:String,required:true,unique:true},
    password:String,
    firstName:String,
    lastName:String
})

export const UserModel=mongoose.model<UserType>('user',UserSchema);

export const getUserByname=async(username:string):Promise<UserType|null>=>{
    return await UserModel.findOne({
        username:username
    })
}

