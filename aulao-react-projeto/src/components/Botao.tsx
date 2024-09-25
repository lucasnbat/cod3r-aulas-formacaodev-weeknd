interface BotaoProps {
  label: string
}

export default function Botao(props: BotaoProps) {
  return <button className="bg-green-500 p-2 rounded-sm">{props.label}</button>
}
