exports.handler = async (event) => {
    const users = {
        "admin": "Pa$$w0rd",
    };

    try {
        const { username, password } = JSON.parse(event.body);

        if (users[username] && users[username] === password) {
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
