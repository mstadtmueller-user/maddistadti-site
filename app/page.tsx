import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5f2] text-[#2e2b28] p-6">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-serif mb-2 tracking-tight">maddistadti</h1>
          <p className="text-lg font-light text-[#5e5b57]">
            handbuilt ceramics by maddi stadtmueller
          </p>
        </header>

        <section className="grid gap-6 sm:grid-cols-2">
          <Card className="shadow-sm bg-white border border-[#eae7e1]">
            <CardContent className="p-4">
              <img
                src="/vase.jpg"
                alt="ceramic vase"
                className="rounded-lg mb-4 object-cover w-full h-64"
              />
              <p className="text-sm text-[#5e5b57]">
                Every piece is unique, slow-made, and inspired by everyday textures.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm bg-white border border-[#eae7e1]">
            <CardContent className="p-4">
              <img
                src="/bowl.jpg"
                alt="ceramic bowl"
                className="rounded-lg mb-4 object-cover w-full h-64"
              />
              <p className="text-sm text-[#5e5b57]">
                Find mugs, bowls, and vases that elevate the quiet moments in life.
              </p>
            </CardContent>
          </Card>
        </section>

        <div className="text-center mt-12">
          <Button asChild className="bg-[#2e2b28] text-white hover:bg-[#44403c]">
            <a
              href="https://www.etsy.com/shop/maddistadti"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit my Etsy Shop
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
