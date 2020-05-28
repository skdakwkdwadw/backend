const express = require("express")
const app = express.Router()

app.all("/api/service/bulk/status", (req, res) => {
    res.json([
        {
            serviceInstanceId: "fortnite",
            status: "UP",
            message: "Fortnite is UP",
            maintenanceUri: null,
            overrideCatalogIds: [
                "a7f138b2e51945ffbfdacc1af0541053"
            ],
            allowedActions: [],
            banned: false,
            launcherInfoDTO: {
                appName: "Fortnite",
                catalogItemId: "4fe75bbc5a674f4f9b356b5c90567da5",
                namespace: "fn"
            }
        }
    ])
})

module.exports = app