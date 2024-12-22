import { Link } from "react-router-dom"
import Image from "./Image"
const PostListItem = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
        <div className="md:hidden xl:block">

            <Image src="postImg.jpeg" className="rounded-2xl object-cover" w="735" />
        </div>
        <div className="flex flex-col gap-4 xl:w-2/3">
            <Link to="/test" className="test-4xl font-semibold" >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ulam modi eum aut.
            </Link>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span >Written by</span>
                <Link className="test-blue-800">John Doe</Link>
                <span>on</span>
                <Link >Web Design</Link>
                <span>2 days ago</span>
            </div>
           
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique totam ad dolorum magnam repellendus? Sunt sed fuga est, corporis tempora exercitationem dolor, aut, perferendis officia maxime sapiente incidunt odio possimus.</p>
        <Link to="/test" className="underline text-blue-800 text-sm">Read More </Link>
        </div>
    
    </div>
  )
}

export default PostListItem