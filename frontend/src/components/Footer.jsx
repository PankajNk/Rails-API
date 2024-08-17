import Instagram from '../assets/instagram.svg'
import Github from '../assets/github.svg'
import Linkedin from '../assets/linkedin.svg'
import Youtube from '../assets/youtube.svg'

const Footer = () => {
    return(
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-between items-center gap-2">
                    <div className='flex gap-2'>
                        {/* todo: link need to keep */}
                        <img className="w-8 h-8" src={Instagram}/>
                        <img className="w-8 h-8" src={Github}/>
                        <img className="w-7 h-8" src={Linkedin}/>
                        <img className="w-8 h-8" src={Youtube}/>
                    </div>   
                    <p className="text-sm text-gray-600">
                        @2024 Rails Technologies Pvt. Ltd .All rights reserved.
                    </p>
                    <p className="flex items-center gap-1 text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                    </svg>
                    Developed to Learn
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" class="size-6">
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>

                        
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer