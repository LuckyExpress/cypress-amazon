/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit(
      "https://www.amazon.co.jp/gp/product/B07YY9T1FQ/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1"
    );
  });

  before(()=>{
    // debug
  });

  it("face mask", () => {
    cy.contains("マスク ふつうサイズ");
    cy.contains("1-Click™で今すぐ買う");
  });
});
