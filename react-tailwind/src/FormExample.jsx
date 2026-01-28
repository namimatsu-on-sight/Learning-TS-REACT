const FormExample = () => {
// REACTも以前はクラスベースだった → 使いにくかった バグが出やすかった → オブジェクト指向(プロパティを持ってる 状態も変わる　局所的になる)から関数指向
//    function handleSubmit() { //ユーティリティ クラス thisがどうなるか 直感的じゃない 

//    } //ミュータブル イミュータブル　今は普遍
    const handleSubmit = (event) => { //無名関数 関数型 全てが関数　式が代入できる　ステートレス
        event.preventDefault()

        const formData = new FormData(event.target)
        const name = formData.get('name')
        const email = formData.get('email')

        alert(`フォーム送信処理\n名前: ${name}\nメール: ${email}`)
    }

    const handleLinkClick = (event) => {
        event.preventDefault()
        alert('リンクのデフォルト動作を防ぎました')
    }

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-6">preventDefault()の例</h2>

            <div className="space-y-8">
                {/* フォームの例 */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">フォーム送信の例</h3>
                    <form onSubmit={handleSubmit} className="max-w-md space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">名前</label>
                            <input name="name" type="text" required 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">メールアドレス</label>
                            <input name="email" type="text" required 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                        </div>

                        <button type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                            送信 (ページはリロードされません)
                        </button>
                    </form>
                </div>

                {/* リンクの例 */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">リンクの例</h3>
                    <a 
                        href="https://example.com"
                        onClick={handleLinkClick}
                        className="text-blue-500 underline hover:text-blue-700">
                            このリンクをクリックしても移動しません
                        </a>
                </div>
            </div>
        </div>
    )
}

export default FormExample