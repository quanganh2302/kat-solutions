# Figma design reference

## File

- https://www.figma.com/design/NAmbdiA6Mx7vIoWAumOEnz/Design?node-id=0-1
- File key: `NAmbdiA6Mx7vIoWAumOEnz`

## Primary frames

| Route | Desktop node | Tablet node | Mobile node |
| --- | --- | --- | --- |
| Home | `74:618` | supplied in the design file | `145:319` |
| Projects | `111:434` | `151:635` | use the tablet layout as supplied |
| About | `114:218` | `151:702` | use the tablet layout as supplied |
| Contact | `114:219` | `151:769` | use the tablet layout as supplied |

## Design decisions

- Desktop reference width: 2048px.
- Mobile homepage reference width: 390px.
- Tablet references use 1024px width.
- The visual language is dark technology surfaces with a yellow accent, Manrope display headings, and Inter body text.
- Home hero video is a V1 visual placeholder, not a functional video.
- The mobile navigation, stacked homepage cards, tablet project grids, and contact form arrangement are designed explicitly in Figma; follow those frames rather than inventing alternatives.

## Asset handling

Figma MCP asset URLs expire. Download the original exported assets to `public/` or the appropriate source asset folder before committing implementation. Preserve the original asset rather than recreating logos, icons, or custom vectors manually.
