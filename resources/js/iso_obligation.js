module.exports = {
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
};