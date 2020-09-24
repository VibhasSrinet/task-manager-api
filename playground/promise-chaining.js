require('../src/db/mongoose')
 const User= require('../src/models/user')
// User.findByIdAndUpdate('5f5643e11ba70a36cc219ad7', {age : 1}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age :1})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//   console.log(e)
// })



const Updateandfind= async (id, age)=>{
    const user=await User.findByIdAndUpdate(id, {age})
    const count= await User.countDocuments({age})
    return count
}

Updateandfind('5f5643e11ba70a36cc219ad7', 1).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})