import axios from "axios";

const axiosIns = axios.create({
    baseURL:'https://dummyjson.com'
})

const UserApi = {
    getAll: () => {
        return axiosIns.request({
            method:'GET',
            url: `/users`
        })
    },
    getSingle: (id) => {
        return axiosIns.request({
            method:'GET',
            url: `/users/${id}`
        })
    },
    create: (user) => {
        return axiosIns.request({
            method:'POST',
            url: `/users/add`,
            data:user
        })
    },
    update: (user,id) => {
        return axiosIns.request({
            method:'PATCH',
            url: `/users/${id}`,
            data:user
        })
    },
    delete: (id) => {
        return axiosIns.request({
            method:'DELETE',
            url: `/users/${id}`
        })
    }

}

export default UserApi