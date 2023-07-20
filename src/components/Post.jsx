import React from 'react'

const Posts = (props) => {
    const { data } = props
    return (
        <div key={Math.random() + 1}>
            <div className="card" style={{ width: '20rem' }}>
                <div className="card-body">
                    <img src={data.flags.svg} alt="flag" style={{ width: '18rem', height: '15rem' }} />
                    <div className='mt-3'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts
