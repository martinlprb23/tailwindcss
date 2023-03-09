import Link from "next/link";

export default function Cards(){
    return (
      <section className="flex-col m-5">
        <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <div class="shrink-0">
            <img
              class="h-12 w-12"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png"
              alt="ChitChat Logo"
            />
          </div>
          <div>
            <div class="text-xl font-medium text-black">ChitChat</div>
            <p class="text-slate-500">You have a new message!</p>
          </div>
        </div>

        <div className="mt-6 p-8 max-w-lg mx-auto shadow-xl rounded-xl flex-col items-center">
          <div className="text-gray-500">COMMUNITY SENTIMENT</div>
          <div className="text-xl font-bold">Overwhelmingly Positive</div>
          <div className="mt-4 flex">
            <div className="bg-red-600 h-4 w-8 rounded-md mr-1" />
            <div className="bg-orange-500 h-4 w-16 rounded-md mr-1" />
            <div className="bg-green-600 h-4 flex-1 rounded-md" />
          </div>
          <div className="mt-4 flex">
            <div className="w-50 mr-8">
              <div className="text-gray-500 text-sm">Negative</div>
              <div className="mt-1 flex items-center">
                <img
                  className="w-4 h-4 object-cover"
                  src="https://cdn.vectorstock.com/i/1000x1000/98/59/sad-smiley-flat-icon-vector-20459859.webp"
                  alt="sadf"
                ></img>
                <div className="pl-2 font-bold ">16</div>
              </div>
            </div>

            <div className="w-50 mr-8">
              <div className="text-gray-500 text-sm">Neutral</div>
              <div className="mt-1 flex items-center">
                <img
                  className="w-4 h-4 object-cover"
                  src="https://icon-library.com/images/neutral-icon/neutral-icon-1.jpg"
                  alt="sadf"
                ></img>
                <div className="pl-2 font-bold ">45</div>
              </div>
            </div>

            <div className="w-50">
              <div className="text-gray-500 text-sm">Positive</div>
              <div className="mt-1 flex items-center">
                <img
                  className="w-4 h-4 object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIflxPe1RRawwo2te9J4u2LU_X-WN1XcLdSQ&usqp=CAU"
                  alt="sadf"
                ></img>
                <div className="pl-2 font-bold ">441</div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-12 p-8 max-w-3xl mx-auto shadow-xl rounded-xl flex-col items-center bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1661723083078-692d10f6f81b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80')",
          }}
        >
          <div className="text-white font-bold text-xl">Welcome to Yucatan</div>
          <div className="pt-4 text-white text-sm w-full">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </div>

          <div className=" pt-4">
            <button className="bg-blue-500 p-2 text-white font-semibold w-28 rounded-full">
              <Link href="/">
              Places
              </Link>
            </button>
          </div>
        </div>
      </section>
    );
}