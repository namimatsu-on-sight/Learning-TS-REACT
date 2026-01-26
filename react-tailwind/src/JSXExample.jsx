const JSXExample = () => {

    const fruits = [`りんご`, `バナナ`, `オレンジ`, `ブドウ`]
    const users = [
        { id: 1, name: "田中太郎", age: 25},
        { id: 2, name: "佐藤太郎", age: 30},
        { id: 1, name: "鈴木太郎", age: 28},
    ]

    const showMessage = true
    const userRole = `admin`

    const isLoggedIn = true
    const score = 85

    const getGreeting = (name) => {
        const hour = new Date().getHours()
        if (hour < 12) {
            return `おはようございます。${name}さん!`
        } else if (hour < 18) {
            return `こんにちは、${name}さん!`
        } else {
            return `こんばんは、${name}さん！`
        }
    }

    const title = "JSXの基本例"
    const userName = "田中太郎"
    const currentYear = 2026

    const price = 1000
    const quantity = 3
    const taxRate = 0.1

    return(
        <div className="p-6 max-w-4xl mx-auto">
            <h1>{title}</h1>
            <h2>こんにちは、{userName}さん！</h2>
            <p>今年は{currentYear}です。</p>

            <h1>注文内容</h1>
            <p>単価: {price}円</p>
            <p>数量： {quantity}個</p>
            <p>小計: {price * quantity}円</p>
            <p>税込合計： {Math.floor((price* quantity)*(1+taxRate))}円</p>

            <h1>時間に応じた挨拶</h1>
            <p>{getGreeting(`田中`)}</p>
            <p>{getGreeting(`佐藤`)}</p>

            <h1>条件分岐の例</h1>
            <p>
                {isLoggedIn ? `ログイン済みです` : `ログインしてください`}
            </p>

            <p>点数: {score}点</p>
            <p>
                評価：{score >= 80 ? `優秀` : score >= 60 ? `良好` : `要努力`}
            </p>

            <h1>条件付き表示の例</h1>
            {showMessage &&(
                <div className="bg-blue-100 p-4 rounded mt-4">
                    <p>このメッセージは条件が真の時のみ表示されます。</p>
                </div>
            )}
            {showMessage &&(
                <div className="bg-red-100 p-4 rounded mt-4">
                    <p>管理者専用メッセージ</p>
                </div>
            )}

            <h1 className="text-3xl font-bold text-gray-800 mb-6">配列の表示例</h1>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">果物一覧</h2>
                <ul className="bg-white rounded-lg shadow-md p-4">
                    {fruits.map((fruit, index) => (
                        <li key={index} className="py-2 px-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors">
                            🍎 {fruit}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">ユーザー一覧</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {users.map((user) =>(
                        <div key={user.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center mb-2">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                                    {user.name.charAt(0)}
                                </div>
                                <h3 className="font-semibold text-gray-800">{user.name}</h3>
                            </div>
                            <p className="text-gray-600">年齢： {user.age}歳</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default JSXExample