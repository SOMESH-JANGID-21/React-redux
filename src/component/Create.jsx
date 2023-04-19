import React, {  useState } from 'react'
import { toast } from 'react-toastify';
import { createUser} from "../Action/UserAction"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Create() {
  const [user,setUser] = useState({
    firstName:"",
    lastName:"",
    age:5
  })

  const dispatch = useDispatch()
  const navigate  = useNavigate()

  const readValue = (e) => {
    const {name,value} = e.target;
    setUser({...user,[name]:value})
  }

  const SubmitHandler = async (e) => {
    e.preventDefault();
    try{
      // console.log("user = " , user)
      dispatch(createUser(user)).unwrap().then(res=> {
        toast.success("user data created successfully")
        navigate('/')
      }).catch(err => toast.error(err.message))
    }catch (err) {
      toast.error(err.message)
    }
  } 
    

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3">Create</h3>
            </div>
        </div>

        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <form onSubmit={SubmitHandler}>
                  <div className="form-group mt-2">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name='firstName' value={user.firstName}  onChange={readValue} id='firstName' className="form-control"  required/>
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="firstName">Last Name</label>
                    <input type="text" name='lastName'  value={user.lastName}  onChange={readValue} id='lastName' className="form-control"  required/>
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="age">Age</label>
                    <input type="number" name='age' id='age'  value={user.age}  onChange={readValue} className="form-control"  required/>
                  </div>
                  <div className="form-group mt-2">
                    <input type="submit" className='text-center btn btn-success' />
                  </div>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Create
