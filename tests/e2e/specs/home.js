describe("Test Home -> Register -> Home Page", () => {
    beforeEach(() => {
    });

    it("Test Home Page", () => {
        cy.visit("http://localhost:8080");
        cy.contains("h2", "Home Page");
        cy.get("#home__buttons-login").click().get("h3").should("text", "Sign in")
        cy.visit('/')
    });
    
    it("Make Registration", () => {
        cy.get("#home__buttons-register").click().get("h3").should("text", "Sign up")
        cy.get("#form__login").type('user1')
        cy.get("#form__password").type('user1')
        cy.get('button[type="submit"]').click()
    });

    it("Back to Home", () => {
        cy.get("#nav__bar-home").click()
    });
    
    it("Is authorized", () => {
        cy.get("#home__buttons-dictionary > a").should("have.text", "Go to Dictionary")
        cy.get("#navbar__toggle > a").should("have.text", "user1")
    });
});
