// import { useFormik } from "formik"
// import { useState, useContext, createContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { signupSchema } from "../schemas/signupSchema";
// import { userContext } from "./AuthContext";

// export const formContext = createContext(null)
// export const FormProvider = ({children}) => {

//   const [error, setError] = useState('')
//   const navigate = useNavigate()
//   const { createUser } = useContext(userContext)

//   const onSubmit = async (values, actions) => {
//     const email = values.email
//     const password = values.password
//     setError('')
//     console.log(values)

//     try {
//       await createUser(email, password)
//       actions.resetForm()
//       navigate('/buyaccount')
//     } catch (e){
//       setError(e.message)
//       console.log(e.message)
//     }
//   }

//   const {
//     values,
//     errors,
//     handleBlur,
//     handleChange,
//     handleSubmit,
//     touched,
//     isSubmitting } = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       password: '',
//       confirmPassword: ''
//     },
//     validationSchema: signupSchema,
//     onSubmit
//   })

//   return (
//     <formContext.Provider value={{values, errors, handleBlur, handleChange, handleSubmit, touched, isSubmitting, onsubmit}}>
//       {children}
//     </formContext.Provider>
//   )
// }
