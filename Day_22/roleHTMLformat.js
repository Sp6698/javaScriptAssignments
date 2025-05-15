///file for creating HTML for user roles

let moduleDetails =
{
    moduleName: "Account Receivable",
    moduleRoutes: [
        {
            description: "View Authority",
            method: "GET",
            route: "/transaction/accountReceivable"
        },
        {
            description: "Save data",
            method: "COMMON",
            route: "/transaction/accountReceivable",
            // collection: "collection1"
        },
        {
            description: "Update data",
            method: "COMMON",
            route: "/common/modify",
            collection: "collection1"
        },
        {
            description: "Delete data",
            method: "COMMON",
            route: "/common/delete",
            collection: "collection1"
        },
        {
            description: "Approve",
            method: "POST",
            route: "/heading1",
        },
    ]
}
let transactionModules = {
    moduleName: "Bank Payment",
    moduleRoutes: [
        {
            description: "View Authority",
            method: "GET",
            route: "/transaction/accountReceivable"
        },
        {
            description: "Save data",
            method: "POST",
            route: "/transaction/saveAccountReceivable",
        },
        {
            description: "Update data",
            method: "POST",
            route: "/transaction/modifyAccountReceivable",
        },
        {
            description: "Delete data",
            method: "POST",
            route: "/transaction/deleteAccountReceivable",
        },
        {
            description: "Authentication",
            method: "POST",
            route: "/transaction/authenticationAccountReceivable",
        }

    ]
}
console.log(createRoleHTML(transactionModules));

function createRoleHTML(moduleObject) {

    let text = "";

    text += `
    <div class="mainRoute">
    <summary class="mainRoute-heading" style="font-size: large; font-weight: bold; text-align: left;">
    <input type="checkbox" class="select-all largerCheckbox" style="font-size: x-large;">
    <a>${moduleObject.moduleName}</a>
    </summary>`;
    text += `<div class="selectors">`;
    for (let i = 0; i < moduleObject.moduleRoutes.length; i++) {

        if (moduleObject.moduleRoutes[i].method !== "COMMON") {
            text += `
            <div class="description">
            <input type="checkbox" class="select-one" data-method="${moduleObject.moduleRoutes[i].method}" data-route="${moduleObject.moduleRoutes[i].route}"></input>
            <label class="route-description">${moduleObject.moduleRoutes[i].description}</label>
            </div>`;
        }
        if (moduleObject.moduleRoutes[i].method == "COMMON") {
            text += `
            <div class="description">
            <input type="checkbox" class="select-one" data-method="COMMON" data-route="${moduleObject.moduleRoutes[i].route}" data-collection="${moduleObject.moduleRoutes[i].collection}"></input>
            <label class="route-description">${moduleObject.moduleRoutes[i].description}</label>
            </div>`;
        }
    }
    text += `</div>
    </div>`;

    return text;
}

// module.exports = createRoleHTML;
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function createRoleHTML(moduleObject) {

    let text = "";

    text += `
    <div class="mainRoute">
    <summary class="mainRoute-heading" style="font-size: large; font-weight: bold; text-align: left;">
    <input type="checkbox" class="select-all largerCheckbox" style="font-size: x-large;">
    <a>${moduleObject.moduleName}</a>
    </summary>`;
    text += `<div class="selectors">`;
    for (let i = 0; i < moduleObject.moduleRoutes.length; i++) {

        if (moduleObject.moduleRoutes[i].method !== "COMMON") {
            text += `
            <div class="description">
            <input type="checkbox" class="select-one" data-method="${moduleObject.moduleRoutes[i].method}" data-route="${moduleObject.moduleRoutes[i].route}"></input>
            <label class="route-description">${moduleObject.moduleRoutes[i].description}</label>
            </div>`;
        }
        if (moduleObject.moduleRoutes[i].method == "COMMON") {
            text += `
            <div class="description">
            <input type="checkbox" class="select-one" data-method="COMMON" data-route="${moduleObject.moduleRoutes[i].route}" data-collection="${moduleObject.moduleRoutes[i].collection}"></input>
            <label class="route-description">${moduleObject.moduleRoutes[i].description}</label>
            </div>`;
        }
    }
    text += `</div>
    </div>`;

    return text;
}