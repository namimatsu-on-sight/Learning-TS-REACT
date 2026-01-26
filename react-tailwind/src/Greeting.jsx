const Greeting = ({name = "ゲスト", message = "ようこそ!"}) => {
    return (
        <div className="bg-blue-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">こんにちは、{name}さん！</h2>
            <p className="text-gray-700">{message}</p>
        </div>
    )
}

export default Greeting