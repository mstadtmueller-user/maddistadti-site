import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#403d39] p-6 font-light">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-serif mb-3 tracking-tight text-[#2e2b28]">maddistadti</h1>
          <p className="text-base italic text-[#6f6c67]">
            handbuilt ceramics by maddi stadtmueller
          </p>
        </header>

        <section className="grid gap-10 md:grid-cols-2">
          <div className="shadow-none bg-[#f9f7f4] border border-[#dedbd7] p-4">
            <img
              src="/vase.jpg"
              alt="ceramic vase"
              className="rounded-sm mb-4 object-cover w-full h-72 border border-[#e4e1dd]"
            />
            <p className="text-sm text-[#5e5b57]">
              Every piece is unique, slow-made, and inspired by natural forms and quiet mornings.
            </p>
          </div>

          <div className="shadow-none bg-[#f9f7f4] border border-[#dedbd7] p-4">
            <img
              src="/bowl.jpg"
              alt="ceramic bowl"
              className="rounded-sm mb-4 object-cover w-full h-72 border border-[#e4e1dd]"
            />
            <p className="text-sm text-[#5e5b57]">
              Mugs, bowls, and vases designed to elevate the gentle moments of daily life.
            </p>
          </div>
        </section>

        <section className="mt-20 flex flex-col items-center">
          <img
            src="/IMG_6824.JPG"
            alt="Maddi Stadtmueller sitting by concrete fountain"
            className="w-64 h-auto rounded-sm border border-[#dedbd7] mb-4"
          />
          <p className="max-w-xl text-center text-sm text-[#5e5b57]">
            Maddi Stadtmueller is a San Diego-based ceramicist who makes handbuilt, one-of-a-kind pieces inspired by texture, nature, and daily ritual. Her work is earthy and elegant, meant to be used and loved.
          </p>
        </section>

        <div className="text-center mt-20">
          <a
            href="https://www.etsy.com/shop/maddistadti"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2e2b28] text-white hover:bg-[#4a4744] tracking-wide px-6 py-2 text-sm"
          >
            Visit my Etsy Shop
          </a>
        </div>
      </div>
    </main>
  );
}
