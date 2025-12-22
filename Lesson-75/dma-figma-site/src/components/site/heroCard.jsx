
function HeroCard({ title, img }) {
  return (
    <div>
      <img src={img} className='absolute inset-0 -z-1 h-full w-full object-cover' />
      <div className='container'>
        {title}
      </div>
    </div>
  )
}

export default HeroCard