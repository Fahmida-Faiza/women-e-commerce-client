import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://women-e-commerce-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;