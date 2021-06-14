describe("Test Login and authorized, Profile", () => {
    beforeEach(() => {
    });

    it("Page check", () => {
        cy.visit("http://localhost:8080/login");
        cy.get("h3").should("text", "Sign in")
    });

    it("Authorization check", () => {
        cy.get("#navbar__toggle > a").should("have.text", "Sign In/Up")
    });

    it("Wrong logining", () => {
        cy.get("#form__login").type('user1')
        cy.get("#form__password").type('user1')
        cy.get('button[type="submit"]').click()
        cy.get("#navbar__toggle > a").should("have.text", "Sign In/Up")
    });

    it("Right logining", () => {
        cy.get("#form__login").clear().type('admin')
        cy.get("#form__password").clear().type('admin')
        cy.get('button[type="submit"]').click()
        cy.get("#navbar__toggle > a").should("have.text", "admin")
    });

    it("Check profile", () => {
        cy.get("#navbar__toggle > a").click().get("#navbar__dropdown-profile").should("have.text", "Profile")
        cy.get("#navbar__dropdown-profile").click()
        cy.get("#profile > h3").should("have.text", "Profile of")
        cy.get("#profile > #profile__login").should("have.text", " admin ")
    });
});