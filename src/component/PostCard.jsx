import React from 'react'
import appwriteService from "../Appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {

    return (
        <Link to={`/post/${$id}`}>
            <div className=' min-w-52 h-96 bg-gray-100 rounded-xl p-4'>
                <div className=' justify-center mb-4 h-[80%] flex items-center'>
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                        className='rounded-xl h-[90%] w-full' />
                </div>
                <h2
                    className='text-xl font-bold'
                >{title}</h2>
            </div>
        </Link>
    )
}


export default PostCard