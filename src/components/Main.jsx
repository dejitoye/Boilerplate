import React from 'react'
import {chevyLeft} from "./icons"
import {dot} from "./icons"
import avatar from "../images/avatar.jpg"
import dog1 from "../images/dog-image-1.jpg"
import dog2 from "../images/dog-image-2.jpg"


export default function Main() {
    return (
        <div className="antialiased  bg-gray-50 flex justify-center items-center pt-14">
        <div className="bg-50 h-96 w-48 shadow-xl rounded-3xl border-10 border-white" style={{width:"15rem",height:"32rem" }}>
        <div className="bg-gradient-to-r from-purple-400 to-pink-500 w-full h-20 rounded-t-2xl rounded-b-md ">
        <div className="bg-white h-5 w-28  rounded-b-2xl mx-auto">
        
        </div>
        {/* parent of small div */}
        <div className="flex justify-between h-12 items-center px-2 ">
        {/* chevy left */}
        <div className=" flex ">
        <div className="self-center">
          {chevyLeft}
        </div>
        <img src={avatar} alt="" className="h-7 w-7 rounded-full border-2 self-center" />
        <div className="text-xs text-white ml-2">
          <h5 className="font-bold">Samuel Green</h5>
          <h5 className="font-light  text-xs">Available to work</h5>
        </div>
        </div>
        {/* end of the chevy div */}
        <div>
          {dot}
        </div>
        </div>
        {/* end of parent small div */}
        </div>
        {/* end of purple div */}
        <div className="flex flex-col space-y-3">
        <div className="bg-purple-100 max-w-32 p-2 m-2 text-xs break-words text-purple-500 rounded-lg" >
        this is my css tutorial 
        </div>
        <div className="bg-purple-100 max-w-32 p-2 m-2 text-xs break-words text-purple-500 rounded-lg" >
        this is my css tutorial 
        </div>
        <div className=" flex self-end space-x-3">
        <img src={dog1} alt="" className="h-12 w-12 rounded-lg" />
        <img src={dog2} alt="" className="h-12 w-12 rounded-lg" />
        </div>
        <div className="bg-white max-w-32 p-2 m-2 text-xs break-words text-purple-500 rounded-lg self-end" >
        this is my css tutorial 
        </div>
        <div className="bg-purple-100 max-w-32 p-2 m-2 text-xs break-words text-purple-500 rounded-lg" >
        this is my css tutorial 
        </div>
        <div className=" p-2 ml-2 flex bg-gradient-to-l from-pink-500 to-purple-500 w-36 rounded-lg justify-between">
        <span className="w-3 h-3 rounded-full border-white border inline-block self-center  ml-2 "></span>
        <p className="text-xs text-white mt-1">30 min walk</p>
        <div className="text-white"> $29</div>
        </div>
        
        </div>
        <div className ="flex bg-white rounded-lg h-10 justify-center items-center mt-16 w-50 ml-2 mr-2 p-2">
        <input type="text"  placeholder="type a message" className="w-full outline-none text-gray-100 text-sm font-light"/>
        <svg className="w-6 h-6 bg-purple-900 rounded-full text-white " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </div>
        </div>
        
           </div>
    )
}
