import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../components/Image';
import PostMenuAction from '../components/PostMenuAction';
import Search from '../components/Search';
import Comments from '../components/Comments';

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8 2xl:text-5xl">
          <h1 className='text-xl md:text-3xl xl:text-4xl font-semibold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam deleniti voluptatibus dolore.</h1>
          <div className='flex items-center gap-2 text-gray-400 text-sm'>
            <span>Written by </span>
            <Link to="/" className='text-blue-800'>John Doe</Link>
            <span> on </span>
            <Link to="/"  className='text-blue-800'>Web Design</Link>
            <span> 2 days ago</span>
          </div>
          <p className='text-gray-500 font-medium text-sm md:text-base'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque tempore et architecto facere accusantium voluptatem exercitationem numquam, fugit laboriosam eum laborum iste, odit ea, dignissimos optio facilis soluta animi hic.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w={600} className="rounded-2xl" />
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-12'>
        <div className='lg:text-lg flex flex-col gap-4 text-justify'>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id libero eu ligula viverra molestie. Nullam ut magna ut nunc vulputate sollicitudin. Duis sit amet risus euismod, porttitor metus nec, volutpat justo. Integer feugiat lacus in augue varius, eget dignissim erat lacinia. Nam convallis tortor nec est bibendum ultricies. Sed at nisl nisl. Curabitur vitae vehicula est, at fringilla augue. Vestibulum ut quam sed ex pellentesque egestas sit amet et turpis.
            a in interdum dictum. Praesent sit amet nisi nec purus gravida mollis. Fusce porttitor tempor augue, nec tincidunt neque consectetur in. Integer vitae urna venenatis, laoreet lorem a, ultricies arcu. Mauris vitae eros pharetra, vehicula urna nec, malesuada tortor. Donec viverra, lacus at lacinia ullamcorper, augue erat dictum mi, in faucibus turpis orci nec nulla. Nulla non magna eget metus tristique suscipit. Sed condimentum massa ut risus vehicula, ut cursus arcu finibus.
            Cras tincidunt nisi sed sollicitudin egestas. In venenatis, nulla eget gravida facilisis, libero est tincidunt orci, quis convallis libero enim at lorem. Vivamus mattis justo vel nisi consequat, id posuere purus finibus. Integer malesuada ligula eget urna feugiat, vitae gravida lacus vehicula. Nulla eget fermentum magna. In dictum sapien vel arcu facilisis, id facilisis metus varius. Nam ut enim sed nisl scelerisque venenatis at at magna.

          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure atque eum, est, sunt nemo, eos labore beatae odio sequi esse voluptates error nostrum! Deleniti corrupti illum, reprehenderit culpa nesciunt assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sit enim itaque voluptate odio excepturi vitae nesciunt provident, sapiente quam, error pariatur voluptas nihil laboriosam blanditiis commodi facere necessitatibus accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rem magnam repellendus error aut? Non natus placeat distinctio cupiditate, iusto ipsum explicabo possimus sunt quos at consequatur. Pariatur, dolor vitae?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sit enim itaque voluptate odio excepturi vitae nesciunt provident, sapiente quam, error pariatur voluptas nihil laboriosam blanditiis commodi facere necessitatibus accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rem magnam repellendus error aut? Non natus placeat distinctio cupiditate, iusto ipsum explicabo possimus sunt quos at consequatur. Pariatur, dolor vitae? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure atque eum, est, sunt nemo, eos labore beatae odio sequi esse voluptates error nostrum! Deleniti corrupti illum, reprehenderit culpa nesciunt assumenda.
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id libero eu ligula viverra molestie. Nullam ut magna ut nunc vulputate sollicitudin. Duis sit amet risus euismod, porttitor metus nec, volutpat justo. Integer feugiat lacus in augue varius, eget dignissim erat lacinia. Nam convallis tortor nec est bibendum ultricies. Sed at nisl nisl. Curabitur vitae vehicula est, at fringilla augue. Vestibulum ut quam sed ex pellentesque egestas sit amet et turpis.
            a in interdum dictum. Praesent sit amet nisi nec purus gravida mollis. Fusce porttitor tempor augue, nec tincidunt neque consectetur in. Integer vitae urna venenatis, laoreet lorem a, ultricies arcu. Mauris vitae eros pharetra, vehicula urna nec, malesuada tortor. Donec viverra, lacus at lacinia ullamcorper, augue erat dictum mi, in faucibus turpis orci nec nulla. Nulla non magna eget metus tristique suscipit. Sed condimentum massa ut risus vehicula, ut cursus arcu finibus.
            Cras tincidunt nisi sed sollicitudin egestas. In venenatis, nulla eget gravida facilisis, libero est tincidunt orci, quis convallis libero enim at lorem. Vivamus mattis justo vel nisi consequat, id posuere purus finibus. Integer malesuada ligula eget urna feugiat, vitae gravida lacus vehicula. Nulla eget fermentum magna. In dictum sapien vel arcu facilisis, id facilisis metus varius. Nam ut enim sed nisl scelerisque venenatis at at magna.

          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure atque eum, est, sunt nemo, eos labore beatae odio sequi esse voluptates error nostrum! Deleniti corrupti illum, reprehenderit culpa nesciunt assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sit enim itaque voluptate odio excepturi vitae nesciunt provident, sapiente quam, error pariatur voluptas nihil laboriosam blanditiis commodi facere necessitatibus accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rem magnam repellendus error aut? Non natus placeat distinctio cupiditate, iusto ipsum explicabo possimus sunt quos at consequatur. Pariatur, dolor vitae?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sit enim itaque voluptate odio excepturi vitae nesciunt provident, sapiente quam, error pariatur voluptas nihil laboriosam blanditiis commodi facere necessitatibus accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rem magnam repellendus error aut? Non natus placeat distinctio cupiditate, iusto ipsum explicabo possimus sunt quos at consequatur. Pariatur, dolor vitae? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure atque eum, est, sunt nemo, eos labore beatae odio sequi esse voluptates error nostrum! Deleniti corrupti illum, reprehenderit culpa nesciunt assumenda.
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id libero eu ligula viverra molestie. Nullam ut magna ut nunc vulputate sollicitudin. Duis sit amet risus euismod, porttitor metus nec, volutpat justo. Integer feugiat lacus in augue varius, eget dignissim erat lacinia. Nam convallis tortor nec est bibendum ultricies. Sed at nisl nisl. Curabitur vitae vehicula est, at fringilla augue. Vestibulum ut quam sed ex pellentesque egestas sit amet et turpis.
            a in interdum dictum. Praesent sit amet nisi nec purus gravida mollis. Fusce porttitor tempor augue, nec tincidunt neque consectetur in. Integer vitae urna venenatis, laoreet lorem a, ultricies arcu. Mauris vitae eros pharetra, vehicula urna nec, malesuada tortor. Donec viverra, lacus at lacinia ullamcorper, augue erat dictum mi, in faucibus turpis orci nec nulla. Nulla non magna eget metus tristique suscipit. Sed condimentum massa ut risus vehicula, ut cursus arcu finibus.
            Cras tincidunt nisi sed sollicitudin egestas. In venenatis, nulla eget gravida facilisis, libero est tincidunt orci, quis convallis libero enim at lorem. Vivamus mattis justo vel nisi consequat, id posuere purus finibus. Integer malesuada ligula eget urna feugiat, vitae gravida lacus vehicula. Nulla eget fermentum magna. In dictum sapien vel arcu facilisis, id facilisis metus varius. Nam ut enim sed nisl scelerisque venenatis at at magna.

          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure atque eum, est, sunt nemo, eos labore beatae odio sequi esse voluptates error nostrum! Deleniti corrupti illum, reprehenderit culpa nesciunt assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sit enim itaque voluptate odio excepturi vitae nesciunt provident, sapiente quam, error pariatur voluptas nihil laboriosam blanditiis commodi facere necessitatibus accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rem magnam repellendus error aut? Non natus placeat distinctio cupiditate, iusto ipsum explicabo possimus sunt quos at consequatur. Pariatur, dolor vitae?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sit enim itaque voluptate odio excepturi vitae nesciunt provident, sapiente quam, error pariatur voluptas nihil laboriosam blanditiis commodi facere necessitatibus accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rem magnam repellendus error aut? Non natus placeat distinctio cupiditate, iusto ipsum explicabo possimus sunt quos at consequatur. Pariatur, dolor vitae? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure atque eum, est, sunt nemo, eos labore beatae odio sequi esse voluptates error nostrum! Deleniti corrupti illum, reprehenderit culpa nesciunt assumenda.
          </p>
        </div>
        <div className='px-4 h-max sticky top-8'>
          <h1 className='mb-4 text-sm font-medium'>Author</h1>
          <div className='flex flex-col gap-4 text-sm'>

         
          <div className=' flex items-center gap-8'> 

         
            <Image src="userImg.jpeg" className="w-12 h-12 rounded-full object-cover" w={48} h={48}/>
            <Link className='text-blue-800'>John Doe</Link>
            </div>
            <p className='text-sm text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className='flex gap-2'>

              <Link>
              <Image src={'facebook.svg'} w={24} h={24} />
              </Link>
              <Link>
              <Image src={'Colebemis-Feather-Instagram.svg'} w={24} h={24} />
              </Link> 
              </div>
            </div>
          
          <PostMenuAction />
          <h1 className='mt-8 mb-4 text-sm font-medium'>Categories</h1>
          <div className=' flex flex-col gap-2 text-sm'>
             <Link className='underline'>All</Link>
              <Link className='underline'>Web Design</Link>
              <Link className='underline'>Web Development</Link>
              <Link className='underline'>Mobile Development</Link>
              <Link className='underline'>Tech</Link>

          </div>
          <h1 className='mt-8 mb-4 text-sm font-medium'>Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePostPage;