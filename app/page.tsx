import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const data = [
  {
    word: "haggle",
    description: "Hands in rapid motion, intense expressions. Related to 'negotiate' and 'bargain'. Symbolizes tension over value.",
    image: "/images/haggle.png"
  },
  {
    word: "trust",
    description: "Two hands shaking warmly, glowing line between eyes. Contrasts with 'belief' and 'loyalty'.",
    image: "/images/trust.png"
  },
  {
    word: "value",
    description: "A golden tag glowing above an item, drawing buyer’s attention. Tied to 'worth' and 'price'.",
    image: "/images/value.png"
  },
  {
    word: "exchange",
    description: "Items crossing hands at once, balance in posture. A symbol of equal transaction.",
    image: "/images/exchange.png"
  },
  {
    word: "choice",
    description: "Character facing diverging stalls, hesitant, question mark above head. Indicates decision point.",
    image: "/images/choice.png"
  }
]

export default function MarketplaceScene() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="p-6 grid grid-cols-5 gap-4">
      <div className="col-span-3">
        <img
          src="/images/market-overview.png"
          alt="Marketplace Scene"
          className="rounded-2xl shadow-xl"
        />
        <div className="flex flex-wrap mt-4 gap-2">
          {data.map((item) => (
            <Button key={item.word} onClick={() => setSelected(item)}>{item.word}</Button>
          ))}
        </div>
      </div>
      <div className="col-span-2">
        {selected ? (
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-bold mb-2">{selected.word}</h2>
              <p className="text-base mb-3">{selected.description}</p>
              <img src={selected.image} alt={selected.word} className="rounded-xl shadow-md" />
            </CardContent>
          </Card>
        ) : (
          <p className="text-muted-foreground">Click on a word to explore its visual meaning.</p>
        )}
      </div>
    </div>
  )
}
