import React, { useState, useEffect, useReducer } from 'react'
import '../main.css'
import Post from './Post'

const initialState = {
    posts: [],
    loding: true
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'pending':
            return {
                ...state,
                loding: false,
            };

        case 'fulfilled':
            return{
                ...state,
                loding: true
            }
              

            default: 
               return state;
    }
}

function Card() {
    const [posts, setPosts] = useState([])
    const [loding, setLoding] = useState(true)

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        setLoding(true)
        dispatch({type: 'pending'})
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                setPosts(data)
                dispatch({type: 'fulfilled'}, [data])
                setLoding(false)
            })
    }, [])

    return (
        <div className='mt-2'>
            <h2 className='text-4xl hover:text-blue-500 active:text-red-900'>All countries</h2>
            <div className='d-flex mt-4'>
                <input type="text"
                    className='form-control'
                    placeholder='Search...' />
            </div>
            <div className='wrapper'>
                {loding ? (
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                    posts.map((post,key) => <Post key={key} data={post} />)
                )

                }
            </div>
        </div>
    )
}

export default Card