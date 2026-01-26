import Card from './Card'

const CardExample = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">Childrenの活用例</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card title="テキストカード">
                    <p className="text-gray-700">
                        このカードには通常のテキストが入っています。
                        childrenを使うことで、様々な内容を表示できます。
                    </p>
                </Card>
                <Card title="リストカード">
                    <ul className="list-disc pl-5 text-gray-700">
                        <li>項目1</li>
                        <li>項目2</li>
                        <li>項目3</li>
                    </ul>
                </Card>
                <Card title="ボタン付きカード">
                    <p className="text-gray-700 mb-4">
                        このカードにはボタンが含まれています。
                    </p>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
                        アクション
                    </button>
                </Card>
                <Card>
                    <div className='text-center'>
                        <h4 className='text-lg font-medium mb-2'>タイトルなしカード</h4>
                        <p className="text-gray-600">
                            titleプロパティを渡さない場合,
                            タイトル部分は表示されません。
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default CardExample