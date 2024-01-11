export default function InvalidCity({ message }) {
    return (
        <div className="flex flex-col items-center w-full md:w-1/2 bg-black px-4 py-12 rounded rounded-lg">
            <p className="text-3xl">Error 🚫</p>
            <p className="mt-5">{message}</p>
        </div>
    )
}