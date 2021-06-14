describe("Test Words -> Login -> Words", () => {
    beforeEach(() => {
    });

    it("Check not autherizated", () => {
        cy.visit("http://localhost:8080/words");
        cy.get("h3").should("text", "Sign in")
    });

    it("Logining", () => {
        cy.get("#form__login").clear().type('admin')
        cy.get("#form__password").clear().type('admin')
        cy.get('button[type="submit"]').click()
        cy.get("#wordsList").find('li').should('have.length', 2)
    });

    it("Check total counter", () => {
        cy.get("#wordsList").find('li').should('have.length', 2)
        cy.get("#info__dash-total").find('h3').eq(1).should("have.text", "2")
    });

    it("Add word", () => {
        cy.get("#addword__eng").type('new word')
        cy.get("#addword__ukr").type('нове слово')
        cy.get("#addword__button").click()
        cy.get("#wordsList").find("li").eq(2).find(".wordList__item-title").should('have.text', ' NEW WORD ')
    });

    it("Translation", () => {
        cy.get("#wordsList").find("li").eq(2).find(".wordList__item-translate").click()
        cy.get("#wordsList").find("li").eq(2).find(".wordList__item-title").should('have.text', ' НОВЕ СЛОВО ')
    });

    it("Remove", () => {
        cy.get("#wordsList").find("li").eq(1).find(".wordList__item-remove").click()
        cy.get("#wordsList").find("li").eq(1).find(".wordList__item-title").should('have.text', ' НОВЕ СЛОВО ')
    });

    it("Learned", () => {
        cy.get("#wordsList").find("li").eq(1).find(".wordList__item-title").click()
        cy.get("#info__dash-learned").find('h3').eq(1).should("have.text", "1")
    });



});