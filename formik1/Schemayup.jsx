import *  as Yup  from 'yup'

 export let loginformat=Yup.object({
    name:Yup.string().min(4).required("name should have atleast four char "),
    email:Yup.string().email().required("correct email enter")
})
