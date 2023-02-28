// Create user
dbAdmin = db.getSiblingDB("admin");
dbAdmin.createUser({
    user: "nextjsRoot",
    pwd: "root",
    roles: [{ role: "userAdminAnyDatabase", db: "admin" }],
    mechanisms: ["SCRAM-SHA-1"],
});

// Authenticate user
dbAdmin.auth({
    user: "nextjs",
    pwd: "1234",
    mechanisms: ["SCRAM-SHA-1"],
    roles: [{ role: "userAdminAnyDatabase", db: "nextdb" }, { role: "readWrite", db: "nextdb" }],
    digestPassword: true,
});


// Create DB and collection
db = new Mongo().getDB("nextdb");
db.getSiblingDB('nextdb');
db.createUser({
    user: "next_user",
    pwd: "root",
    roles: ["readWrite"],
});

db.createCollection("users", { capped: false });

