import Information from "../Store/Store";

test("Choose male gender", () => {
  Information.changeLabel("gender", "4");
  expect(Information.getValue("gender")).toBe("4");
});
