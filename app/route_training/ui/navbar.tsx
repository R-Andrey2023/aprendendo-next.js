"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./uiStyles/navbar.module.css";

export default function About() {
  const pathName = usePathname();
  const raiz = "/route_training/ui";

  const links = [
    { id: 1, href: `${raiz}/home`, nome: "HOME" },
    { id: 2, href: `${raiz}/about`, nome: "ABOUT" },
    { id: 3, href: `${raiz}/contatos`, nome: "CONTATOS" },
  ];

  return (
    <nav>
      <ul>
        {links.map((link) => {
          const isActive = pathName === link.href;
          console.log(pathName);
          return (
            <li key={link.id}>
              <Link
                href={link.href}
                className={`${isActive ? styles.verificado : ""}`}
              >
                {link.nome}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
