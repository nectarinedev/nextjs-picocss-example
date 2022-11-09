import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <strong>Brand</strong>
          </li>
        </ul>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/signin'>Sign In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
