import Link from "next/link";

export default function Navbar(){
    return (
        <>
            <nav className={"navbar container"}>
                <Link href={'/'}>
                    <a className={"btn btn-primary"}>Home</a>
                </Link>
                <Link href={'/agencies'}>
                    <a className={"btn btn-primary"}>Agences</a>
                </Link>
                <Link href={'/articles'}>
                    <a className={"btn btn-primary"}>Articles</a>
                </Link>
                <Link href={'/categories'}>
                    <a className={"btn btn-primary"}>Catégories</a>
                </Link>
                <Link href={'/operations'}>
                    <a className={"btn btn-primary"}>Opérations</a>
                </Link>
                <Link href={'/recipes'}>
                    <a className={"btn btn-primary"}>Recettes</a>
                </Link>
                <Link href={'/workunits'}>
                    <a className={"btn btn-primary"}>Chaînes de production</a>
                </Link>
            </nav>
        </>
    )
}