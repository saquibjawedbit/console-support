import React, {useState} from 'react'

function Footer() {
  const [email, setEmail] = useState('');

  return (
    <div className="container">
      <div className="flex flex-col justify-end gap-4 sm:gap-6 px-4 py-6 sm:py-10 md:px-10 lg:py-20">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-[#141414] tracking-light text-2xl sm:text-[32px] md:text-4xl font-bold sm:font-black leading-tight tracking-[-0.033em] max-w-[720px] mx-auto">
            Your Email
          </h1>
        </div>
        <div className="flex flex-1  flex-col justify-center items-center w-full">
          <label className="flex flex-col w-full max-w-[480px] h-12 sm:h-14 md:h-16">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
              <input
                placeholder="Enter your email"
                className="form-input flex w-full min-w-0 flex-1 rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border-none bg-[#F0F2F5] focus:border-none h-full placeholder:text-[#3E4D5B] px-3 sm:px-4 rounded-r-none border-r-0 text-sm md:text-base font-normal leading-normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="hidden md:flex items-center justify-center rounded-r-xl border-l-0 border-none bg-[#F0F2F5] pr-2">
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-9 sm:h-10 md:h-12 px-3 sm:px-4 md:px-5 bg-[#359EFF] text-[#FFFFFF] text-xs sm:text-sm md:text-base font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Subscribe to my newsletter</span>
                </button>
              </div>
            </div>
          </label>
          <div className="md:hidden flex items-center justify-center rounded-r-xl border-l-0 border-none">
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-9 sm:h-10 md:h-12 px-3 sm:px-4 md:px-5 bg-[#359EFF] text-[#FFFFFF] text-xs sm:text-sm md:text-base font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Subscribe to my newsletter</span>
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
