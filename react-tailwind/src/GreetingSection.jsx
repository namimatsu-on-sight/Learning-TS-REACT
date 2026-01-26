import Greeting from './Greeting'

const GreetingSection = () => {
    return (
        <div className='p-8'>
            <h1 className='text-2xl font-bold mb-6'>挨拶コンポーネント</h1>

            <div className='space-y-4'>
                <Greeting name="田中太郎" message="今日もプログラミングを頑張りましょう！" />
            </div>

            <Greeting name="佐藤花子" message="Reactの学習を楽しんでいますか？" />

            <Greeting name="鈴木一郎" message="コンポーネントの再利用は便利ですね。" />
        </div>
    )
} 

export default GreetingSection