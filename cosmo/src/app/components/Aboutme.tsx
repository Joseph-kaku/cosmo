'use client'

export default function Aboutme() {
    return (
        <div className="w-screen h-screen">
            <h1 className="text-4xl flex justify-center mt-5">
                About Me
            </h1>
            <div className="flex justify-center">
                <img className="h-96 w-96 rounded-full mt-5" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
            </div> 
            <div className="flex justify-center ml-40 mr-40">
                <p className="text-lg m-14">
                    I am a web developer with a passion for creating beautiful and functional websites. I have experience with HTML, CSS, JavaScript, and React. I am also familiar with Node.js and Express. I am a quick learner and I am always looking for new ways to improve my skills. I am currently looking for a job as a web developer.
                </p>
            </div>    
        </div>
    )
}