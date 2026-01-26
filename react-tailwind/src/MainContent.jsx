const MainContent = () => {
    return (
        <main className="flex-1 p-8">
            <h2 className="text-xl font-semibold mb-4">メインコンテンツ</h2>
            <p className="text-gray-700 mb-4">
                これはメインコンテンツエリアです。
                ページの主要な内容がここに表示されます。
            </p>
            <p className="text-gray-700">
                コンポーネントを分けることで、
                コードが整理され、再利用しやすくなります。
            </p>
        </main>
    )
}

export default MainContent