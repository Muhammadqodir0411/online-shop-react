import React from 'react'

const Post = (props) => {
    const { data } = props
    return (
        <div key={Math.random() + 1}>
            <div className="card" style={{ width: '20rem' }}>
                <div className="card-body">
                    <img src={data.flags.svg} alt="flag" style={{ width: '18rem', height: '15rem' }} />
                    <div className='mt-3'>
                        <p><strong>Name: </strong>{data.name.common}</p>
                        <p><strong>Population: </strong>{data.population}</p>
                        <p><strong>Region: </strong>{data.region}</p>
                        <p><strong>Capital: </strong>{data.capital}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post