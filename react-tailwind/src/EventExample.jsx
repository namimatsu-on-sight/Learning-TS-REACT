const EventExample = () => {
    const handleMouseEvent = (event) => {
        console.log(`マウスの位置:`, event.clientX, event.clientY)
        console.log(`クリックされた要素:`, event.target.tagName)
    }

    const handleKeyPress = (event) => {
        console.log('押されたキー', event.key)
        if (event.key === "Enter"){
            alert('Enterキーが推されました!')
        }
    }

    const handleFocus = (event) => {
        event.target.style.backgroundColor = 'lightyellow'
    }

    const handleBlur = (event) => {
        event.target.style.backgroundColor = `white`
    }

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-6">イベントオブジェクトの例</h2>

            <div className="space-y-4">
                <div>
                    <button
                    onClick={handleMouseEvent}
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                        クリック位置を表示(コンソールを確認)
                    </button>
                </div>
            </div>

            <div>
                <input type="text"
                onKeyDown={handleKeyPress}
                placeholder="何か入力してください(Enterキーを押す)"
                className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-lg"/>
            </div>

            <div>
                <input type="text"
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="フォーカス時に背景色が変わります。"
                className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-lg" />
            </div>
        </div>
    )
}

export default EventExample