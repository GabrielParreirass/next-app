import Link from 'next/link'
function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <h1>Essa pagina não existe</h1>
            <Link href={'/'}>
                <a>Voltar para a Home</a>
            </Link>
        </div>
    )
}

export default NotFound