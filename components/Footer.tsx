export default function Footer() {
    return (
        <footer className="w-full flex flex-col items-center justify-center py-10 gap-8">
            <div className="text-md dark:text-white/40 text-black/40">
                "Talk is cheap. Show me the code." — Linus Torvalds
            </div>
            <div className="text-md dark:text-white/40 text-black/40">
                © {new Date().getFullYear()} Built with ❤️ by Pratheek Nistala.
            </div>
        </footer>
    )
}