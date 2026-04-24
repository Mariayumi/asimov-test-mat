export interface CardsProps {
  titulo: string;
  descricao: string;
  icone?: React.ReactNode;
}

export default function Card(props: CardsProps) {
  return (
    <div className="flex gap-2  bg-[var(--grey)] rounded-[12px] p-[12px] w-full border border-[var(--grey-100)]">
      {props.icone && <div>{props.icone}</div>}
      <div className="text-left ">
        <h5 className="font-bold text-sm lg:text-lg text-[var(--texto-principal)]">
          {props.titulo}
        </h5>
        <p className="text-[var(--texto-secundario)] text-xs">
          {props.descricao}
        </p>
      </div>
    </div>
  );
}
