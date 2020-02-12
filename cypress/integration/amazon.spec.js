/// <reference types="cypress" />

context("Actions", () => {
  before(() => {
    //cy.visit("https://www.amazon.co.jp/ap/signin?_encoding=UTF8&ignoreAuthState=1&openid.assoc_handle=jpflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.co.jp%2F%3Flanguage%3Den_US%26ref_%3Dnav_signin&switch_account=");
    //cy.pause();
    cy.visit("https://www.amazon.co.jp/gp/product/B07YY9T1FQ/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1");
  });

  it("face mask", () => {
    //availability
    cy.PingAvailable();

    //cy.contains("マスク ふつうサイズ").should('be.visible').then(() => {
    //  cy.reload();
    //});

    //cy.contains("1-Click™で今すぐ買う");
  });
});
