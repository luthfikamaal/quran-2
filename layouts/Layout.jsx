import Head from 'next/head';
import NavbarTop from '../components/NavbarTop';
import NavbarBottom from '../components/NavbarBottom';

export default function Layout({ title, children }) {
  const pageTitle = `${title} - Al-Qur'an Online`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <NavbarTop />
      <main className="pt-16 px-4 bg-blue-dark min-h-screen">{children}</main>
      <NavbarBottom />
    </>
  );
}
