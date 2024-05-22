import svgFile from '../../../assets/sprite.svg'

const svgContent: string = svgFile

// Function to extract IDs from SVG content
function extractIDsFromSVG(svgString: string): string[] {
  const parser: DOMParser = new DOMParser()
  const doc: Document = parser.parseFromString(svgString, 'image/svg+xml')
  // eslint-disable-next-line no-undef
  const groups: NodeListOf<SVGGElement> = doc.querySelectorAll('g[id]')

  return Array.from(groups).map(g => g.id)
}

export const ids: string[] = extractIDsFromSVG(svgContent)
