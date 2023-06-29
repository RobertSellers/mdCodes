module.exports = {
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
};