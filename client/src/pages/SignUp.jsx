import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* {left} */}
          <div className="flex-1">
          <Link to="/" className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Aman's</span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eaque eius, voluptate unde provident sit, vitae officia, ipsa veniam quas eos nemo! Ratione voluptate doloremque sit aliquam, dolorum nulla esse.
          </p>
            </div>
            {/* {right} */}

            <div className="flex-1">
              <form className="flex flex-col gap-4">
                <div>
                  <Label value='Your username' />
                  <TextInput
                  type="text"
                  placeholder="Username"
                  id="username" />
                </div>
                <div>
                  <Label value='Your email' />
                  <TextInput
                  type="text"
                  placeholder="name@example.com"
                  id="email" />
                </div>
                <div>
                  <Label value='Your password' />
                  <TextInput
                  type="text"
                  placeholder="password"
                  id="Password" />
                </div>
                <Button gradientDuoTone='purpleToPink' type="submit">Sign Up</Button>
              </form>
              <div className="flex gap-2 text-sm mt-5">
                <span>Have an account?</span>
                <Link to='/sign-in' className="text-blue-500">
                  Sign In
                </Link>
              </div>
            </div>
      </div>
    </div>
  )
}