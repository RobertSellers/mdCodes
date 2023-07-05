module.exports = {
  "codelistType": "staticList",
  "codelistName": "iso_bandDefinition",
  "source": "ISO",
  "sourceName": "MI_BandDefinition",
  "extensible": true,
  "description": "designation of criterion for defining maximum and minimum wavelengths for a spectral band",
  "codelist": [
    {
      "code": "001",
      "codeName": "3dB",
      "description": "width of a distribution equal to the distance between the outer two points on the distribution having power level half of that at the peak"
    },
    {
      "code": "002",
      "codeName": "halfMaximum",
      "description": "width of a distribution equal to the distance between the outer two points on the distribution having power level half of that at the peak"
    },
    {
      "code": "003",
      "codeName": "fiftyPercent",
      "description": "full spectral width of a spectral power density measured at 50% of its peak height"
    },
    {
      "code": "004",
      "codeName": "oneOverE",
      "description": "width of a distribution equal to the distance between the outer two points on the distribution having power level 1/e that of the peak"
    },
    {
      "code": "005",
      "codeName": "equivalentWidth",
      "description": "width of a band with full sensitivity or absorption at every wavelength that detects or absorbs the same amount of energy as the band described"
    }
  ]
};