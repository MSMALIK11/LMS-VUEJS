import axios from "axios"
const  api=axios.create({
baseURL:'http://localhost:8000/api/',
timeout:60000,
headers:{
    Accept:'application/json',
    'Content-Type':'application/json'
}
})

export const loginUser=async(data)=>{
    const res=api.post('/login',data);
    return res

}
export const fetchAllCourse=async()=>{
    const res=api.get('/course');
    return res

}
// get single  course  details
export const fetchSingleCourseDetails=async(slug)=>{
    const res=await api.get(`/course/${slug}`)
    return res
}