import InfoCard from './InfoCard'

const CardSection = () => {
    return (
        <section className='p-8'>
            <h2 className='text-2xl font-bold mb-6 text-center'>カードセクション</h2>
            <div className='flex flex-wrap justify-center'>
                <InfoCard />
                <InfoCard />
                <InfoCard />
            </div>
        </section>
    )
}

export default CardSection