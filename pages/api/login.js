import connect from "../../lib/mongodb";
import User from '../../model/schema'

connect()

export default async function handler(req,res){

    const {email,password}=req.body
    const user = await User.findOne({email,password})
    if(!user){
        return res.json("It seems like you dont have an account please register first")
    }
    else{
        // res.redirect(307, '/home')
        res.json("Welcome back you already had an account created let's enjoy...")
    }
}