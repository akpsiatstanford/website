"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";
import styles from "./SiteHeader.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/brotherhood", label: "Brotherhood" },
  { href: "/rush", label: "Rush" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const closeMenu = (returnFocus: boolean) => {
    setOpen(false);
    if (returnFocus) menuButtonRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    // The drawer is hidden on desktop, so close it if the window widens while it's open.
    const desktop = window.matchMedia("(min-width: 48.0625rem)");
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <nav aria-label="Main" className={styles.desktopNav}>
            <ul>
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${styles.link} ${isActive(href) ? styles.active : ""}`}
                    aria-current={isActive(href) ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      <div
        className={`${styles.backdrop} ${open ? styles.backdropVisible : ""}`}
        aria-hidden="true"
        onClick={() => closeMenu(true)}
      />

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}
        inert={!open}
      >
        <div className={styles.drawerHeader}>
          <button
            ref={closeButtonRef}
            type="button"
            className={styles.menuButton}
            aria-label="Close menu"
            onClick={() => closeMenu(true)}
          >
            <CloseIcon />
          </button>
        </div>
        <nav aria-label="Mobile">
          <ul className={styles.drawerList}>
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`${styles.drawerLink} ${isActive(href) ? styles.drawerActive : ""}`}
                  aria-current={isActive(href) ? "page" : undefined}
                  onClick={() => closeMenu(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
