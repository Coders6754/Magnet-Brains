import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useEffect } from 'react';

import { url } from '../components/url';
import axios from "axios";

import images from "../assets/home.jpg";



export default function Home() {
  const nav = useNavigate();
  const auth = useSelector((store: any) => store.authReducer.isAuthenticated);
  const handleAuth = () => {
    if (auth) {
      nav('/board')
    } else {
      toast.error("Please login first", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    }
  }
  const getBackend = async () => {
    const { data } = await axios.get(`${url}/auth`);
    console.log(data);
  };
  useEffect(() => {
    getBackend();
  }, []);
  return (
    <div className="min-h-[90vh] bg-black flex flex-col-reverse pb-5 md:flex-row md:pb-0 md:items-center overflow-hidden md:justify-around">
      <div className="px-5 flex flex-col gap-6 h-[100%] md:w-[40%]">
        <h1 className="text-red-300 text-4xl font-semibold md:text-6xl">Manage Your Tasks More Effortlessly With Our Help</h1>
        <p className="text-red-100">
Enhance your efficiency and boost productivity using our advanced task management software, a robust solution designed to streamline task organization and elevate performance.</p>
        <button onClick={handleAuth} className="bg-red-500 px-5 py-1.5 rounded font-bold w-max" type="submit">Get Started</button>
      </div>
      <img src={images} alt="" className="md:w-[45%]" />
    </div>
  )
}
