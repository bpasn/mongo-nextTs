import { Module } from 'module';
import { User } from './user.model';
import { Ref, getModelForClass, prop } from "@typegoose/typegoose";


export  class Session {
    @prop({ref: () => User})
    user:Ref<User>

    @prop({default:true})
    valid:boolean;
}

const SessionModel = getModelForClass(Session,{
    schemaOptions:{
        timestamps:true
    }
})

export default SessionModel