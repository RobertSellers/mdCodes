module.exports = {
  "iso_associationType": {
    "codelistType": "staticList",
    "codelistName": "iso_associationType",
    "source": "ISO",
    "sourceName": "DS_AssociationTypeCode",
    "extensible": true,
    "description": "justification for the correlation of two resources (datasets or projects)",
    "codelist": [
      {
        "code": "001",
        "codeName": "crossReference",
        "description": "the associated resource is a reference to another dataset or project"
      },
      {
        "code": "002",
        "codeName": "largerWorkCitation",
        "description": "the associated resource is a citation to a master resource of the main resource"
      },
      {
        "code": "003",
        "codeName": "partOfSeamlessDatabase",
        "description": "the associated resource is a part of the same structured dataset as the main resource"
      },
      {
        "code": "004",
        "codeName": "source",
        "description": "the associated resource is mapping and charting information from which the main resource content originates"
      },
      {
        "code": "005",
        "codeName": "stereoMate",
        "description": "the associated resource is part of a set of imagery that when used together provide three-dimensional images"
      },
      {
        "code": "006",
        "codeName": "isComposedOf",
        "description": "the associated resource is a dataset or project that is part of the main resource"
      },
      {
        "code": "007",
        "codeName": "collectiveTitle",
        "description": "the associated resource is a common title for a collection of resources. NOTE Title identifies elements of a series collectively, combined with information about what volumes are available at the source cite."
      },
      {
        "code": "008",
        "codeName": "series",
        "description": "the associated resource was produced via the same product specifications as the main resource"
      },
      {
        "code": "009",
        "codeName": "dependency",
        "description": "the associated resource is dependent on the main resource"
      },
      {
        "code": "010",
        "codeName": "revisionOf",
        "description": "the main resource is a revision of the associated resource"
      },
      {
        "code": "adiwg001",
        "codeName": "projectProduct",
        "description": "DEPRECATED: use product",
        "deprecated": true
      },
      {
        "code": "adiwg002",
        "codeName": "supplementalResource",
        "description": "the associated resource is a supplemental resource to the main resource"
      },
      {
        "code": "adiwg003",
        "codeName": "produced",
        "description": "DEPRECATED: use product",
        "deprecated": true
      },
      {
        "code": "adiwg004",
        "codeName": "productOf",
        "description": "DEPRECATED: use parentProject",
        "deprecated": true
      },
      {
        "code": "adiwg005",
        "codeName": "mainProjectOf",
        "description": "DEPRECATED: use subProject",
        "deprecated": true
      },
      {
        "code": "adiwg006",
        "codeName": "subProjectOf",
        "description": "DEPRECATED: use parentProject",
        "deprecated": true
      },
      {
        "code": "adiwg007",
        "codeName": "product",
        "description": "the associated resource is a product developed as deliverable of the main resource"
      },
      {
        "code": "adiwg008",
        "codeName": "parentProject",
        "description": "the associated resource is a parent project of the main resource"
      },
      {
        "code": "adiwg009",
        "codeName": "subProject",
        "description": "the associated resource is sub-project or task of the main resource"
      },
      {
        "code": "adiwg010",
        "codeName": "derivativeResource",
        "description": "the associated resource is derived from main resource"
      },
      {
        "code": "adiwg011",
        "codeName": "alternate",
        "description": "the associated resource is an alternate reference for the main resource"
      },
      {
        "code": "adiwg012",
        "codeName": "isPartOf",
        "description": "the associated resource is a subset of the main resource"
      }
    ]
  },
  "iso_bandDefinition": {
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
  },
  "iso_cellGeometry": {
    "codelistType": "staticList",
    "codelistName": "iso_cellGeometry",
    "source": "ISO",
    "sourceName": "MD_CellGeometryCode",
    "extensible": true,
    "description": "code indicating the geometry represented by the grid cell value",
    "codelist": [
      {
        "code": "001",
        "codeName": "point",
        "description": "each cell represents a point"
      },
      {
        "code": "002",
        "codeName": "area",
        "description": "each cell represents an area"
      },
      {
        "code": "003",
        "codeName": "voxel",
        "description": "each cell represents a volumetric measurement on a regular grid in three dimensional space"
      },
      {
        "code": "004",
        "codeName": "stratum",
        "description": "height range for a single point vertical profile"
      }
    ]
  },
  "iso_characterSet": {
    "codelistType": "staticList",
    "codelistName": "iso_characterSet",
    "source": "Internet Assigned Numbers Authority (IANA)",
    "sourceName": "MD_CharacterSetCode",
    "extensible": true,
    "description": "name of the character coding standard used in the resource",
    "codelist": [
      {
        "code": "2005",
        "codeName": "Adobe-Standard-Encoding",
        "description": "PostScript Language Reference Manual PCL Symbol Set id: 10J"
      },
      {
        "code": "2020",
        "codeName": "Adobe-Symbol-Encoding",
        "description": "PostScript Language Reference Manual PCL Symbol Set id: 5M "
      },
      {
        "code": "2104",
        "codeName": "Amiga-1251",
        "description": "See [http://www.amiga.ultranet.ru/Amiga-1251.html]"
      },
      {
        "code": "74",
        "codeName": "ANSI_X3.110-1983",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "65",
        "codeName": "ASMO_449",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "2026",
        "codeName": "Big5",
        "description": "Chinese for Taiwan Multi-byte set. PCL Symbol Set Id: 18T"
      },
      {
        "code": "2101",
        "codeName": "Big5-HKSCS",
        "description": "See [http://www.iana.org/assignments/charset-reg/Big5-HKSCS]"
      },
      {
        "code": "1020",
        "codeName": "BOCU-1",
        "description": "[http://www.unicode.org/notes/tn6/]"
      },
      {
        "code": "2106",
        "codeName": "BRF",
        "description": "See [http://www.iana.org/assignments/charset-reg/BRF]  "
      },
      {
        "code": "20",
        "codeName": "BS_4730",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "50",
        "codeName": "BS_viewdata",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "1016",
        "codeName": "CESU-8",
        "description": "[http://www.unicode.org/unicode/reports/tr26]"
      },
      {
        "code": "2260",
        "codeName": "CP50220",
        "description": "See [http://www.iana.org/assignments/charset-reg/CP50220]"
      },
      {
        "code": "2108",
        "codeName": "CP51932",
        "description": "See [http://www.iana.org/assignments/charset-reg/CP51932] "
      },
      {
        "code": "78",
        "codeName": "CSA_Z243.4-1985-1",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "79",
        "codeName": "CSA_Z243.4-1985-2",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "80",
        "codeName": "CSA_Z243.4-1985-gr",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "86",
        "codeName": "CSN_369103",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "2008",
        "codeName": "DEC-MCS",
        "description": "VAX/VMS User's Manual, Order Number: AI-Y517A-TE, April 1986."
      },
      {
        "code": "24",
        "codeName": "DIN_66003",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "101",
        "codeName": "dk-us",
        "description": ""
      },
      {
        "code": "99",
        "codeName": "DS_2089",
        "description": "Danish Standard, DS 2089, February 1974"
      },
      {
        "code": "2064",
        "codeName": "EBCDIC-AT-DE",
        "description": "IBM 3270 Char Set Ref Ch 10, GA27-2837-9, April 1987"
      },
      {
        "code": "2065",
        "codeName": "EBCDIC-AT-DE-A",
        "description": "IBM 3270 Char Set Ref Ch 10, GA27-2837-9, April 1987"
      },
      {
        "code": "2066",
        "codeName": "EBCDIC-CA-FR",
        "description": "IBM 3270 Char Set Ref Ch 10, GA27-2837-9, April 1987"
      },
      {
        "code": "2067",
        "codeName": "EBCDIC-DK-NO",
        "description": "IBM 3270 Char Set Ref Ch 10, GA27-2837-9, April 1987"
      },
      {
        "code": "2068",
        "codeName": "EBCDIC-DK-NO-A",
        "description": "IBM 3270 Char Set Ref Ch 10, GA27-2837-9, April 1987"
      },
      {
        "code": "2074",
        "codeName": "EBCDIC-ES",
        "description": "IBM 3270 Char Set Ref Ch 10, GA27-2837-9, April 1987"
      },
      {
        "code": "2075",
        "codeName": "EBCDIC-ES-A",
        "description": "IBM 3270 Char Set Ref Ch 10, GA27-2837-9, April 1987"
      },
      {
        "code": "2076",
        "codeName": "EBCDIC-ES-S",
        "description": "IBM 3270 Char Set Ref Ch 10, GA27-2837-9, April 1987"
      },
      {
        "code": "2069",
        "codeName": "EBCDIC-FI-SE",
        "description": "IBM 3270 Char Set Ref Ch 10, GA27-2837-9, April 1987"
      },
      {
        "code": "2070",
        "codeName": "EBCDIC-FI-SE-A",
        "description": "IBM 3270 Char Set Ref Ch 10, GA27-2837-9, April 1987"
      },
      {
        "code": "2071",
        "codeName": "EBCDIC-FR",
        "description": "IBM 3270 Char Set Ref Ch 10, GA27-2837-9, April 1987"
      },
      {
        "code": "2072",
        "codeName": "EBCDIC-IT",
        "description": "IBM 3270 Char Set Ref Ch 10, GA27-2837-9, April 1987"
      },
      {
        "code": "2073",
        "codeName": "EBCDIC-PT",
        "description": "IBM 3270 Char Set Ref Ch 10, GA27-2837-9, April 1987"
      },
      {
        "code": "2077",
        "codeName": "EBCDIC-UK",
        "description": "IBM 3270 Char Set Ref Ch 10, GA27-2837-9, April 1987"
      },
      {
        "code": "2078",
        "codeName": "EBCDIC-US",
        "description": "IBM 3270 Char Set Ref Ch 10, GA27-2837-9, April 1987"
      },
      {
        "code": "77",
        "codeName": "ECMA-cyrillic",
        "description": "[ISO registry] (formerly [ECMA  registry])"
      },
      {
        "code": "23",
        "codeName": "ES",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "61",
        "codeName": "ES2",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "38",
        "codeName": "EUC-KR",
        "description": "[RFC1557] (see also KS_C_5861-1992)"
      },
      {
        "code": "19",
        "codeName": "Extended_UNIX_Code_Fixed_Width_for_Japanese",
        "description": "Code set 0: US-ASCII; code set 2: Half Width Katakana; code set 3: JIS X0212-1990"
      },
      {
        "code": "18",
        "codeName": "Extended_UNIX_Code_Packed_Format_for_Japanese",
        "description": "Code set 0: US-ASCII; code set 1: JIS X0208-1990; code set 3: JIS X0212-1990 "
      },
      {
        "code": "56",
        "codeName": "GB_1988-80",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "57",
        "codeName": "GB_2312-80",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "114",
        "codeName": "GB18030",
        "description": "Chinese IT Standardization Technical Committee see [http://www.iana.org/assignments/charset-reg/GB18030]"
      },
      {
        "code": "2025",
        "codeName": "GB2312",
        "description": "Chinese for People's Republic of China (PRC) mixed one byte, two byte set"
      },
      {
        "code": "113",
        "codeName": "GBK",
        "description": "Chinese IT Standardization Technical Committee see [http://www.iana.org/assignments/charset-reg/GBK]"
      },
      {
        "code": "94",
        "codeName": "GOST_19768-74",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "64",
        "codeName": "greek7",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "44",
        "codeName": "greek7-old",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "91",
        "codeName": "greek-ccitt",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "2021",
        "codeName": "HP-DeskTop",
        "description": "PCL 5 Comparison Guide, Hewlett-Packard, HP part number 5961-0510, October 1992 PCL Symbol Set id: 7J"
      },
      {
        "code": "2017",
        "codeName": "HP-Legal",
        "description": "PCL 5 Comparison Guide, Hewlett-Packard, HP part number 5961-0510, October 1992 PCL Symbol Set id: 1U"
      },
      {
        "code": "2019",
        "codeName": "HP-Math8",
        "description": "PCL 5 Comparison Guide, Hewlett-Packard, HP part number 5961-0510, October 1992 PCL Symbol Set id: 8M"
      },
      {
        "code": "2018",
        "codeName": "HP-Pi-font",
        "description": "PCL 5 Comparison Guide, Hewlett-Packard, HP part number 5961-0510, October 1992 PCL Symbol Set id: 15U "
      },
      {
        "code": "2004",
        "codeName": "hp-roman8",
        "description": "LaserJet IIP Printer User's Manual, HP part no 33471-90901, Hewlet-Packard, June 1989."
      },
      {
        "code": "2085",
        "codeName": "HZ-GB-2312",
        "description": "[RFC1842], [RFC1843][RFC1843][RFC1842]"
      },
      {
        "code": "2089",
        "codeName": "IBM00858",
        "description": "IBM See [http://www.iana.org/assignments/charset-reg/IBM00858]"
      },
      {
        "code": "2090",
        "codeName": "IBM00924",
        "description": "IBM See [http://www.iana.org/assignments/charset-reg/IBM00924]"
      },
      {
        "code": "2091",
        "codeName": "IBM01140",
        "description": "IBM See [http://www.iana.org/assignments/charset-reg/IBM01140]"
      },
      {
        "code": "2092",
        "codeName": "IBM01141",
        "description": "IBM See [http://www.iana.org/assignments/charset-reg/IBM01141] "
      },
      {
        "code": "2093",
        "codeName": "IBM01142",
        "description": "IBM See [http://www.iana.org/assignments/charset-reg/IBM01142]"
      },
      {
        "code": "2094",
        "codeName": "IBM01143",
        "description": "IBM See [http://www.iana.org/assignments/charset-reg/IBM01143]"
      },
      {
        "code": "2095",
        "codeName": "IBM01144",
        "description": "IBM See [http://www.iana.org/assignments/charset-reg/IBM01144]"
      },
      {
        "code": "2096",
        "codeName": "IBM01145",
        "description": "IBM See [http://www.iana.org/assignments/charset-reg/IBM01145]"
      },
      {
        "code": "2097",
        "codeName": "IBM01146",
        "description": "IBM See [http://www.iana.org/assignments/charset-reg/IBM01146]"
      },
      {
        "code": "2098",
        "codeName": "IBM01147",
        "description": "IBM See [http://www.iana.org/assignments/charset-reg/IBM01147]"
      },
      {
        "code": "2099",
        "codeName": "IBM01148",
        "description": "IBM See [http://www.iana.org/assignments/charset-reg/IBM01148]"
      },
      {
        "code": "2100",
        "codeName": "IBM01149",
        "description": "IBM See [http://www.iana.org/assignments/charset-reg/IBM01149]"
      },
      {
        "code": "2028",
        "codeName": "IBM037",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990"
      },
      {
        "code": "2029",
        "codeName": "IBM038",
        "description": "IBM 3174 Character Set Ref, GA27-3831-02, March 1990"
      },
      {
        "code": "2063",
        "codeName": "IBM1026",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990"
      },
      {
        "code": "2102",
        "codeName": "IBM1047",
        "description": "IBM1047 (EBCDIC Latin 1/Open Systems) [http://www-1.ibm.com/servers/eserver/iseries/software/globalization/pdf/cp01047z.pdf]"
      },
      {
        "code": "2030",
        "codeName": "IBM273",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990"
      },
      {
        "code": "2031",
        "codeName": "IBM274",
        "description": "IBM 3174 Character Set Ref, GA27-3831-02, March 1990"
      },
      {
        "code": "2032",
        "codeName": "IBM275",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990"
      },
      {
        "code": "2033",
        "codeName": "IBM277",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990"
      },
      {
        "code": "2034",
        "codeName": "IBM278",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990"
      },
      {
        "code": "2035",
        "codeName": "IBM280",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990"
      },
      {
        "code": "2036",
        "codeName": "IBM281",
        "description": "IBM 3174 Character Set Ref, GA27-3831-02, March 1990"
      },
      {
        "code": "2037",
        "codeName": "IBM284",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990"
      },
      {
        "code": "2038",
        "codeName": "IBM285",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990"
      },
      {
        "code": "2039",
        "codeName": "IBM290",
        "description": "IBM 3174 Character Set Ref, GA27-3831-02, March 1990"
      },
      {
        "code": "2040",
        "codeName": "IBM297",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990"
      },
      {
        "code": "2041",
        "codeName": "IBM420",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990, IBM NLS RM p 11-11"
      },
      {
        "code": "2042",
        "codeName": "IBM423",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990"
      },
      {
        "code": "2043",
        "codeName": "IBM424",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990"
      },
      {
        "code": "2011",
        "codeName": "IBM437",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990"
      },
      {
        "code": "2044",
        "codeName": "IBM500",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990"
      },
      {
        "code": "2087",
        "codeName": "IBM775",
        "description": "HP PCL 5 Comparison Guide (P/N 5021-0329) pp B-13, 1996"
      },
      {
        "code": "2009",
        "codeName": "IBM850",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990 "
      },
      {
        "code": "2045",
        "codeName": "IBM851",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990"
      },
      {
        "code": "2010",
        "codeName": "IBM852",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990"
      },
      {
        "code": "2046",
        "codeName": "IBM855",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990"
      },
      {
        "code": "2047",
        "codeName": "IBM857",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990"
      },
      {
        "code": "2048",
        "codeName": "IBM860",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990"
      },
      {
        "code": "2049",
        "codeName": "IBM861",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990"
      },
      {
        "code": "2013",
        "codeName": "IBM862",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990"
      },
      {
        "code": "2050",
        "codeName": "IBM863",
        "description": "IBM Keyboard layouts and code pages, PN 07G4586 June 1991"
      },
      {
        "code": "2051",
        "codeName": "IBM864",
        "description": "IBM Keyboard layouts and code pages, PN 07G4586 June 1991"
      },
      {
        "code": "2052",
        "codeName": "IBM865",
        "description": "IBM DOS 3.3 Ref (Abridged), 94X9575 (Feb 1987)"
      },
      {
        "code": "2086",
        "codeName": "IBM866",
        "description": "IBM NLDG Volume 2 (SE09-8002-03) August 1994"
      },
      {
        "code": "2053",
        "codeName": "IBM868",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990"
      },
      {
        "code": "2054",
        "codeName": "IBM869",
        "description": "IBM Keyboard layouts and code pages, PN 07G4586 June 1991"
      },
      {
        "code": "2055",
        "codeName": "IBM870",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990"
      },
      {
        "code": "2056",
        "codeName": "IBM871",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990"
      },
      {
        "code": "2057",
        "codeName": "IBM880",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990"
      },
      {
        "code": "2058",
        "codeName": "IBM891",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990"
      },
      {
        "code": "2059",
        "codeName": "IBM903",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990"
      },
      {
        "code": "2060",
        "codeName": "IBM904",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990"
      },
      {
        "code": "2061",
        "codeName": "IBM905",
        "description": "IBM 3174 Character Set Ref, GA27-3831-02, March 1990"
      },
      {
        "code": "2062",
        "codeName": "IBM918",
        "description": "IBM NLS RM Vol2 SE09-8002-01, March 1990"
      },
      {
        "code": "2015",
        "codeName": "IBM-Symbols",
        "description": "Presentation Set, CPGID: 259"
      },
      {
        "code": "2016",
        "codeName": "IBM-Thai",
        "description": "Presentation Set, CPGID: 838"
      },
      {
        "code": "88",
        "codeName": "IEC_P27-1",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "51",
        "codeName": "INIS",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "52",
        "codeName": "INIS-8",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "53",
        "codeName": "INIS-cyrillic",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "29",
        "codeName": "INVARIANT",
        "description": ""
      },
      {
        "code": "96",
        "codeName": "ISO_10367-box",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "73",
        "codeName": "ISO_2033-1983",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "48",
        "codeName": "ISO_5427",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "54",
        "codeName": "ISO_5427:1981",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "55",
        "codeName": "ISO_5428:1980",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "28",
        "codeName": "ISO_646.basic:1983",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "30",
        "codeName": "ISO_646.irv:1983",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "93",
        "codeName": "ISO_6937-2-25",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "14",
        "codeName": "ISO_6937-2-add",
        "description": "[ISO-IR: International Register of Escape Sequences] and ISO 6937-2:1983    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "4",
        "codeName": "ISO_8859-1:1987",
        "description": "[ISO-IR: International Register of Escape Sequences]   Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "5",
        "codeName": "ISO_8859-2:1987",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "6",
        "codeName": "ISO_8859-3:1988",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "7",
        "codeName": "ISO_8859-4:1988",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "8",
        "codeName": "ISO_8859-5:1988",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "9",
        "codeName": "ISO_8859-6:1987",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "81",
        "codeName": "ISO_8859-6-E",
        "description": "[RFC1556]"
      },
      {
        "code": "82",
        "codeName": "ISO_8859-6-I",
        "description": "[RFC1556]"
      },
      {
        "code": "10",
        "codeName": "ISO_8859-7:1987",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "11",
        "codeName": "ISO_8859-8:1988",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "84",
        "codeName": "ISO_8859-8-E",
        "description": "[RFC1556]"
      },
      {
        "code": "85",
        "codeName": "ISO_8859-8-I",
        "description": "[RFC1556]"
      },
      {
        "code": "12",
        "codeName": "ISO_8859-9:1989",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "95",
        "codeName": "ISO_8859-supp",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "1004",
        "codeName": "ISO-10646-J-1",
        "description": "ISO 10646 Japanese, see [RFC1815]"
      },
      {
        "code": "1000",
        "codeName": "ISO-10646-UCS-2",
        "description": "the 2-octet Basic Multilingual Plane, aka Unicode this needs to specify network byte order: the standard does not specify (it is a 16-bit integer space)"
      },
      {
        "code": "1001",
        "codeName": "ISO-10646-UCS-4",
        "description": "the full code space. (same comment about byte order, these are 31-bit numbers."
      },
      {
        "code": "1002",
        "codeName": "ISO-10646-UCS-Basic",
        "description": "ASCII subset of Unicode.  Basic Latin = collection 1 See ISO 10646, Appendix A"
      },
      {
        "code": "1003",
        "codeName": "ISO-10646-Unicode-Latin1",
        "description": "ISO Latin-1 subset of Unicode. Basic Latin and Latin-1 Supplement  = collections 1 and 2.  See ISO 10646, Appendix A.  See [RFC1815]."
      },
      {
        "code": "27",
        "codeName": "ISO-10646-UTF-1",
        "description": "Universal Transfer Format (1), this is the multibyte encoding, that subsets ASCII-7. It does not have byte ordering issues."
      },
      {
        "code": "118",
        "codeName": "ISO-11548-1",
        "description": "See [http://www.iana.org/assignments/charset-reg/ISO-11548-1]"
      },
      {
        "code": "104",
        "codeName": "ISO-2022-CN",
        "description": "[RFC1922]"
      },
      {
        "code": "105",
        "codeName": "ISO-2022-CN-EXT",
        "description": "[RFC1922]"
      },
      {
        "code": "39",
        "codeName": "ISO-2022-JP",
        "description": "[RFC1468] (see also [RFC2237])"
      },
      {
        "code": "40",
        "codeName": "ISO-2022-JP-2",
        "description": "[RFC1554]"
      },
      {
        "code": "37",
        "codeName": "ISO-2022-KR",
        "description": "[RFC1557] (see also KS_C_5601-1987)"
      },
      {
        "code": "13",
        "codeName": "ISO-8859-10",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "109",
        "codeName": "ISO-8859-13",
        "description": "ISO See [http://www.iana.org/assignments/charset-reg/ISO-8859-13][Vladas_Tumasonis]"
      },
      {
        "code": "110",
        "codeName": "ISO-8859-14",
        "description": "ISO See [http://www.iana.org/assignments/charset-reg/ISO-8859-14] [Keld_Simonsen_2]"
      },
      {
        "code": "111",
        "codeName": "ISO-8859-15",
        "description": "ISO see [http://www.iana.org/assignments/charset-reg/ISO-8859-15]"
      },
      {
        "code": "112",
        "codeName": "ISO-8859-16",
        "description": "ISO"
      },
      {
        "code": "2000",
        "codeName": "ISO-8859-1-Windows-3.0-Latin-1",
        "description": "Extended ISO 8859-1 Latin-1 for Windows 3.0. PCL Symbol Set id: 9U"
      },
      {
        "code": "2001",
        "codeName": "ISO-8859-1-Windows-3.1-Latin-1",
        "description": "Extended ISO 8859-1 Latin-1 for Windows 3.1. PCL Symbol Set id: 19U"
      },
      {
        "code": "2002",
        "codeName": "ISO-8859-2-Windows-Latin-2",
        "description": "Extended ISO 8859-2.  Latin-2 for Windows 3.1. PCL Symbol Set id: 9E"
      },
      {
        "code": "2003",
        "codeName": "ISO-8859-9-Windows-Latin-5",
        "description": "Extended ISO 8859-9.  Latin-5 for Windows 3.1 PCL Symbol Set id: 5T"
      },
      {
        "code": "66",
        "codeName": "iso-ir-90",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "1005",
        "codeName": "ISO-Unicode-IBM-1261",
        "description": "IBM Latin-2, -3, -5, Extended Presentation Set, GCSGID: 1261"
      },
      {
        "code": "1008",
        "codeName": "ISO-Unicode-IBM-1264",
        "description": "IBM Arabic Presentation Set, GCSGID: 1264"
      },
      {
        "code": "1009",
        "codeName": "ISO-Unicode-IBM-1265",
        "description": "IBM Hebrew Presentation Set, GCSGID: 1265"
      },
      {
        "code": "1006",
        "codeName": "ISO-Unicode-IBM-1268",
        "description": "IBM Latin-4 Extended Presentation Set, GCSGID: 1268"
      },
      {
        "code": "1007",
        "codeName": "ISO-Unicode-IBM-1276",
        "description": "IBM Cyrillic Greek Extended Presentation Set, GCSGID: 1276"
      },
      {
        "code": "22",
        "codeName": "IT",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "41",
        "codeName": "JIS_C6220-1969-jp",
        "description": "[ISO-IR: International Register of Escape Sequences]     Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "42",
        "codeName": "JIS_C6220-1969-ro",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "49",
        "codeName": "JIS_C6226-1978",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "63",
        "codeName": "JIS_C6226-1983",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "67",
        "codeName": "JIS_C6229-1984-a",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "68",
        "codeName": "JIS_C6229-1984-b",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "69",
        "codeName": "JIS_C6229-1984-b-add",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "70",
        "codeName": "JIS_C6229-1984-hand",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "71",
        "codeName": "JIS_C6229-1984-hand-add",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "72",
        "codeName": "JIS_C6229-1984-kana",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "16",
        "codeName": "JIS_Encoding",
        "description": "JIS X 0202-1991.  Uses ISO 2022 escape sequences to shift code sets as documented in JIS X 0202-1991."
      },
      {
        "code": "15",
        "codeName": "JIS_X0201",
        "description": "JIS X 0201-1976.   One byte only, this is equivalent to JIS/Roman (similar to ASCII) plus eight-bit half-width Katakana"
      },
      {
        "code": "98",
        "codeName": "JIS_X0212-1990",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "87",
        "codeName": "JUS_I.B1.002",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "90",
        "codeName": "JUS_I.B1.003-mac",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "89",
        "codeName": "JUS_I.B1.003-serb",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "2105",
        "codeName": "KOI7-switched",
        "description": "See [http://www.iana.org/assignments/charset-reg/KOI7-switched]"
      },
      {
        "code": "2084",
        "codeName": "KOI8-R",
        "description": "[RFC1489], based on GOST-19768-74, ISO-6937/8, INIS-Cyrillic, ISO-5427."
      },
      {
        "code": "2088",
        "codeName": "KOI8-U",
        "description": "[RFC2319]"
      },
      {
        "code": "36",
        "codeName": "KS_C_5601-1987",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "102",
        "codeName": "KSC5636",
        "description": ""
      },
      {
        "code": "119",
        "codeName": "KZ-1048",
        "description": "See [http://www.iana.org/assignments/charset-reg/KZ-1048] "
      },
      {
        "code": "45",
        "codeName": "latin-greek",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "47",
        "codeName": "Latin-greek-1",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "97",
        "codeName": "latin-lap",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "2027",
        "codeName": "macintosh",
        "description": "The Unicode Standard ver1.0, ISBN 0-201-56788-1, Oct 1991"
      },
      {
        "code": "2023",
        "codeName": "Microsoft-Publishing",
        "description": "PCL 5 Comparison Guide, Hewlett-Packard, HP part number 5961-0510, October 1992 PCL Symbol Set id: 6J"
      },
      {
        "code": "2081",
        "codeName": "MNEM",
        "description": "[RFC1345], also known as mnemonic+ascii+8200"
      },
      {
        "code": "2080",
        "codeName": "MNEMONIC",
        "description": "[RFC1345], also known as mnemonic+ascii+38"
      },
      {
        "code": "62",
        "codeName": "MSZ_7795.3",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "33",
        "codeName": "NATS-DANO",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "34",
        "codeName": "NATS-DANO-ADD",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "31",
        "codeName": "NATS-SEFI",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "32",
        "codeName": "NATS-SEFI-ADD",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "92",
        "codeName": "NC_NC00-10:81",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "26",
        "codeName": "NF_Z_62-010",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "46",
        "codeName": "NF_Z_62-010_(1973)",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "25",
        "codeName": "NS_4551-1",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "58",
        "codeName": "NS_4551-2",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "116",
        "codeName": "OSD_EBCDIC_DF03_IRV",
        "description": "Fujitsu-Siemens standard mainframe EBCDIC encoding see [http://www.iana.org/assignments/charset-reg/OSD-EBCDIC-DF03-IRV]"
      },
      {
        "code": "117",
        "codeName": "OSD_EBCDIC_DF04_1",
        "description": "Fujitsu-Siemens standard mainframe EBCDIC encoding see [http://www.iana.org/assignments/charset-reg/OSD-EBCDIC-DF04-1]"
      },
      {
        "code": "115",
        "codeName": "OSD_EBCDIC_DF04_15",
        "description": "Fujitsu-Siemens standard mainframe EBCDIC encoding see [http://www.iana.org/assignments/charset-reg/OSD-EBCDIC-DF04-15]"
      },
      {
        "code": "2012",
        "codeName": "PC8-Danish-Norwegian",
        "description": "PC Danish Norwegian 8-bit PC set for Danish Norwegian PCL Symbol Set id: 11U"
      },
      {
        "code": "2014",
        "codeName": "PC8-Turkish",
        "description": "PC Latin Turkish.  PCL Symbol Set id: 9T"
      },
      {
        "code": "43",
        "codeName": "PT",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "60",
        "codeName": "PT2",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "2103",
        "codeName": "PTCP154",
        "description": "See [http://www.iana.org/assignments/charset-reg/PTCP154]"
      },
      {
        "code": "1011",
        "codeName": "SCSU",
        "description": "SCSU See [http://www.iana.org/assignments/charset-reg/SCSU]     [Markus_Scherer]"
      },
      {
        "code": "35",
        "codeName": "SEN_850200_B",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "21",
        "codeName": "SEN_850200_C",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "17",
        "codeName": "Shift_JIS",
        "description": "An extension of csHalfWidthKatakana by adding graphic characters in JIS X 0208. "
      },
      {
        "code": "83",
        "codeName": "T.101-G2",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "75",
        "codeName": "T.61-7bit",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "76",
        "codeName": "T.61-8bit",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "2259",
        "codeName": "TIS-620",
        "description": "Thai Industrial Standards Institute (TISI)"
      },
      {
        "code": "2107",
        "codeName": "TSCII",
        "description": "See [http://www.iana.org/assignments/charset-reg/TSCII]"
      },
      {
        "code": "1010",
        "codeName": "UNICODE-1-1",
        "description": "[RFC1641]"
      },
      {
        "code": "103",
        "codeName": "UNICODE-1-1-UTF-7",
        "description": "[RFC1642]"
      },
      {
        "code": "2079",
        "codeName": "UNKNOWN-8BIT",
        "description": ""
      },
      {
        "code": "3",
        "codeName": "US-ASCII",
        "description": "ANSI X3.4-1986"
      },
      {
        "code": "100",
        "codeName": "us-dk",
        "description": ""
      },
      {
        "code": "1015",
        "codeName": "UTF-16",
        "description": "[RFC2781]"
      },
      {
        "code": "1013",
        "codeName": "UTF-16BE",
        "description": "[RFC2781]"
      },
      {
        "code": "1014",
        "codeName": "UTF-16LE",
        "description": "[RFC2781]"
      },
      {
        "code": "1017",
        "codeName": "UTF-32",
        "description": "[http://www.unicode.org/unicode/reports/tr19/]"
      },
      {
        "code": "1018",
        "codeName": "UTF-32BE",
        "description": "[http://www.unicode.org/unicode/reports/tr19/]"
      },
      {
        "code": "1019",
        "codeName": "UTF-32LE",
        "description": "[http://www.unicode.org/unicode/reports/tr19/]"
      },
      {
        "code": "1012",
        "codeName": "UTF-7",
        "description": "[RFC2152]"
      },
      {
        "code": "106",
        "codeName": "UTF-8",
        "description": "[RFC3629]"
      },
      {
        "code": "2007",
        "codeName": "Ventura-International",
        "description": "Ventura International.  ASCII plus coded characters similar to Roman8. PCL Symbol Set id: 13J"
      },
      {
        "code": "2022",
        "codeName": "Ventura-Math",
        "description": "PCL 5 Comparison Guide, Hewlett-Packard, HP part number 5961-0510, October 1992 PCL Symbol Set id: 6M"
      },
      {
        "code": "2006",
        "codeName": "Ventura-US",
        "description": "Ventura US. "
      },
      {
        "code": "59",
        "codeName": "videotex-suppl",
        "description": "[ISO-IR: International Register of Escape Sequences]    Note: The current registration authority is IPSJ/ITSCJ, Japan."
      },
      {
        "code": "2083",
        "codeName": "VIQR",
        "description": "[RFC1456]"
      },
      {
        "code": "2082",
        "codeName": "VISCII",
        "description": "[RFC1456]"
      },
      {
        "code": "2250",
        "codeName": "windows-1250",
        "description": "Microsoft  [http://www.iana.org/assignments/charset-reg/windows-1250]"
      },
      {
        "code": "2251",
        "codeName": "windows-1251",
        "description": "Microsoft  [http://www.iana.org/assignments/charset-reg/windows-1251]"
      },
      {
        "code": "2252",
        "codeName": "windows-1252",
        "description": "Microsoft  [http://www.iana.org/assignments/charset-reg/windows-1252]"
      },
      {
        "code": "2253",
        "codeName": "windows-1253",
        "description": "Microsoft  [http://www.iana.org/assignments/charset-reg/windows-1253]"
      },
      {
        "code": "2254",
        "codeName": "windows-1254",
        "description": "Microsoft  [http://www.iana.org/assignments/charset-reg/windows-1254]"
      },
      {
        "code": "2255",
        "codeName": "windows-1255",
        "description": "Microsoft  [http://www.iana.org/assignments/charset-reg/windows-1255]"
      },
      {
        "code": "2256",
        "codeName": "windows-1256",
        "description": "Microsoft  [http://www.iana.org/assignments/charset-reg/windows-1256]"
      },
      {
        "code": "2257",
        "codeName": "windows-1257",
        "description": "Microsoft  [http://www.iana.org/assignments/charset-reg/windows-1257] "
      },
      {
        "code": "2258",
        "codeName": "windows-1258",
        "description": "Microsoft  [http://www.iana.org/assignments/charset-reg/windows-1258]"
      },
      {
        "code": "2024",
        "codeName": "Windows-31J",
        "description": "Windows Japanese.  "
      },
      {
        "code": "2109",
        "codeName": "windows-874",
        "description": "See [http://www.iana.org/assignments/charset-reg/windows-874]"
      }
    ]
  },
  "iso_classification": {
    "codelistType": "staticList",
    "codelistName": "iso_classification",
    "source": "ISO",
    "sourceName": "MD_ClassificationCode",
    "extensible": true,
    "description": "name of the handling restrictions on the dataset",
    "codelist": [
      {
        "code": "001",
        "codeName": "unclassified",
        "description": "available for general disclosure"
      },
      {
        "code": "002",
        "codeName": "restricted",
        "description": "not for general disclosure"
      },
      {
        "code": "003",
        "codeName": "confidential",
        "description": "available for someone who can be entrusted with information"
      },
      {
        "code": "004",
        "codeName": "secret",
        "description": "kept or meant to be kept private, unknown, or hidden from all but a select group of people"
      },
      {
        "code": "005",
        "codeName": "topSecret",
        "description": "of the highest secrecy"
      },
      {
        "code": "006",
        "codeName": "sensitiveButUnclassified",
        "description": "although unclassified, requires strict controls over its distribution"
      },
      {
        "code": "007",
        "codeName": "forOfficialUseOnly",
        "description": "unclassified information that is to be used only for official purposes determined by the designating body"
      },
      {
        "code": "008",
        "codeName": "protected",
        "description": "compromise of the information could cause damage"
      },
      {
        "code": "009",
        "codeName": "limitedDistribution",
        "description": "dissemination limited by designating body"
      }
    ]
  },
  "iso_contextCode": {
    "codelistType": "staticList",
    "codelistName": "iso_contextCode",
    "source": "ISO",
    "sourceName": "MI_ContextCode",
    "extensible": true,
    "description": "designation of criterion for defining the context of the scanning process event",
    "codelist": [
      {
        "code": "001",
        "codeName": "acquisition",
        "description": "event related to a specific collection"
      },
      {
        "code": "002",
        "codeName": "pass",
        "description": "event related to a sequence of collections"
      },
      {
        "code": "003",
        "codeName": "wayPoint",
        "description": "event related to a navigational manoeuvre"
      }
    ]
  },
  "iso_countries": {
    "codelistType": "staticList",
    "codelistName": "iso_countries",
    "source": "ISO",
    "sourceName": "CountryCode",
    "extensible": true,
    "description": "three letter country codes from ISO 3166-1 alpha-3 code list",
    "codelist": [
      {
        "code": "004",
        "codeName": "AFG",
        "description": "Afghanistan"
      },
      {
        "code": "248",
        "codeName": "ALA",
        "description": "Åland Islands"
      },
      {
        "code": "008",
        "codeName": "ALB",
        "description": "Albania"
      },
      {
        "code": "012",
        "codeName": "DZA",
        "description": "Algeria"
      },
      {
        "code": "016",
        "codeName": "ASM",
        "description": "American Samoa"
      },
      {
        "code": "020",
        "codeName": "AND",
        "description": "Andorra"
      },
      {
        "code": "024",
        "codeName": "AGO",
        "description": "Angola"
      },
      {
        "code": "660",
        "codeName": "AIA",
        "description": "Anguilla"
      },
      {
        "code": "010",
        "codeName": "ATA",
        "description": "Antarctica"
      },
      {
        "code": "028",
        "codeName": "ATG",
        "description": "Antigua and Barbuda"
      },
      {
        "code": "032",
        "codeName": "ARG",
        "description": "Argentina"
      },
      {
        "code": "051",
        "codeName": "ARM",
        "description": "Armenia"
      },
      {
        "code": "533",
        "codeName": "ABW",
        "description": "Aruba"
      },
      {
        "code": "036",
        "codeName": "AUS",
        "description": "Australia"
      },
      {
        "code": "040",
        "codeName": "AUT",
        "description": "Austria"
      },
      {
        "code": "031",
        "codeName": "AZE",
        "description": "Azerbaijan"
      },
      {
        "code": "044",
        "codeName": "BHS",
        "description": "Bahamas"
      },
      {
        "code": "048",
        "codeName": "BHR",
        "description": "Bahrain"
      },
      {
        "code": "050",
        "codeName": "BGD",
        "description": "Bangladesh"
      },
      {
        "code": "052",
        "codeName": "BRB",
        "description": "Barbados"
      },
      {
        "code": "112",
        "codeName": "BLR",
        "description": "Belarus"
      },
      {
        "code": "056",
        "codeName": "BEL",
        "description": "Belgium"
      },
      {
        "code": "084",
        "codeName": "BLZ",
        "description": "Belize"
      },
      {
        "code": "204",
        "codeName": "BEN",
        "description": "Benin"
      },
      {
        "code": "060",
        "codeName": "BMU",
        "description": "Bermuda"
      },
      {
        "code": "064",
        "codeName": "BTN",
        "description": "Bhutan"
      },
      {
        "code": "068",
        "codeName": "BOL",
        "description": "Bolivia (Plurinational State of)"
      },
      {
        "code": "535",
        "codeName": "BES",
        "description": "Bonaire, Sint Eustatius and Saba"
      },
      {
        "code": "070",
        "codeName": "BIH",
        "description": "Bosnia and Herzegovina"
      },
      {
        "code": "072",
        "codeName": "BWA",
        "description": "Botswana"
      },
      {
        "code": "074",
        "codeName": "BVT",
        "description": "Bouvet Island"
      },
      {
        "code": "076",
        "codeName": "BRA",
        "description": "Brazil"
      },
      {
        "code": "086",
        "codeName": "IOT",
        "description": "British Indian Ocean Territory"
      },
      {
        "code": "096",
        "codeName": "BRN",
        "description": "Brunei Darussalam"
      },
      {
        "code": "100",
        "codeName": "BGR",
        "description": "Bulgaria"
      },
      {
        "code": "854",
        "codeName": "BFA",
        "description": "Burkina Faso"
      },
      {
        "code": "108",
        "codeName": "BDI",
        "description": "Burundi"
      },
      {
        "code": "116",
        "codeName": "KHM",
        "description": "Cambodia"
      },
      {
        "code": "120",
        "codeName": "CMR",
        "description": "Cameroon"
      },
      {
        "code": "124",
        "codeName": "CAN",
        "description": "Canada"
      },
      {
        "code": "132",
        "codeName": "CPV",
        "description": "Cabo Verde"
      },
      {
        "code": "136",
        "codeName": "CYM",
        "description": "Cayman Islands"
      },
      {
        "code": "140",
        "codeName": "CAF",
        "description": "Central African Republic"
      },
      {
        "code": "148",
        "codeName": "TCD",
        "description": "Chad"
      },
      {
        "code": "152",
        "codeName": "CHL",
        "description": "Chile"
      },
      {
        "code": "156",
        "codeName": "CHN",
        "description": "China"
      },
      {
        "code": "162",
        "codeName": "CXR",
        "description": "Christmas Island"
      },
      {
        "code": "166",
        "codeName": "CCK",
        "description": "Cocos (Keeling) Islands"
      },
      {
        "code": "170",
        "codeName": "COL",
        "description": "Colombia"
      },
      {
        "code": "174",
        "codeName": "COM",
        "description": "Comoros"
      },
      {
        "code": "178",
        "codeName": "COG",
        "description": "Congo"
      },
      {
        "code": "180",
        "codeName": "COD",
        "description": "Congo (Democratic Republic of the)"
      },
      {
        "code": "184",
        "codeName": "COK",
        "description": "Cook Islands"
      },
      {
        "code": "188",
        "codeName": "CRI",
        "description": "Costa Rica"
      },
      {
        "code": "384",
        "codeName": "CIV",
        "description": "Côte d'Ivoire"
      },
      {
        "code": "191",
        "codeName": "HRV",
        "description": "Croatia"
      },
      {
        "code": "192",
        "codeName": "CUB",
        "description": "Cuba"
      },
      {
        "code": "531",
        "codeName": "CUW",
        "description": "Curaçao"
      },
      {
        "code": "196",
        "codeName": "CYP",
        "description": "Cyprus"
      },
      {
        "code": "203",
        "codeName": "CZE",
        "description": "Czech Republic"
      },
      {
        "code": "208",
        "codeName": "DNK",
        "description": "Denmark"
      },
      {
        "code": "262",
        "codeName": "DJI",
        "description": "Djibouti"
      },
      {
        "code": "212",
        "codeName": "DMA",
        "description": "Dominica"
      },
      {
        "code": "214",
        "codeName": "DOM",
        "description": "Dominican Republic"
      },
      {
        "code": "218",
        "codeName": "ECU",
        "description": "Ecuador"
      },
      {
        "code": "818",
        "codeName": "EGY",
        "description": "Egypt"
      },
      {
        "code": "222",
        "codeName": "SLV",
        "description": "El Salvador"
      },
      {
        "code": "226",
        "codeName": "GNQ",
        "description": "Equatorial Guinea"
      },
      {
        "code": "232",
        "codeName": "ERI",
        "description": "Eritrea"
      },
      {
        "code": "233",
        "codeName": "EST",
        "description": "Estonia"
      },
      {
        "code": "231",
        "codeName": "ETH",
        "description": "Ethiopia"
      },
      {
        "code": "238",
        "codeName": "FLK",
        "description": "Falkland Islands (Malvinas)"
      },
      {
        "code": "234",
        "codeName": "FRO",
        "description": "Faroe Islands"
      },
      {
        "code": "242",
        "codeName": "FJI",
        "description": "Fiji"
      },
      {
        "code": "246",
        "codeName": "FIN",
        "description": "Finland"
      },
      {
        "code": "250",
        "codeName": "FRA",
        "description": "France"
      },
      {
        "code": "254",
        "codeName": "GUF",
        "description": "French Guiana"
      },
      {
        "code": "258",
        "codeName": "PYF",
        "description": "French Polynesia"
      },
      {
        "code": "260",
        "codeName": "ATF",
        "description": "French Southern Territories"
      },
      {
        "code": "266",
        "codeName": "GAB",
        "description": "Gabon"
      },
      {
        "code": "270",
        "codeName": "GMB",
        "description": "Gambia"
      },
      {
        "code": "268",
        "codeName": "GEO",
        "description": "Georgia"
      },
      {
        "code": "276",
        "codeName": "DEU",
        "description": "Germany"
      },
      {
        "code": "288",
        "codeName": "GHA",
        "description": "Ghana"
      },
      {
        "code": "292",
        "codeName": "GIB",
        "description": "Gibraltar"
      },
      {
        "code": "300",
        "codeName": "GRC",
        "description": "Greece"
      },
      {
        "code": "304",
        "codeName": "GRL",
        "description": "Greenland"
      },
      {
        "code": "308",
        "codeName": "GRD",
        "description": "Grenada"
      },
      {
        "code": "312",
        "codeName": "GLP",
        "description": "Guadeloupe"
      },
      {
        "code": "316",
        "codeName": "GUM",
        "description": "Guam"
      },
      {
        "code": "320",
        "codeName": "GTM",
        "description": "Guatemala"
      },
      {
        "code": "831",
        "codeName": "GGY",
        "description": "Guernsey"
      },
      {
        "code": "324",
        "codeName": "GIN",
        "description": "Guinea"
      },
      {
        "code": "624",
        "codeName": "GNB",
        "description": "Guinea-Bissau"
      },
      {
        "code": "328",
        "codeName": "GUY",
        "description": "Guyana"
      },
      {
        "code": "332",
        "codeName": "HTI",
        "description": "Haiti"
      },
      {
        "code": "334",
        "codeName": "HMD",
        "description": "Heard Island and McDonald Islands"
      },
      {
        "code": "336",
        "codeName": "VAT",
        "description": "Holy See"
      },
      {
        "code": "340",
        "codeName": "HND",
        "description": "Honduras"
      },
      {
        "code": "344",
        "codeName": "HKG",
        "description": "Hong Kong"
      },
      {
        "code": "348",
        "codeName": "HUN",
        "description": "Hungary"
      },
      {
        "code": "352",
        "codeName": "ISL",
        "description": "Iceland"
      },
      {
        "code": "356",
        "codeName": "IND",
        "description": "India"
      },
      {
        "code": "360",
        "codeName": "IDN",
        "description": "Indonesia"
      },
      {
        "code": "364",
        "codeName": "IRN",
        "description": "Iran (Islamic Republic of)"
      },
      {
        "code": "368",
        "codeName": "IRQ",
        "description": "Iraq"
      },
      {
        "code": "372",
        "codeName": "IRL",
        "description": "Ireland"
      },
      {
        "code": "833",
        "codeName": "IMN",
        "description": "Isle of Man"
      },
      {
        "code": "376",
        "codeName": "ISR",
        "description": "Israel"
      },
      {
        "code": "380",
        "codeName": "ITA",
        "description": "Italy"
      },
      {
        "code": "388",
        "codeName": "JAM",
        "description": "Jamaica"
      },
      {
        "code": "392",
        "codeName": "JPN",
        "description": "Japan"
      },
      {
        "code": "832",
        "codeName": "JEY",
        "description": "Jersey"
      },
      {
        "code": "400",
        "codeName": "JOR",
        "description": "Jordan"
      },
      {
        "code": "398",
        "codeName": "KAZ",
        "description": "Kazakhstan"
      },
      {
        "code": "404",
        "codeName": "KEN",
        "description": "Kenya"
      },
      {
        "code": "296",
        "codeName": "KIR",
        "description": "Kiribati"
      },
      {
        "code": "408",
        "codeName": "PRK",
        "description": "Korea (Democratic People's Republic of)"
      },
      {
        "code": "410",
        "codeName": "KOR",
        "description": "Korea (Republic of)"
      },
      {
        "code": "414",
        "codeName": "KWT",
        "description": "Kuwait"
      },
      {
        "code": "417",
        "codeName": "KGZ",
        "description": "Kyrgyzstan"
      },
      {
        "code": "418",
        "codeName": "LAO",
        "description": "Lao People's Democratic Republic"
      },
      {
        "code": "428",
        "codeName": "LVA",
        "description": "Latvia"
      },
      {
        "code": "422",
        "codeName": "LBN",
        "description": "Lebanon"
      },
      {
        "code": "426",
        "codeName": "LSO",
        "description": "Lesotho"
      },
      {
        "code": "430",
        "codeName": "LBR",
        "description": "Liberia"
      },
      {
        "code": "434",
        "codeName": "LBY",
        "description": "Libya"
      },
      {
        "code": "438",
        "codeName": "LIE",
        "description": "Liechtenstein"
      },
      {
        "code": "440",
        "codeName": "LTU",
        "description": "Lithuania"
      },
      {
        "code": "442",
        "codeName": "LUX",
        "description": "Luxembourg"
      },
      {
        "code": "446",
        "codeName": "MAC",
        "description": "Macao"
      },
      {
        "code": "807",
        "codeName": "MKD",
        "description": "Macedonia (the former Yugoslav Republic of)"
      },
      {
        "code": "450",
        "codeName": "MDG",
        "description": "Madagascar"
      },
      {
        "code": "454",
        "codeName": "MWI",
        "description": "Malawi"
      },
      {
        "code": "458",
        "codeName": "MYS",
        "description": "Malaysia"
      },
      {
        "code": "462",
        "codeName": "MDV",
        "description": "Maldives"
      },
      {
        "code": "466",
        "codeName": "MLI",
        "description": "Mali"
      },
      {
        "code": "470",
        "codeName": "MLT",
        "description": "Malta"
      },
      {
        "code": "584",
        "codeName": "MHL",
        "description": "Marshall Islands"
      },
      {
        "code": "474",
        "codeName": "MTQ",
        "description": "Martinique"
      },
      {
        "code": "478",
        "codeName": "MRT",
        "description": "Mauritania"
      },
      {
        "code": "480",
        "codeName": "MUS",
        "description": "Mauritius"
      },
      {
        "code": "175",
        "codeName": "MYT",
        "description": "Mayotte"
      },
      {
        "code": "484",
        "codeName": "MEX",
        "description": "Mexico"
      },
      {
        "code": "583",
        "codeName": "FSM",
        "description": "Micronesia (Federated States of)"
      },
      {
        "code": "498",
        "codeName": "MDA",
        "description": "Moldova (Republic of)"
      },
      {
        "code": "492",
        "codeName": "MCO",
        "description": "Monaco"
      },
      {
        "code": "496",
        "codeName": "MNG",
        "description": "Mongolia"
      },
      {
        "code": "499",
        "codeName": "MNE",
        "description": "Montenegro"
      },
      {
        "code": "500",
        "codeName": "MSR",
        "description": "Montserrat"
      },
      {
        "code": "504",
        "codeName": "MAR",
        "description": "Morocco"
      },
      {
        "code": "508",
        "codeName": "MOZ",
        "description": "Mozambique"
      },
      {
        "code": "104",
        "codeName": "MMR",
        "description": "Myanmar"
      },
      {
        "code": "516",
        "codeName": "NAM",
        "description": "Namibia"
      },
      {
        "code": "520",
        "codeName": "NRU",
        "description": "Nauru"
      },
      {
        "code": "524",
        "codeName": "NPL",
        "description": "Nepal"
      },
      {
        "code": "528",
        "codeName": "NLD",
        "description": "Netherlands"
      },
      {
        "code": "540",
        "codeName": "NCL",
        "description": "New Caledonia"
      },
      {
        "code": "554",
        "codeName": "NZL",
        "description": "New Zealand"
      },
      {
        "code": "558",
        "codeName": "NIC",
        "description": "Nicaragua"
      },
      {
        "code": "562",
        "codeName": "NER",
        "description": "Niger"
      },
      {
        "code": "566",
        "codeName": "NGA",
        "description": "Nigeria"
      },
      {
        "code": "570",
        "codeName": "NIU",
        "description": "Niue"
      },
      {
        "code": "574",
        "codeName": "NFK",
        "description": "Norfolk Island"
      },
      {
        "code": "580",
        "codeName": "MNP",
        "description": "Northern Mariana Islands"
      },
      {
        "code": "578",
        "codeName": "NOR",
        "description": "Norway"
      },
      {
        "code": "512",
        "codeName": "OMN",
        "description": "Oman"
      },
      {
        "code": "586",
        "codeName": "PAK",
        "description": "Pakistan"
      },
      {
        "code": "585",
        "codeName": "PLW",
        "description": "Palau"
      },
      {
        "code": "275",
        "codeName": "PSE",
        "description": "Palestine, State of"
      },
      {
        "code": "591",
        "codeName": "PAN",
        "description": "Panama"
      },
      {
        "code": "598",
        "codeName": "PNG",
        "description": "Papua New Guinea"
      },
      {
        "code": "600",
        "codeName": "PRY",
        "description": "Paraguay"
      },
      {
        "code": "604",
        "codeName": "PER",
        "description": "Peru"
      },
      {
        "code": "608",
        "codeName": "PHL",
        "description": "Philippines"
      },
      {
        "code": "612",
        "codeName": "PCN",
        "description": "Pitcairn"
      },
      {
        "code": "616",
        "codeName": "POL",
        "description": "Poland"
      },
      {
        "code": "620",
        "codeName": "PRT",
        "description": "Portugal"
      },
      {
        "code": "630",
        "codeName": "PRI",
        "description": "Puerto Rico"
      },
      {
        "code": "634",
        "codeName": "QAT",
        "description": "Qatar"
      },
      {
        "code": "638",
        "codeName": "REU",
        "description": "Réunion"
      },
      {
        "code": "642",
        "codeName": "ROU",
        "description": "Romania"
      },
      {
        "code": "643",
        "codeName": "RUS",
        "description": "Russian Federation"
      },
      {
        "code": "646",
        "codeName": "RWA",
        "description": "Rwanda"
      },
      {
        "code": "652",
        "codeName": "BLM",
        "description": "Saint Barthélemy"
      },
      {
        "code": "654",
        "codeName": "SHN",
        "description": "Saint Helena, Ascension and Tristan da Cunha"
      },
      {
        "code": "659",
        "codeName": "KNA",
        "description": "Saint Kitts and Nevis"
      },
      {
        "code": "662",
        "codeName": "LCA",
        "description": "Saint Lucia"
      },
      {
        "code": "663",
        "codeName": "MAF",
        "description": "Saint Martin (French part)"
      },
      {
        "code": "666",
        "codeName": "SPM",
        "description": "Saint Pierre and Miquelon"
      },
      {
        "code": "670",
        "codeName": "VCT",
        "description": "Saint Vincent and the Grenadines"
      },
      {
        "code": "882",
        "codeName": "WSM",
        "description": "Samoa"
      },
      {
        "code": "674",
        "codeName": "SMR",
        "description": "San Marino"
      },
      {
        "code": "678",
        "codeName": "STP",
        "description": "Sao Tome and Principe"
      },
      {
        "code": "682",
        "codeName": "SAU",
        "description": "Saudi Arabia"
      },
      {
        "code": "686",
        "codeName": "SEN",
        "description": "Senegal"
      },
      {
        "code": "688",
        "codeName": "SRB",
        "description": "Serbia"
      },
      {
        "code": "690",
        "codeName": "SYC",
        "description": "Seychelles"
      },
      {
        "code": "694",
        "codeName": "SLE",
        "description": "Sierra Leone"
      },
      {
        "code": "702",
        "codeName": "SGP",
        "description": "Singapore"
      },
      {
        "code": "534",
        "codeName": "SXM",
        "description": "Sint Maarten (Dutch part)"
      },
      {
        "code": "703",
        "codeName": "SVK",
        "description": "Slovakia"
      },
      {
        "code": "705",
        "codeName": "SVN",
        "description": "Slovenia"
      },
      {
        "code": "090",
        "codeName": "SLB",
        "description": "Solomon Islands"
      },
      {
        "code": "706",
        "codeName": "SOM",
        "description": "Somalia"
      },
      {
        "code": "710",
        "codeName": "ZAF",
        "description": "South Africa"
      },
      {
        "code": "239",
        "codeName": "SGS",
        "description": "South Georgia and the South Sandwich Islands"
      },
      {
        "code": "728",
        "codeName": "SSD",
        "description": "South Sudan"
      },
      {
        "code": "724",
        "codeName": "ESP",
        "description": "Spain"
      },
      {
        "code": "144",
        "codeName": "LKA",
        "description": "Sri Lanka"
      },
      {
        "code": "729",
        "codeName": "SDN",
        "description": "Sudan"
      },
      {
        "code": "740",
        "codeName": "SUR",
        "description": "Suriname"
      },
      {
        "code": "744",
        "codeName": "SJM",
        "description": "Svalbard and Jan Mayen"
      },
      {
        "code": "748",
        "codeName": "SWZ",
        "description": "Swaziland"
      },
      {
        "code": "752",
        "codeName": "SWE",
        "description": "Sweden"
      },
      {
        "code": "756",
        "codeName": "CHE",
        "description": "Switzerland"
      },
      {
        "code": "760",
        "codeName": "SYR",
        "description": "Syrian Arab Republic"
      },
      {
        "code": "158",
        "codeName": "TWN",
        "description": "Taiwan, Province of China"
      },
      {
        "code": "762",
        "codeName": "TJK",
        "description": "Tajikistan"
      },
      {
        "code": "834",
        "codeName": "TZA",
        "description": "Tanzania, United Republic of"
      },
      {
        "code": "764",
        "codeName": "THA",
        "description": "Thailand"
      },
      {
        "code": "626",
        "codeName": "TLS",
        "description": "Timor-Leste"
      },
      {
        "code": "768",
        "codeName": "TGO",
        "description": "Togo"
      },
      {
        "code": "772",
        "codeName": "TKL",
        "description": "Tokelau"
      },
      {
        "code": "776",
        "codeName": "TON",
        "description": "Tonga"
      },
      {
        "code": "780",
        "codeName": "TTO",
        "description": "Trinidad and Tobago"
      },
      {
        "code": "788",
        "codeName": "TUN",
        "description": "Tunisia"
      },
      {
        "code": "792",
        "codeName": "TUR",
        "description": "Turkey"
      },
      {
        "code": "795",
        "codeName": "TKM",
        "description": "Turkmenistan"
      },
      {
        "code": "796",
        "codeName": "TCA",
        "description": "Turks and Caicos Islands"
      },
      {
        "code": "798",
        "codeName": "TUV",
        "description": "Tuvalu"
      },
      {
        "code": "800",
        "codeName": "UGA",
        "description": "Uganda"
      },
      {
        "code": "804",
        "codeName": "UKR",
        "description": "Ukraine"
      },
      {
        "code": "784",
        "codeName": "ARE",
        "description": "United Arab Emirates"
      },
      {
        "code": "826",
        "codeName": "GBR",
        "description": "United Kingdom of Great Britain and Northern Ireland"
      },
      {
        "code": "840",
        "codeName": "USA",
        "description": "United States of America"
      },
      {
        "code": "581",
        "codeName": "UMI",
        "description": "United States Minor Outlying Islands"
      },
      {
        "code": "858",
        "codeName": "URY",
        "description": "Uruguay"
      },
      {
        "code": "860",
        "codeName": "UZB",
        "description": "Uzbekistan"
      },
      {
        "code": "548",
        "codeName": "VUT",
        "description": "Vanuatu"
      },
      {
        "code": "862",
        "codeName": "VEN",
        "description": "Venezuela (Bolivarian Republic of)"
      },
      {
        "code": "704",
        "codeName": "VNM",
        "description": "Viet Nam"
      },
      {
        "code": "092",
        "codeName": "VGB",
        "description": "Virgin Islands (British)"
      },
      {
        "code": "850",
        "codeName": "VIR",
        "description": "Virgin Islands (U.S.)"
      },
      {
        "code": "876",
        "codeName": "WLF",
        "description": "Wallis and Futuna"
      },
      {
        "code": "732",
        "codeName": "ESH",
        "description": "Western Sahara"
      },
      {
        "code": "887",
        "codeName": "YEM",
        "description": "Yemen"
      },
      {
        "code": "894",
        "codeName": "ZMB",
        "description": "Zambia"
      },
      {
        "code": "716",
        "codeName": "ZWE",
        "description": "Zimbabwe"
      }
    ]
  },
  "iso_coverageContentType": {
    "codelistType": "staticList",
    "codelistName": "iso_coverageContentType",
    "source": "ISO",
    "sourceName": "MD_CoverageContentTypeCode",
    "extensible": true,
    "description": "specific type of information represented in the cell",
    "codelist": [
      {
        "code": "001",
        "codeName": "image",
        "description": "meaningful numerical representation of a physical parameter that is not the actual value of the physical parameter"
      },
      {
        "code": "002",
        "codeName": "thematicClassification",
        "description": "code value with no quantitative meaning, used to represent a physical quality"
      },
      {
        "code": "003",
        "codeName": "physicalMeasurement",
        "description": "value in physical units of the quantity being measured"
      },
      {
        "code": "004",
        "codeName": "auxillaryInformation",
        "description": "data, usually a physical measurement, used to support the calculation of the primary physicalMeasurement coverages in the dataset"
      },
      {
        "code": "005",
        "codeName": "qualityInformation",
        "description": "data used to characterize the quality of the physicalMeasurement coverages in the dataset"
      },
      {
        "code": "006",
        "codeName": "referenceInformation",
        "description": "reference information used to support the calculation or use of the physicalMeasurement coverages in the dataset"
      },
      {
        "code": "007",
        "codeName": "modelResult",
        "description": "resources with values that are calculated using a model rather than being observed or calculated from observations"
      },
      {
        "code": "008",
        "codeName": "coordinate",
        "description": "data used to provide coordinate axis values"
      }
    ]
  },
  "iso_currency": {
    "codelistType": "currency",
    "codelistName": "iso_currency",
    "source": "SNV",
    "sourceName": "Swiss Association for Standards",
    "extensible": false,
    "description": "currency and funds codelist",
    "codelist": [
      {
        "code": "971",
        "codeName": "AFN",
        "description": "AFGHANISTAN-Afghani"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "ÅLAND ISLANDS-Euro"
      },
      {
        "code": "008",
        "codeName": "ALL",
        "description": "ALBANIA-Lek"
      },
      {
        "code": "012",
        "codeName": "DZD",
        "description": "ALGERIA-Algerian Dinar"
      },
      {
        "code": "840",
        "codeName": "USD",
        "description": "AMERICAN SAMOA-US Dollar"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "ANDORRA-Euro"
      },
      {
        "code": "973",
        "codeName": "AOA",
        "description": "ANGOLA-Kwanza"
      },
      {
        "code": "951",
        "codeName": "XCD",
        "description": "ANGUILLA-East Caribbean Dollar"
      },
      {
        "code": "0",
        "codeName": "_",
        "description": "ANTARCTICA-No universal currency"
      },
      {
        "code": "951",
        "codeName": "XCD",
        "description": "ANTIGUA AND BARBUDA-East Caribbean Dollar"
      },
      {
        "code": "032",
        "codeName": "ARS",
        "description": "ARGENTINA-Argentine Peso"
      },
      {
        "code": "051",
        "codeName": "AMD",
        "description": "ARMENIA-Armenian Dram"
      },
      {
        "code": "533",
        "codeName": "AWG",
        "description": "ARUBA-Aruban Florin"
      },
      {
        "code": "036",
        "codeName": "AUD",
        "description": "AUSTRALIA-Australian Dollar"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "AUSTRIA-Euro"
      },
      {
        "code": "944",
        "codeName": "AZN",
        "description": "AZERBAIJAN-Azerbaijanian Manat"
      },
      {
        "code": "044",
        "codeName": "BSD",
        "description": "BAHAMAS (THE)-Bahamian Dollar"
      },
      {
        "code": "048",
        "codeName": "BHD",
        "description": "BAHRAIN-Bahraini Dinar"
      },
      {
        "code": "050",
        "codeName": "BDT",
        "description": "BANGLADESH-Taka"
      },
      {
        "code": "052",
        "codeName": "BBD",
        "description": "BARBADOS-Barbados Dollar"
      },
      {
        "code": "933",
        "codeName": "BYN",
        "description": "BELARUS-Belarusian Ruble"
      },
      {
        "code": "974",
        "codeName": "BYR",
        "description": "BELARUS-Belarusian Ruble"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "BELGIUM-Euro"
      },
      {
        "code": "084",
        "codeName": "BZD",
        "description": "BELIZE-Belize Dollar"
      },
      {
        "code": "952",
        "codeName": "XOF",
        "description": "BENIN-CFA Franc BCEAO"
      },
      {
        "code": "060",
        "codeName": "BMD",
        "description": "BERMUDA-Bermudian Dollar"
      },
      {
        "code": "356",
        "codeName": "INR",
        "description": "BHUTAN-Indian Rupee"
      },
      {
        "code": "064",
        "codeName": "BTN",
        "description": "BHUTAN-Ngultrum"
      },
      {
        "code": "068",
        "codeName": "BOB",
        "description": "BOLIVIA (PLURINATIONAL STATE OF)-Boliviano"
      },
      {
        "code": "984",
        "codeName": "BOV",
        "description": "BOLIVIA (PLURINATIONAL STATE OF)-Mvdol"
      },
      {
        "code": "840",
        "codeName": "USD",
        "description": "BONAIRE, SINT EUSTATIUS AND SABA-US Dollar"
      },
      {
        "code": "977",
        "codeName": "BAM",
        "description": "BOSNIA AND HERZEGOVINA-Convertible Mark"
      },
      {
        "code": "072",
        "codeName": "BWP",
        "description": "BOTSWANA-Pula"
      },
      {
        "code": "578",
        "codeName": "NOK",
        "description": "BOUVET ISLAND-Norwegian Krone"
      },
      {
        "code": "986",
        "codeName": "BRL",
        "description": "BRAZIL-Brazilian Real"
      },
      {
        "code": "840",
        "codeName": "USD",
        "description": "BRITISH INDIAN OCEAN TERRITORY (THE)-US Dollar"
      },
      {
        "code": "096",
        "codeName": "BND",
        "description": "BRUNEI DARUSSALAM-Brunei Dollar"
      },
      {
        "code": "975",
        "codeName": "BGN",
        "description": "BULGARIA-Bulgarian Lev"
      },
      {
        "code": "952",
        "codeName": "XOF",
        "description": "BURKINA FASO-CFA Franc BCEAO"
      },
      {
        "code": "108",
        "codeName": "BIF",
        "description": "BURUNDI-Burundi Franc"
      },
      {
        "code": "132",
        "codeName": "CVE",
        "description": "CABO VERDE-Cabo Verde Escudo"
      },
      {
        "code": "116",
        "codeName": "KHR",
        "description": "CAMBODIA-Riel"
      },
      {
        "code": "950",
        "codeName": "XAF",
        "description": "CAMEROON-CFA Franc BEAC"
      },
      {
        "code": "124",
        "codeName": "CAD",
        "description": "CANADA-Canadian Dollar"
      },
      {
        "code": "136",
        "codeName": "KYD",
        "description": "CAYMAN ISLANDS (THE)-Cayman Islands Dollar"
      },
      {
        "code": "950",
        "codeName": "XAF",
        "description": "CENTRAL AFRICAN REPUBLIC (THE)-CFA Franc BEAC"
      },
      {
        "code": "950",
        "codeName": "XAF",
        "description": "CHAD-CFA Franc BEAC"
      },
      {
        "code": "152",
        "codeName": "CLP",
        "description": "CHILE-Chilean Peso"
      },
      {
        "code": "990",
        "codeName": "CLF",
        "description": "CHILE-Unidad de Fomento"
      },
      {
        "code": "156",
        "codeName": "CNY",
        "description": "CHINA-Yuan Renminbi"
      },
      {
        "code": "036",
        "codeName": "AUD",
        "description": "CHRISTMAS ISLAND-Australian Dollar"
      },
      {
        "code": "036",
        "codeName": "AUD",
        "description": "COCOS (KEELING) ISLANDS (THE)-Australian Dollar"
      },
      {
        "code": "170",
        "codeName": "COP",
        "description": "COLOMBIA-Colombian Peso"
      },
      {
        "code": "970",
        "codeName": "COU",
        "description": "COLOMBIA-Unidad de Valor Real"
      },
      {
        "code": "174",
        "codeName": "KMF",
        "description": "COMOROS (THE)-Comoro Franc"
      },
      {
        "code": "976",
        "codeName": "CDF",
        "description": "CONGO (THE DEMOCRATIC REPUBLIC OF THE)-Congolese Franc"
      },
      {
        "code": "950",
        "codeName": "XAF",
        "description": "CONGO (THE)-CFA Franc BEAC"
      },
      {
        "code": "554",
        "codeName": "NZD",
        "description": "COOK ISLANDS (THE)-New Zealand Dollar"
      },
      {
        "code": "188",
        "codeName": "CRC",
        "description": "COSTA RICA-Costa Rican Colon"
      },
      {
        "code": "952",
        "codeName": "XOF",
        "description": "CÔTE D'IVOIRE-CFA Franc BCEAO"
      },
      {
        "code": "191",
        "codeName": "HRK",
        "description": "CROATIA-Kuna"
      },
      {
        "code": "192",
        "codeName": "CUP",
        "description": "CUBA-Cuban Peso"
      },
      {
        "code": "931",
        "codeName": "CUC",
        "description": "CUBA-Peso Convertible"
      },
      {
        "code": "532",
        "codeName": "ANG",
        "description": "CURAÇAO-Netherlands Antillean Guilder"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "CYPRUS-Euro"
      },
      {
        "code": "203",
        "codeName": "CZK",
        "description": "CZECH REPUBLIC (THE)-Czech Koruna"
      },
      {
        "code": "208",
        "codeName": "DKK",
        "description": "DENMARK-Danish Krone"
      },
      {
        "code": "262",
        "codeName": "DJF",
        "description": "DJIBOUTI-Djibouti Franc"
      },
      {
        "code": "951",
        "codeName": "XCD",
        "description": "DOMINICA-East Caribbean Dollar"
      },
      {
        "code": "214",
        "codeName": "DOP",
        "description": "DOMINICAN REPUBLIC (THE)-Dominican Peso"
      },
      {
        "code": "840",
        "codeName": "USD",
        "description": "ECUADOR-US Dollar"
      },
      {
        "code": "818",
        "codeName": "EGP",
        "description": "EGYPT-Egyptian Pound"
      },
      {
        "code": "222",
        "codeName": "SVC",
        "description": "EL SALVADOR-El Salvador Colon"
      },
      {
        "code": "840",
        "codeName": "USD",
        "description": "EL SALVADOR-US Dollar"
      },
      {
        "code": "950",
        "codeName": "XAF",
        "description": "EQUATORIAL GUINEA-CFA Franc BEAC"
      },
      {
        "code": "232",
        "codeName": "ERN",
        "description": "ERITREA-Nakfa"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "ESTONIA-Euro"
      },
      {
        "code": "230",
        "codeName": "ETB",
        "description": "ETHIOPIA-Ethiopian Birr"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "EUROPEAN UNION-Euro"
      },
      {
        "code": "238",
        "codeName": "FKP",
        "description": "FALKLAND ISLANDS (THE) [MALVINAS]-Falkland Islands Pound"
      },
      {
        "code": "208",
        "codeName": "DKK",
        "description": "FAROE ISLANDS (THE)-Danish Krone"
      },
      {
        "code": "242",
        "codeName": "FJD",
        "description": "FIJI-Fiji Dollar"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "FINLAND-Euro"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "FRANCE-Euro"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "FRENCH GUIANA-Euro"
      },
      {
        "code": "953",
        "codeName": "XPF",
        "description": "FRENCH POLYNESIA-CFP Franc"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "FRENCH SOUTHERN TERRITORIES (THE)-Euro"
      },
      {
        "code": "950",
        "codeName": "XAF",
        "description": "GABON-CFA Franc BEAC"
      },
      {
        "code": "270",
        "codeName": "GMD",
        "description": "GAMBIA (THE)-Dalasi"
      },
      {
        "code": "981",
        "codeName": "GEL",
        "description": "GEORGIA-Lari"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "GERMANY-Euro"
      },
      {
        "code": "936",
        "codeName": "GHS",
        "description": "GHANA-Ghana Cedi"
      },
      {
        "code": "292",
        "codeName": "GIP",
        "description": "GIBRALTAR-Gibraltar Pound"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "GREECE-Euro"
      },
      {
        "code": "208",
        "codeName": "DKK",
        "description": "GREENLAND-Danish Krone"
      },
      {
        "code": "951",
        "codeName": "XCD",
        "description": "GRENADA-East Caribbean Dollar"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "GUADELOUPE-Euro"
      },
      {
        "code": "840",
        "codeName": "USD",
        "description": "GUAM-US Dollar"
      },
      {
        "code": "320",
        "codeName": "GTQ",
        "description": "GUATEMALA-Quetzal"
      },
      {
        "code": "826",
        "codeName": "GBP",
        "description": "GUERNSEY-Pound Sterling"
      },
      {
        "code": "324",
        "codeName": "GNF",
        "description": "GUINEA-Guinea Franc"
      },
      {
        "code": "952",
        "codeName": "XOF",
        "description": "GUINEA-BISSAU-CFA Franc BCEAO"
      },
      {
        "code": "328",
        "codeName": "GYD",
        "description": "GUYANA-Guyana Dollar"
      },
      {
        "code": "332",
        "codeName": "HTG",
        "description": "HAITI-Gourde"
      },
      {
        "code": "840",
        "codeName": "USD",
        "description": "HAITI-US Dollar"
      },
      {
        "code": "036",
        "codeName": "AUD",
        "description": "HEARD ISLAND AND McDONALD ISLANDS-Australian Dollar"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "HOLY SEE (THE)-Euro"
      },
      {
        "code": "340",
        "codeName": "HNL",
        "description": "HONDURAS-Lempira"
      },
      {
        "code": "344",
        "codeName": "HKD",
        "description": "HONG KONG-Hong Kong Dollar"
      },
      {
        "code": "348",
        "codeName": "HUF",
        "description": "HUNGARY-Forint"
      },
      {
        "code": "352",
        "codeName": "ISK",
        "description": "ICELAND-Iceland Krona"
      },
      {
        "code": "356",
        "codeName": "INR",
        "description": "INDIA-Indian Rupee"
      },
      {
        "code": "360",
        "codeName": "IDR",
        "description": "INDONESIA-Rupiah"
      },
      {
        "code": "960",
        "codeName": "XDR",
        "description": "INTERNATIONAL MONETARY FUND (IMF) -SDR (Special Drawing Right)"
      },
      {
        "code": "364",
        "codeName": "IRR",
        "description": "IRAN (ISLAMIC REPUBLIC OF)-Iranian Rial"
      },
      {
        "code": "368",
        "codeName": "IQD",
        "description": "IRAQ-Iraqi Dinar"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "IRELAND-Euro"
      },
      {
        "code": "826",
        "codeName": "GBP",
        "description": "ISLE OF MAN-Pound Sterling"
      },
      {
        "code": "376",
        "codeName": "ILS",
        "description": "ISRAEL-New Israeli Sheqel"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "ITALY-Euro"
      },
      {
        "code": "388",
        "codeName": "JMD",
        "description": "JAMAICA-Jamaican Dollar"
      },
      {
        "code": "392",
        "codeName": "JPY",
        "description": "JAPAN-Yen"
      },
      {
        "code": "826",
        "codeName": "GBP",
        "description": "JERSEY-Pound Sterling"
      },
      {
        "code": "400",
        "codeName": "JOD",
        "description": "JORDAN-Jordanian Dinar"
      },
      {
        "code": "398",
        "codeName": "KZT",
        "description": "KAZAKHSTAN-Tenge"
      },
      {
        "code": "404",
        "codeName": "KES",
        "description": "KENYA-Kenyan Shilling"
      },
      {
        "code": "036",
        "codeName": "AUD",
        "description": "KIRIBATI-Australian Dollar"
      },
      {
        "code": "408",
        "codeName": "KPW",
        "description": "KOREA (THE DEMOCRATIC PEOPLE’S REPUBLIC OF)-North Korean Won"
      },
      {
        "code": "410",
        "codeName": "KRW",
        "description": "KOREA (THE REPUBLIC OF)-Won"
      },
      {
        "code": "414",
        "codeName": "KWD",
        "description": "KUWAIT-Kuwaiti Dinar"
      },
      {
        "code": "417",
        "codeName": "KGS",
        "description": "KYRGYZSTAN-Som"
      },
      {
        "code": "418",
        "codeName": "LAK",
        "description": "LAO PEOPLE’S DEMOCRATIC REPUBLIC (THE)-Kip"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "LATVIA-Euro"
      },
      {
        "code": "422",
        "codeName": "LBP",
        "description": "LEBANON-Lebanese Pound"
      },
      {
        "code": "426",
        "codeName": "LSL",
        "description": "LESOTHO-Loti"
      },
      {
        "code": "710",
        "codeName": "ZAR",
        "description": "LESOTHO-Rand"
      },
      {
        "code": "430",
        "codeName": "LRD",
        "description": "LIBERIA-Liberian Dollar"
      },
      {
        "code": "434",
        "codeName": "LYD",
        "description": "LIBYA-Libyan Dinar"
      },
      {
        "code": "756",
        "codeName": "CHF",
        "description": "LIECHTENSTEIN-Swiss Franc"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "LITHUANIA-Euro"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "LUXEMBOURG-Euro"
      },
      {
        "code": "446",
        "codeName": "MOP",
        "description": "MACAO-Pataca"
      },
      {
        "code": "807",
        "codeName": "MKD",
        "description": "MACEDONIA (THE FORMER YUGOSLAV REPUBLIC OF)-Denar"
      },
      {
        "code": "969",
        "codeName": "MGA",
        "description": "MADAGASCAR-Malagasy Ariary"
      },
      {
        "code": "454",
        "codeName": "MWK",
        "description": "MALAWI-Malawi Kwacha"
      },
      {
        "code": "458",
        "codeName": "MYR",
        "description": "MALAYSIA-Malaysian Ringgit"
      },
      {
        "code": "462",
        "codeName": "MVR",
        "description": "MALDIVES-Rufiyaa"
      },
      {
        "code": "952",
        "codeName": "XOF",
        "description": "MALI-CFA Franc BCEAO"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "MALTA-Euro"
      },
      {
        "code": "840",
        "codeName": "USD",
        "description": "MARSHALL ISLANDS (THE)-US Dollar"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "MARTINIQUE-Euro"
      },
      {
        "code": "478",
        "codeName": "MRO",
        "description": "MAURITANIA-Ouguiya"
      },
      {
        "code": "480",
        "codeName": "MUR",
        "description": "MAURITIUS-Mauritius Rupee"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "MAYOTTE-Euro"
      },
      {
        "code": "965",
        "codeName": "XUA",
        "description": "MEMBER COUNTRIES OF THE AFRICAN DEVELOPMENT BANK GROUP-ADB Unit of Account"
      },
      {
        "code": "484",
        "codeName": "MXN",
        "description": "MEXICO-Mexican Peso"
      },
      {
        "code": "979",
        "codeName": "MXV",
        "description": "MEXICO-Mexican Unidad de Inversion (UDI)"
      },
      {
        "code": "840",
        "codeName": "USD",
        "description": "MICRONESIA (FEDERATED STATES OF)-US Dollar"
      },
      {
        "code": "498",
        "codeName": "MDL",
        "description": "MOLDOVA (THE REPUBLIC OF)-Moldovan Leu"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "MONACO-Euro"
      },
      {
        "code": "496",
        "codeName": "MNT",
        "description": "MONGOLIA-Tugrik"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "MONTENEGRO-Euro"
      },
      {
        "code": "951",
        "codeName": "XCD",
        "description": "MONTSERRAT-East Caribbean Dollar"
      },
      {
        "code": "504",
        "codeName": "MAD",
        "description": "MOROCCO-Moroccan Dirham"
      },
      {
        "code": "943",
        "codeName": "MZN",
        "description": "MOZAMBIQUE-Mozambique Metical"
      },
      {
        "code": "104",
        "codeName": "MMK",
        "description": "MYANMAR-Kyat"
      },
      {
        "code": "516",
        "codeName": "NAD",
        "description": "NAMIBIA-Namibia Dollar"
      },
      {
        "code": "710",
        "codeName": "ZAR",
        "description": "NAMIBIA-Rand"
      },
      {
        "code": "036",
        "codeName": "AUD",
        "description": "NAURU-Australian Dollar"
      },
      {
        "code": "524",
        "codeName": "NPR",
        "description": "NEPAL-Nepalese Rupee"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "NETHERLANDS (THE)-Euro"
      },
      {
        "code": "953",
        "codeName": "XPF",
        "description": "NEW CALEDONIA-CFP Franc"
      },
      {
        "code": "554",
        "codeName": "NZD",
        "description": "NEW ZEALAND-New Zealand Dollar"
      },
      {
        "code": "558",
        "codeName": "NIO",
        "description": "NICARAGUA-Cordoba Oro"
      },
      {
        "code": "952",
        "codeName": "XOF",
        "description": "NIGER (THE)-CFA Franc BCEAO"
      },
      {
        "code": "566",
        "codeName": "NGN",
        "description": "NIGERIA-Naira"
      },
      {
        "code": "554",
        "codeName": "NZD",
        "description": "NIUE-New Zealand Dollar"
      },
      {
        "code": "036",
        "codeName": "AUD",
        "description": "NORFOLK ISLAND-Australian Dollar"
      },
      {
        "code": "840",
        "codeName": "USD",
        "description": "NORTHERN MARIANA ISLANDS (THE)-US Dollar"
      },
      {
        "code": "578",
        "codeName": "NOK",
        "description": "NORWAY-Norwegian Krone"
      },
      {
        "code": "512",
        "codeName": "OMR",
        "description": "OMAN-Rial Omani"
      },
      {
        "code": "586",
        "codeName": "PKR",
        "description": "PAKISTAN-Pakistan Rupee"
      },
      {
        "code": "840",
        "codeName": "USD",
        "description": "PALAU-US Dollar"
      },
      {
        "code": "0",
        "codeName": "_",
        "description": "PALESTINE, STATE OF-No universal currency"
      },
      {
        "code": "590",
        "codeName": "PAB",
        "description": "PANAMA-Balboa"
      },
      {
        "code": "840",
        "codeName": "USD",
        "description": "PANAMA-US Dollar"
      },
      {
        "code": "598",
        "codeName": "PGK",
        "description": "PAPUA NEW GUINEA-Kina"
      },
      {
        "code": "600",
        "codeName": "PYG",
        "description": "PARAGUAY-Guarani"
      },
      {
        "code": "604",
        "codeName": "PEN",
        "description": "PERU-Sol"
      },
      {
        "code": "608",
        "codeName": "PHP",
        "description": "PHILIPPINES (THE)-Philippine Peso"
      },
      {
        "code": "554",
        "codeName": "NZD",
        "description": "PITCAIRN-New Zealand Dollar"
      },
      {
        "code": "985",
        "codeName": "PLN",
        "description": "POLAND-Zloty"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "PORTUGAL-Euro"
      },
      {
        "code": "840",
        "codeName": "USD",
        "description": "PUERTO RICO-US Dollar"
      },
      {
        "code": "634",
        "codeName": "QAR",
        "description": "QATAR-Qatari Rial"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "RÉUNION-Euro"
      },
      {
        "code": "946",
        "codeName": "RON",
        "description": "ROMANIA-Romanian Leu"
      },
      {
        "code": "643",
        "codeName": "RUB",
        "description": "RUSSIAN FEDERATION (THE)-Russian Ruble"
      },
      {
        "code": "646",
        "codeName": "RWF",
        "description": "RWANDA-Rwanda Franc"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "SAINT BARTHÉLEMY-Euro"
      },
      {
        "code": "654",
        "codeName": "SHP",
        "description": "SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA-Saint Helena Pound"
      },
      {
        "code": "951",
        "codeName": "XCD",
        "description": "SAINT KITTS AND NEVIS-East Caribbean Dollar"
      },
      {
        "code": "951",
        "codeName": "XCD",
        "description": "SAINT LUCIA-East Caribbean Dollar"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "SAINT MARTIN (FRENCH PART)-Euro"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "SAINT PIERRE AND MIQUELON-Euro"
      },
      {
        "code": "951",
        "codeName": "XCD",
        "description": "SAINT VINCENT AND THE GRENADINES-East Caribbean Dollar"
      },
      {
        "code": "882",
        "codeName": "WST",
        "description": "SAMOA-Tala"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "SAN MARINO-Euro"
      },
      {
        "code": "678",
        "codeName": "STD",
        "description": "SAO TOME AND PRINCIPE-Dobra"
      },
      {
        "code": "682",
        "codeName": "SAR",
        "description": "SAUDI ARABIA-Saudi Riyal"
      },
      {
        "code": "952",
        "codeName": "XOF",
        "description": "SENEGAL-CFA Franc BCEAO"
      },
      {
        "code": "941",
        "codeName": "RSD",
        "description": "SERBIA-Serbian Dinar"
      },
      {
        "code": "690",
        "codeName": "SCR",
        "description": "SEYCHELLES-Seychelles Rupee"
      },
      {
        "code": "694",
        "codeName": "SLL",
        "description": "SIERRA LEONE-Leone"
      },
      {
        "code": "702",
        "codeName": "SGD",
        "description": "SINGAPORE-Singapore Dollar"
      },
      {
        "code": "532",
        "codeName": "ANG",
        "description": "SINT MAARTEN (DUTCH PART)-Netherlands Antillean Guilder"
      },
      {
        "code": "994",
        "codeName": "XSU",
        "description": "SISTEMA UNITARIO DE COMPENSACION REGIONAL DE PAGOS 'SUCRE'-Sucre"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "SLOVAKIA-Euro"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "SLOVENIA-Euro"
      },
      {
        "code": "090",
        "codeName": "SBD",
        "description": "SOLOMON ISLANDS-Solomon Islands Dollar"
      },
      {
        "code": "706",
        "codeName": "SOS",
        "description": "SOMALIA-Somali Shilling"
      },
      {
        "code": "710",
        "codeName": "ZAR",
        "description": "SOUTH AFRICA-Rand"
      },
      {
        "code": "0",
        "codeName": "_",
        "description": "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS-No universal currency"
      },
      {
        "code": "728",
        "codeName": "SSP",
        "description": "SOUTH SUDAN-South Sudanese Pound"
      },
      {
        "code": "978",
        "codeName": "EUR",
        "description": "SPAIN-Euro"
      },
      {
        "code": "144",
        "codeName": "LKR",
        "description": "SRI LANKA-Sri Lanka Rupee"
      },
      {
        "code": "938",
        "codeName": "SDG",
        "description": "SUDAN (THE)-Sudanese Pound"
      },
      {
        "code": "968",
        "codeName": "SRD",
        "description": "SURINAME-Surinam Dollar"
      },
      {
        "code": "578",
        "codeName": "NOK",
        "description": "SVALBARD AND JAN MAYEN-Norwegian Krone"
      },
      {
        "code": "748",
        "codeName": "SZL",
        "description": "SWAZILAND-Lilangeni"
      },
      {
        "code": "752",
        "codeName": "SEK",
        "description": "SWEDEN-Swedish Krona"
      },
      {
        "code": "756",
        "codeName": "CHF",
        "description": "SWITZERLAND-Swiss Franc"
      },
      {
        "code": "947",
        "codeName": "CHE",
        "description": "SWITZERLAND-WIR Euro"
      },
      {
        "code": "948",
        "codeName": "CHW",
        "description": "SWITZERLAND-WIR Franc"
      },
      {
        "code": "760",
        "codeName": "SYP",
        "description": "SYRIAN ARAB REPUBLIC-Syrian Pound"
      },
      {
        "code": "901",
        "codeName": "TWD",
        "description": "TAIWAN (PROVINCE OF CHINA)-New Taiwan Dollar"
      },
      {
        "code": "972",
        "codeName": "TJS",
        "description": "TAJIKISTAN-Somoni"
      },
      {
        "code": "834",
        "codeName": "TZS",
        "description": "TANZANIA, UNITED REPUBLIC OF-Tanzanian Shilling"
      },
      {
        "code": "764",
        "codeName": "THB",
        "description": "THAILAND-Baht"
      },
      {
        "code": "840",
        "codeName": "USD",
        "description": "TIMOR-LESTE-US Dollar"
      },
      {
        "code": "952",
        "codeName": "XOF",
        "description": "TOGO-CFA Franc BCEAO"
      },
      {
        "code": "554",
        "codeName": "NZD",
        "description": "TOKELAU-New Zealand Dollar"
      },
      {
        "code": "776",
        "codeName": "TOP",
        "description": "TONGA-Pa’anga"
      },
      {
        "code": "780",
        "codeName": "TTD",
        "description": "TRINIDAD AND TOBAGO-Trinidad and Tobago Dollar"
      },
      {
        "code": "788",
        "codeName": "TND",
        "description": "TUNISIA-Tunisian Dinar"
      },
      {
        "code": "949",
        "codeName": "TRY",
        "description": "TURKEY-Turkish Lira"
      },
      {
        "code": "934",
        "codeName": "TMT",
        "description": "TURKMENISTAN-Turkmenistan New Manat"
      },
      {
        "code": "840",
        "codeName": "USD",
        "description": "TURKS AND CAICOS ISLANDS (THE)-US Dollar"
      },
      {
        "code": "036",
        "codeName": "AUD",
        "description": "TUVALU-Australian Dollar"
      },
      {
        "code": "800",
        "codeName": "UGX",
        "description": "UGANDA-Uganda Shilling"
      },
      {
        "code": "980",
        "codeName": "UAH",
        "description": "UKRAINE-Hryvnia"
      },
      {
        "code": "784",
        "codeName": "AED",
        "description": "UNITED ARAB EMIRATES (THE)-UAE Dirham"
      },
      {
        "code": "826",
        "codeName": "GBP",
        "description": "UNITED KINGDOM OF GREAT BRITAIN AND NORTHERN IRELAND (THE)-Pound Sterling"
      },
      {
        "code": "840",
        "codeName": "USD",
        "description": "UNITED STATES MINOR OUTLYING ISLANDS (THE)-US Dollar"
      },
      {
        "code": "840",
        "codeName": "USD",
        "description": "UNITED STATES OF AMERICA (THE)-US Dollar"
      },
      {
        "code": "997",
        "codeName": "USN",
        "description": "UNITED STATES OF AMERICA (THE)-US Dollar (Next day)"
      },
      {
        "code": "858",
        "codeName": "UYU",
        "description": "URUGUAY-Peso Uruguayo"
      },
      {
        "code": "940",
        "codeName": "UYI",
        "description": "URUGUAY-Uruguay Peso en Unidades Indexadas (URUIURUI)"
      },
      {
        "code": "860",
        "codeName": "UZS",
        "description": "UZBEKISTAN-Uzbekistan Sum"
      },
      {
        "code": "548",
        "codeName": "VUV",
        "description": "VANUATU-Vatu"
      },
      {
        "code": "937",
        "codeName": "VEF",
        "description": "VENEZUELA (BOLIVARIAN REPUBLIC OF)-Bolívar"
      },
      {
        "code": "704",
        "codeName": "VND",
        "description": "VIET NAM-Dong"
      },
      {
        "code": "840",
        "codeName": "USD",
        "description": "VIRGIN ISLANDS (BRITISH)-US Dollar"
      },
      {
        "code": "840",
        "codeName": "USD",
        "description": "VIRGIN ISLANDS (U.S.)-US Dollar"
      },
      {
        "code": "953",
        "codeName": "XPF",
        "description": "WALLIS AND FUTUNA-CFP Franc"
      },
      {
        "code": "504",
        "codeName": "MAD",
        "description": "WESTERN SAHARA-Moroccan Dirham"
      },
      {
        "code": "886",
        "codeName": "YER",
        "description": "YEMEN-Yemeni Rial"
      },
      {
        "code": "967",
        "codeName": "ZMW",
        "description": "ZAMBIA-Zambian Kwacha"
      },
      {
        "code": "932",
        "codeName": "ZWL",
        "description": "ZIMBABWE-Zimbabwe Dollar"
      },
      {
        "code": "955",
        "codeName": "XBA",
        "description": "ZZ01_Bond Markets Unit European_EURCO-Bond Markets Unit European Composite Unit (EURCO)"
      },
      {
        "code": "956",
        "codeName": "XBB",
        "description": "ZZ02_Bond Markets Unit European_EMU-6-Bond Markets Unit European Monetary Unit (E.M.U.-6)"
      },
      {
        "code": "957",
        "codeName": "XBC",
        "description": "ZZ03_Bond Markets Unit European_EUA-9-Bond Markets Unit European Unit of Account 9 (E.U.A.-9)"
      },
      {
        "code": "958",
        "codeName": "XBD",
        "description": "ZZ04_Bond Markets Unit European_EUA-17-Bond Markets Unit European Unit of Account 17 (E.U.A.-17)"
      },
      {
        "code": "963",
        "codeName": "XTS",
        "description": "ZZ06_Testing_Code-Codes specifically reserved for testing purposes"
      },
      {
        "code": "999",
        "codeName": "XXX",
        "description": "ZZ07_No_Currency-The codes assigned for transactions where no currency is involved"
      },
      {
        "code": "959",
        "codeName": "XAU",
        "description": "ZZ08_Gold-Gold"
      },
      {
        "code": "964",
        "codeName": "XPD",
        "description": "ZZ09_Palladium-Palladium"
      },
      {
        "code": "962",
        "codeName": "XPT",
        "description": "ZZ10_Platinum-Platinum"
      },
      {
        "code": "961",
        "codeName": "XAG",
        "description": "ZZ11_Silver-Silver"
      }
    ]
  },
  "iso_dataQualityType": {
    "codelistType": "staticList",
    "codelistName": "iso_entityClass",
    "source": "ISO",
    "sourceName": "DQ_DataQualityInfo",
    "extensible": true,
    "description": "datatype of element or entity",
    "codelist": [
      {
        "code": "000",
        "codeName": "DQ_AbsoluteExternalPositionalAccuracy",
        "description": ""
      },
      {
        "code": "001",
        "codeName": "DQ_AccuracyOfATimeMeasurement",
        "description": ""
      },
      {
        "code": "002",
        "codeName": "DQ_ConceptualConsistency",
        "description": ""
      },
      {
        "code": "003",
        "codeName": "DQ_CompletenessCommission",
        "description": ""
      },
      {
        "code": "004",
        "codeName": "DQ_CompletenessOmmission",
        "description": ""
      },
      {
        "code": "005",
        "codeName": "DQ_Confidence",
        "description": ""
      },
      {
        "code": "006",
        "codeName": "DQ_CoverageResult",
        "description": ""
      },
      {
        "code": "007",
        "codeName": "DQ_DomainConsistency",
        "description": ""
      },
      {
        "code": "008",
        "codeName": "DQ_FormatConsistency",
        "description": ""
      },
      {
        "code": "009",
        "codeName": "DQ_GriddedDataPositionalAccuracy",
        "description": ""
      },
      {
        "code": "010",
        "codeName": "DQ_Homogeneity",
        "description": ""
      },
      {
        "code": "011",
        "codeName": "DQ_NonQuantitativeAttributeCorrectness",
        "description": ""
      },
      {
        "code": "012",
        "codeName": "DQ_QuantitativeAttributeAccuracy",
        "description": ""
      },
      {
        "code": "013",
        "codeName": "DQ_RelativeInternalPositionalAccuracy",
        "description": ""
      },
      {
        "code": "014",
        "codeName": "DQ_Representativity",
        "description": ""
      },
      {
        "code": "015",
        "codeName": "DQ_TemporalConsistency",
        "description": ""
      },
      {
        "code": "016",
        "codeName": "DQ_TemporalValidity",
        "description": ""
      },
      {
        "code": "017",
        "codeName": "DQ_ThematicClassisificationCorrectness",
        "description": ""
      },
      {
        "code": "018",
        "codeName": "DQ_TopologicalConsistency",
        "description": ""
      },
      {
        "code": "019",
        "codeName": "DQ_UsibilityElement",
        "description": ""
      },
      {
        "code": "020",
        "codeName": "DQ_Completeness",
        "description": ""
      },
      {
        "code": "021",
        "codeName": "DQ_LogicalConsistency",
        "description": ""
      },
      {
        "code": "022",
        "codeName": "DQ_PositioinalAccuracy",
        "description": ""
      },
      {
        "code": "023",
        "codeName": "DQ_TemporalQuality",
        "description": ""
      }
    ]
  },
  "iso_dateType": {
    "codelistType": "staticList",
    "codelistName": "iso_dateType",
    "source": "ISO",
    "sourceName": "CI_DateTypeCode",
    "extensible": true,
    "description": "identification of when a given event occurred",
    "codelist": [
      {
        "code": "001",
        "codeName": "creation",
        "description": "date identifies when the resource was brought into existence"
      },
      {
        "code": "002",
        "codeName": "publication",
        "description": "date identifies when the resource was issued"
      },
      {
        "code": "003",
        "codeName": "revision",
        "description": "date identifies when the resource was examined or re-examined and improved or amended"
      },
      {
        "code": "004",
        "codeName": "expiry",
        "description": "date identifies when resource expires"
      },
      {
        "code": "005",
        "codeName": "lastUpdate",
        "description": "date identifies when resource was last updated"
      },
      {
        "code": "006",
        "codeName": "lastRevision",
        "description": "date identifies when resource was last reviewed"
      },
      {
        "code": "007",
        "codeName": "nextUpdate",
        "description": "date identifies when resource will be next updated"
      },
      {
        "code": "008",
        "codeName": "unavailable",
        "description": "date identifies when resource became not available or obtainable"
      },
      {
        "code": "009",
        "codeName": "inForce",
        "description": "date identifies when resource became in force"
      },
      {
        "code": "010",
        "codeName": "adopted",
        "description": "date identifies when resource was adopted"
      },
      {
        "code": "011",
        "codeName": "deprecated",
        "description": "date identifies when resource was deprecated"
      },
      {
        "code": "012",
        "codeName": "superseded",
        "description": "date identifies when resource was superseded or replaced by another resource"
      },
      {
        "code": "013",
        "codeName": "validityBegins",
        "description": "time at which the data are considered to become valid. NOTE: There could be quite a delay between creation and validity begins"
      },
      {
        "code": "014",
        "codeName": "validityExpires",
        "description": "time at which the data are no longer considered to be valid"
      },
      {
        "code": "015",
        "codeName": "released",
        "description": "the date that the resource shall be released for public access"
      },
      {
        "code": "016",
        "codeName": "distribution",
        "description": "date identifies when an instance of the resource was distributed"
      },
      {
        "code": "adiwg001",
        "codeName": "acquisition",
        "description": "date ownership of the resource was acquired generally by purchase"
      },
      {
        "code": "adiwg002",
        "codeName": "assessment",
        "description": "date the resource was reviewed or assessed"
      },
      {
        "code": "adiwg003",
        "codeName": "award",
        "description": "date a grant or funding was awarded"
      },
      {
        "code": "adiwg004",
        "codeName": "collected",
        "description": "date a sample or data was collected"
      },
      {
        "code": "adiwg005",
        "codeName": "deprecated",
        "description": "date a resource, data, or standard was deprecated"
      },
      {
        "code": "adiwg006",
        "codeName": "due",
        "description": "date a resource or task is to be completed"
      },
      {
        "code": "adiwg007",
        "codeName": "end",
        "description": "end date"
      },
      {
        "code": "adiwg008",
        "codeName": "received",
        "description": "date a resource was received"
      },
      {
        "code": "adiwg009",
        "codeName": "reported",
        "description": "date something was reported or announced"
      },
      {
        "code": "adiwg010",
        "codeName": "start",
        "description": "start or begin date"
      },
      {
        "code": "adiwg011",
        "codeName": "transmitted",
        "description": "date resource was transmitted to another party"
      }
    ]
  },
  "iso_DCPList": {
    "codelistType": "staticList",
    "codelistName": "iso_DCPList",
    "source": "ISO",
    "sourceName": "DCPList",
    "extensible": true,
    "description": "distributed computing platforms on which the operation has been implemented",
    "codelist": [
      {
        "code": "001",
        "codeName": "XML",
        "description": "Extensible Markup Language"
      },
      {
        "code": "002",
        "codeName": "CORBA",
        "description": "Common Object Request Broker Architecture"
      },
      {
        "code": "003",
        "codeName": "JAVA",
        "description": "Object-oriented programming language"
      },
      {
        "code": "004",
        "codeName": "COM",
        "description": "Component Object Model"
      },
      {
        "code": "005",
        "codeName": "SQL",
        "description": "Structured Query Language"
      },
      {
        "code": "006",
        "codeName": "SOAP",
        "description": "Simple Object Access Protocol"
      },
      {
        "code": "007",
        "codeName": "Z3950",
        "description": "ISO 23950"
      },
      {
        "code": "008",
        "codeName": "HTTP",
        "description": "HyperText Transfer Protocol"
      },
      {
        "code": "009",
        "codeName": "FTP",
        "description": "File Transfer Protocol"
      },
      {
        "code": "010",
        "codeName": "WebServices",
        "description": "Web service"
      }
    ]
  },
  "iso_dimensionNameType": {
    "codelistType": "staticList",
    "codelistName": "iso_dimensionNameType",
    "source": "ISO",
    "sourceName": "MD_DimensionNameTypeCode",
    "extensible": true,
    "description": "name of the dimension",
    "codelist": [
      {
        "code": "001",
        "codeName": "row",
        "description": "ordinate (y) axis"
      },
      {
        "code": "002",
        "codeName": "column",
        "description": "abscissa (x) axis"
      },
      {
        "code": "003",
        "codeName": "vertical",
        "description": "vertical (z) axis"
      },
      {
        "code": "004",
        "codeName": "track",
        "description": "along the direction of motion of the scan point"
      },
      {
        "code": "005",
        "codeName": "crossTrack",
        "description": "perpendicular to the direction of motion of the scan point"
      },
      {
        "code": "006",
        "codeName": "line",
        "description": "scan line of a sensor"
      },
      {
        "code": "007",
        "codeName": "sample",
        "description": "element along a scan line"
      },
      {
        "code": "008",
        "codeName": "time",
        "description": "duration"
      }
    ]
  },
  "iso_entityClass": {
    "codelistType": "staticList",
    "codelistName": "iso_entityClass",
    "source": "ISO",
    "sourceName": "MD_DatatypeCode",
    "extensible": true,
    "description": "datatype of element or entity",
    "codelist": [
      {
        "code": "001",
        "codeName": "class",
        "description": "descriptor of a set of objects that share the same attributes, operations, methods, relationships, and behavior"
      },
      {
        "code": "002",
        "codeName": "codelist",
        "description": "flexible enumeration useful for expressing a long list of values, can be extended"
      },
      {
        "code": "003",
        "codeName": "enumerations",
        "description": "data type whose instances form a list of named literal values, not extendable"
      },
      {
        "code": "004",
        "codeName": "codelistElement",
        "description": "permissible value for a codelist or enumeration"
      },
      {
        "code": "005",
        "codeName": "abstractClass",
        "description": "class that cannot be directly instantiated"
      },
      {
        "code": "006",
        "codeName": "aggregateClass",
        "description": "class that is composed of classes it is connected to by an aggregate relationship"
      },
      {
        "code": "007",
        "codeName": "specifiedClass",
        "description": "subclass that may be substituted for its superclass"
      },
      {
        "code": "008",
        "codeName": "datatypeClass",
        "description": "class with few or no operations whose primary purpose is to hold the abstract state of another class for transmittal, storage, encoding or persistent storage"
      },
      {
        "code": "009",
        "codeName": "interfaceClass",
        "description": "named set of operations that characterize the behavior of an element"
      },
      {
        "code": "010",
        "codeName": "unionClass",
        "description": "class describing a selection of one of the specified types"
      },
      {
        "code": "011",
        "codeName": "metaClass",
        "description": "class whose instances are classes"
      },
      {
        "code": "012",
        "codeName": "typeClass",
        "description": "class used for specification of a domain of instances (objects), together with the operations applicable to the objects. A type may have attributes and associations"
      },
      {
        "code": "013",
        "codeName": "characterString",
        "description": "free text field"
      },
      {
        "code": "014",
        "codeName": "integer",
        "description": "numeric filed"
      },
      {
        "code": "015",
        "codeName": "association",
        "description": "semantic relationship between two classes that involves connections among their instances"
      },
      {
        "code": "016",
        "codeName": "typeClass",
        "description": "class used for specification of a domain of instances (objects), together with the operations applicable to the objects. A type may have attributes and associations"
      }
    ]
  },
  "iso_geometricObjectType": {
    "codelistType": "staticList",
    "codelistName": "iso_geometricObjectType",
    "source": "ISO",
    "sourceName": "MD_GeometricObjectTypeCode",
    "extensible": true,
    "description": "name of point or vector objects used to locate zero-, one-, two- or three-dimensional spatial locations in the dataset",
    "codelist": [
      {
        "code": "001",
        "codeName": "complex",
        "description": "set of geometric primitives such that their boundaries can be represented as a union of other primitives"
      },
      {
        "code": "002",
        "codeName": "composite",
        "description": "connected set of curves, solids or surfaces"
      },
      {
        "code": "003",
        "codeName": "curve",
        "description": "bounded, 1-dimensional geometric primitive, representing the continuous image of a line"
      },
      {
        "code": "004",
        "codeName": "point",
        "description": "zero-dimensional geometric primitive, representing a position but not having an extent"
      },
      {
        "code": "005",
        "codeName": "solid",
        "description": "bounded, connected 3-dimensional geometric primitive, representing the continuous image of a region of space"
      },
      {
        "code": "006",
        "codeName": "surface",
        "description": "bounded, connected 2-dimensional geometric primitive, representing the continuous image of a region of a plane"
      }
    ]
  },
  "iso_geometryTypeCode": {
    "codelistType": "staticList",
    "codelistName": "iso_geometryTypeCode",
    "source": "ISO",
    "sourceName": "MI_GeometryTypeCode",
    "extensible": true,
    "description": "geometric description of the collection",
    "codelist": [
      {
        "code": "001",
        "codeName": "point",
        "description": "single geographic point of interest"
      },
      {
        "code": "002",
        "codeName": "linear",
        "description": "extended collection in a single vector"
      },
      {
        "code": "003",
        "codeName": "areal",
        "description": "collection of a geographic area defined by a polygon (coverage)"
      },
      {
        "code": "004",
        "codeName": "stripe",
        "description": "series of linear collections grouped by way points"
      }
    ]
  },
  "iso_imageCondition": {
    "codelistType": "staticList",
    "codelistName": "iso_imageCondition",
    "source": "ISO",
    "sourceName": "MD_ImagingConditionCode",
    "extensible": true,
    "description": "code which indicates conditions which may affect the image",
    "codelist": [
      {
        "code": "001",
        "codeName": "blurredImage",
        "description": "portion of the image is blurred"
      },
      {
        "code": "002",
        "codeName": "cloud",
        "description": "portion of the image is partially obscured by cloud cover"
      },
      {
        "code": "003",
        "codeName": "degradingObliquity",
        "description": "acute angle between the plane of the ecliptic (the plane of the Earth's orbit) and the plane of the celestial equator"
      },
      {
        "code": "004",
        "codeName": "fog",
        "description": "portion of the image is partially obscured by fog"
      },
      {
        "code": "005",
        "codeName": "heavySmokeOrDust",
        "description": "portion of the image is partially obscured by heavy smoke or dust"
      },
      {
        "code": "006",
        "codeName": "night",
        "description": "image was taken at night"
      },
      {
        "code": "007",
        "codeName": "rain",
        "description": "image was taken during rainfall"
      },
      {
        "code": "008",
        "codeName": "semiDarkness",
        "description": "image was taken during semi-dark conditions - twilight conditions"
      },
      {
        "code": "009",
        "codeName": "shadow",
        "description": "portion of the image is obscured by shadow"
      },
      {
        "code": "010",
        "codeName": "snow",
        "description": "portion of the image is obscured by snow"
      },
      {
        "code": "011",
        "codeName": "terrainMasking",
        "description": "the absence of collection data of a given point or area caused by the relative location of topographic features which obstruct the collection path between the collector(s) and the subject(s) of interest"
      }
    ]
  },
  "iso_initiativeType": {
    "codelistType": "staticList",
    "codelistName": "iso_initiativeType",
    "source": "ISO",
    "sourceName": "DS_InitiativeTypeCode",
    "extensible": true,
    "description": "type of initiative under which the resource was produced - the activity that resulted in the resource",
    "codelist": [
      {
        "code": "001",
        "codeName": "campaign",
        "description": "series of organized planned actions"
      },
      {
        "code": "002",
        "codeName": "collection",
        "description": "accumulation of datasets assembled for a specific purpose"
      },
      {
        "code": "003",
        "codeName": "exercise",
        "description": "specific performance of a function or group of functions"
      },
      {
        "code": "004",
        "codeName": "experiment",
        "description": "process designed to find if something is effective or valid"
      },
      {
        "code": "005",
        "codeName": "investigation",
        "description": "search or systematic inquiry"
      },
      {
        "code": "006",
        "codeName": "mission",
        "description": "specific operation of a data collection system"
      },
      {
        "code": "007",
        "codeName": "sensor",
        "description": "device or piece of equipment which detects or records"
      },
      {
        "code": "008",
        "codeName": "operation",
        "description": "action that is part of a series of actions"
      },
      {
        "code": "009",
        "codeName": "platform",
        "description": "vehicle or other support base that holds a sensor"
      },
      {
        "code": "010",
        "codeName": "process",
        "description": "method of doing something involving a number of steps"
      },
      {
        "code": "011",
        "codeName": "program",
        "description": "specific planned activity"
      },
      {
        "code": "012",
        "codeName": "project",
        "description": "organized undertaking, research, or development"
      },
      {
        "code": "013",
        "codeName": "study",
        "description": "examination or investigation"
      },
      {
        "code": "014",
        "codeName": "task",
        "description": "piece of work"
      },
      {
        "code": "015",
        "codeName": "trial",
        "description": "process of testing to discover or demonstrate something"
      }
    ]
  },
  "iso_keywordType": {
    "codelistType": "staticList",
    "codelistName": "iso_keywordType",
    "source": "ISO",
    "sourceName": "MD_KeywordTypeCode",
    "extensible": true,
    "description": "methods used to group similar keywords",
    "codelist": [
      {
        "code": "001",
        "codeName": "discipline",
        "description": "keyword identifies a branch of instruction or specialized learning"
      },
      {
        "code": "002",
        "codeName": "place",
        "description": "keyword identifies a location"
      },
      {
        "code": "003",
        "codeName": "stratum",
        "description": "keyword identifies the layer(s) of any deposited substance"
      },
      {
        "code": "004",
        "codeName": "temporal",
        "description": "keyword identifies a time period related to the dataset"
      },
      {
        "code": "005",
        "codeName": "theme",
        "description": "keyword identifies a particular subject or topic"
      },
      {
        "code": "006",
        "codeName": "dataCentre",
        "description": "keyword identifies a repository or archive that manages and distributes data"
      },
      {
        "code": "007",
        "codeName": "featureType",
        "description": "keyword identifies a resource containing or about a collection of feature instances with common characteristics"
      },
      {
        "code": "008",
        "codeName": "instrument",
        "description": "keyword identifies a device used to measure or compare physical properties"
      },
      {
        "code": "009",
        "codeName": "platform",
        "description": "keyword identifies a structure upon which an instrument is mounted"
      },
      {
        "code": "010",
        "codeName": "process",
        "description": "keyword identifies a series of actions or natural occurrences"
      },
      {
        "code": "011",
        "codeName": "project",
        "description": "keyword identifies an endeavour undertaken to create or modify a product or service"
      },
      {
        "code": "012",
        "codeName": "service",
        "description": "keyword identifies an activity carried out by one party for the benefit of another"
      },
      {
        "code": "013",
        "codeName": "product",
        "description": "keyword identifies a type of product"
      },
      {
        "code": "014",
        "codeName": "subTopicCategory",
        "description": "refinement of a topic category for the purpose of geographic data classification"
      },
      {
        "code": "015",
        "codeName": "taxon",
        "description": "keyword identifies a taxonomy of the resource"
      },
      {
        "code": "adiwg001",
        "codeName": "region",
        "description": "keyword identifies a known geographic region (such as US Census Area, ecoregion type, etc.)"
      },
      {
        "code": "adiwg002",
        "codeName": "isoTopicCategory",
        "description": "high-level geographic data thematic classification to assist in the grouping and search of available geographic data sets"
      },
      {
        "code": "adiwg003",
        "codeName": "methodology",
        "description": "keyword or phrase that summarizes a field or laboratory methods used"
      }
    ]
  },
  "iso_language": {
    "codelistType": "staticList",
    "codelistName": "iso_language",
    "source": "Library of Congress",
    "sourceName": "LanguageCode",
    "extensible": true,
    "description": "code for the representation of names of languages ISO 639 Part 2",
    "codelist": [
      {
        "code": "001",
        "codeName": "aar",
        "description": "Afar"
      },
      {
        "code": "002",
        "codeName": "abk",
        "description": "Abkhazian"
      },
      {
        "code": "003",
        "codeName": "ace",
        "description": "Achinese"
      },
      {
        "code": "004",
        "codeName": "ach",
        "description": "Acoli"
      },
      {
        "code": "005",
        "codeName": "ada",
        "description": "Adangme"
      },
      {
        "code": "006",
        "codeName": "ady",
        "description": "Adyghe; Adygei"
      },
      {
        "code": "007",
        "codeName": "afa",
        "description": "Afro-Asiatic languages"
      },
      {
        "code": "008",
        "codeName": "afh",
        "description": "Afrihili"
      },
      {
        "code": "009",
        "codeName": "afr",
        "description": "Afrikaans"
      },
      {
        "code": "010",
        "codeName": "ain",
        "description": "Ainu"
      },
      {
        "code": "011",
        "codeName": "aka",
        "description": "Akan"
      },
      {
        "code": "012",
        "codeName": "akk",
        "description": "Akkadian"
      },
      {
        "code": "013",
        "codeName": "alb",
        "description": "Albanian"
      },
      {
        "code": "014",
        "codeName": "ale",
        "description": "Aleut"
      },
      {
        "code": "015",
        "codeName": "alg",
        "description": "Algonquian languages"
      },
      {
        "code": "016",
        "codeName": "alt",
        "description": "Southern Altai"
      },
      {
        "code": "017",
        "codeName": "amh",
        "description": "Amharic"
      },
      {
        "code": "018",
        "codeName": "ang",
        "description": "English, Old (ca.450-1100)"
      },
      {
        "code": "019",
        "codeName": "anp",
        "description": "Angika"
      },
      {
        "code": "020",
        "codeName": "apa",
        "description": "Apache languages"
      },
      {
        "code": "021",
        "codeName": "ara",
        "description": "Arabic"
      },
      {
        "code": "022",
        "codeName": "arc",
        "description": "Official Aramaic (700-300 BCE); Imperial Aramaic (700-300 BCE)"
      },
      {
        "code": "023",
        "codeName": "arg",
        "description": "Aragonese"
      },
      {
        "code": "024",
        "codeName": "arm",
        "description": "Armenian"
      },
      {
        "code": "025",
        "codeName": "arn",
        "description": "Mapudungun; Mapuche"
      },
      {
        "code": "026",
        "codeName": "arp",
        "description": "Arapaho"
      },
      {
        "code": "027",
        "codeName": "art",
        "description": "Artificial languages"
      },
      {
        "code": "028",
        "codeName": "arw",
        "description": "Arawak"
      },
      {
        "code": "029",
        "codeName": "asm",
        "description": "Assamese"
      },
      {
        "code": "030",
        "codeName": "ast",
        "description": "Asturian; Bable; Leonese; Asturleonese"
      },
      {
        "code": "031",
        "codeName": "ath",
        "description": "Athapascan languages"
      },
      {
        "code": "032",
        "codeName": "aus",
        "description": "Australian languages"
      },
      {
        "code": "033",
        "codeName": "ava",
        "description": "Avaric"
      },
      {
        "code": "034",
        "codeName": "ave",
        "description": "Avestan"
      },
      {
        "code": "035",
        "codeName": "awa",
        "description": "Awadhi"
      },
      {
        "code": "036",
        "codeName": "aym",
        "description": "Aymara"
      },
      {
        "code": "037",
        "codeName": "aze",
        "description": "Azerbaijani"
      },
      {
        "code": "038",
        "codeName": "bad",
        "description": "Banda languages"
      },
      {
        "code": "039",
        "codeName": "bai",
        "description": "Bamileke languages"
      },
      {
        "code": "040",
        "codeName": "bak",
        "description": "Bashkir"
      },
      {
        "code": "041",
        "codeName": "bal",
        "description": "Baluchi"
      },
      {
        "code": "042",
        "codeName": "bam",
        "description": "Bambara"
      },
      {
        "code": "043",
        "codeName": "ban",
        "description": "Balinese"
      },
      {
        "code": "044",
        "codeName": "baq",
        "description": "Basque"
      },
      {
        "code": "045",
        "codeName": "bas",
        "description": "Basa"
      },
      {
        "code": "046",
        "codeName": "bat",
        "description": "Baltic languages"
      },
      {
        "code": "047",
        "codeName": "bej",
        "description": "Beja; Bedawiyet"
      },
      {
        "code": "048",
        "codeName": "bel",
        "description": "Belarusian"
      },
      {
        "code": "049",
        "codeName": "bem",
        "description": "Bemba"
      },
      {
        "code": "050",
        "codeName": "ben",
        "description": "Bengali"
      },
      {
        "code": "051",
        "codeName": "ber",
        "description": "Berber languages"
      },
      {
        "code": "052",
        "codeName": "bho",
        "description": "Bhojpuri"
      },
      {
        "code": "053",
        "codeName": "bih",
        "description": "Bihari languages"
      },
      {
        "code": "054",
        "codeName": "bik",
        "description": "Bikol"
      },
      {
        "code": "055",
        "codeName": "bin",
        "description": "Bini; Edo"
      },
      {
        "code": "056",
        "codeName": "bis",
        "description": "Bislama"
      },
      {
        "code": "057",
        "codeName": "bla",
        "description": "Siksika"
      },
      {
        "code": "058",
        "codeName": "bnt",
        "description": "Bantu (Other)"
      },
      {
        "code": "059",
        "codeName": "bos",
        "description": "Bosnian"
      },
      {
        "code": "060",
        "codeName": "bra",
        "description": "Braj"
      },
      {
        "code": "061",
        "codeName": "bre",
        "description": "Breton"
      },
      {
        "code": "062",
        "codeName": "btk",
        "description": "Batak languages"
      },
      {
        "code": "063",
        "codeName": "bua",
        "description": "Buriat"
      },
      {
        "code": "064",
        "codeName": "bug",
        "description": "Buginese"
      },
      {
        "code": "065",
        "codeName": "bul",
        "description": "Bulgarian"
      },
      {
        "code": "066",
        "codeName": "bur",
        "description": "Burmese"
      },
      {
        "code": "067",
        "codeName": "byn",
        "description": "Blin; Bilin"
      },
      {
        "code": "068",
        "codeName": "cad",
        "description": "Caddo"
      },
      {
        "code": "069",
        "codeName": "cai",
        "description": "Central American Indian languages"
      },
      {
        "code": "070",
        "codeName": "car",
        "description": "Galibi Carib"
      },
      {
        "code": "071",
        "codeName": "cat",
        "description": "Catalan; Valencian"
      },
      {
        "code": "072",
        "codeName": "cau",
        "description": "Caucasian languages"
      },
      {
        "code": "073",
        "codeName": "ceb",
        "description": "Cebuano"
      },
      {
        "code": "074",
        "codeName": "cel",
        "description": "Celtic languages"
      },
      {
        "code": "075",
        "codeName": "cha",
        "description": "Chamorro"
      },
      {
        "code": "076",
        "codeName": "chb",
        "description": "Chibcha"
      },
      {
        "code": "077",
        "codeName": "che",
        "description": "Chechen"
      },
      {
        "code": "078",
        "codeName": "chg",
        "description": "Chagatai"
      },
      {
        "code": "079",
        "codeName": "chi",
        "description": "Chinese"
      },
      {
        "code": "080",
        "codeName": "chk",
        "description": "Chuukese"
      },
      {
        "code": "081",
        "codeName": "chm",
        "description": "Mari"
      },
      {
        "code": "082",
        "codeName": "chn",
        "description": "Chinook jargon"
      },
      {
        "code": "083",
        "codeName": "cho",
        "description": "Choctaw"
      },
      {
        "code": "084",
        "codeName": "chp",
        "description": "Chipewyan; Dene Suline"
      },
      {
        "code": "085",
        "codeName": "chr",
        "description": "Cherokee"
      },
      {
        "code": "086",
        "codeName": "chu",
        "description": "Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic"
      },
      {
        "code": "087",
        "codeName": "chv",
        "description": "Chuvash"
      },
      {
        "code": "088",
        "codeName": "chy",
        "description": "Cheyenne"
      },
      {
        "code": "089",
        "codeName": "cmc",
        "description": "Chamic languages"
      },
      {
        "code": "090",
        "codeName": "cop",
        "description": "Coptic"
      },
      {
        "code": "091",
        "codeName": "cor",
        "description": "Cornish"
      },
      {
        "code": "092",
        "codeName": "cos",
        "description": "Corsican"
      },
      {
        "code": "093",
        "codeName": "cpe",
        "description": "Creoles and pidgins, English based"
      },
      {
        "code": "094",
        "codeName": "cpf",
        "description": "Creoles and pidgins, French-based "
      },
      {
        "code": "095",
        "codeName": "cpp",
        "description": "Creoles and pidgins, Portuguese-based "
      },
      {
        "code": "096",
        "codeName": "cre",
        "description": "Cree"
      },
      {
        "code": "097",
        "codeName": "crh",
        "description": "Crimean Tatar; Crimean Turkish"
      },
      {
        "code": "098",
        "codeName": "crp",
        "description": "Creoles and pidgins "
      },
      {
        "code": "099",
        "codeName": "csb",
        "description": "Kashubian"
      },
      {
        "code": "100",
        "codeName": "cus",
        "description": "Cushitic languages"
      },
      {
        "code": "101",
        "codeName": "cze",
        "description": "Czech"
      },
      {
        "code": "102",
        "codeName": "dak",
        "description": "Dakota"
      },
      {
        "code": "103",
        "codeName": "dan",
        "description": "Danish"
      },
      {
        "code": "104",
        "codeName": "dar",
        "description": "Dargwa"
      },
      {
        "code": "105",
        "codeName": "day",
        "description": "Land Dayak languages"
      },
      {
        "code": "106",
        "codeName": "del",
        "description": "Delaware"
      },
      {
        "code": "107",
        "codeName": "den",
        "description": "Slave (Athapascan)"
      },
      {
        "code": "108",
        "codeName": "dgr",
        "description": "Dogrib"
      },
      {
        "code": "109",
        "codeName": "din",
        "description": "Dinka"
      },
      {
        "code": "110",
        "codeName": "div",
        "description": "Divehi; Dhivehi; Maldivian"
      },
      {
        "code": "111",
        "codeName": "doi",
        "description": "Dogri"
      },
      {
        "code": "112",
        "codeName": "dra",
        "description": "Dravidian languages"
      },
      {
        "code": "113",
        "codeName": "dsb",
        "description": "Lower Sorbian"
      },
      {
        "code": "114",
        "codeName": "dua",
        "description": "Duala"
      },
      {
        "code": "115",
        "codeName": "dum",
        "description": "Dutch, Middle (ca.1050-1350)"
      },
      {
        "code": "116",
        "codeName": "dut",
        "description": "Dutch; Flemish"
      },
      {
        "code": "117",
        "codeName": "dyu",
        "description": "Dyula"
      },
      {
        "code": "118",
        "codeName": "dzo",
        "description": "Dzongkha"
      },
      {
        "code": "119",
        "codeName": "efi",
        "description": "Efik"
      },
      {
        "code": "120",
        "codeName": "egy",
        "description": "Egyptian (Ancient)"
      },
      {
        "code": "121",
        "codeName": "eka",
        "description": "Ekajuk"
      },
      {
        "code": "122",
        "codeName": "elx",
        "description": "Elamite"
      },
      {
        "code": "123",
        "codeName": "eng",
        "description": "English"
      },
      {
        "code": "124",
        "codeName": "enm",
        "description": "English, Middle (1100-1500)"
      },
      {
        "code": "125",
        "codeName": "epo",
        "description": "Esperanto"
      },
      {
        "code": "126",
        "codeName": "est",
        "description": "Estonian"
      },
      {
        "code": "127",
        "codeName": "ewe",
        "description": "Ewe"
      },
      {
        "code": "128",
        "codeName": "ewo",
        "description": "Ewondo"
      },
      {
        "code": "129",
        "codeName": "fan",
        "description": "Fang"
      },
      {
        "code": "130",
        "codeName": "fao",
        "description": "Faroese"
      },
      {
        "code": "131",
        "codeName": "fat",
        "description": "Fanti"
      },
      {
        "code": "132",
        "codeName": "fij",
        "description": "Fijian"
      },
      {
        "code": "133",
        "codeName": "fil",
        "description": "Filipino; Pilipino"
      },
      {
        "code": "134",
        "codeName": "fin",
        "description": "Finnish"
      },
      {
        "code": "135",
        "codeName": "fiu",
        "description": "Finno-Ugrian languages"
      },
      {
        "code": "136",
        "codeName": "fon",
        "description": "Fon"
      },
      {
        "code": "137",
        "codeName": "fre",
        "description": "French"
      },
      {
        "code": "138",
        "codeName": "frm",
        "description": "French, Middle (ca.1400-1600)"
      },
      {
        "code": "139",
        "codeName": "fro",
        "description": "French, Old (842-ca.1400)"
      },
      {
        "code": "140",
        "codeName": "frr",
        "description": "Northern Frisian"
      },
      {
        "code": "141",
        "codeName": "frs",
        "description": "Eastern Frisian"
      },
      {
        "code": "142",
        "codeName": "fry",
        "description": "Western Frisian"
      },
      {
        "code": "143",
        "codeName": "ful",
        "description": "Fulah"
      },
      {
        "code": "144",
        "codeName": "fur",
        "description": "Friulian"
      },
      {
        "code": "145",
        "codeName": "gaa",
        "description": "Ga"
      },
      {
        "code": "146",
        "codeName": "gay",
        "description": "Gayo"
      },
      {
        "code": "147",
        "codeName": "gba",
        "description": "Gbaya"
      },
      {
        "code": "148",
        "codeName": "gem",
        "description": "Germanic languages"
      },
      {
        "code": "149",
        "codeName": "geo",
        "description": "Georgian"
      },
      {
        "code": "150",
        "codeName": "ger",
        "description": "German"
      },
      {
        "code": "151",
        "codeName": "gez",
        "description": "Geez"
      },
      {
        "code": "152",
        "codeName": "gil",
        "description": "Gilbertese"
      },
      {
        "code": "153",
        "codeName": "gla",
        "description": "Gaelic; Scottish Gaelic"
      },
      {
        "code": "154",
        "codeName": "gle",
        "description": "Irish"
      },
      {
        "code": "155",
        "codeName": "glg",
        "description": "Galician"
      },
      {
        "code": "156",
        "codeName": "glv",
        "description": "Manx"
      },
      {
        "code": "157",
        "codeName": "gmh",
        "description": "German, Middle High (ca.1050-1500)"
      },
      {
        "code": "158",
        "codeName": "goh",
        "description": "German, Old High (ca.750-1050)"
      },
      {
        "code": "159",
        "codeName": "gon",
        "description": "Gondi"
      },
      {
        "code": "160",
        "codeName": "gor",
        "description": "Gorontalo"
      },
      {
        "code": "161",
        "codeName": "got",
        "description": "Gothic"
      },
      {
        "code": "162",
        "codeName": "grb",
        "description": "Grebo"
      },
      {
        "code": "163",
        "codeName": "grc",
        "description": "Greek, Ancient (to 1453)"
      },
      {
        "code": "164",
        "codeName": "gre",
        "description": "Greek, Modern (1453-)"
      },
      {
        "code": "165",
        "codeName": "grn",
        "description": "Guarani"
      },
      {
        "code": "166",
        "codeName": "gsw",
        "description": "Swiss German; Alemannic; Alsatian"
      },
      {
        "code": "167",
        "codeName": "guj",
        "description": "Gujarati"
      },
      {
        "code": "168",
        "codeName": "gwi",
        "description": "Gwich'in"
      },
      {
        "code": "169",
        "codeName": "hai",
        "description": "Haida"
      },
      {
        "code": "170",
        "codeName": "hat",
        "description": "Haitian; Haitian Creole"
      },
      {
        "code": "171",
        "codeName": "hau",
        "description": "Hausa"
      },
      {
        "code": "172",
        "codeName": "haw",
        "description": "Hawaiian"
      },
      {
        "code": "173",
        "codeName": "heb",
        "description": "Hebrew"
      },
      {
        "code": "174",
        "codeName": "her",
        "description": "Herero"
      },
      {
        "code": "175",
        "codeName": "hil",
        "description": "Hiligaynon"
      },
      {
        "code": "176",
        "codeName": "him",
        "description": "Himachali languages; Western Pahari languages"
      },
      {
        "code": "177",
        "codeName": "hin",
        "description": "Hindi"
      },
      {
        "code": "178",
        "codeName": "hit",
        "description": "Hittite"
      },
      {
        "code": "179",
        "codeName": "hmn",
        "description": "Hmong; Mong"
      },
      {
        "code": "180",
        "codeName": "hmo",
        "description": "Hiri Motu"
      },
      {
        "code": "181",
        "codeName": "hrv",
        "description": "Croatian"
      },
      {
        "code": "182",
        "codeName": "hsb",
        "description": "Upper Sorbian"
      },
      {
        "code": "183",
        "codeName": "hun",
        "description": "Hungarian"
      },
      {
        "code": "184",
        "codeName": "hup",
        "description": "Hupa"
      },
      {
        "code": "185",
        "codeName": "iba",
        "description": "Iban"
      },
      {
        "code": "186",
        "codeName": "ibo",
        "description": "Igbo"
      },
      {
        "code": "187",
        "codeName": "ice",
        "description": "Icelandic"
      },
      {
        "code": "188",
        "codeName": "ido",
        "description": "Ido"
      },
      {
        "code": "189",
        "codeName": "iii",
        "description": "Sichuan Yi; Nuosu"
      },
      {
        "code": "190",
        "codeName": "ijo",
        "description": "Ijo languages"
      },
      {
        "code": "191",
        "codeName": "iku",
        "description": "Inuktitut"
      },
      {
        "code": "192",
        "codeName": "ile",
        "description": "Interlingue; Occidental"
      },
      {
        "code": "193",
        "codeName": "ilo",
        "description": "Iloko"
      },
      {
        "code": "194",
        "codeName": "ina",
        "description": "Interlingua (International Auxiliary Language Association)"
      },
      {
        "code": "195",
        "codeName": "inc",
        "description": "Indic languages"
      },
      {
        "code": "196",
        "codeName": "ind",
        "description": "Indonesian"
      },
      {
        "code": "197",
        "codeName": "ine",
        "description": "Indo-European languages"
      },
      {
        "code": "198",
        "codeName": "inh",
        "description": "Ingush"
      },
      {
        "code": "199",
        "codeName": "ipk",
        "description": "Inupiaq"
      },
      {
        "code": "200",
        "codeName": "ira",
        "description": "Iranian languages"
      },
      {
        "code": "201",
        "codeName": "iro",
        "description": "Iroquoian languages"
      },
      {
        "code": "202",
        "codeName": "ita",
        "description": "Italian"
      },
      {
        "code": "203",
        "codeName": "jav",
        "description": "Javanese"
      },
      {
        "code": "204",
        "codeName": "jbo",
        "description": "Lojban"
      },
      {
        "code": "205",
        "codeName": "jpn",
        "description": "Japanese"
      },
      {
        "code": "206",
        "codeName": "jpr",
        "description": "Judeo-Persian"
      },
      {
        "code": "207",
        "codeName": "jrb",
        "description": "Judeo-Arabic"
      },
      {
        "code": "208",
        "codeName": "kaa",
        "description": "Kara-Kalpak"
      },
      {
        "code": "209",
        "codeName": "kab",
        "description": "Kabyle"
      },
      {
        "code": "210",
        "codeName": "kac",
        "description": "Kachin; Jingpho"
      },
      {
        "code": "211",
        "codeName": "kal",
        "description": "Kalaallisut; Greenlandic"
      },
      {
        "code": "212",
        "codeName": "kam",
        "description": "Kamba"
      },
      {
        "code": "213",
        "codeName": "kan",
        "description": "Kannada"
      },
      {
        "code": "214",
        "codeName": "kar",
        "description": "Karen languages"
      },
      {
        "code": "215",
        "codeName": "kas",
        "description": "Kashmiri"
      },
      {
        "code": "216",
        "codeName": "kau",
        "description": "Kanuri"
      },
      {
        "code": "217",
        "codeName": "kaw",
        "description": "Kawi"
      },
      {
        "code": "218",
        "codeName": "kaz",
        "description": "Kazakh"
      },
      {
        "code": "219",
        "codeName": "kbd",
        "description": "Kabardian"
      },
      {
        "code": "220",
        "codeName": "kha",
        "description": "Khasi"
      },
      {
        "code": "221",
        "codeName": "khi",
        "description": "Khoisan languages"
      },
      {
        "code": "222",
        "codeName": "khm",
        "description": "Central Khmer"
      },
      {
        "code": "223",
        "codeName": "kho",
        "description": "Khotanese; Sakan"
      },
      {
        "code": "224",
        "codeName": "kik",
        "description": "Kikuyu; Gikuyu"
      },
      {
        "code": "225",
        "codeName": "kin",
        "description": "Kinyarwanda"
      },
      {
        "code": "226",
        "codeName": "kir",
        "description": "Kirghiz; Kyrgyz"
      },
      {
        "code": "227",
        "codeName": "kmb",
        "description": "Kimbundu"
      },
      {
        "code": "228",
        "codeName": "kok",
        "description": "Konkani"
      },
      {
        "code": "229",
        "codeName": "kom",
        "description": "Komi"
      },
      {
        "code": "230",
        "codeName": "kon",
        "description": "Kongo"
      },
      {
        "code": "231",
        "codeName": "kor",
        "description": "Korean"
      },
      {
        "code": "232",
        "codeName": "kos",
        "description": "Kosraean"
      },
      {
        "code": "233",
        "codeName": "kpe",
        "description": "Kpelle"
      },
      {
        "code": "234",
        "codeName": "krc",
        "description": "Karachay-Balkar"
      },
      {
        "code": "235",
        "codeName": "krl",
        "description": "Karelian"
      },
      {
        "code": "236",
        "codeName": "kro",
        "description": "Kru languages"
      },
      {
        "code": "237",
        "codeName": "kru",
        "description": "Kurukh"
      },
      {
        "code": "238",
        "codeName": "kua",
        "description": "Kuanyama; Kwanyama"
      },
      {
        "code": "239",
        "codeName": "kum",
        "description": "Kumyk"
      },
      {
        "code": "240",
        "codeName": "kur",
        "description": "Kurdish"
      },
      {
        "code": "241",
        "codeName": "kut",
        "description": "Kutenai"
      },
      {
        "code": "242",
        "codeName": "lad",
        "description": "Ladino"
      },
      {
        "code": "243",
        "codeName": "lah",
        "description": "Lahnda"
      },
      {
        "code": "244",
        "codeName": "lam",
        "description": "Lamba"
      },
      {
        "code": "245",
        "codeName": "lao",
        "description": "Lao"
      },
      {
        "code": "246",
        "codeName": "lat",
        "description": "Latin"
      },
      {
        "code": "247",
        "codeName": "lav",
        "description": "Latvian"
      },
      {
        "code": "248",
        "codeName": "lez",
        "description": "Lezghian"
      },
      {
        "code": "249",
        "codeName": "lim",
        "description": "Limburgan; Limburger; Limburgish"
      },
      {
        "code": "250",
        "codeName": "lin",
        "description": "Lingala"
      },
      {
        "code": "251",
        "codeName": "lit",
        "description": "Lithuanian"
      },
      {
        "code": "252",
        "codeName": "lol",
        "description": "Mongo"
      },
      {
        "code": "253",
        "codeName": "loz",
        "description": "Lozi"
      },
      {
        "code": "254",
        "codeName": "ltz",
        "description": "Luxembourgish; Letzeburgesch"
      },
      {
        "code": "255",
        "codeName": "lua",
        "description": "Luba-Lulua"
      },
      {
        "code": "256",
        "codeName": "lub",
        "description": "Luba-Katanga"
      },
      {
        "code": "257",
        "codeName": "lug",
        "description": "Ganda"
      },
      {
        "code": "258",
        "codeName": "lui",
        "description": "Luiseno"
      },
      {
        "code": "259",
        "codeName": "lun",
        "description": "Lunda"
      },
      {
        "code": "260",
        "codeName": "luo",
        "description": "Luo (Kenya and Tanzania)"
      },
      {
        "code": "261",
        "codeName": "lus",
        "description": "Lushai"
      },
      {
        "code": "262",
        "codeName": "mac",
        "description": "Macedonian"
      },
      {
        "code": "263",
        "codeName": "mad",
        "description": "Madurese"
      },
      {
        "code": "264",
        "codeName": "mag",
        "description": "Magahi"
      },
      {
        "code": "265",
        "codeName": "mah",
        "description": "Marshallese"
      },
      {
        "code": "266",
        "codeName": "mai",
        "description": "Maithili"
      },
      {
        "code": "267",
        "codeName": "mak",
        "description": "Makasar"
      },
      {
        "code": "268",
        "codeName": "mal",
        "description": "Malayalam"
      },
      {
        "code": "269",
        "codeName": "man",
        "description": "Mandingo"
      },
      {
        "code": "270",
        "codeName": "mao",
        "description": "Maori"
      },
      {
        "code": "271",
        "codeName": "map",
        "description": "Austronesian languages"
      },
      {
        "code": "272",
        "codeName": "mar",
        "description": "Marathi"
      },
      {
        "code": "273",
        "codeName": "mas",
        "description": "Masai"
      },
      {
        "code": "274",
        "codeName": "may",
        "description": "Malay"
      },
      {
        "code": "275",
        "codeName": "mdf",
        "description": "Moksha"
      },
      {
        "code": "276",
        "codeName": "mdr",
        "description": "Mandar"
      },
      {
        "code": "277",
        "codeName": "men",
        "description": "Mende"
      },
      {
        "code": "278",
        "codeName": "mga",
        "description": "Irish, Middle (900-1200)"
      },
      {
        "code": "279",
        "codeName": "mic",
        "description": "Mi'kmaq; Micmac"
      },
      {
        "code": "280",
        "codeName": "min",
        "description": "Minangkabau"
      },
      {
        "code": "281",
        "codeName": "mis",
        "description": "Uncoded languages"
      },
      {
        "code": "282",
        "codeName": "mkh",
        "description": "Mon-Khmer languages"
      },
      {
        "code": "283",
        "codeName": "mlg",
        "description": "Malagasy"
      },
      {
        "code": "284",
        "codeName": "mlt",
        "description": "Maltese"
      },
      {
        "code": "285",
        "codeName": "mnc",
        "description": "Manchu"
      },
      {
        "code": "286",
        "codeName": "mni",
        "description": "Manipuri"
      },
      {
        "code": "287",
        "codeName": "mno",
        "description": "Manobo languages"
      },
      {
        "code": "288",
        "codeName": "moh",
        "description": "Mohawk"
      },
      {
        "code": "289",
        "codeName": "mon",
        "description": "Mongolian"
      },
      {
        "code": "290",
        "codeName": "mos",
        "description": "Mossi"
      },
      {
        "code": "291",
        "codeName": "mul",
        "description": "Multiple languages"
      },
      {
        "code": "292",
        "codeName": "mun",
        "description": "Munda languages"
      },
      {
        "code": "293",
        "codeName": "mus",
        "description": "Creek"
      },
      {
        "code": "294",
        "codeName": "mwl",
        "description": "Mirandese"
      },
      {
        "code": "295",
        "codeName": "mwr",
        "description": "Marwari"
      },
      {
        "code": "296",
        "codeName": "myn",
        "description": "Mayan languages"
      },
      {
        "code": "297",
        "codeName": "myv",
        "description": "Erzya"
      },
      {
        "code": "298",
        "codeName": "nah",
        "description": "Nahuatl languages"
      },
      {
        "code": "299",
        "codeName": "nai",
        "description": "North American Indian languages"
      },
      {
        "code": "300",
        "codeName": "nap",
        "description": "Neapolitan"
      },
      {
        "code": "301",
        "codeName": "nau",
        "description": "Nauru"
      },
      {
        "code": "302",
        "codeName": "nav",
        "description": "Navajo; Navaho"
      },
      {
        "code": "303",
        "codeName": "nbl",
        "description": "Ndebele, South; South Ndebele"
      },
      {
        "code": "304",
        "codeName": "nde",
        "description": "Ndebele, North; North Ndebele"
      },
      {
        "code": "305",
        "codeName": "ndo",
        "description": "Ndonga"
      },
      {
        "code": "306",
        "codeName": "nds",
        "description": "Low German; Low Saxon; German, Low; Saxon, Low"
      },
      {
        "code": "307",
        "codeName": "nep",
        "description": "Nepali"
      },
      {
        "code": "308",
        "codeName": "new",
        "description": "Nepal Bhasa; Newari"
      },
      {
        "code": "309",
        "codeName": "nia",
        "description": "Nias"
      },
      {
        "code": "310",
        "codeName": "nic",
        "description": "Niger-Kordofanian languages"
      },
      {
        "code": "311",
        "codeName": "niu",
        "description": "Niuean"
      },
      {
        "code": "312",
        "codeName": "nno",
        "description": "Norwegian Nynorsk; Nynorsk, Norwegian"
      },
      {
        "code": "313",
        "codeName": "nob",
        "description": "Bokmål, Norwegian; Norwegian Bokmål"
      },
      {
        "code": "314",
        "codeName": "nog",
        "description": "Nogai"
      },
      {
        "code": "315",
        "codeName": "non",
        "description": "Norse, Old"
      },
      {
        "code": "316",
        "codeName": "nor",
        "description": "Norwegian"
      },
      {
        "code": "317",
        "codeName": "nqo",
        "description": "N'Ko"
      },
      {
        "code": "318",
        "codeName": "nso",
        "description": "Pedi; Sepedi; Northern Sotho"
      },
      {
        "code": "319",
        "codeName": "nub",
        "description": "Nubian languages"
      },
      {
        "code": "320",
        "codeName": "nwc",
        "description": "Classical Newari; Old Newari; Classical Nepal Bhasa"
      },
      {
        "code": "321",
        "codeName": "nya",
        "description": "Chichewa; Chewa; Nyanja"
      },
      {
        "code": "322",
        "codeName": "nym",
        "description": "Nyamwezi"
      },
      {
        "code": "323",
        "codeName": "nyn",
        "description": "Nyankole"
      },
      {
        "code": "324",
        "codeName": "nyo",
        "description": "Nyoro"
      },
      {
        "code": "325",
        "codeName": "nzi",
        "description": "Nzima"
      },
      {
        "code": "326",
        "codeName": "oci",
        "description": "Occitan (post 1500); Provençal"
      },
      {
        "code": "327",
        "codeName": "oji",
        "description": "Ojibwa"
      },
      {
        "code": "328",
        "codeName": "ori",
        "description": "Oriya"
      },
      {
        "code": "329",
        "codeName": "orm",
        "description": "Oromo"
      },
      {
        "code": "330",
        "codeName": "osa",
        "description": "Osage"
      },
      {
        "code": "331",
        "codeName": "oss",
        "description": "Ossetian; Ossetic"
      },
      {
        "code": "332",
        "codeName": "ota",
        "description": "Turkish, Ottoman (1500-1928)"
      },
      {
        "code": "333",
        "codeName": "oto",
        "description": "Otomian languages"
      },
      {
        "code": "334",
        "codeName": "paa",
        "description": "Papuan languages"
      },
      {
        "code": "335",
        "codeName": "pag",
        "description": "Pangasinan"
      },
      {
        "code": "336",
        "codeName": "pal",
        "description": "Pahlavi"
      },
      {
        "code": "337",
        "codeName": "pam",
        "description": "Pampanga; Kapampangan"
      },
      {
        "code": "338",
        "codeName": "pan",
        "description": "Panjabi; Punjabi"
      },
      {
        "code": "339",
        "codeName": "pap",
        "description": "Papiamento"
      },
      {
        "code": "340",
        "codeName": "pau",
        "description": "Palauan"
      },
      {
        "code": "341",
        "codeName": "peo",
        "description": "Persian, Old (ca.600-400 B.C.)"
      },
      {
        "code": "342",
        "codeName": "per",
        "description": "Persian"
      },
      {
        "code": "343",
        "codeName": "phi",
        "description": "Philippine languages"
      },
      {
        "code": "344",
        "codeName": "phn",
        "description": "Phoenician"
      },
      {
        "code": "345",
        "codeName": "pli",
        "description": "Pali"
      },
      {
        "code": "346",
        "codeName": "pol",
        "description": "Polish"
      },
      {
        "code": "347",
        "codeName": "pon",
        "description": "Pohnpeian"
      },
      {
        "code": "348",
        "codeName": "por",
        "description": "Portuguese"
      },
      {
        "code": "349",
        "codeName": "pra",
        "description": "Prakrit languages"
      },
      {
        "code": "350",
        "codeName": "pro",
        "description": "Provençal, Old (to 1500)"
      },
      {
        "code": "351",
        "codeName": "pus",
        "description": "Pushto; Pashto"
      },
      {
        "code": "353",
        "codeName": "que",
        "description": "Quechua"
      },
      {
        "code": "354",
        "codeName": "raj",
        "description": "Rajasthani"
      },
      {
        "code": "355",
        "codeName": "rap",
        "description": "Rapanui"
      },
      {
        "code": "356",
        "codeName": "rar",
        "description": "Rarotongan; Cook Islands Maori"
      },
      {
        "code": "357",
        "codeName": "roa",
        "description": "Romance languages"
      },
      {
        "code": "358",
        "codeName": "roh",
        "description": "Romansh"
      },
      {
        "code": "359",
        "codeName": "rom",
        "description": "Romany"
      },
      {
        "code": "360",
        "codeName": "rum",
        "description": "Romanian; Moldavian; Moldovan"
      },
      {
        "code": "361",
        "codeName": "run",
        "description": "Rundi"
      },
      {
        "code": "362",
        "codeName": "rup",
        "description": "Aromanian; Arumanian; Macedo-Romanian"
      },
      {
        "code": "363",
        "codeName": "rus",
        "description": "Russian"
      },
      {
        "code": "364",
        "codeName": "sad",
        "description": "Sandawe"
      },
      {
        "code": "365",
        "codeName": "sag",
        "description": "Sango"
      },
      {
        "code": "366",
        "codeName": "sah",
        "description": "Yakut"
      },
      {
        "code": "367",
        "codeName": "sai",
        "description": "South American Indian (Other)"
      },
      {
        "code": "368",
        "codeName": "sal",
        "description": "Salishan languages"
      },
      {
        "code": "369",
        "codeName": "sam",
        "description": "Samaritan Aramaic"
      },
      {
        "code": "370",
        "codeName": "san",
        "description": "Sanskrit"
      },
      {
        "code": "371",
        "codeName": "sas",
        "description": "Sasak"
      },
      {
        "code": "372",
        "codeName": "sat",
        "description": "Santali"
      },
      {
        "code": "373",
        "codeName": "scn",
        "description": "Sicilian"
      },
      {
        "code": "374",
        "codeName": "sco",
        "description": "Scots"
      },
      {
        "code": "375",
        "codeName": "sel",
        "description": "Selkup"
      },
      {
        "code": "376",
        "codeName": "sem",
        "description": "Semitic languages"
      },
      {
        "code": "377",
        "codeName": "sga",
        "description": "Irish, Old (to 900)"
      },
      {
        "code": "378",
        "codeName": "sgn",
        "description": "Sign Languages"
      },
      {
        "code": "379",
        "codeName": "shn",
        "description": "Shan"
      },
      {
        "code": "380",
        "codeName": "sid",
        "description": "Sidamo"
      },
      {
        "code": "381",
        "codeName": "sin",
        "description": "Sinhala; Sinhalese"
      },
      {
        "code": "382",
        "codeName": "sio",
        "description": "Siouan languages"
      },
      {
        "code": "383",
        "codeName": "sit",
        "description": "Sino-Tibetan languages"
      },
      {
        "code": "384",
        "codeName": "sla",
        "description": "Slavic languages"
      },
      {
        "code": "385",
        "codeName": "slo",
        "description": "Slovak"
      },
      {
        "code": "386",
        "codeName": "slv",
        "description": "Slovenian"
      },
      {
        "code": "387",
        "codeName": "sma",
        "description": "Southern Sami"
      },
      {
        "code": "388",
        "codeName": "sme",
        "description": "Northern Sami"
      },
      {
        "code": "389",
        "codeName": "smi",
        "description": "Sami languages"
      },
      {
        "code": "390",
        "codeName": "smj",
        "description": "Lule Sami"
      },
      {
        "code": "391",
        "codeName": "smn",
        "description": "Inari Sami"
      },
      {
        "code": "392",
        "codeName": "smo",
        "description": "Samoan"
      },
      {
        "code": "393",
        "codeName": "sms",
        "description": "Skolt Sami"
      },
      {
        "code": "394",
        "codeName": "sna",
        "description": "Shona"
      },
      {
        "code": "395",
        "codeName": "snd",
        "description": "Sindhi"
      },
      {
        "code": "396",
        "codeName": "snk",
        "description": "Soninke"
      },
      {
        "code": "397",
        "codeName": "sog",
        "description": "Sogdian"
      },
      {
        "code": "398",
        "codeName": "som",
        "description": "Somali"
      },
      {
        "code": "399",
        "codeName": "son",
        "description": "Songhai languages"
      },
      {
        "code": "400",
        "codeName": "sot",
        "description": "Sotho, Southern"
      },
      {
        "code": "401",
        "codeName": "spa",
        "description": "Spanish; Castilian"
      },
      {
        "code": "402",
        "codeName": "srd",
        "description": "Sardinian"
      },
      {
        "code": "403",
        "codeName": "srn",
        "description": "Sranan Tongo"
      },
      {
        "code": "404",
        "codeName": "srp",
        "description": "Serbian"
      },
      {
        "code": "405",
        "codeName": "srr",
        "description": "Serer"
      },
      {
        "code": "406",
        "codeName": "ssa",
        "description": "Nilo-Saharan languages"
      },
      {
        "code": "407",
        "codeName": "ssw",
        "description": "Swati"
      },
      {
        "code": "408",
        "codeName": "suk",
        "description": "Sukuma"
      },
      {
        "code": "409",
        "codeName": "sun",
        "description": "Sundanese"
      },
      {
        "code": "410",
        "codeName": "sus",
        "description": "Susu"
      },
      {
        "code": "411",
        "codeName": "sux",
        "description": "Sumerian"
      },
      {
        "code": "412",
        "codeName": "swa",
        "description": "Swahili"
      },
      {
        "code": "413",
        "codeName": "swe",
        "description": "Swedish"
      },
      {
        "code": "414",
        "codeName": "syc",
        "description": "Classical Syriac"
      },
      {
        "code": "415",
        "codeName": "syr",
        "description": "Syriac"
      },
      {
        "code": "416",
        "codeName": "tah",
        "description": "Tahitian"
      },
      {
        "code": "417",
        "codeName": "tai",
        "description": "Tai languages"
      },
      {
        "code": "418",
        "codeName": "tam",
        "description": "Tamil"
      },
      {
        "code": "419",
        "codeName": "tat",
        "description": "Tatar"
      },
      {
        "code": "420",
        "codeName": "tel",
        "description": "Telugu"
      },
      {
        "code": "421",
        "codeName": "tem",
        "description": "Timne"
      },
      {
        "code": "422",
        "codeName": "ter",
        "description": "Tereno"
      },
      {
        "code": "423",
        "codeName": "tet",
        "description": "Tetum"
      },
      {
        "code": "424",
        "codeName": "tgk",
        "description": "Tajik"
      },
      {
        "code": "425",
        "codeName": "tgl",
        "description": "Tagalog"
      },
      {
        "code": "426",
        "codeName": "tha",
        "description": "Thai"
      },
      {
        "code": "427",
        "codeName": "tib",
        "description": "Tibetan"
      },
      {
        "code": "428",
        "codeName": "tig",
        "description": "Tigre"
      },
      {
        "code": "429",
        "codeName": "tir",
        "description": "Tigrinya"
      },
      {
        "code": "430",
        "codeName": "tiv",
        "description": "Tiv"
      },
      {
        "code": "431",
        "codeName": "tkl",
        "description": "Tokelau"
      },
      {
        "code": "432",
        "codeName": "tlh",
        "description": "Klingon; tlhIngan-Hol"
      },
      {
        "code": "433",
        "codeName": "tli",
        "description": "Tlingit"
      },
      {
        "code": "434",
        "codeName": "tmh",
        "description": "Tamashek"
      },
      {
        "code": "435",
        "codeName": "tog",
        "description": "Tonga (Nyasa)"
      },
      {
        "code": "436",
        "codeName": "ton",
        "description": "Tonga (Tonga Islands)"
      },
      {
        "code": "437",
        "codeName": "tpi",
        "description": "Tok Pisin"
      },
      {
        "code": "438",
        "codeName": "tsi",
        "description": "Tsimshian"
      },
      {
        "code": "439",
        "codeName": "tsn",
        "description": "Tswana"
      },
      {
        "code": "440",
        "codeName": "tso",
        "description": "Tsonga"
      },
      {
        "code": "441",
        "codeName": "tuk",
        "description": "Turkmen"
      },
      {
        "code": "442",
        "codeName": "tum",
        "description": "Tumbuka"
      },
      {
        "code": "443",
        "codeName": "tup",
        "description": "Tupi languages"
      },
      {
        "code": "444",
        "codeName": "tur",
        "description": "Turkish"
      },
      {
        "code": "445",
        "codeName": "tut",
        "description": "Altaic languages"
      },
      {
        "code": "446",
        "codeName": "tvl",
        "description": "Tuvalu"
      },
      {
        "code": "447",
        "codeName": "twi",
        "description": "Twi"
      },
      {
        "code": "448",
        "codeName": "tyv",
        "description": "Tuvinian"
      },
      {
        "code": "449",
        "codeName": "udm",
        "description": "Udmurt"
      },
      {
        "code": "450",
        "codeName": "uga",
        "description": "Ugaritic"
      },
      {
        "code": "451",
        "codeName": "uig",
        "description": "Uighur; Uyghur"
      },
      {
        "code": "452",
        "codeName": "ukr",
        "description": "Ukrainian"
      },
      {
        "code": "453",
        "codeName": "umb",
        "description": "Umbundu"
      },
      {
        "code": "454",
        "codeName": "und",
        "description": "Undetermined"
      },
      {
        "code": "455",
        "codeName": "urd",
        "description": "Urdu"
      },
      {
        "code": "456",
        "codeName": "uzb",
        "description": "Uzbek"
      },
      {
        "code": "457",
        "codeName": "vai",
        "description": "Vai"
      },
      {
        "code": "458",
        "codeName": "ven",
        "description": "Venda"
      },
      {
        "code": "459",
        "codeName": "vie",
        "description": "Vietnamese"
      },
      {
        "code": "460",
        "codeName": "vol",
        "description": "Volapük"
      },
      {
        "code": "461",
        "codeName": "vot",
        "description": "Votic"
      },
      {
        "code": "462",
        "codeName": "wak",
        "description": "Wakashan languages"
      },
      {
        "code": "463",
        "codeName": "wal",
        "description": "Walamo"
      },
      {
        "code": "464",
        "codeName": "war",
        "description": "Waray"
      },
      {
        "code": "465",
        "codeName": "was",
        "description": "Washo"
      },
      {
        "code": "466",
        "codeName": "wel",
        "description": "Welsh"
      },
      {
        "code": "467",
        "codeName": "wen",
        "description": "Sorbian languages"
      },
      {
        "code": "468",
        "codeName": "wln",
        "description": "Walloon"
      },
      {
        "code": "469",
        "codeName": "wol",
        "description": "Wolof"
      },
      {
        "code": "470",
        "codeName": "xal",
        "description": "Kalmyk; Oirat"
      },
      {
        "code": "471",
        "codeName": "xho",
        "description": "Xhosa"
      },
      {
        "code": "472",
        "codeName": "yao",
        "description": "Yao"
      },
      {
        "code": "473",
        "codeName": "yap",
        "description": "Yapese"
      },
      {
        "code": "474",
        "codeName": "yid",
        "description": "Yiddish"
      },
      {
        "code": "475",
        "codeName": "yor",
        "description": "Yoruba"
      },
      {
        "code": "476",
        "codeName": "ypk",
        "description": "Yupik languages"
      },
      {
        "code": "477",
        "codeName": "zap",
        "description": "Zapotec"
      },
      {
        "code": "478",
        "codeName": "zbl",
        "description": "Blissymbols; Blissymbolics; Bliss"
      },
      {
        "code": "479",
        "codeName": "zen",
        "description": "Zenaga"
      },
      {
        "code": "480",
        "codeName": "zgh",
        "description": "Standard Moroccan Tamazight"
      },
      {
        "code": "481",
        "codeName": "zha",
        "description": "Zhuang; Chuang"
      },
      {
        "code": "482",
        "codeName": "znd",
        "description": "Zande languages"
      },
      {
        "code": "483",
        "codeName": "zul",
        "description": "Zulu"
      },
      {
        "code": "484",
        "codeName": "zun",
        "description": "Zuni"
      },
      {
        "code": "485",
        "codeName": "zxx",
        "description": "No linguistic content; Not applicable"
      },
      {
        "code": "486",
        "codeName": "zza",
        "description": "Zaza; Dimili; Dimli; Kirdki; Kirmanjki; Zazaki"
      }
    ]
  },
  "iso_maintenanceFrequency": {
    "codelistType": "staticList",
    "codelistName": "iso_maintenanceFrequency",
    "source": "ISO",
    "sourceName": "MD_MaintenanceFrequencyCode",
    "extensible": true,
    "description": "frequency with which modifications and deletions are made to the data after it is first produced",
    "codelist": [
      {
        "code": "001",
        "codeName": "continual",
        "description": "data is repeatedly and frequently updated"
      },
      {
        "code": "002",
        "codeName": "daily",
        "description": "data is updated each day"
      },
      {
        "code": "003",
        "codeName": "weekly",
        "description": "data is updated on a weekly basis"
      },
      {
        "code": "004",
        "codeName": "fortnightly",
        "description": "data is updated every two weeks"
      },
      {
        "code": "005",
        "codeName": "monthly",
        "description": "data is updated each month"
      },
      {
        "code": "006",
        "codeName": "quarterly",
        "description": "data is updated every three months"
      },
      {
        "code": "007",
        "codeName": "biannually",
        "description": "data is updated twice each year"
      },
      {
        "code": "008",
        "codeName": "annually",
        "description": "data is updated every year"
      },
      {
        "code": "009",
        "codeName": "asNeeded",
        "description": "data is updated as deemed necessary"
      },
      {
        "code": "010",
        "codeName": "irregular",
        "description": "data is updated in intervals that are uneven in duration"
      },
      {
        "code": "011",
        "codeName": "notPlanned",
        "description": "there are no plans to update the data"
      },
      {
        "code": "012",
        "codeName": "unknown",
        "description": "frequency of maintenance for the data is not known"
      },
      {
        "code": "013",
        "codeName": "periodic",
        "description": "resource is updated at regular intervals"
      },
      {
        "code": "014",
        "codeName": "semimonthly",
        "description": "resource updated twice monthly"
      },
      {
        "code": "015",
        "codeName": "biennially",
        "description": "resource is updated every 2 years"
      }
    ]
  },
  "iso_mediumFormat": {
    "codelistType": "staticList",
    "codelistName": "iso_mediumFormat",
    "source": "ISO",
    "sourceName": "MD_MediumFormatCode",
    "extensible": true,
    "description": "method used to write to the medium",
    "codelist": [
      {
        "code": "001",
        "codeName": "cpio",
        "description": "CoPy In / Out (UNIX file format and command)"
      },
      {
        "code": "002",
        "codeName": "tar",
        "description": "Tape ARchive"
      },
      {
        "code": "003",
        "codeName": "highSierra",
        "description": "high sierra file system"
      },
      {
        "code": "004",
        "codeName": "iso9660",
        "description": "information processing – volume and file structure of CD-ROM"
      },
      {
        "code": "005",
        "codeName": "iso9660RockRidge",
        "description": "rock ridge interchange protocol (UNIX)"
      },
      {
        "code": "006",
        "codeName": "iso9660AppleHFS",
        "description": "hierarchical file system (Macintosh)"
      },
      {
        "code": "007",
        "codeName": "udf",
        "description": "universal disk format"
      }
    ]
  },
  "iso_mediumName": {
    "codelistType": "staticList",
    "codelistName": "iso_mediumName",
    "source": "ISO",
    "sourceName": "MD_MediumNameCode",
    "extensible": true,
    "description": "name of the medium",
    "codelist": [
      {
        "code": "001",
        "codeName": "cdRom",
        "description": "read-only optical disk"
      },
      {
        "code": "002",
        "codeName": "dvd",
        "description": "digital versatile disk"
      },
      {
        "code": "003",
        "codeName": "dvdRom",
        "description": "digital versatile disk, read only"
      },
      {
        "code": "004",
        "codeName": "3halfInchFloppy",
        "description": "3,5 inch magnetic disk"
      },
      {
        "code": "005",
        "codeName": "5quarterInchFloppy",
        "description": "5,25 inch magnetic disk"
      },
      {
        "code": "006",
        "codeName": "7trackTape",
        "description": "7 track magnetic tape"
      },
      {
        "code": "007",
        "codeName": "9trackTape",
        "description": "9 track magnetic tape"
      },
      {
        "code": "008",
        "codeName": "3480Cartridge",
        "description": "3480 cartridge tape drive"
      },
      {
        "code": "009",
        "codeName": "3490Cartridge",
        "description": "3490 cartridge tape drive"
      },
      {
        "code": "010",
        "codeName": "3580Cartridge",
        "description": "3580 cartridge tape drive"
      },
      {
        "code": "011",
        "codeName": "4mmCartridge",
        "description": "4 millimetre magnetic tape"
      },
      {
        "code": "012",
        "codeName": "8mmCartridge",
        "description": "8 millimetre magnetic tape"
      },
      {
        "code": "013",
        "codeName": "1quarterInchCartridgeTape",
        "description": "0,25 inch magnetic tape"
      },
      {
        "code": "014",
        "codeName": "digitalLinearTape",
        "description": "half inch cartridge streaming tape drive"
      },
      {
        "code": "015",
        "codeName": "onLine",
        "description": "direct computer linkage"
      },
      {
        "code": "016",
        "codeName": "satellite",
        "description": "linkage through a satellite communication system"
      },
      {
        "code": "017",
        "codeName": "telephoneLink",
        "description": "communication through a telephone network"
      },
      {
        "code": "018",
        "codeName": "hardcopy",
        "description": "pamphlet or leaflet giving descriptive information"
      },
      {
        "code": "adiwg001",
        "codeName": "bluRay",
        "description": "Blu-ray digital versatile disk"
      },
      {
        "code": "adiwg002",
        "codeName": "usbHardDrive",
        "description": "USB hard drive disk or solid state"
      },
      {
        "code": "adiwg003",
        "codeName": "memoryStick",
        "description": "USB memory stick"
      },
      {
        "code": "adiwg004",
        "codeName": "sdCard",
        "description": "SD memory card"
      },
      {
        "code": "adiwg005",
        "codeName": "flashCard",
        "description": "compact flash memory card"
      },
      {
        "code": "adiwg006",
        "codeName": "film",
        "description": "8mm, 16mm, 35mm, 120 and other positive and negative camera film sizes"
      },
      {
        "code": "adiwg007",
        "codeName": "microfilm",
        "description": "microfilm"
      },
      {
        "code": "adiwg008",
        "codeName": "internet",
        "description": "internet"
      }
    ]
  },
  "iso_objectiveTypeCode": {
    "codelistType": "staticList",
    "codelistName": "iso_objectiveTypeCode",
    "source": "ISO",
    "sourceName": "MI_objectiveTypeCode",
    "extensible": true,
    "description": "temporal persistence of collection objective",
    "codelist": [
      {
        "code": "001",
        "codeName": "instantaneousCollection",
        "description": "single instance of collection"
      },
      {
        "code": "002",
        "codeName": "persistentView",
        "description": "multiple instances of collection"
      },
      {
        "code": "003",
        "codeName": "survey",
        "description": "collection over specified domain"
      }
    ]
  },
  "iso_obligation": {
    "codelistType": "staticList",
    "codelistName": "iso_obligation",
    "source": "ISO",
    "sourceName": "MD_ObligationCode",
    "extensible": false,
    "description": "obligation of the element or entity (enumeration - cannot be extended)",
    "codelist": [
      {
        "code": "001",
        "codeName": "mandatory",
        "description": "element is always required"
      },
      {
        "code": "002",
        "codeName": "optional",
        "description": "element is not required"
      },
      {
        "code": "003",
        "codeName": "conditional",
        "description": "element is required when a specific condition is met"
      }
    ]
  },
  "iso_onlineFunction": {
    "codelistType": "staticList",
    "codelistName": "iso_onlineFunction",
    "source": "ISO",
    "sourceName": "CI_OnLineFunctionCode",
    "extensible": true,
    "description": "function performed by the resource",
    "codelist": [
      {
        "code": "001",
        "codeName": "download",
        "description": "online instructions for transferring data from one storage device or system to another"
      },
      {
        "code": "002",
        "codeName": "information",
        "description": "online information about the resource"
      },
      {
        "code": "003",
        "codeName": "offlineAccess",
        "description": "online instructions for requesting the resource from the provider"
      },
      {
        "code": "004",
        "codeName": "order",
        "description": "online order process for obtaining the resource"
      },
      {
        "code": "005",
        "codeName": "search",
        "description": "online search interface for seeking out information about the resource"
      },
      {
        "code": "006",
        "codeName": "completeMetadata",
        "description": "complete metadata provided"
      },
      {
        "code": "007",
        "codeName": "browseGraphic",
        "description": "browse graphic provided"
      },
      {
        "code": "008",
        "codeName": "upload",
        "description": "online resource upload capability provided"
      },
      {
        "code": "009",
        "codeName": "emailService",
        "description": "online email service provided"
      },
      {
        "code": "010",
        "codeName": "browsing",
        "description": "online browsing provided"
      },
      {
        "code": "011",
        "codeName": "fileAccess",
        "description": "online file access provided"
      },
      {
        "code": "adiwg001",
        "codeName": "webApplication",
        "description": "online web application or data forms"
      },
      {
        "code": "adiwg002",
        "codeName": "doi",
        "description": "digital object identifier URL"
      },
      {
        "code": "adiwg003",
        "codeName": "orcid",
        "description": "Open Researcher and Contributor ID URL"
      },
      {
        "code": "adiwg004",
        "codeName": "dataUri",
        "description": "data file encoded per RFC 2397, the data URL scheme"
      }
    ]
  },
  "iso_operationTypeCode": {
    "codelistType": "staticList",
    "codelistName": "iso_operationTypeCode",
    "source": "ISO",
    "sourceName": "MI_OperationTypeCode",
    "extensible": true,
    "description": "code indicating whether the data contained in this packet is real (originates from live-fly or other non-simulated operational sources), simulated (originates from target simulator sources), or synthesized (a mix of real and simulated data).",
    "codelist": [
      {
        "code": "001",
        "codeName": "instantaneousCollection",
        "description": "originates from live-fly or other non-simulated operational source"
      },
      {
        "code": "002",
        "codeName": "persistentView",
        "description": "originates from target simulator sources"
      },
      {
        "code": "003",
        "codeName": "survey",
        "description": "mix of real and simulated data"
      }
    ]
  },
  "iso_pixelOrientation": {
    "codelistType": "staticList",
    "codelistName": "iso_pixelOrientation",
    "source": "ISO",
    "sourceName": "MD_PixelOrientationCode",
    "extensible": false,
    "description": "point in a pixel corresponding to the Earth location of the pixel",
    "codelist": [
      {
        "code": "001",
        "codeName": "centre",
        "description": "point halfway between the lower left and the upper right of the pixel"
      },
      {
        "code": "002",
        "codeName": "lowerLeft",
        "description": "the corner in the pixel closest to the origin of the SRS; if two are at the same distance from the origin, the one with the smallest x-value"
      },
      {
        "code": "003",
        "codeName": "lowerRight",
        "description": "next corner counterclockwise from the lower left"
      },
      {
        "code": "004",
        "codeName": "upperRight",
        "description": "next corner counterclockwise from the lower right"
      },
      {
        "code": "005",
        "codeName": "upperLeft",
        "description": "next corner counterclockwise from the upper right"
      }
    ]
  },
  "iso_polarisationOrientationCode": {
    "codelistType": "staticList",
    "codelistName": "iso_polarisationOrientationCode",
    "source": "ISO",
    "sourceName": "MI_PolarisationOrientationCode",
    "extensible": true,
    "description": "polarisation of the antenna relative to the waveform",
    "codelist": [
      {
        "code": "001",
        "codeName": "horizontal",
        "description": "polarization of the sensor oriented in the horizontal plane in relation to swath direction"
      },
      {
        "code": "002",
        "codeName": "vertical",
        "description": "polarization of the sensor oriented in the vertical plane in relation to swath direction"
      },
      {
        "code": "003",
        "codeName": "leftCircular",
        "description": "polarization of the sensor oriented in the left circular plane in relation to swath direction"
      },
      {
        "code": "004",
        "codeName": "rightCircular",
        "description": "polarization of the sensor oriented in the right circular plane in relation to swath direction"
      },
      {
        "code": "005",
        "codeName": "theta",
        "description": "polarization of the sensor oriented in the angle between +90° and 0° parallel to swath direction"
      },
      {
        "code": "006",
        "codeName": "phi",
        "description": "polarization of the sensor oriented in the +90° and 0° perpendicular to swath direction"
      }
    ]
  },
  "iso_presentationForm": {
    "codelistType": "staticList",
    "codelistName": "iso_presentationForm",
    "source": "ISO",
    "sourceName": "CI_PresentationFormCode",
    "extensible": true,
    "description": "mode in which the data is represented",
    "codelist": [
      {
        "code": "001",
        "codeName": "documentDigital",
        "description": "digital representation of a primarily textual item (can contain illustrations also)"
      },
      {
        "code": "002",
        "codeName": "documentHardcopy",
        "description": "representation of a primarily textual item (can contain illustrations also) on paper, photographic material, or other media"
      },
      {
        "code": "003",
        "codeName": "imageDigital",
        "description": "likeness of natural or man-made features, objects, and activities acquired through the sensing of visual or any other segment of the electromagnetic spectrum by sensors, such as thermal infrared, and high resolution radar and stored in digital format"
      },
      {
        "code": "004",
        "codeName": "imageHardcopy",
        "description": "likeness of natural or man-made features, objects, and activities acquired through the sensing of visual or any other segment of the electromagnetic spectrum by sensors, such as thermal infrared, and high resolution radar and reproduced on paper, photographic material, or other media for use directly by the human user"
      },
      {
        "code": "005",
        "codeName": "mapDigital",
        "description": "map represented in raster or vector form"
      },
      {
        "code": "006",
        "codeName": "mapHardcopy",
        "description": "map printed on paper, photographic material, or other media for use directly by the human user"
      },
      {
        "code": "007",
        "codeName": "modelDigital",
        "description": "multi-dimensional digital representation of a feature, process, etc."
      },
      {
        "code": "008",
        "codeName": "modelHardcopy",
        "description": "3-dimensional, physical model"
      },
      {
        "code": "009",
        "codeName": "profileDigital",
        "description": "vertical cross-section in digital form"
      },
      {
        "code": "010",
        "codeName": "profileHardcopy",
        "description": "vertical cross-section printed on paper, etc."
      },
      {
        "code": "011",
        "codeName": "tableDigital",
        "description": "digital representation of facts or figures systematically displayed, especially in columns"
      },
      {
        "code": "012",
        "codeName": "tableHardcopy",
        "description": "representation of facts or figures systematically displayed, especially in columns, printed on paper, photographic material, or other media"
      },
      {
        "code": "013",
        "codeName": "videoDigital",
        "description": "digital video recording"
      },
      {
        "code": "014",
        "codeName": "videoHardcopy",
        "description": "video recording on film"
      },
      {
        "code": "015",
        "codeName": "audioDigital",
        "description": "digital audio recording"
      },
      {
        "code": "016",
        "codeName": "audioHardcopy",
        "description": "audio recording delivered by analog media, such as a magnetic tape"
      },
      {
        "code": "017",
        "codeName": "multimediaDigitial",
        "description": "information representation using simultaneously various digital modes for text, sound, image"
      },
      {
        "code": "018",
        "codeName": "multimediaHardcopy",
        "description": "information representation using simultaneously various analog modes for text, sound, image"
      },
      {
        "code": "019",
        "codeName": "physicalObject",
        "description": "a physical object. EXAMPLE Rock or mineral sample, microscope slide."
      },
      {
        "code": "020",
        "codeName": "diagramDigital",
        "description": "information represented graphically by charts such as pie chart, bar chart, and other type of diagrams and recorded in digital format"
      },
      {
        "code": "021",
        "codeName": "diagramHardcopy",
        "description": "information represented graphically by charts such as pie chart, bar chart, and other type of diagrams and printed on paper, photographic material, or other media"
      },
      {
        "code": "adiwg001",
        "codeName": "webSite",
        "description": "information represented in a series of web pages"
      },
      {
        "code": "adiwg002",
        "codeName": "webService",
        "description": "information represented as series of HTML end points or remote procedure calls"
      },
      {
        "code": "adiwg003",
        "codeName": "databaseDigital",
        "description": "information organized in a digital database"
      }
    ]
  },
  "iso_priorityCode": {
    "codelistType": "staticList",
    "codelistName": "iso_priorityCode",
    "source": "ISO",
    "sourceName": "MI_PriorityCode",
    "extensible": true,
    "description": "ordered list of priorities",
    "codelist": [
      {
        "code": "001",
        "codeName": "critical",
        "description": "decisive importance"
      },
      {
        "code": "002",
        "codeName": "highImportance",
        "description": "requires resources to be made available"
      },
      {
        "code": "003",
        "codeName": "mediumImportance",
        "description": "normal operation priority"
      },
      {
        "code": "004",
        "codeName": "lowImportance",
        "description": "to be completed when resources are available"
      }
    ]
  },
  "iso_progress": {
    "codelistType": "staticList",
    "codelistName": "iso_progress",
    "source": "ISO",
    "sourceName": "MD_ProgressCode",
    "extensible": true,
    "description": "status of the dataset or progress of a review",
    "codelist": [
      {
        "code": "001",
        "codeName": "completed",
        "description": "production of the data has been completed"
      },
      {
        "code": "002",
        "codeName": "historicalArchive",
        "description": "data has been stored in an offline storage facility"
      },
      {
        "code": "003",
        "codeName": "obsolete",
        "description": "data is no longer relevant"
      },
      {
        "code": "004",
        "codeName": "onGoing",
        "description": "data is continually being updated"
      },
      {
        "code": "005",
        "codeName": "planned",
        "description": "fixed date has been established upon or by which the data will be created or updated"
      },
      {
        "code": "006",
        "codeName": "required",
        "description": "data needs to be generated or updated"
      },
      {
        "code": "007",
        "codeName": "underDevelopment",
        "description": "resource (data or project) is currently in the process of being created"
      },
      {
        "code": "008",
        "codeName": "final",
        "description": "progress concluded and no changes will be accepted"
      },
      {
        "code": "009",
        "codeName": "pending",
        "description": "committed to, but not yet addressed"
      },
      {
        "code": "010",
        "codeName": "retired",
        "description": "item is no longer recommended for use. It has not been superseded by another item"
      },
      {
        "code": "011",
        "codeName": "superseded",
        "description": "replaced by new"
      },
      {
        "code": "012",
        "codeName": "tentative",
        "description": "provisional changes likely before resource becomes final or complete"
      },
      {
        "code": "013",
        "codeName": "valid",
        "description": "acceptable under specific conditions"
      },
      {
        "code": "014",
        "codeName": "accepted",
        "description": "agreed to by sponsor"
      },
      {
        "code": "015",
        "codeName": "notAccepted",
        "description": "rejected by sponsor"
      },
      {
        "code": "016",
        "codeName": "withdrawn",
        "description": "removed from consideration"
      },
      {
        "code": "017",
        "codeName": "proposed",
        "description": "suggested that development needs to be undertaken"
      },
      {
        "code": "018",
        "codeName": "deprecated",
        "description": "resource superseded and will become obsolete, use only for historical purposes"
      },
      {
        "code": "adiwg001",
        "codeName": "funded",
        "description": "resource has been approved and secured funding"
      },
      {
        "code": "adiwg002",
        "codeName": "cancelled",
        "description": "project has been canceled"
      },
      {
        "code": "adiwg003",
        "codeName": "suspended",
        "description": "project has been placed on hold but is expected to resume at a latter date"
      }
    ]
  },
  "iso_referenceSystemType": {
    "codelistType": "staticList",
    "codelistName": "iso_referenceSystemType",
    "source": "ISO",
    "sourceName": "MD_ReferenceSystemTypeCode",
    "extensible": true,
    "description": "defines type of reference system used",
    "codelist": [
      {
        "code": "001",
        "codeName": "compoundEngineeringParametric",
        "description": "compound spatio-parametric coordinate reference system containing an engineering coordinate reference system and a parametric reference system; EXAMPLE [local] x, y, pressure"
      },
      {
        "code": "002",
        "codeName": "compoundEngineeringParametricTemporal",
        "description": "compound spatio-parametric-temporal coordinate reference system containing an engineering, a parametric, and a temporal coordinate reference system EXAMPLE [local] x, y, pressure, time"
      },
      {
        "code": "003",
        "codeName": "compoundEngineeringTemporal",
        "description": "compound spatio-temporal coordinate reference system containing an engineering and a temporal coordinate reference system EXAMPLE [local] x, y, time"
      },
      {
        "code": "004",
        "codeName": "compoundEngineeringVertical",
        "description": "compound spatial reference system containing a horizontal engineering coordinate reference system and a vertical coordinate reference system EXAMPLE [local] x, y, height"
      },
      {
        "code": "005",
        "codeName": "compoundEngineeringVerticalTemporal",
        "description": "compound spatio-temporal coordinate reference system containing an engineering, a vertical, and a temporal coordinate reference system EXAMPLE [local] x, y, height, time"
      },
      {
        "code": "006",
        "codeName": "compoundGeographic2DParametric",
        "description": "compound spatio-parametric coordinate reference system containing a 2 dimensional geographic horizontal coordinate reference system and a parametric reference system EXAMPLE latitude, longitude, pressure"
      },
      {
        "code": "007",
        "codeName": "compoundGeographic2DParametricTemporal",
        "description": "compound spatio-parametric-temporal coordinate reference system containing a 2 dimensional geographic horizontal, a parametric and a temporal coordinate reference system EXAMPLE latitude, longitude, pressure, time"
      },
      {
        "code": "008",
        "codeName": "compoundGeographic2DTemporal",
        "description": "compound spatio-temporal coordinate reference system containing a 2 dimensional geographic horizontal coordinate reference system and a temporal reference system EXAMPLE latitude, longitude, time"
      },
      {
        "code": "009",
        "codeName": "compoundGeographic2DVertical",
        "description": "compound coordinate reference system in which one constituent coordinate reference system is a horizontal geodetic coordinate reference system and one is a vertical coordinate reference system EXAMPLE latitude, longitude, [gravity-related] height or depth"
      },
      {
        "code": "010",
        "codeName": "compoundGeographicVerticalTemporal",
        "description": "compound spatio-temporal coordinate reference system containing a 2 dimensional geographic horizontal, a vertical, and a temporal coordinate reference system EXAMPLE latitude, longitude, height, time"
      },
      {
        "code": "011",
        "codeName": "compoundGeographic3DTemporal",
        "description": "compound spatio-temporal coordinate reference system containing a 3 dimensional geographic and a temporal coordinate reference system EXAMPLE latitude, longitude, ellipsoidal height, time"
      },
      {
        "code": "012",
        "codeName": "compoundProjected2DParametric",
        "description": "compound spatio-parametric coordinate reference system containing a projected horizontal coordinate reference system and a parametric reference system EXAMPLE easting, northing, density"
      },
      {
        "code": "013",
        "codeName": "compoundProjected2DParametricTemporal",
        "description": "compound spatio-parametric-temporal coordinate reference system containing a projected horizontal, a parametric, and a temporal coordinate reference system EXAMPLE easting, northing, density, time"
      },
      {
        "code": "014",
        "codeName": "compoundProjectedTemporal",
        "description": "compound spatio-temporal coordinate reference system containing a projected horizontal and a temporal coordinate reference system EXAMPLE easting, northing, time"
      },
      {
        "code": "015",
        "codeName": "compoundProjectedVertical",
        "description": "compound spatial reference system containing a horizontal projected coordinate reference system and a vertical coordinate reference system EXAMPLE easting, northing, [gravity-related] height or depth"
      },
      {
        "code": "016",
        "codeName": "compoundProjectedVerticalTemporal",
        "description": "compound spatio-temporal coordinate reference system containing a projected horizontal, a vertical, and a temporal coordinate reference system EXAMPLE easting, northing, height, time"
      },
      {
        "code": "017",
        "codeName": "engineering",
        "description": "coordinate reference system based on an engineering datum (datum describing the relationship of a coordinate system to a local reference) EXAMPLE [local] x,y"
      },
      {
        "code": "018",
        "codeName": "engineeringDesign",
        "description": "engineering coordinate reference system in which the base representation of a moving object is specified EXAMPLE [local] x,y 19. engineeringImage engineeringImage coordinate reference system"
      },
      {
        "code": "019",
        "codeName": "engineeringImage",
        "description": "coordinate reference system based on an image datum (engineering datum which defines the relationship of a coordinate system to an image) EXAMPLE row, column"
      },
      {
        "code": "020",
        "codeName": "geodeticGeocentric",
        "description": "geodetic CRS having a Cartesian 3D coordinate system EXAMPLE [geocentric] X,Y,Z"
      },
      {
        "code": "021",
        "codeName": "geodeticGeographic2D",
        "description": "geodetic CRS having an ellipsoidal 2D coordinate system EXAMPLE latitude, longitude"
      },
      {
        "code": "022",
        "codeName": "geodeticGeographic3D",
        "description": "geodetic CRS having an ellipsoidal 3D coordinate system EXAMPLE latitude, longitude, ellipsoidal height"
      },
      {
        "code": "023",
        "codeName": "geographicIdentifier",
        "description": "spatial reference in the form of a label or code that identifies a location EXAMPLE post code"
      },
      {
        "code": "024",
        "codeName": "linear",
        "description": "reference system that identifies a location by reference to a segment of a linear geographic feature and distance along that segment from a given point EXAMPLE x km along road"
      },
      {
        "code": "025",
        "codeName": "parametric",
        "description": "coordinate reference system based on a parametric datum (datum describing the relationship of a parametric coordinate system to an object) EXAMPLE pressure"
      },
      {
        "code": "026",
        "codeName": "projected",
        "description": "coordinate reference system derived from a two-dimensional geodetic coordinate reference system by applying a map projection EXAMPLE easting, northing"
      },
      {
        "code": "027",
        "codeName": "temporal",
        "description": "reference system against which time is measured EXAMPLE time"
      },
      {
        "code": "028",
        "codeName": "vertical",
        "description": "one-dimensional coordinate reference system based on a vertical datum (datum describing the relation of gravity-related heights or depths to the Earth) EXAMPLE [gravity-related] height or depth"
      }
    ]
  },
  "iso_restriction": {
    "codelistType": "staticList",
    "codelistName": "iso_restriction",
    "source": "ISO",
    "sourceName": "MD_RestrictionCode",
    "extensible": true,
    "description": "limitation(s) placed upon the access or use of the data)",
    "codelist": [
      {
        "code": "001",
        "codeName": "copyright",
        "description": "exclusive right to the publication, production, or sale of the rights to a literary, dramatic, musical, or artistic work, or to the use of a commercial print or label, granted by law for a specified period of time to an author, composer, artist, distributor"
      },
      {
        "code": "002",
        "codeName": "patent",
        "description": "government has granted exclusive right to make, sell, use or license an invention or discovery"
      },
      {
        "code": "003",
        "codeName": "patentPending",
        "description": "produced or sold information awaiting a patent"
      },
      {
        "code": "004",
        "codeName": "trademark",
        "description": "a name, symbol, or other device identifying a product, officially registered and legally restricted to the use of the owner or manufacturer"
      },
      {
        "code": "005",
        "codeName": "license",
        "description": "formal permission to do something"
      },
      {
        "code": "006",
        "codeName": "intellectualPropertyRights",
        "description": "rights to financial benefit from and control of distribution of non-tangible property that is a result of creativity"
      },
      {
        "code": "007",
        "codeName": "restricted",
        "description": "withheld from general circulation or disclosure"
      },
      {
        "code": "008",
        "codeName": "otherRestrictions",
        "description": "limitation not listed"
      },
      {
        "code": "009",
        "codeName": "unrestricted",
        "description": "no constraints exist"
      },
      {
        "code": "010",
        "codeName": "licenceUnrestricted",
        "description": "formal permission not required to use the resource"
      },
      {
        "code": "011",
        "codeName": "licenceEndUser",
        "description": "formal permission required for a person or an entity to use the resource and that may differ from the person that orders or purchases it"
      },
      {
        "code": "012",
        "codeName": "licenceDistributor",
        "description": "formal permission required for a person or an entity to commercialize or distribute the resource"
      },
      {
        "code": "013",
        "codeName": "private",
        "description": "protects rights of individual or organisations from observation, intrusion, or attention of others"
      },
      {
        "code": "014",
        "codeName": "statutory",
        "description": "prescribed by law"
      },
      {
        "code": "015",
        "codeName": "confidential",
        "description": "not available to the public. NOTE Contains information that could be prejudicial to a commercial, industrial, or national interest."
      },
      {
        "code": "016",
        "codeName": "sensitiveButUnclassified",
        "description": "although unclassified, requires strict controls over its distribution."
      },
      {
        "code": "017",
        "codeName": "in-confidence",
        "description": "with trust"
      },
      {
        "code": "adiwg001",
        "codeName": "threatenedOrEndangered",
        "description": "information could risk threatened or endangered species"
      },
      {
        "code": "adiwg002",
        "codeName": "traditionalKnowledge",
        "description": "information protected by American Indian or Alaska Native rights or culture"
      },
      {
        "code": "adiwg003",
        "codeName": "personallyIdentifiableInformation",
        "description": "information that can be used to identify an individual"
      }
    ]
  },
  "iso_role": {
    "codelistType": "staticList",
    "codelistName": "iso_role",
    "source": "ISO",
    "sourceName": "CI_RoleCode",
    "extensible": true,
    "description": "function performed by the responsible party",
    "codelist": [
      {
        "code": "001",
        "codeName": "resourceProvider",
        "description": "party that supplies the resource"
      },
      {
        "code": "002",
        "codeName": "custodian",
        "description": "party that accepts accountability and responsibility for the data and ensures appropriate care and maintenance of the resource"
      },
      {
        "code": "003",
        "codeName": "owner",
        "description": "party that owns the resource"
      },
      {
        "code": "004",
        "codeName": "user",
        "description": "party that uses the resource"
      },
      {
        "code": "005",
        "codeName": "distributor",
        "description": "party that distributes the resource"
      },
      {
        "code": "006",
        "codeName": "originator",
        "description": "party that created the resource"
      },
      {
        "code": "007",
        "codeName": "pointOfContact",
        "description": "party who can be contacted for acquiring knowledge about or acquisition of the resource"
      },
      {
        "code": "008",
        "codeName": "principalInvestigator",
        "description": "key party responsible for gathering information and conducting research"
      },
      {
        "code": "009",
        "codeName": "processor",
        "description": "party who has processed the data in a manner such that the resource has been modified"
      },
      {
        "code": "010",
        "codeName": "publisher",
        "description": "party who published the resource"
      },
      {
        "code": "011",
        "codeName": "author",
        "description": "party who authored the resource"
      },
      {
        "code": "012",
        "codeName": "sponsor",
        "description": "party who speaks for the resource"
      },
      {
        "code": "013",
        "codeName": "coAuthor",
        "description": "party who jointly authors the resource"
      },
      {
        "code": "014",
        "codeName": "collaborator",
        "description": "party who assists with the generation of the resource other than the principal investigator"
      },
      {
        "code": "015",
        "codeName": "editor",
        "description": "party who reviewed or modified the resource to improve the content"
      },
      {
        "code": "016",
        "codeName": "mediator",
        "description": "a class of entity that mediates access to the resource and for whom the resource is intended or useful"
      },
      {
        "code": "017",
        "codeName": "rightsHolder",
        "description": "party owning or managing rights over the resource"
      },
      {
        "code": "018",
        "codeName": "contributor",
        "description": "party contributing to the resource"
      },
      {
        "code": "019",
        "codeName": "funder",
        "description": "party providing monetary support for the resource"
      },
      {
        "code": "020",
        "codeName": "stakeholder",
        "description": "party who has an interest in the resource or the use of the resource"
      },
      {
        "code": "adiwg001",
        "codeName": "administrator",
        "description": "party who has administrative oversight for the resource"
      },
      {
        "code": "adiwg002",
        "codeName": "client",
        "description": "agency or person requesting a project or data collection"
      },
      {
        "code": "adiwg003",
        "codeName": "logistics",
        "description": "entity that provides logistics support"
      },
      {
        "code": "adiwg004",
        "codeName": "coPrincipalInvestigator",
        "description": "party who is jointly responsible for gathering information and conducting research"
      },
      {
        "code": "adiwg005",
        "codeName": "observer",
        "description": "party who determines the identification of a species, mineral, or other sample"
      },
      {
        "code": "adiwg006",
        "codeName": "curator",
        "description": "party who serves as curator for specimens deposited in a repository"
      }
    ]
  },
  "iso_scope": {
    "codelistType": "staticList",
    "codelistName": "iso_scope",
    "source": "ISO",
    "sourceName": "MD_ScopeCode",
    "extensible": true,
    "description": "class of information to which the referencing entity applies",
    "codelist": [
      {
        "code": "001",
        "codeName": "attribute",
        "description": "information applies to the attribute class"
      },
      {
        "code": "002",
        "codeName": "attributeType",
        "description": "information applies to the characteristic of a feature"
      },
      {
        "code": "003",
        "codeName": "collectionHardware",
        "description": "information applies to the collection hardware class"
      },
      {
        "code": "004",
        "codeName": "collectionSession",
        "description": "information applies to the collection session"
      },
      {
        "code": "005",
        "codeName": "dataset",
        "description": "information applies to a geographic dataset"
      },
      {
        "code": "006",
        "codeName": "series",
        "description": "information applies to the series"
      },
      {
        "code": "007",
        "codeName": "nonGeographicDataset",
        "description": "information applies to non-geographic data"
      },
      {
        "code": "008",
        "codeName": "dimensionGroup",
        "description": "information applies to a dimension group"
      },
      {
        "code": "009",
        "codeName": "feature",
        "description": "information applies to a feature"
      },
      {
        "code": "010",
        "codeName": "featureType",
        "description": "information applies to a feature type"
      },
      {
        "code": "011",
        "codeName": "propertyType",
        "description": "information applies to a property type"
      },
      {
        "code": "012",
        "codeName": "fieldSession",
        "description": "information applies to a field session"
      },
      {
        "code": "013",
        "codeName": "software",
        "description": "information applies to a computer program or routine"
      },
      {
        "code": "014",
        "codeName": "service",
        "description": "information applies to a capability which a service provider entity makes available to a service user entity through a set of interfaces that define a behaviour, such as a use case"
      },
      {
        "code": "015",
        "codeName": "model",
        "description": "information applies to a copy or imitation of an existing or hypothetical object"
      },
      {
        "code": "016",
        "codeName": "tile",
        "description": "information applies to a tile, a spatial subset of geographic data"
      },
      {
        "code": "017",
        "codeName": "metadata",
        "description": "information applies to metadata"
      },
      {
        "code": "018",
        "codeName": "initiative",
        "description": "information applies to an initiative"
      },
      {
        "code": "019",
        "codeName": "sample",
        "description": "information applies to a sample"
      },
      {
        "code": "020",
        "codeName": "document",
        "description": "information applies to a document"
      },
      {
        "code": "021",
        "codeName": "repository",
        "description": "information applies to a repository"
      },
      {
        "code": "022",
        "codeName": "aggregate",
        "description": "information applies to an aggregate resource"
      },
      {
        "code": "023",
        "codeName": "product",
        "description": "metadata describing an ISO 19131 data product specification"
      },
      {
        "code": "024",
        "codeName": "collection",
        "description": "information applies to an unstructured set"
      },
      {
        "code": "025",
        "codeName": "coverage",
        "description": "information applies to a coverage"
      },
      {
        "code": "026",
        "codeName": "application",
        "description": "information resource hosted on a specific set of hardware and accessible over a network"
      },
      {
        "code": "adiwg001",
        "codeName": "sciencePaper",
        "description": "document based on an experiment or research"
      },
      {
        "code": "adiwg002",
        "codeName": "userGuide",
        "description": "operating manual for users"
      },
      {
        "code": "adiwg003",
        "codeName": "dataDictionary",
        "description": "element and entity definitions"
      },
      {
        "code": "adiwg004",
        "codeName": "website",
        "description": "information applies to a website such as a thematic portal"
      },
      {
        "code": "adiwg005",
        "codeName": "publication",
        "description": "information applies to a published document"
      },
      {
        "code": "adiwg006",
        "codeName": "report",
        "description": "information applies to an unpublished document"
      },
      {
        "code": "adiwg007",
        "codeName": "awardInfo",
        "description": "information applies to a document related to the grant or award for the resource"
      },
      {
        "code": "adiwg008",
        "codeName": "collectionSite",
        "description": "Locations where data are collected for scientific research"
      },
      {
        "code": "adiwg009",
        "codeName": "project",
        "description": "high level information that applies to research activity such as project title, location, contacts, timeframe, abstract, etc."
      },
      {
        "code": "adiwg010",
        "codeName": "factSheet",
        "description": "information applies to fact sheet, pamphlet, flyer, or brochure"
      },
      {
        "code": "adiwg011",
        "codeName": "tabularDataset",
        "description": "information applies to a tabular dataset, spreadsheet, or relational database"
      },
      {
        "code": "adiwg012",
        "codeName": "map",
        "description": "information applies to a printed or electronic map"
      },
      {
        "code": "adiwg013",
        "codeName": "drawing",
        "description": "information applies to a hand drawn or digital drawing"
      },
      {
        "code": "adiwg014",
        "codeName": "photographicImage",
        "description": "information applies to a still or moving film or video image"
      },
      {
        "code": "adiwg015",
        "codeName": "presentation",
        "description": "information applies to a collection of presentation slides or recorded presentation"
      }
    ]
  },
  "iso_sequenceCode": {
    "codelistType": "staticList",
    "codelistName": "iso_sequenceCode",
    "source": "ISO",
    "sourceName": "MI_SequenceCode",
    "extensible": true,
    "description": "temporal relation of activation",
    "codelist": [
      {
        "code": "001",
        "codeName": "start",
        "description": "beginning of a collection"
      },
      {
        "code": "002",
        "codeName": "end",
        "description": "end of a collection"
      },
      {
        "code": "003",
        "codeName": "instantaneous",
        "description": "collection without a significant duration"
      }
    ]
  },
  "iso_spatialRepresentation": {
    "codelistType": "staticList",
    "codelistName": "iso_spatialRepresentation",
    "source": "ISO",
    "sourceName": "MD_SpatialRepresentationTypeCode",
    "extensible": true,
    "description": "method used to represent geographic information in the dataset",
    "codelist": [
      {
        "code": "001",
        "codeName": "vector",
        "description": "vector data is used to represent geographic data"
      },
      {
        "code": "002",
        "codeName": "grid",
        "description": "grid data is used to represent geographic data"
      },
      {
        "code": "003",
        "codeName": "textTable",
        "description": "textual or tabular data is used to represent geographic data"
      },
      {
        "code": "004",
        "codeName": "tin",
        "description": "triangulated irregular network"
      },
      {
        "code": "005",
        "codeName": "stereoModel",
        "description": "three-dimensional view formed by the intersecting homologous rays of an overlapping pair of images"
      },
      {
        "code": "006",
        "codeName": "video",
        "description": "scene from a video recording"
      },
      {
        "code": "adiwg001",
        "codeName": "coordinate",
        "description": "data associated with coordinate pairs"
      }
    ]
  },
  "iso_telephone": {
    "codelistType": "staticList",
    "codelistName": "iso_telephone",
    "source": "ISO",
    "sourceName": "CI_TelephoneTypeCode",
    "extensible": true,
    "description": "type of telephone",
    "codelist": [
      {
        "code": "001",
        "codeName": "voice",
        "description": "telephone provides voice service"
      },
      {
        "code": "002",
        "codeName": "facsimile",
        "description": "telephone provides facsimile service"
      },
      {
        "code": "003",
        "codeName": "sms",
        "description": "telephone provides short message service"
      },
      {
        "code": "adiwg001",
        "codeName": "mms",
        "description": "telephone provides multimedia message service"
      },
      {
        "code": "adiwg002",
        "codeName": "tty",
        "description": "telephone provides text telephone service"
      },
      {
        "code": "adiwg003",
        "codeName": "imessage",
        "description": "telephone provides Apple iMessage service"
      },
      {
        "code": "adiwg004",
        "codeName": "mobile",
        "description": "telephone is a mobile or cell phone"
      },
      {
        "code": "adiwg005",
        "codeName": "message",
        "description": "telephone can receive messages"
      }
    ]
  },
  "iso_topicCategory": {
    "codelistType": "staticList",
    "codelistName": "iso_topicCategory",
    "source": "ISO",
    "sourceName": "MD_TopicCategoryCode",
    "extensible": false,
    "description": "high-level geographic data thematic classification to assist in the grouping and search of available geographic data sets. Can be used to group keywords as well. Listed examples are not exhaustive. NOTE It is understood there are overlaps between general categories and the user is encouraged to select the one most appropriate. (enumeration - cannot be extended)",
    "codelist": [
      {
        "code": "001",
        "codeName": "farming",
        "description": "rearing of animals and/or cultivation of plants. Examples: agriculture, irrigation, aquaculture, plantations, herding, pests and diseases affecting crops and livestock"
      },
      {
        "code": "002",
        "codeName": "biota",
        "description": "flora and/or fauna in natural environment. Examples: wildlife, vegetation, biological sciences, ecology, wilderness, sealife, wetlands, habitat."
      },
      {
        "code": "003",
        "codeName": "boundaries",
        "description": "legal land descriptions. Examples: political and administrative boundaries."
      },
      {
        "code": "004",
        "codeName": "climatologyMeteorologyAtmosphere",
        "description": "processes and phenomena of the atmosphere. Examples: cloud cover, weather, climate, atmospheric conditions, climate change, precipitation"
      },
      {
        "code": "005",
        "codeName": "economy",
        "description": "economic activities, conditions and employment. Examples: production, labour, revenue, commerce, industry, tourism and ecotourism, forestry, fisheries, commercial or subsistence hunting, exploration and exploitation of resources such as minerals, oil and gas"
      },
      {
        "code": "006",
        "codeName": "elevation",
        "description": "height above or below sea level. Examples: altitude, bathymetry, digital elevation models, slope, derived products"
      },
      {
        "code": "007",
        "codeName": "environment",
        "description": "environmental resources, protection and conservation. Examples: environmental pollution, waste storage and treatment, environmental impact assessment, monitoring environmental risk, nature reserves, landscape"
      },
      {
        "code": "008",
        "codeName": "geoscientificInformation",
        "description": "information pertaining to earth sciences. Examples: geophysical features and processes, geology, minerals, sciences dealing with the composition, structure and origin of the earth’s rocks, risks of earthquakes, volcanic activity, landslides, gravity information, soils, permafrost, ydrogeology, erosion"
      },
      {
        "code": "009",
        "codeName": "health",
        "description": "health, health services, human ecology, and safety. Examples: disease and illness, factors affecting health, hygiene, substance abuse, mental and physical health, health services"
      },
      {
        "code": "010",
        "codeName": "imageryBaseMapsEarthCover",
        "description": "base maps. Examples: land cover, topographic maps, imagery, unclassified images, annotations"
      },
      {
        "code": "011",
        "codeName": "intelligenceMilitary",
        "description": "military bases, structures, activities. Examples: barracks, training grounds, military transportation, information collection"
      },
      {
        "code": "012",
        "codeName": "inlandWaters",
        "description": "inland water features, drainage systems and their characteristics. Examples: rivers and glaciers, salt lakes, water utilization plans, dams, currents, floods, water quality, hydrographic charts"
      },
      {
        "code": "013",
        "codeName": "location",
        "description": "positional information and services. Examples: addresses, geodetic networks, control points, postal zones and services, place names"
      },
      {
        "code": "014",
        "codeName": "oceans",
        "description": "features and characteristics of salt water bodies (excluding inland waters). Examples: tides, tidal waves, coastal information, reefs"
      },
      {
        "code": "015",
        "codeName": "planningCadastre",
        "description": "information used for appropriate actions for future use of the land. Examples: land use maps, zoning maps, cadastral surveys, land ownership"
      },
      {
        "code": "016",
        "codeName": "society",
        "description": "characteristics of society and cultures. Examples: settlements, anthropology, archaeology, education, traditional beliefs, manners and customs, demographic data, recreational areas and activities, social impact assessments, crime and justice, census information"
      },
      {
        "code": "017",
        "codeName": "structure",
        "description": "man-made construction. Examples: buildings, museums, churches, factories, housing, monuments, shops, towers"
      },
      {
        "code": "018",
        "codeName": "transportation",
        "description": "means and aids for conveying persons and/or goods. Examples: roads, airports/airstrips, shipping routes, tunnels, nautical charts, vehicle or vessel location, aeronautical charts, railways"
      },
      {
        "code": "019",
        "codeName": "utilitiesCommunication",
        "description": "energy, water and waste systems and communications infrastructure and services. Examples: hydroelectricity, geothermal, solar and nuclear sources of energy, water purification and distribution, sewage collection and disposal, electricity and gas distribution, data communication, telecommunication, radio, communication networks"
      },
      {
        "code": "020",
        "codeName": "extraTerrestrial",
        "description": "region more than 100 km above the surface of the Earth"
      },
      {
        "code": "021",
        "codeName": "disaster",
        "description": "information related to disasters. Examples: Site of the disaster, evacuation zone, disaster-prevention facility, disaster relief activities."
      }
    ]
  },
  "iso_topologyLevel": {
    "codelistType": "staticList",
    "codelistName": "iso_topologyLevel",
    "source": "ISO",
    "sourceName": "MD_TopologyLevelCode",
    "extensible": true,
    "description": "degree of complexity of the spatial relationships",
    "codelist": [
      {
        "code": "001",
        "codeName": "geometryOnly",
        "description": "geometry objects without any additional structure which describes topology"
      },
      {
        "code": "002",
        "codeName": "topology1D",
        "description": "1-dimensional topological complex – commonly called “chain-node” topology"
      },
      {
        "code": "003",
        "codeName": "planarGraph",
        "description": "1-dimensional topological complex that is planar NOTE A planar graph is a graph that can be drawn in a plane in such a way that no two edges intersect except at a vertex"
      },
      {
        "code": "004",
        "codeName": "fullPlanarGraph",
        "description": "2-dimensional topological complex that is planar NOTE A 2-dimensional topological complex is commonly called “full topology” in a cartographic 2D environment"
      },
      {
        "code": "005",
        "codeName": "surfaceGraph",
        "description": "1-dimensional topological complex that is isomorphic to a subset of a surface NOTE A geometric complex is isomorphic to a topological complex if their elements are in a one-to-one, dimensional-and boundary-preserving correspondence to one another"
      },
      {
        "code": "006",
        "codeName": "fullSurfaceGraph",
        "description": "2-dimensional topological complex that is isomorphic to a subset of a surface"
      },
      {
        "code": "007",
        "codeName": "topology3D",
        "description": "3-dimensional topological complex NOTE A topological complex is a collection of topological primitives that are closed under the boundary operations"
      },
      {
        "code": "008",
        "codeName": "fullTopology3D",
        "description": "complete coverage of a 3D Euclidean coordinate space"
      },
      {
        "code": "009",
        "codeName": "abstract",
        "description": "topological complex without any specified geometric realisation"
      }
    ]
  },
  "iso_transferFunctionTypeCode": {
    "codelistType": "staticList",
    "codelistName": "iso_transferFunctionTypeCode",
    "source": "ISO",
    "sourceName": "MI_TransferFunctionTypeCode",
    "extensible": true,
    "description": "transform function to be used when scaling a physical value for a given element",
    "codelist": [
      {
        "code": "001",
        "codeName": "linear",
        "description": "function used for transformation is first order polynomial"
      },
      {
        "code": "002",
        "codeName": "logarithmic",
        "description": "function used for transformation is logarithmic"
      },
      {
        "code": "003",
        "codeName": "exponential",
        "description": "function used for transformation is exponential"
      }
    ]
  },
  "iso_triggerCode": {
    "codelistType": "staticList",
    "codelistName": "iso_triggerCode",
    "source": "ISO",
    "sourceName": "MI_TriggerCode",
    "extensible": true,
    "description": "mechanism of activation",
    "codelist": [
      {
        "code": "001",
        "codeName": "automatic",
        "description": "event due to external stimuli"
      },
      {
        "code": "002",
        "codeName": "manual",
        "description": "event manually instigated"
      },
      {
        "code": "003",
        "codeName": "preProgrammed",
        "description": "event instigated by planned internal stimuli"
      }
    ]
  },
  "adiwg_addressType": {
    "codelistType": "staticList",
    "codelistName": "adiwg_addressType",
    "source": "Alaska Data Integration working group",
    "sourceName": "ADIwg_AddressType",
    "extensible": true,
    "description": "contact address type",
    "codelist": [
      {
        "code": "001",
        "codeName": "mailing",
        "description": "indicates the address is serviceable postal location"
      },
      {
        "code": "002",
        "codeName": "physical",
        "description": "indicates the address is a physical or street location"
      }
    ]
  },
  "adiwg_applicationProfile": {
    "codelistType": "staticList",
    "codelistName": "adiwg_applicationProfile",
    "source": "Alaska Data Integration working group",
    "sourceName": "ADIwg_ApplicationProfile",
    "extensible": true,
    "description": "application profiles that can be used with online resources",
    "codelist": [
      {
        "code": "001",
        "codeName": "http://opengis.net/spec/wms",
        "description": "OGC Web Map Service (WMS)"
      },
      {
        "code": "002",
        "codeName": "http://opengis.net/spec/wfs",
        "description": "OGC Web Feature Service (WFS)"
      },
      {
        "code": "003",
        "codeName": "http://opengis.net/spec/wcs",
        "description": "OGC Web Coverage Service (WCS)"
      },
      {
        "code": "004",
        "codeName": "http://opengis.net/spec/wmts",
        "description": "OGC Web Map Tile Service (WMTS)"
      },
      {
        "code": "005",
        "codeName": "http://opengis.net/spec/csw",
        "description": "OGC Catalog Service (CSW)"
      },
      {
        "code": "006",
        "codeName": "http://opengis.net/spec/kml",
        "description": "OGC Keyhole Markup Language (KML)"
      },
      {
        "code": "007",
        "codeName": "http://www.geoplatform.gov/spec/esri-map-rest",
        "description": "Esri REST Map Service"
      },
      {
        "code": "008",
        "codeName": "http://www.geoplatform.gov/spec/esri-image-rest",
        "description": "Esri REST Image Service"
      },
      {
        "code": "009",
        "codeName": "http://www.geoplatform.gov/spec/esri-feature-rest",
        "description": "Esri REST Feature Service"
      }
    ]
  },
  "adiwg_dataType": {
    "codelistType": "staticList",
    "codelistName": "adiwg_dataType",
    "source": "Alaska Data Integration working group",
    "sourceName": "ADIwg_DataType",
    "extensible": true,
    "description": "ANSI and SQL dataTypes",
    "codelist": [
      {
        "code": "char01",
        "codeName": "character",
        "description": "fixed length character strings"
      },
      {
        "code": "char03",
        "codeName": "character varying",
        "description": "variable length character strings"
      },
      {
        "code": "char06",
        "codeName": "character large object",
        "description": "character large object"
      },
      {
        "code": "nchar01",
        "codeName": "national character",
        "description": "fixed length national character strings (2 byte unicode)"
      },
      {
        "code": "nchar04",
        "codeName": "national character varying",
        "description": "variable length national character strings (2 byte unicode)"
      },
      {
        "code": "nchar07",
        "codeName": "national character large object",
        "description": "national character (2 byte unicode) large object"
      },
      {
        "code": "text01",
        "codeName": "text",
        "description": "variable string to maximum of 65K characters"
      },
      {
        "code": "text02",
        "codeName": "tinytext",
        "description": "variable string to maximum of 255 characters"
      },
      {
        "code": "text03",
        "codeName": "mediumtext",
        "description": "variable string to maximum of 16M characters"
      },
      {
        "code": "text04",
        "codeName": "longtext",
        "description": "variable string to maximum of 4G characters"
      },
      {
        "code": "bin01",
        "codeName": "binary",
        "description": "fixed length binary"
      },
      {
        "code": "bin02",
        "codeName": "binary varying",
        "description": "variable length binary"
      },
      {
        "code": "bin03",
        "codeName": "binary large object",
        "description": "binary large object to maximum of 65K bytes"
      },
      {
        "code": "bin05",
        "codeName": "mediumblob",
        "description": "binary large object to maximum of 16M bytes"
      },
      {
        "code": "bin06",
        "codeName": "longblob",
        "description": "binary large object to maximum of 4G bytes"
      },
      {
        "code": "int01",
        "codeName": "integer",
        "description": "integers number (+-2B)"
      },
      {
        "code": "int03",
        "codeName": "tinyint",
        "description": "integer numbers (+-128)"
      },
      {
        "code": "int04",
        "codeName": "mediumint",
        "description": "integer numbers (+-16K)"
      },
      {
        "code": "int05",
        "codeName": "smallint",
        "description": "integer numbers (+-32K)"
      },
      {
        "code": "int06",
        "codeName": "bigint",
        "description": "integer numbers (+-1e27)"
      },
      {
        "code": "num01",
        "codeName": "float",
        "description": "floating point numbers"
      },
      {
        "code": "num02",
        "codeName": "real",
        "description": "low precision floating point numbers"
      },
      {
        "code": "num03",
        "codeName": "double precision",
        "description": "high precision floating point numbers"
      },
      {
        "code": "num04",
        "codeName": "numeric",
        "description": "fixed precision  and scale decimal numbers"
      },
      {
        "code": "num05",
        "codeName": "decimal",
        "description": "fixed precision  and scale decimal numbers (numeric alternate)"
      },
      {
        "code": "bit01",
        "codeName": "bit",
        "description": "fixed length bit strings"
      },
      {
        "code": "bit02",
        "codeName": "bit varying",
        "description": "variable length bit strings"
      },
      {
        "code": "date01",
        "codeName": "date",
        "description": "calendar date"
      },
      {
        "code": "date02",
        "codeName": "time",
        "description": "clock time"
      },
      {
        "code": "date03",
        "codeName": "datetime",
        "description": "date and time"
      },
      {
        "code": "date04",
        "codeName": "timestamp",
        "description": "number of seconds since the Unix epoch (1970-01-01T00:00:00 UTC)"
      },
      {
        "code": "date05",
        "codeName": "year",
        "description": "year"
      },
      {
        "code": "date06",
        "codeName": "interval",
        "description": "time intervals"
      },
      {
        "code": "date07",
        "codeName": "interval day",
        "description": "day intervals"
      },
      {
        "code": "date08",
        "codeName": "interval year",
        "description": "year intervals"
      },
      {
        "code": "money01",
        "codeName": "currency",
        "description": "monetary value"
      },
      {
        "code": "money02",
        "codeName": "money",
        "description": "monetary value"
      },
      {
        "code": "bool01",
        "codeName": "boolean",
        "description": "Boolean value (true/false)"
      },
      {
        "code": "xml01",
        "codeName": "xml",
        "description": "xml formatted data"
      },
      {
        "code": "enum01",
        "codeName": "enum",
        "description": "list of possible values: enum('a','b','c')"
      }
    ]
  },
  "adiwg_entityType": {
    "codelistType": "staticList",
    "codelistName": "adiwg_entityType",
    "source": "Alaska Data Integration working group",
    "sourceName": "ADIwg_EntityType",
    "extensible": true,
    "description": "individual or organization entity type",
    "codelist": [
      {
        "code": "001",
        "codeName": "academic",
        "description": "any university, college, or school of education"
      },
      {
        "code": "002",
        "codeName": "consortium",
        "description": "an association of several businesses or organizations"
      },
      {
        "code": "003",
        "codeName": "federal",
        "description": "any branch or level of the federal government"
      },
      {
        "code": "004",
        "codeName": "lcc",
        "description": "any Landscape Conservation Cooperative"
      },
      {
        "code": "005",
        "codeName": "foundation",
        "description": "any organization supported by an endowment"
      },
      {
        "code": "006",
        "codeName": "local",
        "description": "any local government including county, municipality, borough, city"
      },
      {
        "code": "007",
        "codeName": "nonProfit",
        "description": "any not-for-profit business or organization"
      },
      {
        "code": "008",
        "codeName": "private",
        "description": "any for-profit business or organization"
      },
      {
        "code": "009",
        "codeName": "research",
        "description": "any for-profit organization whose primary focus is conducting research or consulting"
      },
      {
        "code": "010",
        "codeName": "state",
        "description": "any branch or department of state or provincial government "
      },
      {
        "code": "011",
        "codeName": "tribal",
        "description": "any organization of indigenous people"
      }
    ]
  },
  "adiwg_mapGridSystem": {
    "codelistType": "staticList",
    "codelistName": "adiwg_mapGridSystem",
    "source": "Alaska Data Integration working group",
    "sourceName": "ADIwg_MapGridSystem",
    "extensible": true,
    "description": "map grid systems",
    "codelist": [
      {
        "code": "utm",
        "codeName": "UTM",
        "description": "Universal Transverse Mercator (UTM) grid system based on the transverse mercator projection, applied between latitudes 84 degrees north and 80 degrees south on the Earth's surface."
      },
      {
        "code": "ups",
        "codeName": "UPS",
        "description": "Universal Polar Stereographic (UPS) grid system based on the polar stereographic projection, applied to the Earth's polar regions north of 84 degrees north and south of 80 degrees south."
      },
      {
        "code": "spcs",
        "codeName": "SPCS",
        "description": "State Plane Coordinate System (SPCS), a plane-rectangular coordinate system established for each state in the United States by the National Geodetic Survey"
      },
      {
        "code": "arcsys",
        "codeName": "ARC",
        "description": "Equal Arc-second Coordinate System (ARC) grid system, a plane-rectangular coordinate system established in Department of Defense in 1990."
      },
      {
        "code": "other",
        "codeName": "other",
        "description": "other grid system"
      }
    ]
  },
  "adiwg_mapProjection": {
    "codelistType": "staticList",
    "codelistName": "adiwg_mapProjection",
    "source": "Alaska Data Integration working group",
    "sourceName": "ADIwg_MapProjection",
    "extensible": true,
    "description": "map projections",
    "codelist": [
      {
        "code": "alaska",
        "codeName": "Alaska",
        "description": "modified stereographic for Alaska projection"
      },
      {
        "code": "albers",
        "codeName": "Albers",
        "description": "Albers equal-area conic projection"
      },
      {
        "code": "azimuthalEquidistant",
        "codeName": "azimuthal equidistant",
        "description": "azimuthal equidistant projection"
      },
      {
        "code": "equidistantConic",
        "codeName": "equidistant conic",
        "description": "equidistant conic projection"
      },
      {
        "code": "equirectangular",
        "codeName": "equirectangular",
        "description": "equirectangular projection"
      },
      {
        "code": "generalVertical",
        "codeName": "general vertical",
        "description": "general vertical near-sided projection"
      },
      {
        "code": "gnomonic",
        "codeName": "gnomonic",
        "description": "gnomonic projection"
      },
      {
        "code": "lambertConic",
        "codeName": "Lambert conic",
        "description": "Lambert conformal conic projection"
      },
      {
        "code": "lambertEqualArea",
        "codeName": "Lambert equal area",
        "description": "Lambert azimuthal equal area projection"
      },
      {
        "code": "mercator",
        "codeName": "Mercator",
        "description": "Mercator projection"
      },
      {
        "code": "localPlanar",
        "codeName": "local planar coordinate system",
        "description": "any right-handed planar coordinate system with z-axis locally aligned with the surface of the earth"
      },
      {
        "code": "localSystem",
        "codeName": "Local coordinate system",
        "description": "any right-handed planar coordinate system"
      },
      {
        "code": "miller",
        "codeName": "Miller",
        "description": "Miller cylindrical projection"
      },
      {
        "code": "obliqueMercator",
        "codeName": "oblique Mercator",
        "description": "oblique Mercator projection"
      },
      {
        "code": "orthographic",
        "codeName": "orthographic",
        "description": "orthographic projection"
      },
      {
        "code": "other",
        "codeName": "other projection",
        "description": "other projection definition"
      },
      {
        "code": "parameters",
        "codeName": "parameters",
        "description": "projection parameter set"
      },
      {
        "code": "polarStereo",
        "codeName": "polar stereographic",
        "description": "polar stereographic projection"
      },
      {
        "code": "polyconic",
        "codeName": "polyconic",
        "description": "polyconic projection"
      },
      {
        "code": "robinson",
        "codeName": "Robinson",
        "description": "Robinson projection"
      },
      {
        "code": "sinusoidal",
        "codeName": "sinusoidal",
        "description": "sinusoidal projection"
      },
      {
        "code": "spaceOblique",
        "codeName": "space oblique",
        "description": "space oblique Mercator (Landsat) projection"
      },
      {
        "code": "stereographic",
        "codeName": "stereographic",
        "description": "stereographic projection"
      },
      {
        "code": "transverseMercator",
        "codeName": "transverse Mercator",
        "description": "transverse Mercator projection"
      },
      {
        "code": "grinten",
        "codeName": "Van Der Grinten",
        "description": "van der Grinten projection"
      }
    ]
  },
  "adiwg_metadataRepository": {
    "codelistType": "staticList",
    "codelistName": "adiwg_metadataRepository",
    "source": "Alaska Data Integration working group",
    "sourceName": "ADIwg_MetadataRepository",
    "extensible": true,
    "description": "established repositories for scientific data and metadata",
    "codelist": [
      {
        "code": "cdddf5c7-eec4-4e0c-9b54-d75b763a88fc",
        "codeName": "data.gov",
        "description": "U.S. Government repository of open data"
      },
      {
        "code": "da0336c4-a8f6-4010-99b3-1b848d14ff2f",
        "codeName": "ScienceBase",
        "description": "U.S. Geological Survey repository for data and metadata"
      },
      {
        "code": "b1d2ffbe-0b64-40fe-890a-02c4f0b6b9b4",
        "codeName": "ScienceCatalog",
        "description": "U.S. Geological Survey inventory for data and metadata"
      },
      {
        "code": "a791e961-f2d4-4be4-ab3c-1cdf8fd025b9",
        "codeName": "LCCScienceCatalog",
        "description": "Repository of Landscape Conservation Cooperative projects and data products."
      }
    ]
  },
  "adiwg_metadataStandard": {
    "codelistType": "staticList",
    "codelistName": "adiwg_metadataStandard",
    "source": "Alaska Data Integration working group",
    "sourceName": "ADIwg_MetadataStandard",
    "extensible": true,
    "description": "documented standard for scientific metadata encoding",
    "codelist": [
      {
        "code": "001",
        "codeName": "FGDC-CSDGM",
        "description": "Content Standard for Digital Geospatial Metadata FGDC_STD_001-1998"
      },
      {
        "code": "002",
        "codeName": "ISO19110",
        "description": "International Standard for Feature Catalogue - 2005-02-15"
      },
      {
        "code": "003",
        "codeName": "ISO19115",
        "description": "International Standard for Geographic Information - Metadata 2003-05-01"
      },
      {
        "code": "004",
        "codeName": "ISO19115-2",
        "description": "International Standard for Geographic Information - Metadata 2009-02-15"
      },
      {
        "code": "005",
        "codeName": "ISO19115-1",
        "description": "International Standard for Geographic Information - Metadata 2014-04-01"
      },
      {
        "code": "006",
        "codeName": "mdJson",
        "description": "Alaska Data Integration working group JSON encoded metadata for exchange"
      },
      {
        "code": "007",
        "codeName": "HTML",
        "description": "Alaska Data Integration working group HTML5 encoded metadata for viewing"
      },
      {
        "code": "008",
        "codeName": "sbJSON",
        "description": "U.S. Geological Survey JSON encoded metadata for ScienceBase"
      }
    ]
  },
  "adiwg_namespace": {
    "codelistType": "staticList",
    "codelistName": "adiwg_namespace",
    "source": "Alaska Data Integration working group",
    "sourceName": "ADIwg_Namespace",
    "extensible": true,
    "description": "frequently referenced namespaces",
    "codelist": [
      {
        "code": "info:ark/",
        "codeName": "ARK",
        "description": "Archival Resource Key"
      },
      {
        "code": "info:doi/",
        "codeName": "DOI",
        "description": "Digital Object Identifier"
      },
      {
        "code": "urn:ogc:def:crs:EPSG",
        "codeName": "epsgCRS",
        "description": "Coordinate reference system from European Petroleum Survey Group database"
      },
      {
        "code": "urn:isan",
        "codeName": "ISAN",
        "description": "International Standard Audiovisual Number"
      },
      {
        "code": "urn:isbn",
        "codeName": "ISBN",
        "description": "International Standard Book Number"
      },
      {
        "code": "urn:ISSN",
        "codeName": "ISSN",
        "description": "International Standard Serial Number"
      },
      {
        "code": "gov.sciencebase.catalog",
        "codeName": "scienceBase",
        "description": "ScienceBase is a U.S. Geological Survey cataloging and collaborative data management platform."
      },
      {
        "code": "itis.gov",
        "codeName": "ITIS",
        "description": "Integrated Taxonomic Information System"
      },
      {
        "code": "urn:uuid",
        "codeName": "UUID",
        "description": "Universally unique identifier"
      },
      {
        "code": "orcid.org",
        "codeName": "ORCID",
        "description": "Open Researcher and Contributor identifier"
      },
      {
        "code": "ror.org",
        "codeName": "ROR",
        "description": "Research Organization Registry identifier"
      },
      {
        "code": "spatialreference.org",
        "codeName": "SR-ORG",
        "description": "Coordinate reference system from SpatialReference.org database"
      },
      {
        "code": "org.adiwg.code.mapGridSystem",
        "codeName": "mapGridSystem",
        "description": "Name of the grid UTM, State Plane, or other grid system used by a spatial reference system."
      },
      {
        "code": "org.adiwg.code.mapProjection",
        "codeName": "mapProjection",
        "description": "Name of the planar, grid, or local projection used by a spatial reference system."
      }
    ]
  }
};