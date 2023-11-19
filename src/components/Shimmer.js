const Shimmer = () =>{
    return (
        <div className='flex flex-wrap'>
            {Array(18).fill("").map((e,index)=>{
                return <div key={index} className="w-[200px] h-[200px] bg-gray-200 m-5"></div>
            })}                                     
            </div>
    )
}
export default Shimmer;