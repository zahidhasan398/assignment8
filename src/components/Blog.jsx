import React from 'react';

const Blog = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <div className='bg-red-400 m-5 p-5'>
                <h1 className='bg-green-400 p-2'>ques1: when use context api?</h1>
                <p>ans: use context api is used for pass data one component to other component instead props .</p>
            </div>
            <div className='bg-red-400 m-5 p-5'>
                <h1 className='bg-green-400 p-2'>ques2: what is custom hook?</h1>
                <p>ans: custom hook is use for reuseable.if we need to use reuseable thing we can use custom hook.</p>
            </div>
            <div className='bg-red-400 m-5 p-5'>
                <h1 className='bg-green-400 p-2'>ques3: why use useRef ?</h1>
                <p>ans: useRef is one kind of hook .useRef is used for because it is persisted between renders.</p>
            </div>
            <div className='bg-red-400 m-5 p-5'>
                <h1 className='bg-green-400 p-2'>ques4: why use useMemo?</h1>
                <p>ans:useMemo is built for re renders.useMemo can save data.</p>
            </div>

        </div>
    );
};

export default Blog;