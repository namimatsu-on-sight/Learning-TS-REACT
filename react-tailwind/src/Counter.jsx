import {useState} from 'react';

function Counter() {
    // useStateでStateを定義
    const [count, setCount] = useState(0);
    console.log(`Counterコンポーネントが実行されました。 現在のcount:`, count);

    const handleReset = () => {
        setCount(0);
    };

    const handleAddFive = () => {
        setCount(prev => prev + 5);
    };

    const handleSubtractFive = () => {
        setCount(prev => prev - 5);  //なぜprevを使うの？
    };

    return (
        <div className='p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md'>
            <h2 className='text-wxl font-bold mb-4 text-center'>カウンター</h2>
            <div className='text-4xl font-bold text-center mb-6 text-blue-600'>
                {count}
            </div>
            <div className='flex gap-4 justify-center'>
                <button 
                    onClick={() => setCount(count + 1)}
                    className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
                        +1
                </button>
                <button 
                    onClick={() => setCount(count - 1)}
                    className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'>
                        -1
                </button>
            </div>
            <div className='flex gap-4 justify-center m-4'>
                <button 
                    onClick={handleAddFive}
                    className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>
                        +5
                </button>
                <button 
                    onClick={handleSubtractFive}
                    className='bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600'>
                        -5
                </button>
            </div>
            <div className='flex justify-center'>
                <button
                    onClick={handleReset}
                    className='bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600'>
                        リセット
                    </button>
            </div>
        </div>
    )
}

export default Counter;