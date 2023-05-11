import Card from "../Card/Card"

const Challenges = [
  {
    id: 1,
    title: 'QR code card',
    img: '/src/assets/Cards/QR.png',
    tailwind: true,
    href: '/QR-code'
  },{
    id: 2,
    title: 'Profile Card',
    img: '/src/assets/Cards/profileCard.png',
    tailwind: true,
    href: '/Profile-Card'
  },
]

const CardList = () => {
  return (
    <div className="w-screen p-12 grid grid-cols-auto auto-cols-auto gap-6">
      {Challenges.map(Challenge => <Card key={Challenge.id} href={Challenge.href} title={Challenge.title} tailwind={Challenge.tailwind} img={Challenge.img} />)}
    </div>
  )
}

export default CardList
