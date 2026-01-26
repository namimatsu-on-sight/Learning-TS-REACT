const ClickExample = () => {
    const handleClick = () => {
        alert("ボタンがクリックされました!")
    }

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-6">クリックイベントの例</h2>

            <button 
            onClick={handleClick}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
                クリックしてください
            </button>
        </div>
    )
}

export default ClickExample