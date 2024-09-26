// se você está usando um estado (useState), precisa do use client
// o useState só está disponível no client
"use client"

import { useState } from "react"

export default function Template(props: any) {
  const [data] = useState(new Date())

  return (
    <div className="border-8 border-green-500 p-8">
      <span>{data.toLocaleTimeString()}</span>
      <main>{props.children}</main>
    </div>
  )
}