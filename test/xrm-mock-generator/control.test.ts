import { XrmMockGenerator } from "../../src/xrm-mock-generator/index";
import { LookupValueMock, XrmStaticMock } from "../../src/xrm-mock/index";
import { PageMock } from "../../src/xrm-mock/page/page.mock";
import { StringAttributeMock } from "../../src/xrm-mock/page/stringattribute/stringattribute.mock";

describe("XrmMockGenerator.Control", () => {
  let page: PageMock;
  beforeEach(() => {
    page = XrmMockGenerator.initialise().Page;
  });

  it("should create a grid control", () => {
    XrmMockGenerator.Control.createGrid("contacts");
    XrmMockGenerator.Control.createGrid({
        entityName: "account",
        name: "accounts",
    });
    expect(Xrm.Page.getControl("contacts").getControlType()).toBe("subgrid");
    expect(Xrm.Page.getControl<Xrm.Controls.GridControl>("accounts").getEntityName()).toBe("account");
  });
});
