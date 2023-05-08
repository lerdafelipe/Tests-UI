import { Link } from "wouter"

const Card = ({title, tailwind, MUI, img, href}) => {
  return (
    <Link href={href}>
      <aside className="cursor-pointer bg-white rounded-lg border-[1px] border-solid border-slate-300">
        <div>
          <img className="rounded-t-lg" alt='QR-Challenge' src={img} />
        </div>

        <div className="p-4">
          <h1 className="text-xl font-medium text-gray-600">{title}</h1>
          <div className="flex gap-3 pt-2 text-md font-medium">
            <span className={`text-cyan-500 ${tailwind? null : 'line-through'}`}>Tailwind</span>
            <span className={`text-purple-700 ${MUI? null : 'line-through'}`}>Material UI</span>
          </div>
        </div>
      </aside>
    </Link>
  )
}

export default Card
