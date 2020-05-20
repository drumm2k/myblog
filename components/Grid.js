export default function Grid() {
  return (
    <div className="grid">
      <style jsx>{`
        --grid-sides: 16px;
        --grid-gutter: 16px;
        --grid-columns: 4;
        --grid-column-width: calc(
          (100% - var(--grid-gutter) * var(--grid-columns)) /
            var(--grid-columns)
        );
        --grid-color: rgb(0 255 0 / 0.1);

        .grid {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;

          border: solid transparent;
          border-width: 0 calc(var(--grid-sides) - var(--grid-gutter) / 2);

          background-image: repeating-linear-gradient(
            to right,
            transparent 0,
            transparent calc(var(--grid-gutter) / 2),
            var(--grid-color) calc(var(--grid-gutter) / 2),
            var(--grid-color)
              calc(var(--grid-column-width) + var(--grid-gutter) / 2),
            transparent calc(var(--grid-column-width) + var(--grid-gutter) / 2),
            transparent calc(var(--grid-column-width) + var(--grid-gutter))
          );
          background-repeat: no-repeat;
        }

        @media (min-width: 736px) {
          .grid {
            --grid-sides: 24px;
            --grid-columns: 8;
          }
        }

        @media (min-width: 1024px) {
          .grid {
            --grid-sides: 32px;
            --grid-columns: 12;
          }
        }
      `}</style>
    </div>
  );
}
