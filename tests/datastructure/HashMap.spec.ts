import HMap from "../../src/datastructure/HashMap";
import hashString from "../../src/algorithms/StringHash";

test("creating a hashmap of arbitrary size works", () => {
    let hm = new HMap< string>();
    expect(hm.size).toEqual(31);

    hm = new HMap<string>(17);
    expect(hm.size).toEqual(17);
})

test("inserting into the hashMap works", () => {
    let hm = new HMap<string>(7);
    hm.set("Pollehn", "Lara");
    hm.set("Nguyen", "Long");
    hm.set("Blach", "Maike");

    let hashedName: number = hm.hash("Pollehn");
    expect(hm.bucket[hashedName][0][1]).toEqual("Lara");

    hashedName = hm.hash("Nguyen");
    expect(hm.bucket[hashedName][0][1]).toEqual("Long");

    hashedName = hm.hash("Blach");
    expect(hm.bucket[hashedName][0][1]).toEqual("Maike");

})

test("get a value from hashMap works", () =>{
    let hm = new HMap<string>(7);
    hm.set("Pollehn", "Lara");
    hm.set("Nguyen", "Long");
    hm.set("Blach", "Maike");

    expect(hm.get("Pollehn")).toEqual("Lara");
    expect(hm.get("Nguyen")).toEqual("Long");
    expect(hm.get("Blach")).toEqual("Maike");
})

test("check if hashMap contains a value works", () => {
    let hm = new HMap<string>(7);
    hm.set("Pollehn", "Lara");
    hm.set("Nguyen", "Long");
    hm.set("Blach", "Maike");

    expect(hm.contains("Pollehn")).toEqual(true);
    expect(hm.contains("Nguyen")).toEqual(true);
    expect(hm.contains("Blach")).toEqual(true);
    expect(hm.contains("Schmidt")).toEqual(false);
    expect(hm.contains("Frosch")).toEqual(false);

});

test('deleting value from hashMap works', () => {
    let hm = new HMap<string>(7);
    hm.set("Pollehn", "Lara");
    hm.set("Nguyen", "Long");
    hm.set("Blach", "Maike");

    let hashedName: number = hm.hash("Pollehn");
    expect(hm.bucket[hashedName][0]).toEqual(["Pollehn", "Lara"]);
    hm.delete("Pollehn");
    expect(hm.bucket[hashedName][0]).toEqual(undefined);
});