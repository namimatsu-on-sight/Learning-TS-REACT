const ClickExample = () => {
    const showMessage = (message) => {
        alert(message)
    }

    const showTime = () => {
        const now = new Date()
        alert(`現在の時刻： ${now.toLocaleTimeString()}`)
    }

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-6">様々なクリックイベント</h2>

            <div className="space-y-4">
                <button 
                onClick = {() => showMessage('こんにちは！')}
                className = "block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
                    挨拶メッセージ
                </button>

                <button
                onClick={showTime}
                className="block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                    現在時刻を表示
                </button>
            </div>
        </div>
    )
}

export default ClickExample