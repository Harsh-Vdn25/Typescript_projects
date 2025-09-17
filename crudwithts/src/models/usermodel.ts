import mongoose,{Schema,model} from "mongoose";

interface UserDoc {
    username:string;
    email:string;
    authentication:{
        password:string,
        salt:string,
        sessionToken?:string
    }
};

const UserSchema=new Schema<UserDoc>({
    username:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    authentication:{
        password:{type:String,required:true,select:false},
        salt:{type:String,required:true,select:false},
        sessionToken:{type:String,select:false},
    },
});

export const UserModel=mongoose.model<UserDoc>('User',UserSchema);
 
export const getUsers=():Promise<UserDoc[]>=>UserModel.find();

export const getUserByEmail=(email:string):Promise<UserDoc|null>=>UserModel.findOne({email});

export const getUserBySessionToken=(sessionToken:string):Promise<UserDoc|null>=>UserModel.findOne({
    'authentication.sessionToken':sessionToken
})

export const getUserById=(id:string):Promise<UserDoc|null>=>UserModel.findById(id);

export const createUser=({username,email,authentication}:Record<string,any>)=>UserModel.create({
    username,email,authentication
});

export const deleteUserById=(id:string)=>UserModel.deleteOne({_id:id});

export const updateUserById=(id:string,values:Record<string,any>)=>UserModel.updateOne(
    {_id:id},{$set:values}
);