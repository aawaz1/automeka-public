import React from 'react'

const Library = () => {
  return (
    <div className="flex flex-col justify-center bg-gray-600 border-t-2 border-black border-solid">
    <div className="flex overflow-hidden relative flex-col justify-center w-full shadow-2xl min-h-[768px] max-md:max-w-full">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/969c244383d73589f72cb19cac4d49e002db024f7eee5ec2c9673d967e1dafb8?apiKey=15d35c7fb0604e03944e83bc3301da1f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/969c244383d73589f72cb19cac4d49e002db024f7eee5ec2c9673d967e1dafb8?apiKey=15d35c7fb0604e03944e83bc3301da1f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/969c244383d73589f72cb19cac4d49e002db024f7eee5ec2c9673d967e1dafb8?apiKey=15d35c7fb0604e03944e83bc3301da1f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/969c244383d73589f72cb19cac4d49e002db024f7eee5ec2c9673d967e1dafb8?apiKey=15d35c7fb0604e03944e83bc3301da1f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/969c244383d73589f72cb19cac4d49e002db024f7eee5ec2c9673d967e1dafb8?apiKey=15d35c7fb0604e03944e83bc3301da1f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/969c244383d73589f72cb19cac4d49e002db024f7eee5ec2c9673d967e1dafb8?apiKey=15d35c7fb0604e03944e83bc3301da1f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/969c244383d73589f72cb19cac4d49e002db024f7eee5ec2c9673d967e1dafb8?apiKey=15d35c7fb0604e03944e83bc3301da1f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/969c244383d73589f72cb19cac4d49e002db024f7eee5ec2c9673d967e1dafb8?apiKey=15d35c7fb0604e03944e83bc3301da1f&"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col px-16 pt-20 pb-3 w-full border-cyan-700 border-solid border-t-[10px] max-md:px-5 max-md:max-w-full">
        <div className="justify-center text-lg font-medium leading-6 text-teal-500 uppercase tracking-[2.48px] max-md:mr-2.5 max-md:max-w-full">
          Free E BOOK
        </div>
        <div className="flex flex-col justify-center items-start py-5 max-md:pr-5 max-md:mr-2.5 max-md:max-w-full">
          <div className="shrink-0 max-w-full h-px border-t border-solid border-zinc-300 w-[650px]" />
        </div>
        <div className="z-10 self-center -mt-4 w-full max-w-[1271px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0347a26bb4fbba28d4f8895a721941ffbec4f7b39b090b3244dce75a359c516f?apiKey=15d35c7fb0604e03944e83bc3301da1f&"
                className="mt-7 w-full aspect-square max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col px-3 py-px max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col justify-center whitespace-nowrap max-md:max-w-full">
                  <div className="text-base font-semibold leading-4 text-gray-700 max-md:max-w-full">
                    Name
                  </div>
                  <div className="flex flex-col justify-center items-start p-4 mt-4 text-base bg-white rounded-md border border-solid border-gray-700 border-opacity-20 text-gray-700 text-opacity-60 max-md:pr-5 max-md:max-w-full">
                    <div className="justify-center">Name</div>
                  </div>
                </div>
                <div className="flex flex-col justify-center mt-8 max-md:max-w-full">
                  <div className="text-base font-semibold leading-4 text-gray-700 max-md:max-w-full">
                    Phone
                  </div>
                  <div className="flex flex-col justify-center items-start p-4 mt-4 text-base bg-white rounded-md border border-solid border-gray-700 border-opacity-20 text-gray-700 text-opacity-60 max-md:pr-5 max-md:max-w-full">
                    <div className="justify-center">+63 854566212</div>
                  </div>
                </div>
                <div className="flex flex-col justify-center mt-8 max-md:max-w-full">
                  <div className="text-base font-semibold leading-4 text-gray-700 max-md:max-w-full">
                    E Mail
                  </div>
                  <div className="flex flex-col justify-center items-start p-4 mt-4 text-base bg-white rounded-md border border-solid border-gray-700 border-opacity-20 text-gray-700 text-opacity-60 max-md:pr-5 max-md:max-w-full">
                    <div className="justify-center">+63 854566212</div>
                  </div>
                </div>
                <div className="flex flex-col mt-9 text-base font-semibold leading-4 text-gray-700 max-md:max-w-full">
                  <div className="max-md:max-w-full">Payment Type</div>
                  <div className="shrink-0 mt-3 h-11 bg-white rounded-md border border-solid border-gray-700 border-opacity-20 max-md:max-w-full" />
                </div>
                <div className="justify-center mt-7 text-base font-semibold leading-5 text-gray-700 max-md:max-w-full">
                  Choose the session time according to chosen date or your
                  else appointment will be get cancelled.
                </div>
                <div className="justify-center items-center px-16 py-5 mt-24 text-base font-semibold tracking-tight leading-4 text-center text-white bg-cyan-700 rounded-xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  BUY E BOOK
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Library