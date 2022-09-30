import Link from "next/link"
import Navbar from "../../../components/Navbar"

export default function Pants() {
    return (
        <div>
            <Navbar/>
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