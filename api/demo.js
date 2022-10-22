function demo_api_controller() {
    const apis = this;

    apis.getList = (list) => {/*...*/}
    apis.getMemberByID = (id) => {/*...*/}
    apis.getMemberByName = (id) => {/*...*/}
    apis.addMember = (name, age) => {/*...*/}
    apis.updateMemberByID = (id) => {/*...*/}
    apis.removeMemberByID = (id) => {/*...*/}
    apis.removeMemberByName = (name) => {/*...*/}
}

module.exports = new demo_api_controller();