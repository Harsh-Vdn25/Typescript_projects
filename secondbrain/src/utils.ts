export const random=(num:number)=>{
    const chars="qwertyuioasdfghjklzxcvbnm12345678";
    const length=chars.length;
    let ans='';
    for(let i=0;i < num;i++){
        ans+=chars[Math.ceil(Math.random()*length)];
    }
    return ans;
}