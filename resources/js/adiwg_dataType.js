module.exports = {
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
};