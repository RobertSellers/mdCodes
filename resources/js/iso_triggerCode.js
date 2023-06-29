module.exports = {
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
};