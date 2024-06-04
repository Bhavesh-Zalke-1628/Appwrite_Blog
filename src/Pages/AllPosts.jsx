import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../component'
import appwriteService from "../Appwrite/config";
import { useDispatch, useSelector } from 'react-redux';
import { getAllPost } from '../store/postSlice';
function AllPosts() {
    const [posts, setPosts] = useState([])
    const dispatch = useDispatch()
    useEffect(() => { }, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            dispatch(getAllPost(posts))
            setPosts(posts.documents)
        }
    })

    const { postData } = useSelector((state) => state?.post)

    console.log(postData.do)
    return (
        postData ? (
            <>
                <div className='w-full py-8'>
                    <Container>
                        <div className='flex flex-wrap'>
                            {posts.map((post) => (
                                <div key={post.$id} className='p-2 w-1/4'>
                                    <PostCard {...post} />
                                </div>
                            ))}
                        </div>
                    </Container>
                </div>
            </>
        ) : (
            <div className='w-full py-8'>
                <Container>
                    <div className='flex flex-wrap'>
                        {posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        )

    )
}

export default AllPosts