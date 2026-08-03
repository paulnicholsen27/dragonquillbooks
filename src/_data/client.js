module.exports = {
    name: "Dragon Quill Books",
	email: "info@dragonquillbooks.com",
    socials: {
		facebook: "https://www.facebook.com/profile.php?id=61590554107424",
		instagram: "https://www.instagram.com/bonnilynkuhn/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.dragonquillbooks.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
