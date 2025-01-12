export default function Signup() {
    return (
      <div>
        <div className="text-[#101750] font-sans bg-[#F6F5FF] py-16 px-4 sm:px-8">
          <h1 className="text-4xl font-bold">Sign Up</h1>
          <p className="flex gap-2">
            <span>Home</span>
            <span>. Page</span>
            <span className="text-[#FB2E86]">. Sign Up</span>
          </p>
        </div>
        <div className="max-w-md mx-auto my-20 bg-white shadow-lg rounded-lg p-6 space-y-8 font-lato text-[#9096B2]">
          <div>
            <h1 className="text-2xl font-bold font-sans text-black text-center">Create Accout</h1>
            <p className="text-center">Please Entre your detail bellow.</p>
          </div>
          <form className="space-y-4">
            <div>
              <input
                placeholder="Name"
                type="text"
                id="name"
                required
                className="w-full border rounded px-3 py-3 mt-1"
              />
            </div>
            <div>
              <input
                placeholder="Email Address"
                type="email"
                id="email"
                required
                className="w-full border rounded px-3 py-3 mt-1"
              />
            </div>
            <div>
              <input
                placeholder="Password"
                type="password"
                id="password"
                required
                className="w-full border rounded px-3 py-3 mt-1"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#FB2E86] text-white py-3 rounded hover:bg-[#f84f98]"
            >Sign Up</button>
             <a href="login">
              <p className="py-3 mt-1 text-center">Already have an Account? Login</p>
            </a>
          </form>
        </div>
      </div>
    );
  }
  