
function FeaturedCard({title, desc, icon}){
    return(
        <div className="bg-gradient-to-r from-[#0B071F] to-[#170E19] p-5 flex gap-3 rounded-lg">
            <div className="icon">
                {icon}
            </div>
            <div className='content'>
                <h2 className='text-xl font-bold'>{title}</h2>
                <p className="text-sm">{desc}</p>
            </div>
        </div>
    )
}
export default FeaturedCard;