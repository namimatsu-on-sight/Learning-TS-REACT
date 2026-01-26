const Header = () => {
    return(
        <header className="bg-blue-600 text-white p-4">
            <h1 className="text-2xl font-bold">私のWebサイト</h1>
            <nav className="mt-2">
                <a href="#" className="mr-4 hover:underline">ホーム</a>
                <a href="#" className="mr-4 hover:underline">サービス</a>
                <a href="#" className="mr-4 hover:underline">お問い合わせ</a>
            </nav>
        </header>
    )
}

export default Header