const InputExample = () => {
    const handleInputChange = (event) => {
        console.log('入力された値:', event.target.value)
    }

    const handleSubmit = () => {
        const inputElement = document.getElementById('nameInput')
        const inputValue = inputElement.value

        if (inputValue.trim() === ''){
            alert('名前を入力してください')
        }else {
            alert(`こんにちは, ${inputValue}さん!`)
        }
    }
    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-6">入力イベントの例</h2>

            <div className="max-w-md">
                <label className="block text-sm font-medium mb-2">
                    お名前を入力してください
                </label>

                <input 
                id = "nameInput"
                type="text"
                onChange={handleInputChange}
                placeholder="名前を入力"
                className="w-full px-3 py-2 border boder-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <button 
                onClick={handleSubmit}
                className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                    送信
                </button>
            </div>
        </div>
    )

}



export default InputExample