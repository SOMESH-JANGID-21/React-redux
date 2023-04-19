import React,{useState,useEffect,useCallback} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, readAllUsers } from '../Action/UserAction';
import {  NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Home() {
  const dispatch = useDispatch(); // carries action method + data
  const navigate = useNavigate()

  const initFetch = useCallback(()=> {
    dispatch(readAllUsers()) //read Action method call
  },[dispatch])

  useEffect(()=> {
    initFetch()
  },[initFetch])

  const users = useSelector((item)=> item.users);

  const delUser = (id) => {
    if(window.confirm(`are you sure to delete user id ${id}`)){
      dispatch(deleteUser({id: id}))
      .unwrap()
      .then(res => {
        toast.success(`user deleted successfully`)
        navigate(`/`)
      }).catch(err => toast.error(err.message))
    }else{
      toast.warning(`delete terminated`)
    }
  }


  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3">Home</h3>
            </div>
        </div>

        <div className="row">
          {
            users.map((item,index) => {
              const {id, firstName, lastName , email,image,gender,} = item

              return (
                <div className="col-md-3 mt-2 mb-2" key={index}>
                  <div className="card ">
                    <img src={image} alt="name" className='card-img-top' />
                    <div className="card-header">
                      <h4 className="text-center text-success">{firstName+" "}{ lastName}</h4>
                    </div>
                    <div className="card-body">
                      <p>
                        <strong>Email</strong>
                        <span className='float-end' >{email}</span>
                      </p>
                      <p>
                        <strong>Gender</strong>
                        <span className='float-end' >{gender}</span>
                      </p>
                    </div>
                    <div className="card-footer">
                      <NavLink to={`/update/${id}`} className="btn btn-info">Edit</NavLink>
                      <button onClick={() => {delUser(id)}} className="btn btn-danger float-end">Delete</button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      
    </div>
  )
}

export default Home
