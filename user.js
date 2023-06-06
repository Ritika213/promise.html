const user = {
    name : "Riya",
    lastActivityTime : null
}
post=[]
function updateLastUserActivityTime(user){
    return new Promise ((resolve,reject) => {
        user.updateLastActivityTime =new Date().toString()
        resolve()
    })
}
const createPost= new Promise ((resolve,reject) =>{
    setTimeout(()=>{
        posts.push({title:'NEW POST'})
        updateLastUserActivityTime(user)
        resolve()
    },1000)
})
const deletePost = new Promise((reslove,reject)=>{
    setTimeout(()=>{
        if(posts.length>=1){
            posts.pop()
        } else {
            reject('ERROR')
        }
    },1000);
})
Promise= [createPost,deletePost]
Promise.all(promise).then(()=>{
    console.log(posts)
}).catch((err)=>{
console.log(err)
})
