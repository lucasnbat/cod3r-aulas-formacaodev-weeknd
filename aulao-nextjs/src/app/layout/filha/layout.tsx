"use client"

export default function Layout(props: any) {
  return (
    <div className="border-8 border-purple-500 p-8">
      <main>{props.children}</main>
    </div>
  )
}
