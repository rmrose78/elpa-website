import { contrastRatio } from './contrast-ratio'

describe('contrastRatio', () => {
  it('returns 21 for black on white — maximum possible contrast', () => {
    expect(contrastRatio('#000000', '#ffffff')).toBeCloseTo(21, 1)
  })

  it('returns 1 for identical colors — no contrast', () => {
    expect(contrastRatio('#8b3a1a', '#8b3a1a')).toBeCloseTo(1, 5)
  })

  it('is symmetric regardless of argument order', () => {
    const ratio1 = contrastRatio('#1e1c18', '#f5f0e8')
    const ratio2 = contrastRatio('#f5f0e8', '#1e1c18')

    expect(ratio1).toBeCloseTo(ratio2, 10)
  })
})
