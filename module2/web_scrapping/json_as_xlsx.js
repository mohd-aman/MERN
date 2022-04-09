let xlsx = require("json-as-xlsx")

let data = [
  {
    sheet: "Adults",
    columns: [
      { label: "User", value: "user" }, // Top level data
      { label: "Age", value: "age" }, // Custom format
      { label: "Phone", value: "" }, // Run functions
    ],
    content: [
      { user: "Andrea", age: 20, more: { phone: "11111111" } },
      { user: "Luis", age: 21, more: { phone: "12345678" } },
    ],
  },
]

let settings = {
  fileName: "MySpreadsheet", // Name of the resulting spreadsheet
  extraLength: 3, // A bigger number means that columns will be wider
  writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
}

xlsx(data, settings) // Will download the excel file
