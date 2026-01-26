import ClickExample from "./assets/ClickExample";


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col items-center max-w-4xl justify-center p-4">
        <h1 className="text-4xl font-bold text-center py-8">イベントハンドリングの例</h1>

        <ClickExample />
      </div>
    </div>
  );
}
export default App
