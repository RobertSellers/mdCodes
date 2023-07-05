module.exports = {
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
};