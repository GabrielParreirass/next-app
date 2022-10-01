import Link from 'next/link'


export default function Products() {
    return (
        <div>
        
            <h1>Essa é a pagina de produtos</h1>
            <ul>
                <li>
                    <Link href={'/products/pants'}>
                        <a>Calças</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}