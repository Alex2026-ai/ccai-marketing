type PositioningRow = {
  title?: string
  boundary?: string
  signal?: string
  body?: string
  meaning?: string
  purpose?: string
}

export function PositioningTable({ rows }: { rows: PositioningRow[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border">
      <table className="w-full text-left">
        <tbody>
          {rows.map((row) => {
            const label = row.title ?? row.boundary ?? row.signal
            const content = row.body ?? row.meaning ?? row.purpose
            return (
              <tr key={label} className="border-b border-border-light last:border-0">
                <td className="px-4 py-4 align-top text-sm font-semibold text-foreground">
                  {label}
                </td>
                <td className="px-4 py-4 text-sm leading-relaxed text-muted">
                  {content}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
