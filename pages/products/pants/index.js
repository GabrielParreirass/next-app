import Link from "next/link"


export default function Pants() {
    return (
        <div>
          
            <h1>Essa é a parte de calças</h1>
            <ul>
                <li>
                    <Link href={'/products/pants/bluepant'}>
                        <a>Calça Azul</a>
                    </Link>
                </li>

                <li>
                    <Link href={'/products/pants/redpant'}>
                        <a>Calça Vermelha</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}