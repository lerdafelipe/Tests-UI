//https://uqr.me/es/api-de-codigos-qr/
import Image from '../../assets/qr-code.svg'

const Qr = () => {
  return (
    <main className='w-screen h-screen flex justify-center items-center bg-cyan-200'>

      <section className='w-64 rounded-2xl bg-white p-4 shadow-md'>

        <aside className='p-6 rounded-xl bg-blue-500'>
          <img className='rounded-md' src={Image} alt='QR CODE' />
        </aside>

        <aside className='py-4 text-center'>
          <h1 className='pb-2 font-bold text-lg'>Improve your front-end skills by building projects</h1>
          <p className='text-gray-600'>Scan de QR code to visit my website</p>
        </aside>

      </section>

    </main>
  )
}

export default Qr
