module.exports = {
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
};