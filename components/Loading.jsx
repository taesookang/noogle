import React from 'react'
import Loader from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className="flex justify-center mt-16">
            <Loader
                type="TailSpin"
                color="#e2e2e2"
                height={60}
                width={60}
            />
        </div>
    )
}

export default Loading
