exports.handler = async (event) => {
    const username = "admin";
    const password = process.env.ADMIN_PASSWORD;

    try {
        const { username: inputUser, password: inputPass } = JSON.parse(event.body);

        if (inputUser === username && inputPass === password) {
            return {
                statusCode: 200,
                body: JSON.stringify({ success: true, token: "blue-puffin-token" })
            };
        } else {
            return {
                statusCode: 401,
                body: JSON.stringify({ success: false, message: "Identifiants incorrects" })
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, message: "Erreur serveur" })
        };
    }
};
