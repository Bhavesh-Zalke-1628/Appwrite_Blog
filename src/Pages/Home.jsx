import React, { useEffect, useState } from 'react'
import appwriteService from "../Appwrite/config";
import { Container, PostCard } from '../component'
import { Link } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 h-[42vh] w-full flex items-center justify-center">
                            <Link
                                to='/login'
                            >
                                <h1 className="text-2xl cursor-pointer text-center font-bold hover:text-gray-600 transition-all ease-in-out duration-500">
                                    Login to read posts
                                </h1>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex sm:flex items-center justify-center'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home