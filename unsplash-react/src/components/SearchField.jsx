
const Searchfield = () => {
    return (
        <div className="flex">
            <input 
            className="bg-gray-50 border border-gray-300 text-sm w-full
             indent-2 p-2.5 outline-none focus:border-blue-500
             focus:ring-2 rounded-tl rounded-bl" 
             type="search" placeholder="Search Images" />
            <button className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br
            ">Search</button>
        </div>
      )
    }
    

export default Searchfield
