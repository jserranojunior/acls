const routes = [
  { id: 1, name: "Home" },
  { id: 2, name: "Fnianceiro" },
];

const acls = [
  { id: 1, nome: "homex", ser_id: 1, routes_id: 1 },
  { id: 2, nome: "homey", ser_id: 1, routes_id: 1 },
];

const users = [
  {
    id: 1,
    name: "JORGE",
    acls: [
      { id: 1, nome: "homex", user_id: 1, routes_id: 1 },
      { id: 2, nome: "homey", user_id: 1, routes_id: 1 },
    ],
  },
  { id: 2, name: "Alvitre" },
];

function CheckAcl(user_acls, router) {
  const verify = user_acls.find((acl) => {
    if (acl.routes_id == router.id) {
      return true;
    }
  });
  if (verify) {
    return true;
  } else {
    return false;
  }
}

describe("Check user with acl", () => {
  test("Comparer user and router same acl", () => {
    expect(CheckAcl(users[0].acls, routes[0])).toBeTruthy();
  });
});
