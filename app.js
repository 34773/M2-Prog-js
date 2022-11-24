class App {
    runApplication() {
        console.log("hello world!");
        let appNaam = "string";
        let versienummer = 0.9;
        let versiedatum = "01-07-2001";
        let autheur = "Sjonnie Boom";
        let copyright = "All right is reserved to Mr. Haalboom";
        let distributeur = "Company X";
        let darkmode = true;

        console.log(appNaam);
        console.log(versienummer);
        console.log(versiedatum);
        console.log(autheur);
        console.log(copyright);
        console.log(distributeur);
        console.log(darkmode);
    }
}

let app = new App();
app.runApplication();