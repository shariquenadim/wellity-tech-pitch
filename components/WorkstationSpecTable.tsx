import type { WorkstationSpecRow } from "@/content/capital";

interface Props {
  rows: readonly WorkstationSpecRow[];
  dark?: boolean;
}

export default function WorkstationSpecTable({ rows, dark = false }: Props) {
  return (
    <div
      className={`overflow-hidden rounded-[14px] border ${
        dark ? "border-paper/12 bg-paper/[0.05]" : "border-line bg-white"
      }`}
    >
      <div className="grid gap-3 p-3 sm:hidden">
        {rows.map((row) => (
          <div
            key={row.component}
            className={`rounded-xl border p-3 ${
              dark ? "border-paper/10 bg-paper/[0.04]" : "border-line/70 bg-surface/60"
            }`}
          >
            <div className="mb-1.5 flex items-baseline justify-between gap-3">
              <h4
                className={`font-mono text-[10px] uppercase tracking-[0.14em] ${
                  dark ? "text-brand-soft" : "text-brand"
                }`}
              >
                {row.component}
              </h4>
              <span
                className={`font-sans text-sm font-semibold ${dark ? "text-paper" : "text-ink"}`}
              >
                {row.spec}
              </span>
            </div>
            <p className={`text-xs leading-relaxed ${dark ? "text-paper/62" : "text-muted"}`}>
              {row.why}
            </p>
          </div>
        ))}
      </div>

      <table className="hidden w-full border-collapse text-left text-sm sm:table">
        <thead>
          <tr className={dark ? "border-b border-paper/12" : "border-b border-line"}>
            {["Component", "Spec", "Why"].map((heading) => (
              <th
                key={heading}
                className={`px-3 py-3 font-mono text-[9px] font-medium uppercase tracking-[0.14em] ${
                  dark ? "text-paper/45" : "text-muted"
                }`}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.component}
              className={dark ? "border-b border-paper/10 last:border-none" : "border-b border-line/60 last:border-none"}
            >
              <td
                className={`px-3 py-3 font-mono text-xs font-semibold uppercase tracking-[0.1em] ${
                  dark ? "text-brand-soft" : "text-brand"
                }`}
              >
                {row.component}
              </td>
              <td className={`px-3 py-3 font-sans text-sm font-semibold whitespace-nowrap ${dark ? "text-paper" : "text-ink"}`}>
                {row.spec}
              </td>
              <td className={`px-3 py-3 text-xs leading-snug ${dark ? "text-paper/62" : "text-muted"}`}>
                {row.why}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
