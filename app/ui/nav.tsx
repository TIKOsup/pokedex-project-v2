import Image from 'next/image';

const navigation = [
  { name: "Pokedex", href: "#"},
  { name: "Temp", href: "#"},
  { name: "Temp2", href: "#"},
];

export default function Nav() {
  return (
    <nav className="bg-white mx-auto flex flex-wrap max-w-7xl items-center justify-between p-4">
      <section>
        <a href="/" className="-m-1.5 p-1.5 flex items-center space-x-3">
          <Image
            src="/logo.png"
            width={32}
            height={32}
            alt="Pokedex Logo"
          />
          <span className="self-center text-2xl text-zinc-900 font-semibold whitespace-nowrap">Pokedex</span>
        </a>
      </section>
      <section className="w-auto flex">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-zinc-900 hover:text-green-600"
          >
            {item.name}
          </a>
        ))}
      </section>
    </nav>
  );
}